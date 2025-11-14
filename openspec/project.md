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

## Content Creation Guidelines

When creating AWS documentation in Vietnamese, follow these principles to ensure
concise, well-structured, and technically accurate output:

### Core Content Creation Principles

- **Summarize, don't translate everything**: Focus on 3-5 key concepts, not all
  details. Summarize each point in 2-3 sentences.
- **Create diagrams**: Always include Mermaid diagrams (architecture/flowchart/mindmap/sequence)
  to illustrate concepts visually.
- **Add best practices**: Include a Best Practices section with 5-7 actionable tips.
- **Preserve technical terms**: Keep AWS service names, API names, parameters,
  CLI flags, and code snippets in their original English form (EC2, IAM, S3,
  Route 53, VPC, etc.)
- **Professional tone**: Use the same professional, concise style as official
  AWS documentation
- **Terminology consistency**: Reference `docs-workflow/glossary.md` for
  consistent terminology

### Content Creation Workflow

1. **Fetch source material**: Use `awslabs.aws-documentation-mcp-server_read_documentation`
   to retrieve the latest AWS documentation before creating content
2. **Identify key concepts**: Extract 3-5 main points from the source material
3. **Summarize concepts**: Write 2-3 sentences per concept, focusing on clarity
   and understanding
4. **Create diagrams**: Use appropriate Mermaid diagram type:
   - Architecture diagrams for system designs
   - Flowcharts for processes
   - Mindmaps for concept overviews
   - Sequence diagrams for interactions
5. **Add best practices**: Include 5-7 actionable tips based on real-world usage
6. **Verify terminology**: Ensure AWS service names, technical terms, and code
   examples remain unchanged. Check `docs-workflow/glossary.md` for consistency

### Output Format

For each section, provide:

1. **Summary** (2-3 sentences per concept)
2. **Mermaid diagram** with descriptive title
3. **Best Practices** (bullet points with brief explanations)
4. **Exam Notes** (if applicable, 3-5 bullets)

### Example Content Creation Pattern

**Source (English)**: "EC2 uses eventual consistency. You may see a resource as 'not
found' right after creation. This is expected behavior and the resource will
become available shortly."

**Vietnamese Content**:

```markdown
## Tóm tắt

EC2 sử dụng mô hình eventual consistency, nghĩa là thay đổi có thể mất một
chút thời gian để lan truyền. Ngay sau khi tạo tài nguyên, bạn có thể gặp
lỗi "không tìm thấy" - đây là hành vi bình thường.

## Best Practices

- Đợi vài giây sau khi tạo resource trước khi truy vấn
- Sử dụng retry logic với exponential backoff
- Kiểm tra resource status trước khi thực hiện operations
```

Note: The content summarizes the key concept concisely, adds practical best
practices, and keeps all technical terms in English.

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
