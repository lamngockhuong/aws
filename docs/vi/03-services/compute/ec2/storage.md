# Tùy chọn Storage EC2

EC2 instances hỗ trợ nhiều tùy chọn storage, mỗi loại được tối ưu hóa cho các use cases khác nhau. Hiểu về các tùy chọn này giúp bạn chọn đúng storage cho workloads của mình.

## Tổng quan các loại Storage

### EBS Volumes

- **Persistent**: Dữ liệu tồn tại sau khi instance bị terminate
- **Network-Attached**: Được gắn qua network
- **Flexible**: Có thể gắn/tháo volumes
- **Multiple Types**: gp3, io1, io2, st1, sc1

### Instance Store Volumes

- **Ephemeral**: Dữ liệu bị mất khi stop/terminate
- **Local**: Được gắn vật lý vào host
- **High Performance**: I/O rất nhanh
- **Limited Availability**: Không phải tất cả instance types

### EFS

- **Shared**: Nhiều instances có thể truy cập
- **Regional**: Có thể truy cập qua các AZs
- **Scalable**: Tự động scale
- **NFS Protocol**: Giao diện NFS chuẩn

## EBS Volumes

### Các loại Volume

#### General Purpose SSD (gp3)

**Đặc điểm:**

- **Baseline IOPS**: 3,000 (có thể cấu hình lên đến 16,000)
- **Baseline Throughput**: 125 MB/s (có thể cấu hình lên đến 1,000 MB/s)
- **Size**: 1 GB đến 16 TB
- **Use Cases**: Hầu hết workloads, boot volumes
- **Cost**: Tùy chọn SSD hiệu quả nhất về chi phí

**Khi nào sử dụng:**

- General-purpose workloads
- Boot volumes
- Development và testing
- Hầu hết applications

#### Provisioned IOPS SSD (io1/io2)

**Đặc điểm:**

- **Maximum IOPS**: 64,000 (io1), 256,000 (io2)
- **Maximum Throughput**: 1,000 MB/s
- **Size**: 4 GB đến 16 TB
- **Use Cases**: I/O-intensive applications, databases
- **Cost**: Chi phí cao hơn, hiệu suất có thể dự đoán được

**Khi nào sử dụng:**

- Databases yêu cầu IOPS cao
- I/O-intensive applications
- Applications cần hiệu suất nhất quán
- Yêu cầu multi-attach (io1/io2)

#### Throughput Optimized HDD (st1)

**Đặc điểm:**

- **Maximum Throughput**: 500 MB/s
- **Maximum IOPS**: 500
- **Size**: 125 GB đến 16 TB
- **Use Cases**: Big data, data warehouses, log processing
- **Cost**: Chi phí thấp hơn mỗi GB

**Khi nào sử dụng:**

- Sequential workloads
- Big data processing
- Log processing
- Data warehouses

#### Cold HDD (sc1)

**Đặc điểm:**

- **Maximum Throughput**: 250 MB/s
- **Maximum IOPS**: 250
- **Size**: 125 GB đến 16 TB
- **Use Cases**: Dữ liệu ít được truy cập thường xuyên
- **Cost**: Chi phí thấp nhất mỗi GB

**Khi nào sử dụng:**

- Dữ liệu ít được truy cập
- Workloads nhạy cảm về chi phí
- Backup storage
- Archive data

### Tính năng EBS

#### Snapshots

**Tính năng:**

- **Point-in-Time Backups**: Chụp trạng thái volume
- **Incremental**: Chỉ các blocks thay đổi được lưu trữ
- **Encrypted**: Snapshots của encrypted volumes được mã hóa
- **Copyable**: Có thể copy qua các regions
- **Shareable**: Có thể chia sẻ với các accounts khác

**Use Cases:**

- Backup và recovery
- Disaster recovery
- Volume migration
- Yêu cầu compliance

#### Elastic Volumes

**Khả năng:**

- **Resize**: Tăng kích thước volume
- **Change Type**: Sửa đổi loại volume
- **Modify IOPS**: Điều chỉnh IOPS (io1/io2)
- **No Downtime**: Sửa đổi khi đang sử dụng

**Hạn chế:**

- Không thể giảm kích thước
- Một số thay đổi yêu cầu dừng instance
- Ảnh hưởng hiệu suất trong quá trình sửa đổi

#### Multi-Attach (io1/io2)

**Tính năng:**

- **Multiple Instances**: Gắn lên đến 16 instances
- **Same AZ**: Tất cả instances phải ở cùng AZ
- **Cluster-Aware FS**: Yêu cầu cluster file system
- **Concurrent Access**: Tất cả instances có thể read/write

**Use Cases:**

- Clustered applications
- High availability databases
- Concurrent write workloads

### Best Practices EBS

1. **Right-Size Volumes**: Khớp loại volume với workload
2. **Use gp3**: Cho hầu hết workloads (giá/hiệu suất tốt hơn)
3. **Enable Encryption**: Mã hóa dữ liệu nhạy cảm
4. **Regular Snapshots**: Triển khai chiến lược backup tự động
5. **Monitor Performance**: Sử dụng CloudWatch metrics
6. **Delete Unused Snapshots**: Giảm chi phí storage
7. **Use Provisioned IOPS**: Cho databases yêu cầu IOPS cao

