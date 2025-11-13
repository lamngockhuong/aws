# Project Context

## Purpose

This repository powers a bilingual (English + Vietnamese) knowledge base about
Amazon Web Services. Content is curated as practical notes, walkthroughs, and
examples that I publish at <https://aws.khuong.dev> to support learning and
reference when working with AWS.

## Tech Stack

- VitePress 2.0.0-alpha.13 with Vue 3 for static site generation
- TypeScript + ESM config files (`.mts`/`.ts`)
- PNPM 10 as the package manager
- Vite Image Optimizer + Sharp for static asset optimization
- Mermaid renderer and interactive image/back-to-top plugins for richer docs

## Project Conventions

### Code Style

- TypeScript/ESM modules with 2-space indentation and trailing semicolons
- Prefer single quotes in config code; Markdown follows standard VitePress
  front-matter + Markdown conventions
- Keep documentation pages focused: one topic per file, with clear headings and
  task lists where helpful
- Localized content lives under language-specific directories (e.g. `docs/vi/`)
- When referencing AWS features or behavior, fetch the latest source material
  via the MCP tool `awslabs.aws-documentation-mcp-server_read_documentation`
  instead of relying on cached summaries

### Architecture Patterns

- Static documentation site generated from `docs/`
- Custom theme extends the VitePress default theme via `docs/.vitepress/theme`
- Mermaid diagrams are re-rendered on theme (dark/light) changes
- Global enhancements add an image lightbox and back-to-top button for every
  page
- Navigation is defined centrally in `docs/.vitepress/config.mts` with mirrored
  structures for English (`/`) and Vietnamese (`/vi/`) locales; keep section
  landing pages (`index.md`) in sync so menus never break

### Testing Strategy

- No automated test suite today; rely on manual verification
- Preview docs locally with `pnpm docs:dev`
- Validate production builds with `pnpm docs:build` followed by
  `pnpm docs:preview`

### Git Workflow

- Default branch is `main`; open feature branches as needed and rebase before
  merging
- Commits must follow Conventional Commit syntax (enforced by
  `@commitlint/config-conventional` via Husky)
- Run `pnpm install` (PNPM v10) after cloning to ensure hooks and tooling are
  installed

## Domain Context

- Documentation targets core AWS services, best practices, and deployment
  patterns
- Content aims to explain AWS concepts with task-focused guides, diagrams, and
  code snippets
- Vietnamese localization mirrors the English structure but adapts terminology
  for native speakers

## Translation Guidelines

When translating AWS documentation from English to Vietnamese, follow these
principles to ensure professional, natural, and technically accurate output:

### Core Translation Principles

- **Preserve technical terms**: Keep AWS service names, API names, parameters,
  CLI flags, and code snippets in their original English form (EC2, IAM, S3,
  Route 53, VPC, etc.)
- **Natural phrasing**: Translate for meaning and clarity, not word-by-word.
  Prioritize fluent, contextually appropriate technical Vietnamese
- **Match AWS documentation tone**: Use the same professional, clear style as
  official AWS documentation
- **No additions**: Do not add content beyond what exists in the source text
- **Clarify when needed**: For complex concepts, provide brief explanations to
  aid reader understanding without altering the original meaning

### Translation Workflow

1. **Fetch source material**: Use `awslabs.aws-documentation-mcp-server_read_documentation`
   to retrieve the latest AWS documentation before translating
2. **Translate with context**: Understand the technical context before
   translating; ensure the Vietnamese version maintains the same technical
   accuracy
3. **Verify terminology**: Ensure AWS service names, technical terms, and code
   examples remain unchanged
4. **Review for fluency**: Check that the translation reads naturally in
   Vietnamese while preserving technical precision

### Example Translation Pattern

**English**: "EC2 uses eventual consistency. You may see a resource as 'not
found' right after creation."

**Vietnamese**: "EC2 sử dụng mô hình 'eventual consistency'. Vì vậy ngay sau
khi tạo tài nguyên, đôi khi bạn có thể gặp lỗi 'không tìm thấy', dù thực tế
tài nguyên đã tồn tại."

Note: The translation explains the concept naturally while keeping technical
terms intact and maintaining the original meaning.

## Important Constraints

- Site must remain a static export suitable for CDN/edge hosting
- Keep bundles small; chunk splitting rules in `vite.config` suppress warnings
  but we still target fast loads
- Optimized media (via Sharp + image optimizer plugin) should accompany large
  images or diagrams

## External Dependencies

- GitHub Pages (or equivalent static hosting) serves the built site at
  <https://aws.khuong.dev>
- GitHub repository `lamngockhuong/aws` for source control and edit links
- VitePress plugins:
  - `@miletorix/vitepress-back-to-top-button`
  - `@miletorix/vitepress-image-viewer`
  - `vitepress-mermaid-renderer`
