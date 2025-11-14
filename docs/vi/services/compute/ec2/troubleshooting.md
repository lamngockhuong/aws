# Troubleshooting EC2

Hướng dẫn này bao gồm các vấn đề EC2 thường gặp và giải pháp của chúng. Sử dụng như một checklist khi troubleshooting EC2 instances và các services liên quan.

## Vấn đề Khởi chạy Instance

### Không thể Khởi chạy Instance

**Nguyên nhân thường gặp:**

- Không đủ capacity trong Availability Zone
- Instance type không có sẵn
- Vượt quá service limits
- Cấu hình không hợp lệ

**Giải pháp:**

- Thử Availability Zone khác
- Thử instance type khác
- Yêu cầu tăng limit
- Xem xét cấu hình launch
- Kiểm tra IAM permissions

### Instance Bị Kẹt ở Pending

**Nguyên nhân có thể:**

- Khởi tạo mất thời gian
- Ràng buộc resources
- Vấn đề cấu hình

**Giải pháp:**

- Đợi vài phút (bình thường cho lần launch đầu tiên)
- Kiểm tra instance status checks
- Xem xét CloudWatch logs
- Thử khởi chạy ở AZ khác
- Kiểm tra service health dashboard

## Vấn đề Kết nối

### Không thể SSH vào Linux Instance

**Checklist:**

1. **Instance State**: Xác minh instance đang chạy
2. **Security Group**: Kiểm tra inbound SSH rule (port 22)
3. **Public IP**: Xác minh instance có public IP
4. **Key Pair**: Sử dụng private key đúng
5. **Network ACLs**: Kiểm tra subnet-level rules
6. **Route Table**: Xác minh internet gateway route
7. **User**: Sử dụng username đúng (ec2-user, ubuntu, v.v.)

**Giải pháp thường gặp:**

```bash
# Xác minh quyền key
chmod 400 your-key.pem

# Test connectivity
ping <public-ip>

# Thử SSH với verbose output
ssh -v -i your-key.pem ec2-user@<public-ip>
```

### Không thể RDP vào Windows Instance

**Checklist:**

1. **Instance State**: Xác minh instance đang chạy
2. **Security Group**: Kiểm tra inbound RDP rule (port 3389)
3. **Public IP**: Xác minh instance có public IP
4. **Password**: Lấy administrator password từ console
5. **Network**: Kiểm tra cấu hình network

**Giải pháp:**

- Lấy password từ EC2 console
- Giải mã password với private key
- Sử dụng EC2 Instance Connect (nếu có sẵn)
- Kiểm tra cài đặt Windows firewall

## Vấn đề Hiệu suất

### CPU Utilization cao

**Triệu chứng:**

- Ứng dụng phản hồi chậm
- CloudWatch CPU metrics cao
- Timeout errors

**Chẩn đoán:**

- Kiểm tra CloudWatch CPU metrics
- Xác định processes sử dụng CPU
- Xem xét application logs
- Kiểm tra runaway processes

**Giải pháp:**

- Right-size instance (upgrade nếu cần)
- Tối ưu hóa application code
- Sử dụng Auto Scaling
- Kill runaway processes
- Sử dụng placement groups cho low latency

### Memory Usage cao

**Triệu chứng:**

- Out of memory errors
- Application crashes
- Swap usage

**Chẩn đoán:**

- Kiểm tra CloudWatch memory metrics
- Xem xét system memory usage
- Kiểm tra memory leaks
- Xem xét application configuration

**Giải pháp:**

- Upgrade sang memory-optimized instance
- Tối ưu hóa application memory usage
- Triển khai caching strategies
- Sửa memory leaks
- Sử dụng swap space (tạm thời)

### Disk I/O chậm

**Triệu chứng:**

- File operations chậm
- Disk wait times cao
- Application timeouts

**Chẩn đoán:**

- Kiểm tra CloudWatch disk metrics
- Xem xét EBS volume type
- Kiểm tra IOPS utilization
- Xem xét disk queue depth

**Giải pháp:**

- Upgrade sang io1/io2 volumes
- Tăng IOPS provisioning
- Sử dụng nhiều volumes trong RAID
- Sử dụng instance store cho temporary data
- Tối ưu hóa application I/O patterns

### Vấn đề Network Performance

**Triệu chứng:**

- Network transfers chậm
- Latency cao
- Packet loss

**Chẩn đoán:**

- Kiểm tra CloudWatch network metrics
- Xác minh enhanced networking
- Kiểm tra security group rules
- Xem xét network path

**Giải pháp:**

- Bật enhanced networking
- Sử dụng placement groups
- Tối ưu hóa security group rules
- Sử dụng cùng region/AZ cho low latency
- Kiểm tra network performance của instance type

## Status Check Failures

### System Status Check Failure

**Ý nghĩa:**

- Vấn đề với underlying host
- Vấn đề phần cứng
- Vấn đề network connectivity

**Giải pháp:**

- Stop và start instance (di chuyển sang host mới)
- Đợi AWS giải quyết
- Liên hệ AWS support nếu persistent
- Kiểm tra service health dashboard

### Instance Status Check Failure

**Ý nghĩa:**

- Vấn đề software hoặc network
- Vấn đề cấu hình instance
- Application không phản hồi

**Giải pháp:**

- Kiểm tra instance logs
- Xem xét application status
- Xác minh network configuration
- Kiểm tra security group rules
- Xem xét system logs

## Vấn đề Storage

### Không thể Gắn EBS Volume

**Nguyên nhân thường gặp:**

- Volume ở AZ khác
- Đạt giới hạn instance (40 volumes)
- Volume đã được gắn
- Volume state không hợp lệ

**Giải pháp:**

