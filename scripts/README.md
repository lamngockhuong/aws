# Scripts

Utility scripts for maintaining the AWS Knowledge Hub documentation.

## check-aws-docs-urls.js

Validates all AWS documentation URLs in `docs/.aws-docs-urls.json` to ensure they are still accessible.

### Usage

```bash
# Check all URLs (default)
pnpm check:urls

# Check with verbose output
pnpm check:urls:verbose

# Check URLs for a specific service
node scripts/check-aws-docs-urls.js --service=ec2

# Verbose mode with service filter
node scripts/check-aws-docs-urls.js --verbose --service=s3
```

### Options

- `--verbose` or `-v`: Show detailed output including all URLs being checked
- `--service=<name>`: Filter URLs by service name (e.g., `ec2`, `s3`, `lambda`)

### Output

The script provides:

- **Summary**: Total URLs checked, valid count, redirected count, invalid count
- **Invalid URLs**: List of URLs that failed validation with error details
- **Redirected URLs**: List of URLs that returned redirect status (only shown in verbose mode)
- **Exit Code**:
  - `0` if all URLs are valid
  - `1` if any URLs are invalid

### Examples

```bash
# Quick check
pnpm check:urls

# Detailed check for EC2 URLs only
node scripts/check-aws-docs-urls.js --verbose --service=ec2

# Check all URLs with full details
pnpm check:urls:verbose
```

### How It Works

1. Reads `docs/.aws-docs-urls.json`
2. Extracts all URLs from the JSON structure
3. Sends HTTP HEAD requests to each URL (concurrent batches of 5)
4. Validates response status codes:
   - `200-299`: Valid
   - `300-399`: Redirected (still valid but may need attention)
   - `400+` or errors: Invalid
5. Reports results with color-coded output

### Configuration

You can modify the script configuration:

```javascript
const CONFIG = {
  timeout: 10000,    // Request timeout in milliseconds
  retries: 2,        // Number of retries (not implemented yet)
  concurrent: 5,     // Number of concurrent requests
};
```

### Integration

This script can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Check AWS Docs URLs
  run: pnpm check:urls
```

### Troubleshooting

**Timeout errors**: Some URLs may take longer to respond. Increase `timeout` in the script.

**Network issues**: Ensure you have internet connectivity and can access `docs.aws.amazon.com`.

**Rate limiting**: AWS may rate limit requests. The script uses concurrent requests but you can reduce `concurrent` if needed.
