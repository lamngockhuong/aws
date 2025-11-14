# Contributing to AWS Knowledge Hub

Thank you for your interest in contributing to AWS Knowledge Hub! This guide explains how you can contribute.

## How to Contribute

### 1. Report Issues

If you find a bug or have a suggestion for improvement:

1. Check if an issue already exists
2. Create a new issue with detailed description
3. Include:
   - Problem description
   - Related file/documentation
   - Proposed solution (if any)

### 2. Contribute Content

#### Add New Documentation

1. Create a new file in the appropriate directory
2. Follow existing structure and format
3. Ensure both English and Vietnamese versions
4. Add links in the corresponding index file

#### Update Existing Documentation

1. Find the file that needs updating
2. Update content with the latest information
3. Ensure both language versions stay in sync

### 3. Translation

When translating content to Vietnamese:

- **Preserve technical terms**: Keep AWS service names, API names, and code in English (EC2, IAM, S3, etc.)
- **Translate for meaning**: Don't translate word-by-word
- **Maintain accuracy**: Ensure technical precision matches the source
- **Professional tone**: Match AWS documentation style

#### Content Creation Resources

AI agents (Cursor, Copilot) automatically read instructions from:

- `.cursorrules` - Cursor instructions
- `.github/copilot-instructions.md` - GitHub Copilot instructions

Reference files:

- **[Glossary](./docs-workflow/glossary.md)**: Terminology dictionary (English | Vietnamese) - keep this updated!
- **[Diagram Templates](./docs-workflow/diagram-templates.md)**: Mermaid diagram examples

## Managing AWS Documentation URLs

The `.aws-docs-urls.json` file contains official AWS documentation URLs for each service, used by AI to fetch the latest information from AWS MCP.

### File Structure

The file is organized as follows:

```json
{
  "metadata": {
    "version": "1.0.0",
    "lastUpdated": "2024-01-01",
    "description": "..."
  },
  "services": {
    "category": {
      "service": {
        "name": "Service Name",
        "baseUrl": "Base URL for service",
        "topics": {
          "topicName": "URL to specific topic"
        }
      }
    }
  }
}
```

### Adding New URLs

When you need to add a URL for a new service or topic:

1. Open the `docs/.aws-docs-urls.json` file
2. Find the appropriate category and service
3. Add a new topic to the `topics` object:

```json
"newTopic": "https://docs.aws.amazon.com/service/latest/guide/topic.html"
```

### Updating URLs

When AWS changes URLs or has new information:

1. Find the old URL in the file
2. Update with the new URL
3. Update `lastUpdated` in metadata

### URL Requirements

- ✅ Must be from `docs.aws.amazon.com` domain
- ✅ Must end with `.html`
- ✅ Must be an official documentation page (not a landing page)
- ❌ Not from `aws.amazon.com` (marketing site)
- ❌ Not from `console.aws.amazon.com` (console)

### Adding a New Service

When you need to add a new service:

1. Identify the appropriate category (compute, storage, database, networking, security, monitoring)
2. Add a new entry:

```json
"newService": {
  "name": "Service Name",
  "baseUrl": "https://docs.aws.amazon.com/service/latest/guide",
  "topics": {
    "overview": "https://docs.aws.amazon.com/service/latest/guide/welcome.html",
    "gettingStarted": "https://docs.aws.amazon.com/service/latest/guide/getting-started.html"
  }
}
```

### Best Practices for URLs

1. **Clear topic names**: Use camelCase, short descriptions
2. **Always include overview**: Each service should have an "overview" topic
3. **Update metadata**: When making changes, update `lastUpdated`
4. **Verify URLs**: Ensure URLs are still active (use validation script)
5. **Logical grouping**: Arrange topics in logical order (overview → getting started → advanced)

### Validating URLs

Use the validation script to check if all URLs are still valid:

```bash
# Check all URLs
pnpm check:urls

# Check with verbose output
pnpm check:urls:verbose

# Check URLs for a specific service
node scripts/check-aws-docs-urls.js --service=ec2
```

The script will:

- Check all URLs in the JSON file
- Report invalid or redirected URLs
- Show detailed information in verbose mode
- Exit with error code if any URLs are invalid

See [scripts/README.md](./scripts/README.md) for more details.

### Using with AI

When requesting AI to update documentation, you can:

#### Method 1: Direct reference

```txt
Get information from EC2 overview URL and update EC2 index.md file
```

#### Method 2: Specify specific topic

```txt
Get information from EC2 instanceTypes topic and update instance-types.md file
```

#### Method 3: Provide new URL

```txt
Add this URL to .aws-docs-urls.json for EC2:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/new-topic.html
With topic name "newTopic"
```

## Commit Rules

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) format:

```txt
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: Add new feature
- `fix`: Fix a bug
- `docs`: Update documentation
- `style`: Formatting, doesn't affect code
- `refactor`: Refactor code
- `perf`: Performance improvement
- `test`: Add or fix tests
- `chore`: Other changes

### Examples

```txt
docs(ec2): add instance types documentation

Add comprehensive documentation about EC2 instance types including
all families and use cases.

Closes #123
```

```txt
fix(s3): correct storage class pricing information

Update S3 storage class pricing to reflect latest AWS pricing.
```

## Git Workflow

1. **Fork repository** (if you don't have write access)
2. **Create a new branch** from `main`:

   ```bash
   git checkout -b feat/add-new-service-docs
   ```

3. **Commit changes** with conventional commit format
4. **Push branch**:

   ```bash
   git push origin feat/add-new-service-docs
   ```

5. **Create Pull Request** with clear description

## Project Structure

```bash
aws/
├── docs/                    # Documentation source files
│   ├── .aws-docs-urls.json  # AWS documentation URLs reference
│   ├── .vitepress/         # VitePress configuration
│   ├── architecture/        # Architecture patterns
│   ├── exam/               # Certification exam guides
│   ├── fundamentals/       # Core AWS concepts
│   ├── introduction/       # Getting started guides
│   ├── labs/               # Hands-on labs
│   ├── real-world/         # Production playbooks
│   ├── services/           # Service-specific documentation
│   └── vi/                 # Vietnamese translations
```

## Guidelines

### Content

- **One topic per file**: Keep each file focused on one topic
- **Clear headings**: Use descriptive headings
- **Logical structure**: Arrange content in logical order
- **Links**: Add links to related documentation

### Format

- **Markdown**: Use Markdown format
- **Code blocks**: Use code blocks with language tags
- **Lists**: Use lists for related items
- **Diagrams**: Use Mermaid for diagrams

### Language Synchronization

- **Both versions**: Ensure both English and Vietnamese are updated
- **Equivalent content**: Content should be equivalent, not just word-by-word translation
- **Consistent terminology**: Use consistent terminology in both languages

## Questions?

If you have questions or need help:

- Create an issue on GitHub
- Contact the maintainer
- Refer to existing documentation

Thank you for contributing! 🎉
