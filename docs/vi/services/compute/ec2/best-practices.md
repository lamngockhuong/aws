# Best Practices EC2

Tuân theo best practices giúp đảm bảo các EC2 instances của bạn an toàn, hiệu suất cao, tiết kiệm chi phí và đáng tin cậy. Hướng dẫn này bao gồm các best practices vận hành và kiến trúc cho EC2.

## Security Best Practices

### IAM Roles

**Sử dụng IAM Roles Thay vì Access Keys:**

- **No Credentials on Instances**: Roles cung cấp temporary credentials
- **Automatic Rotation**: Credentials được rotate tự động
- **Least Privilege**: Cấp các permissions tối thiểu cần thiết
- **Audit Trail**: Tất cả access được ghi log trong CloudTrail

**Implementation:**

- Tạo IAM role với các permissions cần thiết
- Gắn role vào instance khi khởi chạy hoặc sau đó
- Applications sử dụng instance metadata service
- Không lưu trữ access keys trên instances

### Security Groups

**Nguyên tắc Least Privilege:**

- Chỉ cho phép các ports và protocols cần thiết
- Hạn chế source IPs khi có thể
- Sử dụng security groups làm sources
- Document các rules của security group

**Best Practices:**

- Tách security groups theo chức năng (web, app, DB)
- Sử dụng tên và mô tả rõ ràng
- Security reviews định kỳ
- Xóa các security group rules không sử dụng

### Network Security

**VPC Best Practices:**

- Sử dụng private subnets cho application và database tiers
- Chỉ sử dụng public subnets cho load balancers và NAT
- Triển khai network ACLs cho lớp bổ sung
- Bật VPC Flow Logs để giám sát

**Network Isolation:**

- Tách các environments (dev, staging, prod)
- Sử dụng các VPCs hoặc subnets khác nhau
- Triển khai routing phù hợp
- Sử dụng VPC endpoints cho AWS services

### Encryption

**Data at Rest:**

- Bật EBS volume encryption
- Sử dụng KMS để quản lý keys
- Mã hóa instance store data (nếu lưu trữ dữ liệu nhạy cảm)
- Mã hóa snapshots

**Data in Transit:**

- Sử dụng HTTPS/TLS cho tất cả communications
- Sử dụng VPN cho remote access
- Mã hóa dữ liệu trước khi truyền
- Sử dụng các protocols an toàn

### Patch Management

**Regular Updates:**

- Giữ operating systems được cập nhật
- Áp dụng security patches kịp thời
- Sử dụng Systems Manager Patch Manager
- Test patches trong non-production trước

**Automation:**

- Sử dụng Systems Manager cho automated patching
- Lên lịch maintenance windows
- Giám sát patch compliance
- Document các quy trình patch

## Performance Best Practices

### Instance Selection

**Right-Sizing:**

- Khớp instance type với yêu cầu workload
- Giám sát CloudWatch metrics
- Sử dụng current generation instances
- Cân nhắc burstable instances cho variable workloads

**Instance Types:**

- Sử dụng general purpose (M) cho balanced workloads
- Sử dụng compute optimized (C) cho CPU-intensive
- Sử dụng memory optimized (R) cho memory-intensive
- Sử dụng storage optimized (I, D) cho I/O-intensive

### Enhanced Networking

**Enable Enhanced Networking:**

- Network performance tốt hơn
- Latency thấp hơn
- Bandwidth cao hơn
- Yêu cầu cho một số instance types

**Implementation:**

- Sử dụng current generation instances
- Bật khi khởi chạy instance
- Xác minh sau khi khởi chạy
- Giám sát network performance

### Storage Optimization

**EBS Volume Selection:**

- Sử dụng gp3 cho hầu hết workloads
- Sử dụng io1/io2 cho yêu cầu IOPS cao
- Sử dụng st1/sc1 cho sequential workloads
- Right-size volumes

**Instance Store:**

- Sử dụng cho temporary data và cache
- Không lưu trữ critical data
- Backup dữ liệu quan trọng sang EBS hoặc S3
- Hiểu data lifecycle

### Monitoring

**CloudWatch Metrics:**

- Giám sát CPU, memory, disk, network
- Thiết lập alarms cho thresholds
- Theo dõi performance trends
- Sử dụng custom metrics cho applications

**Logging:**

- Bật CloudWatch Logs
- Tập trung log collection
- Triển khai log retention policies
- Giám sát errors và anomalies

## Cost Optimization

### Instance Purchasing

**On-Demand Instances:**

- Thanh toán theo giờ/giây
- Không có cam kết trước
- Sử dụng cho: Variable workloads, testing

**Reserved Instances:**

- Kỳ hạn 1 năm hoặc 3 năm
- Tiết kiệm lên đến 72%
- Sử dụng cho: Predictable workloads

