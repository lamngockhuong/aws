# Ghi chú Thi EC2

Các điểm chính về EC2 cho các kỳ thi chứng chỉ AWS. Hướng dẫn này bao gồm các khái niệm EC2 thường được kiểm tra trong các kỳ thi chứng chỉ AWS.

## Khái niệm Cốt lõi

### Instance Types

**Instance Families:**

- **General Purpose (M, T)**: Cân bằng compute, memory, network
- **Compute Optimized (C)**: Tỷ lệ CPU-to-memory cao
- **Memory Optimized (R, X)**: Tỷ lệ memory-to-CPU cao
- **Storage Optimized (I, D, H)**: Hiệu suất I/O cao
- **Accelerated Computing (P, G)**: GPU instances

**Điểm chính:**

- T2/T3 là burstable (CPU credits)
- Current generation được khuyến nghị (M6i, C6i, R6i)
- Metal instances = bare metal access
- Đặt tên instance: `[family][generation].[size]`

### Mô hình Giá cả

**On-Demand:**

- Thanh toán theo giờ/giây
- Không có cam kết
- Chi phí cao nhất
- Sử dụng cho: Variable workloads

**Reserved Instances:**

- 1 năm: Tiết kiệm lên đến 40%
- 3 năm: Tiết kiệm lên đến 72%
- Standard vs. Convertible
- Sử dụng cho: Predictable workloads

**Spot Instances:**

- Giảm giá lên đến 90%
- Có thể bị gián đoạn (thông báo 2 phút)
- Sử dụng cho: Fault-tolerant workloads

**Savings Plans:**

- Tiết kiệm lên đến 72%
- Linh hoạt qua các instance families
- Cam kết 1 năm hoặc 3 năm

### Vòng đời Instance

**Các trạng thái:**

- **Pending**: Đang khởi chạy
- **Running**: Đang hoạt động
- **Stopping**: Đang tắt
- **Stopped**: Không chạy (EBS được giữ lại)
- **Shutting-down**: Đang terminate
- **Terminated**: Đã xóa

**Điểm chính:**

- Instance store data bị mất khi stop/terminate
- EBS data được giữ lại khi stop
- Không thể khôi phục terminated instances
- Billing dừng khi terminated

## Storage

### Các loại EBS Volume

**gp3 (General Purpose SSD):**

- Baseline: 3,000 IOPS, 125 MB/s
- Max: 16,000 IOPS, 1,000 MB/s
- Sử dụng cho: Hầu hết workloads

**io1/io2 (Provisioned IOPS SSD):**

- Max: 64,000 IOPS (io1), 256,000 IOPS (io2)
- Max: 1,000 MB/s throughput
- Multi-attach được hỗ trợ (io1/io2)
- Sử dụng cho: Databases, IOPS cao

**st1 (Throughput Optimized HDD):**

- Max: 500 MB/s, 500 IOPS
- Sử dụng cho: Big data, sequential workloads

**sc1 (Cold HDD):**

- Max: 250 MB/s, 250 IOPS
- Sử dụng cho: Dữ liệu ít được truy cập

### Instance Store

**Đặc điểm:**

- Ephemeral (dữ liệu bị mất khi stop/terminate)
- Hiệu suất cao (local NVMe)
- Không phải tất cả instance types
- Sử dụng cho: Cache, temporary data

### Snapshots

**Tính năng:**

- Incremental (chỉ các blocks thay đổi)
- Encrypted nếu volume được mã hóa
- Có thể copy qua các regions
- Có thể chia sẻ với các accounts khác
- Được lưu trữ trong S3

## Networking

### Security Groups

**Đặc điểm:**

- Stateful (return traffic được phép)
- Instance level
- Mặc định: Tất cả inbound bị từ chối, tất cả outbound được phép
- Nhiều security groups mỗi instance

**Rules:**

- Inbound: Kiểm soát traffic đến instance
- Outbound: Kiểm soát traffic từ instance
- Source: IP, CIDR hoặc security group

### Network Interfaces

**ENI (Elastic Network Interface):**

- Virtual network card
- Nhiều ENIs mỗi instance (lên đến 8)
- Elastic IPs được gắn vào ENI
- Security groups được áp dụng ở cấp ENI

### Enhanced Networking

**Benefits:**

- Bandwidth cao hơn (lên đến 100 Gbps)
- Latency thấp hơn
- PPS tốt hơn (packets mỗi giây)
- Công nghệ SR-IOV

