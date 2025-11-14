# Kiến thức cơ bản EC2

Hướng dẫn này bao gồm các kiến thức cơ bản về khởi chạy và quản lý Amazon EC2 instances, từ việc chọn cấu hình phù hợp đến kết nối với instances của bạn.

## Bắt đầu

### Yêu cầu

- AWS account với các quyền phù hợp
- Hiểu biết cơ bản về các khái niệm cloud computing
- Quen thuộc với các công cụ command-line (tùy chọn)

### Các bước đầu tiên

1. **Đăng nhập vào AWS Console**: Truy cập EC2 service
2. **Chọn một Region**: Chọn region gần người dùng của bạn nhất
3. **Launch một Instance**: Sử dụng Launch Instance wizard
4. **Kết nối với Instance**: Sử dụng SSH (Linux) hoặc RDP (Windows)

## Khởi chạy một Instance

### Bước 1: Chọn một AMI

**Amazon Machine Images (AMIs)** là các template chứa:

- Operating system (Linux, Windows, v.v.)
- Application server hoặc phần mềm
- Cài đặt cấu hình

**Các loại AMI:**

- **Amazon Linux AMI**: Được tối ưu hóa cho AWS
- **Ubuntu**: Distribution Linux phổ biến
- **Windows Server**: Microsoft Windows
- **Custom AMIs**: Các images được cấu hình của riêng bạn

### Bước 2: Chọn một Instance Type

Instance types xác định:

- **vCPU**: Số lượng virtual CPUs
- **Memory**: Lượng RAM
- **Storage**: Instance store volumes
- **Network Performance**: Network bandwidth

**Các Instance Families phổ biến:**

- **General Purpose**: Cân bằng compute, memory và networking
- **Compute Optimized**: Processors hiệu suất cao
- **Memory Optimized**: Memory lớn cho in-memory databases
- **Storage Optimized**: Truy cập tuần tự read/write cao
- **Accelerated Computing**: Hardware accelerators (GPUs, FPGAs)

### Bước 3: Cấu hình chi tiết Instance

**Các tùy chọn cấu hình chính:**

- **Number of Instances**: Khởi chạy một hoặc nhiều instances
- **Purchasing Options**: On-Demand, Reserved, Spot, Dedicated
- **Network**: Lựa chọn VPC và subnet
- **IAM Role**: Quyền cho instance
- **Shutdown Behavior**: Stop hoặc terminate
- **Monitoring**: Bật detailed monitoring

### Bước 4: Thêm Storage

**Các tùy chọn Storage:**

- **Root Volume**: Boot volume cho OS
- **Additional EBS Volumes**: Persistent block storage
- **Instance Store Volumes**: Ephemeral storage (một số instance types)

**Các loại Volume:**

- **gp3**: General purpose SSD (được khuyến nghị)
- **gp2**: General purpose SSD (legacy)
- **io1/io2**: Provisioned IOPS SSD
- **st1**: Throughput optimized HDD
- **sc1**: Cold HDD

### Bước 5: Thêm Tags

Tags giúp bạn:

- Tổ chức resources
- Theo dõi chi phí
- Quản lý resources bằng cách lập trình

**Các Tags phổ biến:**

- Name: Tên instance
- Environment: dev, staging, prod
- Project: Định danh dự án
- Owner: Team hoặc cá nhân

### Bước 6: Cấu hình Security Group

**Security Groups** là virtual firewalls kiểm soát:

- Inbound traffic (đến instance của bạn)
- Outbound traffic (từ instance của bạn)

**Best Practices:**

- Hạn chế SSH/RDP access đến IP của bạn
- Sử dụng nguyên tắc least privilege
- Tách security groups theo chức năng
- Ghi chép các quy tắc security group

### Bước 7: Xem xét và Khởi chạy

- Xem xét tất cả các cấu hình
- Chọn hoặc tạo một key pair
- Khởi chạy instance