## Instance Store Volumes

### Đặc điểm

**Hiệu suất:**

- **Very Fast**: Local NVMe SSD
- **Low Latency**: Direct attached storage
- **High IOPS**: Có thể đạt hàng triệu IOPS
- **High Throughput**: Lên đến 7,000 MB/s

**Hạn chế:**

- **Ephemeral**: Dữ liệu bị mất khi stop/terminate
- **Instance-Specific**: Gắn với lifecycle của instance
- **Limited Availability**: Không phải tất cả instance types
- **Cannot Detach**: Không thể di chuyển giữa các instances

### Use Cases

- **Cache**: Temporary cache storage
- **Scratch Space**: Xử lý temporary files
- **High-Performance Workloads**: Khi hiệu suất > persistence
- **Temporary Data**: Dữ liệu có thể được tạo lại

### Best Practices

1. **Don't Store Critical Data**: Chỉ sử dụng cho temporary data
2. **Backup Important Data**: Copy sang EBS hoặc S3
3. **Use for Cache**: Tận dụng hiệu suất cao
4. **Understand Lifecycle**: Dữ liệu bị mất khi stop/terminate

## Tích hợp EFS

### Tổng quan

- **Shared File System**: Nhiều instances có thể mount
- **NFS Protocol**: NFSv4.1 chuẩn
- **Regional**: Có thể truy cập qua các AZs
- **Scalable**: Tự động scale

### Use Cases

- **Shared Content**: Web content được chia sẻ qua các instances
- **Application Data**: Application files được chia sẻ
- **Home Directories**: User home directories
- **Container Storage**: Persistent storage cho containers

### Performance Modes

- **General Purpose**: Low latency, hầu hết workloads
- **Max I/O**: Higher throughput, parallel workloads

### Throughput Modes

- **Bursting**: Scale với kích thước file system
- **Provisioned**: Chỉ định throughput độc lập với kích thước

## Cấu hình Storage

### Root Volume

**Cấu hình:**

- **Size**: Mặc định 8 GB (có thể tăng)
- **Type**: Thường là gp3 hoặc gp2
- **Encryption**: Có thể bật mã hóa
- **Delete on Terminate**: Có thể cấu hình

**Best Practices:**

- Tăng kích thước nếu cần
- Bật mã hóa
- Đặt delete on terminate phù hợp

### Additional Volumes

**Gắn Volumes:**

- **Multiple Volumes**: Lên đến 40 volumes mỗi instance
- **Total Storage**: Lên đến 300 TB mỗi instance
- **Same AZ**: Volumes phải ở cùng AZ với instance
- **Hot Swapping**: Có thể gắn/tháo khi đang chạy

**Best Practices:**

- Tách data khỏi OS
- Sử dụng các loại volume phù hợp
- Triển khai chiến lược backup
- Giám sát hiệu suất

## Tối ưu hóa Hiệu suất

### Tối ưu hóa IOPS

**Cho IOPS cao:**

- Sử dụng io1/io2 volumes
- Provision đủ IOPS
- Sử dụng nhiều volumes trong RAID
- Cân nhắc instance store cho temporary data

### Tối ưu hóa Throughput

**Cho Throughput cao:**

- Sử dụng st1 volumes cho sequential workloads
- Provision đủ throughput (gp3)
- Sử dụng nhiều volumes
- Cân nhắc EFS cho shared access

### Tối ưu hóa Latency

**Cho Latency thấp:**

- Sử dụng SSD volumes (gp3, io1, io2)
- Sử dụng instance store cho temporary data
- Đặt volumes ở cùng AZ
- Sử dụng enhanced networking

## Backup và Recovery

### EBS Snapshots

**Automated Snapshots:**

- Sử dụng Data Lifecycle Manager
- Backups dựa trên lịch trình
- Retention policies
- Hiệu quả về chi phí

**Manual Snapshots:**

- On-demand backups
- Trước các thay đổi lớn
- Long-term retention
- Cross-region copies

### Quy trình Recovery

1. **Create Snapshot**: Trước khi thực hiện thay đổi
2. **Copy Snapshot**: Sang các regions khác nếu cần
3. **Create Volume**: Từ snapshot
4. **Attach Volume**: Vào instance
5. **Mount Volume**: Trong operating system

## Tối ưu hóa Chi phí

### Lựa chọn Loại Volume

- **Use gp3**: Cho hầu hết workloads (giá/hiệu suất tốt hơn)
- **Use st1/sc1**: Cho sequential workloads phù hợp
- **Right-Size**: Khớp kích thước volume với usage thực tế

### Quản lý Snapshots

- **Delete Unused Snapshots**: Giảm chi phí storage
- **Use Lifecycle Policies**: Tự động hóa quản lý snapshots
- **Archive Old Snapshots**: Di chuyển sang storage rẻ hơn

### Giám sát

- **Track Usage**: Giám sát utilization của volumes
- **Optimize Size**: Right-size volumes
- **Review Snapshots**: Dọn dẹp định kỳ

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [EBS Documentation](../../storage/ebs/index.md) - Chi tiết EBS
- [EFS Documentation](../../storage/efs/index.md) - Chi tiết EFS