## Placement Groups

### Cluster Placement Group

- Low latency (cùng rack)
- High throughput (10 Gbps)
- Chỉ một AZ
- Sử dụng cho: HPC, tightly coupled workloads

### Spread Placement Group

- High availability (phần cứng khác nhau)
- Lên đến 7 instances mỗi AZ
- Nhiều AZs được hỗ trợ
- Sử dụng cho: Critical applications

### Partition Placement Group

- Large scale (hàng trăm instances)
- Lên đến 7 partitions mỗi AZ
- Sử dụng cho: Distributed systems (Hadoop, Cassandra)

## High Availability

### Multi-AZ Deployment

- Triển khai qua nhiều Availability Zones
- Sử dụng Auto Scaling qua các AZs
- Sử dụng load balancers qua các AZs
- Thiết kế cho AZ failure

### Auto Scaling

**Components:**

- Launch Template/Configuration
- Auto Scaling Group
- Scaling Policies
- Health Checks

**Scaling Policies:**

- Target Tracking: Duy trì target metric
- Step Scaling: Scale theo steps
- Simple Scaling: Simple scale up/down

## Security

### IAM Roles

- Sử dụng roles thay vì access keys
- Temporary credentials
- Automatic rotation
- Gắn vào instances

### Encryption

**EBS Encryption:**

- Mã hóa ở trạng thái nghỉ
- Sử dụng KMS để quản lý keys
- Encrypted snapshots
- Không có impact về performance

**Data in Transit:**

- Sử dụng HTTPS/TLS
- VPN cho remote access
- Mã hóa trước khi truyền

## Monitoring

### CloudWatch Metrics

**Key Metrics:**

- `CPUUtilization`
- `NetworkIn`, `NetworkOut`
- `DiskReadOps`, `DiskWriteOps`
- `StatusCheckFailed_System`
- `StatusCheckFailed_Instance`

### Status Checks

**System Status:**

- Vấn đề physical host
- Stop và start để di chuyển sang host mới

**Instance Status:**

- Vấn đề software/network
- Troubleshoot application/configuration

## Tối ưu hóa Chi phí

### Chiến lược

1. **Right-Size**: Khớp instance type với workload
2. **Reserved Instances**: Cho predictable workloads
3. **Spot Instances**: Cho fault-tolerant workloads
4. **Auto Scaling**: Scale dựa trên demand
5. **Stop Unused**: Dừng instances khi không cần
6. **Delete Unused**: Xóa unused resources

### Giám sát Chi phí

- Cost Explorer: Phân tích chi phí
- AWS Budgets: Budget alerts
- Cost Allocation Tags: Theo dõi chi phí
- Reserved Instance Recommendations

## Mẹo Thi

### Các Chủ đề Thường gặp

1. **Instance Types**: Biết families và use cases
2. **Pricing Models**: Khi nào sử dụng mỗi model
3. **Storage**: Các loại EBS và đặc điểm
4. **Security Groups**: Stateful, rules, best practices
5. **Placement Groups**: Các loại và use cases
6. **Auto Scaling**: Components và policies
7. **High Availability**: Multi-AZ, health checks
8. **Cost Optimization**: Chiến lược và tools

### Nhắc nhở Quan trọng

- **T2/T3**: Burstable, CPU credits
- **EBS**: Persistent, network-attached
- **Instance Store**: Ephemeral, local
- **Security Groups**: Stateful, instance level
- **Reserved Instances**: Tiết kiệm lên đến 72% (3 năm)
- **Spot Instances**: Tiết kiệm lên đến 90%, có thể bị gián đoạn
- **Multi-AZ**: Cho high availability
- **Auto Scaling**: Cho cost và availability

### Câu hỏi Dựa trên Kịch bản

**Các Kịch bản Thường gặp:**

- Chọn instance type cho workload
- Tối ưu hóa chi phí
- Yêu cầu high availability
- Vấn đề performance
- Yêu cầu security

**Cách tiếp cận:**

- Đọc kịch bản cẩn thận
- Xác định requirements
- Cân nhắc cost, performance, availability
- Chọn option tốt nhất

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [EC2 Instance Types](./instance-types.md) - Instance types
- [EC2 Best Practices](./best-practices.md) - Best practices
- [AWS Certification Exam Guides](../../../exam/index.md) - Chuẩn bị thi
