# Tối ưu hóa Chi phí EC2

Chi phí EC2 có thể là một phần đáng kể trong hóa đơn AWS của bạn. Hướng dẫn này bao gồm các chiến lược và best practices để tối ưu hóa chi phí EC2 trong khi duy trì performance và availability.

## Hiểu về Giá cả EC2

### Các thành phần Giá cả

**Chi phí Instance:**

- **On-Demand**: Thanh toán theo giờ/giây
- **Reserved Instances**: Thanh toán trước + hourly rate
- **Spot Instances**: Giá được giảm (lên đến 90% off)
- **Savings Plans**: Mô hình giá cả linh hoạt

**Chi phí Bổ sung:**

- **EBS Volumes**: Chi phí storage và IOPS
- **Data Transfer**: Phí chuyển dữ liệu outbound
- **Elastic IPs**: Phí khi không được gắn
- **Snapshots**: Chi phí storage cho snapshots

### So sánh Mô hình Giá cả

| Model          | Savings   | Commitment | Flexibility | Use Case                 |
| -------------- | --------- | ---------- | ----------- | ------------------------ |
| On-Demand      | 0%        | None       | High        | Variable workloads       |
| Reserved (1yr) | Up to 40% | 1 year     | Low         | Predictable workloads    |
| Reserved (3yr) | Up to 72% | 3 years    | Low         | Long-term workloads      |
| Spot           | Up to 90% | None       | Low         | Fault-tolerant workloads |
| Savings Plans  | Up to 72% | 1-3 years  | Medium      | Flexible usage           |

## Chiến lược Mua Instance

### On-Demand Instances

**Khi nào sử dụng:**

- Variable hoặc unpredictable workloads
- Short-term workloads
- Testing và development
- Applications không thể bị gián đoạn

**Tối ưu hóa Chi phí:**

- Sử dụng cho baseline capacity
- Kết hợp với Reserved Instances
- Sử dụng Auto Scaling để minimize usage
- Giám sát và tối ưu hóa usage

### Reserved Instances

**Các loại:**

- **Standard Reserved**: Có thể modify instance type
- **Convertible Reserved**: Có thể thay đổi instance family
- **Scheduled Reserved**: Cho các time windows cụ thể

**Tùy chọn Thanh toán:**

- **All Upfront**: Tiết kiệm tối đa
- **Partial Upfront**: Tiết kiệm trung bình
- **No Upfront**: Tiết kiệm thấp hơn, thanh toán hàng tháng

**Best Practices:**

- Phân tích usage patterns trước
- Bắt đầu với kỳ hạn 1 năm
- Sử dụng Convertible cho flexibility
- Giám sát utilization

### Spot Instances

**Đặc điểm:**

- Giảm giá lên đến 90%
- Có thể bị gián đoạn với thông báo 2 phút
- Tốt nhất cho fault-tolerant workloads
- Không phù hợp cho persistent workloads

**Use Cases:**

- Batch processing
- Data analysis
- CI/CD pipelines
- Testing environments
- Container workloads (ECS, EKS)

**Best Practices:**

- Sử dụng Spot Fleet cho capacity
- Triển khai checkpointing
- Sử dụng nhiều instance types
- Đặt bid prices phù hợp

### Savings Plans

**Các loại:**

- **Compute Savings Plans**: Linh hoạt qua EC2, Lambda, Fargate
- **EC2 Instance Savings Plans**: Cụ thể cho EC2

**Benefits:**

- Flexible instance family và size
- Automatic application
- Tiết kiệm lên đến 72%
- Kỳ hạn 1 năm hoặc 3 năm

**Best Practices:**

- Phân tích historical usage
- Bắt đầu với Compute Savings Plans
- Giám sát commitment utilization
- Điều chỉnh khi cần

## Right-Sizing Instances

### Giám sát Utilization

**Key Metrics:**

- **CPU Utilization**: Trung bình và peak
- **Memory Utilization**: Trung bình và peak
- **Network Utilization**: Inbound và outbound
- **Disk I/O**: Read và write operations

**CloudWatch Metrics:**

- `CPUUtilization`
- `NetworkIn`, `NetworkOut`
- `DiskReadOps`, `DiskWriteOps`
- Custom application metrics

### Quy trình Right-Sizing

1. **Collect Metrics**: Dữ liệu 2-4 tuần
2. **Analyze Patterns**: Xác định trends và peaks
3. **Identify Opportunities**: Instances over/under-provisioned
4. **Test Changes**: Validate trong non-production
5. **Implement**: Thực hiện thay đổi dần dần
6. **Monitor**: Theo dõi impact của các thay đổi

### Tối ưu hóa Instance Type

**Downsizing:**

- Giảm kích thước instance nếu over-provisioned
- Sử dụng các instance types nhỏ hơn
- Cân nhắc burstable instances (T3, T4g)
- Giám sát performance sau thay đổi

**Upsizing:**

- Tăng kích thước nếu consistently ở capacity
- Cân nhắc impact về performance
- Cân bằng cost vs. performance
- Sử dụng Auto Scaling thay vì khi có thể

## Auto Scaling

### Benefits

**Tối ưu hóa Chi phí:**

- Scale down trong thời gian nhu cầu thấp
- Scale up trong thời gian nhu cầu cao
- Chỉ trả tiền cho những gì bạn sử dụng
- Quản lý capacity tự động

**High Availability:**

- Phân phối qua các AZs
- Thay thế các instances không khỏe mạnh
- Duy trì desired capacity
- Xử lý traffic spikes

### Implementation

**Launch Templates:**

