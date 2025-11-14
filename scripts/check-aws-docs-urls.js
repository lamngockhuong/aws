#!/usr/bin/env node

/**
 * Script to validate AWS documentation URLs in .aws-docs-urls.json
 *
 * Usage:
 *   node scripts/check-aws-docs-urls.js
 *   node scripts/check-aws-docs-urls.js --verbose
 *   node scripts/check-aws-docs-urls.json --service ec2
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const CONFIG = {
  timeout: 10000, // 10 seconds
  retries: 2,
  concurrent: 5, // Number of concurrent requests
};

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('--verbose') || args.includes('-v');
const serviceFilter = args.find(arg => arg.startsWith('--service='))?.split('=')[1];

/**
 * Check if a URL is valid
 */
function checkUrl(url, followRedirects = true, maxRedirects = 5) {
  return new Promise((resolve) => {
    let redirectCount = 0;

    const makeRequest = (currentUrl) => {
      const urlObj = new URL(currentUrl);
      const client = urlObj.protocol === 'https:' ? https : http;

      const options = {
        hostname: urlObj.hostname,
        path: urlObj.pathname + urlObj.search,
        method: 'HEAD',
        timeout: CONFIG.timeout,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; AWS-Docs-URL-Checker/1.0)',
        },
      };

      const req = client.request(options, (res) => {
        res.on('data', () => {}); // Consume response

        // Handle redirects
        if (followRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          redirectCount++;
          if (redirectCount > maxRedirects) {
            resolve({
              url,
              finalUrl: currentUrl,
              status: res.statusCode,
              valid: false,
              redirected: true,
              error: 'Too many redirects',
            });
            return;
          }

          // Follow redirect
          const redirectUrl = res.headers.location.startsWith('http')
            ? res.headers.location
            : new URL(res.headers.location, currentUrl).href;

          makeRequest(redirectUrl);
          return;
        }

        res.on('end', () => {
          resolve({
            url,
            finalUrl: currentUrl !== url ? currentUrl : null,
            status: res.statusCode,
            valid: res.statusCode >= 200 && res.statusCode < 400,
            redirected: res.statusCode >= 300 && res.statusCode < 400,
            redirectCount: redirectCount > 0 ? redirectCount : null,
          });
        });
      });

      req.on('error', (error) => {
        resolve({
          url,
          finalUrl: currentUrl !== url ? currentUrl : null,
          status: null,
          valid: false,
          error: error.message,
          redirectCount: redirectCount > 0 ? redirectCount : null,
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url,
          finalUrl: currentUrl !== url ? currentUrl : null,
          status: null,
          valid: false,
          error: 'Request timeout',
          redirectCount: redirectCount > 0 ? redirectCount : null,
        });
      });

      req.end();
    };

    makeRequest(url);
  });
}

/**
 * Extract all URLs from the JSON structure
 */
function extractUrls(data, prefix = '') {
  const urls = [];

  if (typeof data === 'object' && data !== null) {
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string' && value.startsWith('http')) {
        urls.push({
          url: value,
          path: prefix ? `${prefix}.${key}` : key,
        });
      } else if (typeof value === 'object') {
        urls.push(...extractUrls(value, prefix ? `${prefix}.${key}` : key));
      }
    }
  }

  return urls;
}

/**
 * Process URLs in batches
 */
async function processBatch(urls, batchSize) {
  const results = [];

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(({ url }) => checkUrl(url))
    );

    // Map results back to include path
    batch.forEach((item, index) => {
      results.push({
        ...batchResults[index],
        path: item.path,
      });
    });

    // Progress indicator
    if (!verbose) {
      process.stdout.write(`\rChecking URLs: ${Math.min(i + batchSize, urls.length)}/${urls.length}`);
    }
  }

  if (!verbose) {
    process.stdout.write('\n');
  }

  return results;
}

/**
 * Main function
 */
async function main() {
  const jsonPath = path.join(__dirname, '..', 'docs', '.aws-docs-urls.json');

  if (!fs.existsSync(jsonPath)) {
    console.error(`${colors.red}Error: File not found: ${jsonPath}${colors.reset}`);
    process.exit(1);
  }

  console.log(`${colors.cyan}Reading AWS documentation URLs from: ${jsonPath}${colors.reset}\n`);

  const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  // Extract all URLs
  let urls = extractUrls(jsonData);

  // Filter by service if specified
  if (serviceFilter) {
    urls = urls.filter(item =>
      item.path.toLowerCase().includes(serviceFilter.toLowerCase())
    );
    console.log(`${colors.yellow}Filtering by service: ${serviceFilter}${colors.reset}\n`);
  }

  console.log(`Found ${urls.length} URLs to check\n`);

  if (verbose) {
    console.log('URLs to check:');
    urls.forEach(({ url, path }) => {
      console.log(`  ${path}: ${url}`);
    });
    console.log('');
  }

  // Check URLs
  const startTime = Date.now();
  const results = await processBatch(urls, CONFIG.concurrent);
  const endTime = Date.now();

  // Analyze results
  const valid = results.filter(r => r.valid);
  const invalid = results.filter(r => !r.valid);
  const redirected = results.filter(r => r.redirected);

  // Print summary
  console.log('\n' + '='.repeat(80));
  console.log(`${colors.cyan}Summary${colors.reset}`);
  console.log('='.repeat(80));
  console.log(`Total URLs checked: ${results.length}`);
  console.log(`${colors.green}✓ Valid: ${valid.length}${colors.reset}`);
  console.log(`${colors.yellow}→ Redirected: ${redirected.length}${colors.reset}`);
  console.log(`${colors.red}✗ Invalid: ${invalid.length}${colors.reset}`);
  console.log(`Time taken: ${((endTime - startTime) / 1000).toFixed(2)}s`);

  // Print invalid URLs
  if (invalid.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log(`${colors.red}Invalid URLs:${colors.reset}`);
    console.log('='.repeat(80));

    invalid.forEach(({ url, path, status, error, finalUrl, redirectCount }) => {
      console.log(`\n${colors.red}✗${colors.reset} ${path}`);
      console.log(`  URL: ${url}`);
      if (finalUrl) {
        console.log(`  Final URL: ${finalUrl}`);
      }
      if (status) {
        console.log(`  Status: ${status}`);
      }
      if (redirectCount) {
        console.log(`  Redirects: ${redirectCount}`);
      }
      if (error) {
        console.log(`  Error: ${error}`);
      }
    });
  }

  // Print redirected URLs (if verbose)
  if (redirected.length > 0 && verbose) {
    console.log('\n' + '='.repeat(80));
    console.log(`${colors.yellow}Redirected URLs:${colors.reset}`);
    console.log('='.repeat(80));

    redirected.forEach(({ url, path, status, finalUrl, redirectCount }) => {
      console.log(`\n${colors.yellow}→${colors.reset} ${path}`);
      console.log(`  Original URL: ${url}`);
      if (finalUrl) {
        console.log(`  Final URL: ${finalUrl}`);
      }
      console.log(`  Status: ${status}`);
      if (redirectCount) {
        console.log(`  Redirects: ${redirectCount}`);
      }
    });
  }

  // Exit with error code if there are invalid URLs
  if (invalid.length > 0) {
    console.log(`\n${colors.red}Found ${invalid.length} invalid URL(s)${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}All URLs are valid!${colors.reset}`);
    process.exit(0);
  }
}

// Run the script
main().catch((error) => {
  console.error(`${colors.red}Error:${colors.reset}`, error);
  process.exit(1);
});

