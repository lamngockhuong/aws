# AWS Knowledge Hub

A bilingual (English + Vietnamese) knowledge base for Amazon Web Services, featuring structured learning paths from fundamentals to production playbooks.

🌐 **Live Site**: [aws.khuong.dev](https://aws.khuong.dev)

## Features

- 📚 **Guided Learning Path**: Beginner→advanced curriculum aligned with AWS certification domains
- 🔍 **Deep Service Coverage**: Comprehensive notes on EC2, S3, VPC, serverless, databases, and more
- 🎯 **Real-world Playbooks**: Hands-on labs, architecture blueprints, and cost-optimization guides
- 🌍 **Bilingual Support**: Full English and Vietnamese translations
- 📊 **Interactive Diagrams**: Mermaid diagrams with theme-aware rendering
- 🖼️ **Enhanced UX**: Image lightbox viewer and back-to-top button

## Tech Stack

- **Framework**: [VitePress](https://vitepress.dev/) 2.0.0-alpha.13
- **Package Manager**: PNPM 10
- **Image Optimization**: Sharp + Vite Image Optimizer
- **Plugins**:
  - `@miletorix/vitepress-back-to-top-button`
  - `@miletorix/vitepress-image-viewer`
  - `vitepress-mermaid-renderer`

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- PNPM 10

### Installation

```bash
# Clone the repository
git clone https://github.com/lamngockhuong/aws.git
cd aws

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Project Structure

```text
aws/
├── docs/                    # Documentation source files
│   ├── .vitepress/         # VitePress configuration
│   ├── architecture/       # Architecture patterns and reference designs
│   ├── exam/               # Certification exam guides and notes
│   ├── fundamentals/       # Core AWS concepts
│   ├── introduction/       # Getting started guides
│   ├── labs/               # Hands-on labs and tutorials
│   ├── real-world/         # Production playbooks and best practices
│   ├── services/           # Service-specific documentation
│   └── vi/                 # Vietnamese translations
├── openspec/               # OpenSpec project specifications
└── package.json
```

## Content Guidelines

### Translation Principles

When translating content to Vietnamese:

- **Preserve technical terms**: Keep AWS service names, API names, and code in English (EC2, IAM, S3, etc.)
- **Natural phrasing**: Translate for meaning, not word-by-word
- **Maintain accuracy**: Ensure technical precision matches the source
- **Professional tone**: Match AWS documentation style

### Contributing

1. Follow [Conventional Commits](https://www.conventionalcommits.org/) format
2. Keep documentation focused: one topic per file
3. Use clear headings and task lists where helpful
4. Ensure both English and Vietnamese versions stay in sync

## Git Workflow

- Commits must follow Conventional Commit syntax (enforced by commitlint)
- Feature branches should be rebased before merging
- Run `pnpm install` after cloning to set up Git hooks

## License

MIT © [Lam Ngoc Khuong](https://github.com/lamngockhuong)

## Links

- **Documentation**: [aws.khuong.dev](https://aws.khuong.dev)
- **Issues**: [GitHub Issues](https://github.com/lamngockhuong/aws/issues)
- **Author**: [@lamngockhuong](https://github.com/lamngockhuong)
