# Documentation Workflow

Reference files and templates for creating AWS documentation in this project.

## Files

- **`glossary.md`** - Terminology dictionary (English | Vietnamese) for consistency
- **`diagram-templates.md`** - Mermaid diagram examples and templates

## Base layout (applies to all doc pages)

Every documentation page (both `en/` and `vi/`) should follow the common skeleton defined in `openspec/AGENTS.md`:

- **Summary** – 2–3 sentences per concept, focusing on 3–5 key ideas instead of translating everything.
- **Mermaid diagram** – One diagram (architecture / flowchart / mindmap / sequence) that visually explains the core idea.
- **Best Practices** – 5–7 actionable tips, concise, grounded in real-world usage.
- **Exam Notes** – If relevant, 3–5 bullets linking the content to AWS certification domains/tasks.
- **AWS documentation** – Links to the relevant `docs.aws.amazon.com` pages.
- **Related docs in this Hub** – Cross-links to other pages (services, labs, playbooks, glossary).

> Service names, API names, CLI flags, and code blocks MUST remain in English.

## Content-type templates

In addition to the base layout above, different directories use slightly richer templates to better match user intent.

### 1. Fundamentals & exam-oriented docs

`01-introduction/`, `02-fundamentals/`, `07-exam/`

Add these on top of the base layout:

- **Learning Outcome & Exam Domain Mapping**

  - At the top (after Summary), add 3–4 bullets that state the learning outcomes and map to exam domains, for example:
    - `Mapping: CLF-C02 – Domain 1 (Cloud Concepts)`
    - `Mapping: SAA-C03 – Design Resilient Architectures`

- **Value in Practice vs. Exam**

  - A small two-column table comparing “Real-world value” vs “In the exam”, e.g.:
    - Real-world: “Design VPC for multi-environment isolation”
    - Exam: “Identify correct VPC pattern under constraints X/Y/Z”

- **Rapid Assessment**

  - At the end of the page, add:
    - A short checklist (“Bạn đã nắm được…”) **or**
    - 3 quick multiple-choice or true/false questions for self-check.

- **Bridging Resources**
  - A “Next steps” block that groups links under labels such as:
    - **Thử nghiệm** – labs / CLI snippets
    - **Đọc thêm** – deeper service docs or whitepapers
    - **Video/Workshop** – external workshops or re:Invent sessions (when available)

### 2. Service deep-dive docs

`03-services/**`

Extend the base layout with:

- **Service at a Glance**

  - Keep the Summary but add a compact table:
    - “Bạn sẽ dùng dịch vụ này khi…” – 3 key use cases.
    - “Bạn không nên dùng khi…” – 2–3 anti-patterns or misfits.

- **Architecture Variants**

  - After the main Mermaid diagram, add a `Reference Architectures` subsection with 1–2 concrete variants (for example: “Web-tier on EC2”, “Batch processing pipeline”).

- **Operations & Cost Lens**

  - A 2×N table with columns:
    - **Vận hành (Operations)** – patching, monitoring, backup/restore, DR.
    - **Chi phí (Cost)** – pricing model, key cost levers, Savings Plans/RI considerations.

- **Hands-on Hook**

  - A “Mini-lab / CLI snippet” section at the bottom that links directly to one or more labs in `05-labs/` or `06-real-world/`, or includes a minimal CLI example to try immediately.

- **Certification Focus**
  - Keep “Exam Notes” but try to tag bullets with concrete exam mapping, e.g.:
    - `SAA-C03 – Design High-Performing Architectures – Task 2`

### 3. Labs & Playbooks

`05-labs/`, `06-real-world/`

Labs and real-world playbooks should feel more like runbooks than essays. In addition to any Summary and diagram:

- **Metadata Block** (just under the title)

  - A small table with:
    - Level (Beginner / Intermediate / Advanced)
    - Role fit (Developer / Ops / Architect / Data…)
    - AWS services used
    - Estimated time
    - Cost warning (for example, “Uses t3.small, S3 Standard, NAT Gateway – remember to clean up”)

- **Prerequisites & Clean-up**

  - Two mandatory sections:
    - `Prerequisites` – knowledge and AWS setup required.
    - `Clean-up` – exact steps to delete resources and avoid ongoing charges.

- **Step Buckets**

  - Group tasks into:
    - **Plan** – what you’re going to build and why.
    - **Build** – main implementation steps.
    - **Verify** – how to confirm it works (CLI/console outputs, screenshots).
    - **Optimize** – optional improvements (cost, performance, security).
    - **Tear Down** – repeat of clean-up steps.

- **Validation & Troubleshooting**

  - A small checklist of “expected results”.
  - A troubleshooting table: Symptom → Likely cause → How to fix (e.g. SG/route issues, IAM errors, missing environment variables).

- **Reflection & Exam Mapping**
  - 2–3 bullets or questions like: “Nếu vào đề thi, câu hỏi từ lab này sẽ hỏi gì?”, mapped to domains/tasks.

### 4. Glossary & Cheatsheets

`08-glossary/`, `docs-workflow/`

For glossary/cheatsheet style content, use **pattern cards**:

- Each term should follow a fixed 4-line pattern:
  - **Định nghĩa (Definition)** – one clear sentence.
  - **Khi dùng (When to use)** – 2–3 bullets.
  - **Liên hệ dịch vụ (Service links)** – key AWS services related to the term.
  - **FAQ exam** – 1–2 bullets about how the term appears in exams (common confusion, typical question angle).

This keeps the glossary usable both as a reference during writing and as a last-minute exam revision aid.

## AI Agent Instructions

AI agents automatically read instructions from:

- **Cursor**: `.cursorrules` (root)
- **GitHub Copilot**: `.github/copilot-instructions.md`

For full documentation requirements and scenarios, also see:

- `openspec/AGENTS.md` – global OpenSpec + documentation workflow instructions.
- `openspec/specs/documentation/spec.md` – normative spec for the documentation capability.
