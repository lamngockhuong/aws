# PR: Dịch/Tune docs

## Thông tin PR

- [ ] File gốc: `path/to/source.md`
- [ ] File mới: `path/to/content.md`
- [ ] Loại thay đổi: [ ] Tạo mới / [ ] Cập nhật / [ ] Sửa lỗi

## Mô tả

<!-- Mô tả ngắn gọn về nội dung PR -->

## QA Checklist

### Checklist Nội dung

- [ ] Giữ nguyên tất cả code blocks và CLI commands
- [ ] Kiểm tra glossary: mọi thuật ngữ đã dùng đúng chưa?
- [ ] Không có câu tiếng Anh dài (>10 từ) còn sót
- [ ] Tone: chính thức, không dùng từ địa phương
- [ ] Có Summary 1-2 dòng ở đầu (nếu cần)
- [ ] Thêm Exam Notes (nếu applicable)
- [ ] Thêm Real-world Tips (nếu có)

### Kỹ thuật

- [ ] Markdown syntax hợp lệ
- [ ] Links hoạt động đúng
- [ ] Cấu trúc heading đúng (H1, H2, H3)
- [ ] Code blocks có language tag đúng
- [ ] Images và diagrams (nếu có) được giữ nguyên

### Thuật ngữ

- [ ] Service names giữ nguyên (S3, EC2, IAM, v.v.)
- [ ] API names giữ nguyên (DescribeInstances, PutObject, v.v.)
- [ ] CLI flags giữ nguyên (--instance-id, --region, v.v.)
- [ ] Thuật ngữ nhất quán với `docs-workflow/glossary.md`

## Screenshots (nếu có)

<!-- Nếu có thay đổi về UI hoặc formatting -->

## Testing

- [ ] Đã test local với `pnpm docs:dev`
- [ ] Đã kiểm tra build với `pnpm docs:build`
- [ ] Đã review preview

## Reviewer Notes

<!-- Ghi chú cho reviewer, ví dụ: phần nào cần chú ý đặc biệt -->

**Reviewer**: Please pay attention to terminology consistency and tone.

---

**Tài liệu tham khảo:**

- [Glossary](../docs-workflow/glossary.md) - Terminology consistency
- [Diagram Templates](../docs-workflow/diagram-templates.md) - Mermaid examples
