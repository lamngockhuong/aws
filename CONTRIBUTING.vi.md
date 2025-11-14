# Contributing to AWS Knowledge Hub

Cảm ơn bạn đã quan tâm đến việc đóng góp cho AWS Knowledge Hub! Tài liệu này hướng dẫn cách bạn có thể đóng góp.

## Cách Đóng Góp

### 1. Báo Cáo Lỗi

Nếu bạn phát hiện lỗi hoặc có đề xuất cải thiện:

1. Kiểm tra xem issue đã tồn tại chưa
2. Tạo issue mới với mô tả chi tiết
3. Bao gồm:
   - Mô tả vấn đề
   - File/tài liệu liên quan
   - Đề xuất giải pháp (nếu có)

### 2. Đóng Góp Nội Dung

#### Thêm Tài Liệu Mới

1. Tạo file mới trong thư mục phù hợp
2. Tuân theo cấu trúc và format hiện tại
3. Đảm bảo cả phiên bản tiếng Anh và tiếng Việt
4. Thêm liên kết trong file index tương ứng

#### Cập Nhật Tài Liệu Hiện Tại

1. Tìm file cần cập nhật
2. Cập nhật nội dung với thông tin mới nhất
3. Đảm bảo cả hai phiên bản ngôn ngữ được đồng bộ

### 3. Tạo Nội dung

Khi tạo nội dung tài liệu AWS:

- **Tóm tắt, không dịch toàn bộ**: Tập trung vào 3-5 concepts chính
- **Thêm diagrams**: Sử dụng Mermaid để minh họa (architecture/flowchart/mindmap)
- **Best Practices**: Luôn thêm section best practices với tips thực tế
- **Giữ nguyên thuật ngữ kỹ thuật**: EC2, IAM, S3, API names, CLI flags, code blocks
- **Tone chuyên nghiệp**: Phù hợp với phong cách tài liệu AWS

#### Tài Nguyên Tạo Nội dung

AI agents (Cursor, Copilot) tự động đọc instructions từ:

- `.cursorrules` - Instructions cho Cursor
- `.github/copilot-instructions.md` - Instructions cho GitHub Copilot

Reference files:

- **[Glossary](./docs-workflow/glossary.md)**: Từ điển thuật ngữ (English | Vietnamese) - cập nhật thường xuyên!
- **[Diagram Templates](./docs-workflow/diagram-templates.md)**: Examples cho Mermaid diagrams

## Quản Lý AWS Documentation URLs

File `.aws-docs-urls.json` chứa các URL tài liệu chính thức của AWS cho từng service, được sử dụng bởi AI để lấy thông tin mới nhất từ AWS MCP.

### Cấu Trúc File

File được tổ chức theo cấu trúc:

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

### Thêm URL Mới

Khi cần thêm URL cho một service hoặc topic mới:

1. Mở file `docs/.aws-docs-urls.json`
2. Tìm category và service tương ứng
3. Thêm topic mới vào `topics` object:

```json
"newTopic": "https://docs.aws.amazon.com/service/latest/guide/topic.html"
```

### Cập Nhật URL

Khi AWS thay đổi URL hoặc có thông tin mới:

1. Tìm URL cũ trong file
2. Cập nhật với URL mới
3. Cập nhật `lastUpdated` trong metadata

### Yêu Cầu về URL

- ✅ Phải từ domain `docs.aws.amazon.com`
- ✅ Phải kết thúc bằng `.html`
- ✅ Phải là trang tài liệu chính thức (không phải landing page)
- ❌ Không phải URL từ `aws.amazon.com` (marketing site)
- ❌ Không phải URL từ `console.aws.amazon.com` (console)

### Thêm Service Mới

Khi cần thêm service mới:

1. Xác định category phù hợp (compute, storage, database, networking, security, monitoring)
2. Thêm entry mới:

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

### Best Practices cho URLs

1. **Đặt tên topic rõ ràng**: Sử dụng camelCase, mô tả ngắn gọn
2. **Luôn có overview**: Mỗi service nên có topic "overview"
3. **Cập nhật metadata**: Khi thay đổi, cập nhật `lastUpdated`
4. **Kiểm tra URL**: Đảm bảo URL còn hoạt động
5. **Nhóm theo logic**: Sắp xếp topics theo thứ tự logic (overview → getting started → advanced)

### Kiểm Tra URL

Sử dụng script validation để kiểm tra xem tất cả URL còn hợp lệ không:

```bash
# Kiểm tra tất cả URL
pnpm check:urls

# Kiểm tra với output chi tiết
pnpm check:urls:verbose

# Kiểm tra URL cho một service cụ thể
node scripts/check-aws-docs-urls.js --service=ec2
```