## Kết nối với Instances

### Linux/Unix Instances

**Sử dụng SSH:**

```bash
ssh -i your-key.pem ec2-user@public-ip-address
```

**Các Users phổ biến:**

- Amazon Linux: `ec2-user`
- Ubuntu: `ubuntu`
- RHEL: `ec2-user` hoặc `root`
- SUSE: `ec2-user` hoặc `root`

### Windows Instances

**Sử dụng RDP:**

1. Lấy administrator password từ EC2 console
2. Tải file RDP
3. Kết nối bằng Remote Desktop

**Sử dụng EC2 Instance Connect:**

- Kết nối SSH qua trình duyệt
- Không cần quản lý keys
- Có sẵn cho Amazon Linux 2

## Quản lý Instance

### Starting và Stopping

- **Start**: Khởi chạy một instance đã dừng
- **Stop**: Tắt một cách an toàn (dữ liệu được giữ lại)
- **Reboot**: Khởi động lại mà không dừng
- **Terminate**: Xóa instance vĩnh viễn

### Monitoring

**CloudWatch Metrics:**

- CPU utilization
- Network in/out
- Disk read/write
- Status checks

**Status Checks:**

- **System Status**: Vấn đề về physical host
- **Instance Status**: Vấn đề về software/network

### Sửa đổi Instances

**Những gì có thể sửa đổi:**

- Instance type (dừng instance trước)
- Security groups
- EBS volumes (thêm/xóa)
- User data (trước lần khởi chạy đầu tiên)

**Những gì không thể sửa đổi:**

- AMI (phải khởi chạy instance mới)
- Placement group (sau khi khởi chạy)
- Tenancy (sau khi khởi chạy)

## Các tác vụ thường gặp

### Cài đặt phần mềm

**Amazon Linux:**

```bash
sudo yum update -y
sudo yum install -y package-name
```

**Ubuntu:**

```bash
sudo apt update
sudo apt install -y package-name
```

### Cấu hình Web Server

**Apache (Amazon Linux):**

```bash
sudo yum install -y httpd
sudo systemctl start httpd
sudo systemctl enable httpd
```

**Nginx (Ubuntu):**

```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Chuyển Files

**Sử dụng SCP:**

```bash
scp -i key.pem file.txt ec2-user@public-ip:/path/
```

**Sử dụng SFTP:**

```bash
sftp -i key.pem ec2-user@public-ip
```

## Security Best Practices

1. **Sử dụng Key Pairs**: Không bao giờ chia sẻ private keys
2. **Hạn chế Security Groups**: Chỉ cho phép các ports cần thiết
3. **Giữ Systems Updated**: Các bản vá bảo mật thường xuyên
4. **Sử dụng IAM Roles**: Thay vì access keys trên instances
5. **Bật CloudWatch Logs**: Giám sát system logs
6. **Sử dụng VPC**: Network isolation
7. **Mã hóa EBS Volumes**: Bảo vệ dữ liệu ở trạng thái nghỉ

## Cost Optimization

1. **Right-Size Instances**: Khớp instance type với workload
2. **Sử dụng Reserved Instances**: Cho các workloads có thể dự đoán được (tiết kiệm lên đến 72%)
3. **Sử dụng Spot Instances**: Cho các workloads chịu lỗi (tiết kiệm lên đến 90%)
4. **Dừng Instances không sử dụng**: Không trả tiền cho các instances đã dừng
5. **Sử dụng Auto Scaling**: Scale down trong thời gian nhu cầu thấp
6. **Giám sát Chi phí**: Sử dụng Cost Explorer và billing alerts

## Các bước tiếp theo

- [Instance Types](./instance-types.md) - Tìm hiểu về các instance types khác nhau
- [Networking](./networking.md) - Cấu hình networking EC2
- [Storage](./storage.md) - Hiểu các tùy chọn storage EC2
- [Best Practices](./best-practices.md) - Best practices EC2