- Đảm bảo volume ở cùng AZ với instance
- Tháo các volumes không sử dụng
- Kiểm tra volume state
- Xác minh instance state

### Vấn đề Hiệu suất Volume

**Triệu chứng:**

- I/O operations chậm
- Latency cao
- Throttling

**Chẩn đoán:**

- Kiểm tra volume type
- Xem xét IOPS provisioning
- Kiểm tra CloudWatch metrics
- Xem xét volume size

**Giải pháp:**

- Upgrade sang io1/io2 cho IOPS cao
- Tăng IOPS provisioning
- Sử dụng gp3 với IOPS cao hơn
- Tăng volume size (cho gp2)
- Sử dụng nhiều volumes

### Vấn đề Snapshots

**Không thể Tạo Snapshot:**

- Kiểm tra volume state
- Xác minh permissions
- Kiểm tra service limits
- Xem xét volume encryption

**Tạo Snapshot chậm:**

- Bình thường cho volumes lớn
- Snapshot đầu tiên mất thời gian hơn
- Các snapshots tiếp theo là incremental
- Kiểm tra volume activity

## Vấn đề Security

### Security Group không hoạt động

**Checklist:**

- Xác minh security group được gắn vào instance
- Kiểm tra cấu hình rule
- Xác minh source IP/CIDR
- Kiểm tra outbound rules (cho return traffic)
- Xem xét network ACLs

**Giải pháp:**

- Xem xét security group rules
- Test với temporary permissive rule
- Kiểm tra các rules xung đột
- Xác minh source IP address
- Xem xét VPC configuration

### Vấn đề IAM Role

**Không thể Truy cập AWS Services:**

- Xác minh IAM role được gắn
- Kiểm tra role permissions
- Xem xét instance metadata service
- Kiểm tra service endpoints

**Giải pháp:**

- Gắn IAM role vào instance
- Xác minh role permissions
- Test với AWS CLI
- Kiểm tra VPC endpoints
- Xem xét IAM policies

## Vấn đề Network

### Không có Internet Connectivity

**Checklist:**

- Xác minh public IP hoặc Elastic IP
- Kiểm tra security group outbound rules
- Xem xét route table
- Xác minh internet gateway
- Kiểm tra network ACLs

**Giải pháp:**

- Gán public IP hoặc Elastic IP
- Thêm outbound rule vào security group
- Xác minh internet gateway route
- Kiểm tra NAT gateway (cho private subnets)
- Xem xét network ACL rules

### Không thể Truy cập Giữa các Instances

**Checklist:**

- Xác minh cùng VPC
- Kiểm tra security group rules
- Xem xét route tables
- Xác minh network ACLs
- Kiểm tra instance state

**Giải pháp:**

- Đảm bảo instances ở cùng VPC
- Cho phép traffic trong security groups
- Xác minh cấu hình route table
- Kiểm tra network ACL rules
- Sử dụng private IPs cho communication

## Vấn đề Chi phí

### Phí không mong muốn

**Nguyên nhân thường gặp:**

- Instances chạy 24/7
- EBS volumes không được gắn
- Elastic IPs không sử dụng
- Snapshots cũ
- Phí data transfer

**Giải pháp:**

- Dừng unused instances
- Xóa unattached volumes
- Release unused Elastic IPs
- Xóa old snapshots
- Giám sát data transfer

### Chi phí cao

**Điều tra:**

- Sử dụng Cost Explorer
- Lọc theo service và tags
- Xem xét instance usage
- Kiểm tra Reserved Instance utilization
- Phân tích data transfer

**Tối ưu hóa:**

- Right-size instances
- Sử dụng Reserved Instances
- Triển khai Auto Scaling
- Tối ưu hóa storage
- Minimize data transfer

## Monitoring và Logging

### Vấn đề CloudWatch

**Metrics không xuất hiện:**

- Bật detailed monitoring
- Kiểm tra IAM permissions
- Xác minh instance đang chạy
- Đợi metric collection

**Logs không xuất hiện:**

- Xác minh CloudWatch Logs agent
- Kiểm tra IAM permissions
- Xem xét log group configuration
- Kiểm tra agent configuration

### Công cụ Troubleshooting

**AWS Tools:**

- CloudWatch Metrics
- CloudWatch Logs
- VPC Flow Logs
- Systems Manager
- EC2 Instance Connect

**System Tools:**

- `top`, `htop`: Process monitoring
- `df`, `du`: Disk usage
- `netstat`, `ss`: Network connections
- `iostat`: I/O statistics
- `sar`: System activity

## Best Practices cho Troubleshooting

1. **Check Basics First**: Instance state, security groups, network
2. **Use CloudWatch**: Giám sát metrics và logs
3. **Review Logs**: System logs, application logs
4. **Test Incrementally**: Thực hiện một thay đổi tại một thời điểm
5. **Document Issues**: Ghi chú các vấn đề và giải pháp
6. **Use AWS Support**: Cho các vấn đề persistent
7. **Prevent Issues**: Triển khai monitoring và alerting

## Nhận Trợ giúp

### AWS Resources

- **AWS Documentation**: Hướng dẫn toàn diện
- **AWS Support**: Hỗ trợ kỹ thuật
- **AWS Forums**: Trợ giúp cộng đồng
- **AWS Health Dashboard**: Trạng thái service

### Diagnostic Commands

```bash
# Kiểm tra instance metadata
curl http://169.254.169.254/latest/meta-data/

# Kiểm tra IAM role credentials
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/

# Test connectivity
ping <target>
telnet <host> <port>

# Kiểm tra system resources
free -h
df -h
top
```

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [EC2 Best Practices](./best-practices.md) - Best practices
- [CloudWatch Documentation](../../monitoring/cloudwatch/index.md) - Monitoring