Script sẽ:

- Kiểm tra tất cả URL trong file JSON
- Báo cáo URL không hợp lệ hoặc bị redirect
- Hiển thị thông tin chi tiết ở verbose mode
- Exit với error code nếu có URL không hợp lệ

Xem [scripts/README.md](./scripts/README.md) để biết thêm chi tiết.

### Sử Dụng với AI

Khi yêu cầu AI cập nhật tài liệu, bạn có thể:

#### Cách 1: Tham chiếu trực tiếp

```txt
Hãy lấy thông tin từ EC2 overview URL và cập nhật file EC2 index.md
```

#### Cách 2: Chỉ định topic cụ thể

```txt
Hãy lấy thông tin từ EC2 instanceTypes topic và cập nhật file instance-types.md
```

#### Cách 3: Cung cấp URL mới

```txt
Hãy thêm URL này vào file .aws-docs-urls.json cho EC2:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/new-topic.html
Với topic name là "newTopic"
```

## Quy Tắc Commit

Tất cả commits phải tuân theo [Conventional Commits](https://www.conventionalcommits.org/) format:

```txt
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: Thêm tính năng mới
- `fix`: Sửa lỗi
- `docs`: Cập nhật tài liệu
- `style`: Formatting, không ảnh hưởng code
- `refactor`: Refactor code
- `perf`: Cải thiện performance
- `test`: Thêm hoặc sửa tests
- `chore`: Các thay đổi khác

### Ví Dụ

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

1. **Fork repository** (nếu chưa có quyền write)
2. **Tạo branch mới** từ `main`:

   ```bash
   git checkout -b feat/add-new-service-docs
   ```

3. **Commit changes** với conventional commit format
4. **Push branch**:

   ```bash
   git push origin feat/add-new-service-docs
   ```

5. **Tạo Pull Request** với mô tả rõ ràng

## Cấu Trúc Dự Án

```bash
aws/
├── docs/                      # Documentation source files (cho website)
│   ├── .aws-docs-urls.json    # AWS documentation URLs reference
│   ├── .vitepress/            # VitePress configuration
│   ├── en/                    # Tài liệu tiếng Anh
│   │   ├── 01-introduction/   # Getting started guides
│   │   ├── 02-fundamentals/   # Core AWS concepts
│   │   ├── 03-services/       # Service-specific documentation
│   │   ├── 04-architecture/   # Architecture patterns
│   │   ├── 05-labs/           # Hands-on labs
│   │   ├── 06-real-world/     # Production playbooks
│   │   ├── 07-exam/           # Certification exam guides
│   │   └── 08-glossary/       # Shared terminology
│   ├── public/                # Static assets (favicons, manifest, icons)
│   └── vi/                    # Bản dịch tiếng Việt (mirror cấu trúc en/)
├── docs-workflow/             # Workflow và reference files
│   ├── glossary.md            # Từ điển thuật ngữ
│   └── diagram-templates.md   # Mermaid diagram templates
├── .cursorrules               # Cursor AI instructions
└── .github/
    └── copilot-instructions.md # GitHub Copilot instructions
```

## Guidelines

### Nội Dung

- **Một chủ đề mỗi file**: Giữ mỗi file tập trung vào một chủ đề
- **Tiêu đề rõ ràng**: Sử dụng tiêu đề mô tả rõ ràng
- **Cấu trúc logic**: Sắp xếp nội dung theo thứ tự logic
- **Liên kết**: Thêm liên kết đến các tài liệu liên quan

### Format

- **Markdown**: Sử dụng Markdown format
- **Code blocks**: Sử dụng code blocks với language tags
- **Lists**: Sử dụng lists cho các mục liên quan
- **Diagrams**: Sử dụng Mermaid cho diagrams

### Đồng Bộ Ngôn Ngữ

- **Cả hai phiên bản**: Đảm bảo cả tiếng Anh và tiếng Việt được cập nhật
- **Nội dung tương đương**: Nội dung phải tương đương, không chỉ dịch word-by-word
- **Thuật ngữ nhất quán**: Sử dụng thuật ngữ nhất quán trong cả hai ngôn ngữ
- **Tham khảo Glossary**: Luôn tra cứu `docs-workflow/glossary.md` để đảm bảo consistency

## Câu Hỏi?

Nếu bạn có câu hỏi hoặc cần hỗ trợ:

- Tạo issue trên GitHub
- Liên hệ maintainer
- Tham khảo tài liệu hiện có

Cảm ơn bạn đã đóng góp! 🎉
