## Why

Cần có quy trình chuẩn hóa để viết và dịch tài liệu AWS, đảm bảo:

- Tài liệu luôn được cập nhật từ nguồn chính thức của AWS
- Quy trình dịch sang tiếng Việt nhất quán và chính xác
- AI assistants biết cách sử dụng AWS MCP để lấy tài liệu mới nhất
- Duy trì chất lượng và tính nhất quán của tài liệu song ngữ

## What Changes

- **ADDED**: Quy trình viết tài liệu mới với yêu cầu sử dụng AWS MCP
- **ADDED**: Quy trình dịch tài liệu từ tiếng Anh sang tiếng Việt
- **ADDED**: Hướng dẫn sử dụng AWS MCP để fetch tài liệu mới nhất từ AWS
- **ADDED**: Checklist và best practices cho việc viết và dịch tài liệu

## Impact

- Affected specs: `documentation` (new capability)
- Affected code: Tất cả các file tài liệu trong `docs/` và `docs/vi/`
- AI assistants sẽ tự động follow quy trình này khi được yêu cầu viết/dịch tài liệu