**Spot Instances:**

- Tiết kiệm lên đến 90%
- Có thể bị gián đoạn
- Sử dụng cho: Fault-tolerant workloads

**Savings Plans:**

- Mô hình giá cả linh hoạt
- Tiết kiệm lên đến 72%
- Áp dụng trên các instance families

### Right-Sizing

**Monitor Utilization:**

- Theo dõi CPU, memory, network usage
- Xác định các instances over-provisioned
- Xác định các instances under-utilized
- Sử dụng CloudWatch metrics

**Optimization:**

- Downsize các instances over-provisioned
- Consolidate các instances under-utilized
- Sử dụng Auto Scaling cho variable workloads
- Reviews định kỳ

### Auto Scaling

**Benefits:**

- Scale up trong thời gian nhu cầu cao
- Scale down trong thời gian nhu cầu thấp
- Tối ưu hóa chi phí
- High availability

**Implementation:**

- Tạo launch templates
- Cấu hình scaling policies
- Thiết lập health checks
- Giám sát scaling activities

### Lifecycle Management

**Stop Unused Instances:**

- Dừng instances khi không cần
- Không trả tiền cho stopped instances (EBS vẫn bị tính phí)
- Sử dụng scheduling cho các patterns có thể dự đoán được
- Tự động hóa với Lambda

## High Availability

### Multi-AZ Deployment

**Distribution:**

- Triển khai instances qua nhiều AZs
- Sử dụng Auto Scaling qua các AZs
- Sử dụng load balancers qua các AZs
- Thiết kế cho AZ failure

**Benefits:**

- Availability cao hơn
- Giảm rủi ro correlated failures
- Disaster recovery tốt hơn
- Cải thiện performance (gần người dùng hơn)

### Health Checks

**Instance Health:**

- Giám sát system status checks
- Giám sát instance status checks
- Thiết lập CloudWatch alarms
- Tự động hóa recovery

**Application Health:**

- Triển khai application health checks
- Sử dụng load balancer health checks
- Giám sát application metrics
- Thiết lập automated remediation

### Backup and Recovery

**EBS Snapshots:**

- Regular automated snapshots
- Test restore procedures
- Cross-region snapshot copies
- Long-term retention

**AMI Management:**

- Tạo AMIs cho golden images
- Version control AMIs
- Test AMI launches
- Document nội dung AMI

## Operational Excellence

### Tagging

**Consistent Tagging:**

- Sử dụng chiến lược tagging nhất quán
- Tag cho cost allocation
- Tag cho automation
- Tag cho compliance

**Common Tags:**

- Name, Environment, Project
- Owner, Team, Cost Center
- Application, Service
- Compliance, Backup

### Automation

**Infrastructure as Code:**

- Sử dụng CloudFormation hoặc Terraform
- Version control infrastructure
- Automated deployments
- Quy trình có thể lặp lại

**Configuration Management:**

- Sử dụng Systems Manager
- Sử dụng user data scripts
- Sử dụng configuration management tools
- Document configurations

### Documentation

**Instance Documentation:**

- Document mục đích instance
- Document configurations
- Document dependencies
- Document runbooks

**Procedures:**

- Document launch procedures
- Document troubleshooting steps
- Document recovery procedures
- Giữ documentation được cập nhật

## Monitoring and Alerting

### CloudWatch Setup

**Metrics:**

- Bật detailed monitoring
- Tạo custom metrics
- Thiết lập dashboards
- Cấu hình alarms

**Logs:**

- Bật CloudWatch Logs
- Tập trung log collection
- Thiết lập log retention
- Giám sát errors

### Alerting

**Critical Alarms:**

- Instance status check failures
- High CPU/memory usage
- Disk space issues
- Network problems

**Alerting Best Practices:**

- Đặt thresholds phù hợp
- Tránh alert fatigue
- Route đến các channels phù hợp
- Test alerting

## Disaster Recovery

### Backup Strategy

**EBS Snapshots:**

- Regular automated snapshots
- Point-in-time recovery
- Cross-region copies
- Test restore procedures

**AMI Backups:**

- Tạo AMIs định kỳ
- Lưu trữ trong nhiều regions
- Version control
- Test AMI launches

### Recovery Procedures

**Documentation:**

- Document recovery procedures
- Test recovery định kỳ
- Cập nhật procedures
- Đào tạo team members

**Automation:**

- Tự động hóa recovery khi có thể
- Sử dụng Systems Manager
- Sử dụng Lambda functions
- Test automation

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [EC2 Cost Optimization](./cost-optimization.md) - Tối ưu hóa chi phí
- [EC2 Troubleshooting](./troubleshooting.md) - Hướng dẫn troubleshooting