- Định nghĩa cấu hình instance
- Sử dụng latest AMIs
- Cấu hình security groups
- Thiết lập IAM roles

**Scaling Policies:**

- **Target Tracking**: Duy trì target metric
- **Step Scaling**: Scale theo steps
- **Simple Scaling**: Simple scale up/down

**Best Practices:**

- Đặt min/max capacity phù hợp
- Sử dụng nhiều AZs
- Triển khai health checks
- Giám sát scaling activities

## Tối ưu hóa Storage

### Tối ưu hóa EBS Volume

**Lựa chọn Loại Volume:**

- Sử dụng gp3 cho hầu hết workloads (giá/hiệu suất tốt hơn)
- Chỉ sử dụng io1/io2 khi cần
- Sử dụng st1/sc1 cho sequential workloads
- Right-size volumes

**Quản lý Snapshots:**

- Xóa unused snapshots
- Sử dụng lifecycle policies
- Archive old snapshots sang S3
- Giám sát chi phí snapshots

**Volume Lifecycle:**

- Xóa unused volumes
- Right-size volumes
- Sử dụng Elastic Volumes để modify
- Giám sát volume utilization

### Instance Store

**Khi nào sử dụng:**

- Temporary data và cache
- High-performance workloads
- Dữ liệu có thể được tạo lại
- Applications nhạy cảm về chi phí

**Cân nhắc:**

- Dữ liệu bị mất khi stop/terminate
- Không phải tất cả instance types hỗ trợ
- Backup dữ liệu quan trọng
- Sử dụng cho performance, không phải persistence

## Tối ưu hóa Data Transfer

### Minimize Data Transfer

**Chiến lược:**

- Sử dụng cùng region cho communication
- Sử dụng VPC endpoints cho AWS services
- Sử dụng CloudFront cho content delivery
- Nén dữ liệu trước khi transfer

**Tối ưu hóa Chi phí:**

- Minimize cross-region transfer
- Sử dụng private connectivity
- Cache content ở edge
- Tối ưu hóa application architecture

### VPC Endpoints

**Gateway Endpoints (Miễn phí):**

- S3 và DynamoDB
- Không có phí data transfer
- Sử dụng cho private access

**Interface Endpoints:**

- Các AWS services khác
- Phí theo giờ và data transfer
- Sử dụng khi cost-effective

## Lifecycle Management

### Dừng Instances không sử dụng

**Benefits:**

- Không có phí compute khi dừng
- EBS volumes vẫn bị tính phí
- Có thể restart khi cần
- Bảo tồn cấu hình instance

**Automation:**

- Sử dụng Lambda functions
- Lên lịch với EventBridge
- Sử dụng Systems Manager
- Triển khai policies

### Terminate các Resources không cần thiết

**Review định kỳ:**

- Unused instances
- Unattached EBS volumes
- Unused Elastic IPs
- Old snapshots

**Automation:**

- Tag resources cho lifecycle
- Sử dụng Lambda cho cleanup
- Thiết lập alerts
- Reviews định kỳ

## Giám sát Chi phí

### Cost Explorer

**Tính năng:**

- Xem chi phí theo service
- Lọc theo tags
- Dự báo chi phí tương lai
- Xác định cost trends

**Best Practices:**

- Review định kỳ
- Thiết lập cost budgets
- Tag resources đúng cách
- Phân tích trends

### Billing Alerts

**Setup:**

- Cấu hình billing alerts
- Đặt thresholds
- Nhiều mức alert
- Email notifications

**Monitoring:**

- Theo dõi spending trends
- Xác định cost spikes
- Review alerts định kỳ
- Điều chỉnh budgets

### Cost Allocation Tags

**Chiến lược Tagging:**

- Environment (dev, staging, prod)
- Project hoặc application
- Cost center
- Owner hoặc team

**Benefits:**

- Theo dõi chi phí theo tag
- Phân bổ chi phí đúng cách
- Xác định cơ hội tối ưu hóa
- Hỗ trợ chargeback

## Tóm tắt Best Practices

1. **Use Reserved Instances**: Cho predictable workloads
2. **Right-Size Instances**: Khớp instance type với workload
3. **Use Auto Scaling**: Scale dựa trên demand
4. **Optimize Storage**: Right-size EBS volumes
5. **Use Spot Instances**: Cho fault-tolerant workloads
6. **Monitor Costs**: Reviews chi phí định kỳ
7. **Tag Resources**: Cho cost allocation
8. **Automate Lifecycle**: Dừng/terminate unused resources
9. **Optimize Data Transfer**: Minimize cross-region transfer
10. **Regular Reviews**: Tối ưu hóa liên tục

## Tools và Services

### AWS Cost Management Tools

- **Cost Explorer**: Phân tích chi phí và dự báo
- **AWS Budgets**: Budget alerts và tracking
- **Cost Anomaly Detection**: Xác định spending bất thường
- **Reserved Instance Recommendations**: Gợi ý tối ưu hóa

### Third-Party Tools

- **CloudHealth**: Quản lý và tối ưu hóa chi phí
- **CloudCheckr**: Tối ưu hóa chi phí và compliance
- **Spot.io**: Quản lý spot instances
- **ParkMyCloud**: Lên lịch dừng/khởi động instances

## Tài liệu liên quan

- [EC2 Best Practices](./best-practices.md) - Best practices EC2
- [EC2 Instance Types](./instance-types.md) - Lựa chọn instance type
- [AWS Pricing & Billing](../../../fundamentals/pricing-billing.md) - Tổng quan giá cả AWS
