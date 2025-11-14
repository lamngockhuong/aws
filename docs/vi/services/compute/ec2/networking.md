# Networking EC2

EC2 instances có khả năng networking rộng rãi cho phép bạn kiểm soát cách các instances của bạn giao tiếp với nhau, internet và các AWS services khác.

## Network Interfaces

### Elastic Network Interfaces (ENIs)

Virtual network cards được gắn vào EC2 instances.

**Đặc điểm:**

- **Primary ENI**: Được tạo tự động với instance
- **Secondary ENIs**: Có thể gắn nhiều ENIs (lên đến 8)
- **Elastic IPs**: Static public IP addresses
- **Security Groups**: Được áp dụng ở cấp ENI
- **MAC Addresses**: MAC duy nhất cho mỗi ENI

**Use Cases:**

- Nhiều IP addresses cho mỗi instance
- Network interface failover
- Quản lý network ở mức thấp

### Enhanced Networking

**Lợi ích:**

- **Higher Bandwidth**: Lên đến 100 Gbps
- **Lower Latency**: Giảm jitter
- **Better PPS**: Nhiều packets mỗi giây hơn
- **Consistent Performance**: Hiệu suất có thể dự đoán được hơn

**Công nghệ:**

- **SR-IOV**: Single Root I/O Virtualization
- **EFA**: Elastic Fabric Adapter (cho HPC/ML)

## IP Addressing

### Private IP Addresses

- **Automatic Assignment**: Từ subnet CIDR
- **Static Assignment**: Có thể chỉ định IPs cụ thể
- **Multiple IPs**: Nhiều private IPs cho mỗi ENI
- **VPC Scope**: Private trong VPC

### Public IP Addresses

- **Automatic Assignment**: Có thể bật khi khởi chạy
- **Dynamic**: Thay đổi khi stop/start
- **Elastic IP**: Static public IP
- **Internet Access**: Cần thiết cho internet connectivity

### Elastic IP Addresses

**Tính năng:**

- **Static Public IP**: Không thay đổi
- **Regional**: Gắn với region
- **Reassociation**: Có thể di chuyển giữa các instances
- **Charges**: Miễn phí khi được gắn, tính phí khi idle

**Best Practices:**

- Sử dụng cho các instances cần static public IPs
- Release các Elastic IPs không sử dụng để tránh phí
- Sử dụng với NAT Gateways cho outbound traffic

## Security Groups

### Tổng quan

Virtual firewalls stateful kiểm soát traffic ở cấp instance.

**Tính năng chính:**

- **Stateful**: Return traffic tự động được phép
- **Instance Level**: Được áp dụng cho instances
- **Default Deny**: Tất cả traffic bị từ chối theo mặc định
- **Multiple Groups**: Instance có thể có nhiều SGs

### Security Group Rules

**Inbound Rules:**

- Kiểm soát traffic đến instance
- Chỉ định source (IP, CIDR, security group)
- Chỉ định protocol và port
- Ví dụ: Cho phép SSH từ IP cụ thể

**Outbound Rules:**

- Kiểm soát traffic rời khỏi instance
- Chỉ định destination
- Mặc định: Tất cả outbound được phép
- Có thể hạn chế outbound traffic

### Best Practices

1. **Least Privilege**: Chỉ cho phép các ports cần thiết
2. **Use Security Groups as Source**: Tham chiếu các security groups khác
3. **Separate by Function**: Các SGs khác nhau cho web, app, DB tiers
4. **Document Rules**: Thêm mô tả cho các rules
5. **Regular Reviews**: Kiểm tra các rules security group định kỳ

## VPC Integration

### Subnets

**Public Subnets:**

- Route table bao gồm Internet Gateway
- Instances có thể có public IPs
- Truy cập internet trực tiếp
- Sử dụng cho: Load balancers, NAT gateways, bastion hosts

**Private Subnets:**

- Không có route đến Internet Gateway
- Instances không thể có public IPs
- Không có truy cập internet trực tiếp
- Sử dụng cho: Application servers, databases

### Route Tables

- **Control Traffic Flow**: Xác định nơi traffic được route
- **Subnet Association**: Mỗi subnet có một route table
- **Default Route**: Local VPC traffic
- **Internet Gateway Route**: Cho public subnets
- **NAT Gateway Route**: Cho private subnet outbound

### Internet Gateway

- **Internet Access**: Cung cấp internet connectivity
- **One per VPC**: Một IGW cho mỗi VPC
- **Highly Available**: Redundant và scalable
- **No Bandwidth Constraints**: Tự động scale

### NAT Gateway

- **Outbound Internet**: Cho các instances trong private subnet
- **Managed Service**: Được quản lý hoàn toàn bởi AWS
- **High Availability**: Triển khai trong mỗi AZ
- **Elastic IP Required**: Static IP cho outbound traffic

## Network Performance

### Bandwidth

**Instance-Specific:**

- Khác nhau theo instance type
- Enhanced networking tăng bandwidth
- Lên đến 100 Gbps trên một số instances

**Các yếu tố ảnh hưởng đến Bandwidth:**

- Instance type
- Enhanced networking được bật
- Cấu hình network interface

### Latency

**Các yếu tố:**

- Vị trí địa lý
- Instance type
- Enhanced networking
- Network path

**Tối ưu hóa:**

- Sử dụng cùng region/AZ cho low latency
- Bật enhanced networking
- Sử dụng placement groups cho low latency

## Placement Groups

### Cluster Placement Group

- **Low Latency**: Cùng rack, network tốc độ cao
- **High Throughput**: 10 Gbps giữa các instances
- **Use Cases**: HPC, tightly coupled workloads
- **Limitation**: Chỉ một AZ

### Spread Placement Group

- **High Availability**: Phần cứng khác nhau
- **Isolation**: Giảm correlated failures
- **Use Cases**: Ứng dụng quan trọng
- **Limitation**: 7 instances mỗi AZ

### Partition Placement Group

- **Large Scale**: Lên đến 7 partitions mỗi AZ
- **Isolation**: Instances trong các partitions khác nhau
- **Use Cases**: Distributed systems (Hadoop, Cassandra)
- **Scalability**: Hàng trăm instances

## Network Monitoring

### CloudWatch Metrics

**Các Metrics chính:**

- **NetworkIn**: Bytes nhận được
- **NetworkOut**: Bytes gửi đi
- **NetworkPacketsIn**: Packets nhận được
- **NetworkPacketsOut**: Packets gửi đi

**Monitoring:**

- Thiết lập alarms cho traffic bất thường
- Theo dõi bandwidth utilization
- Giám sát packet loss

### VPC Flow Logs

- **Capture IP Traffic**: Ghi log network flows
- **Troubleshooting**: Debug các vấn đề connectivity
- **Security Analysis**: Xác định traffic đáng ngờ
- **Destination**: CloudWatch Logs hoặc S3

## Network Troubleshooting

### Các vấn đề thường gặp

**Cannot Connect:**

- Kiểm tra security group rules
- Xác minh route tables
- Kiểm tra network ACLs
- Xác minh instance đang chạy

**High Latency:**

- Kiểm tra instance type
- Xác minh enhanced networking
- Kiểm tra khoảng cách địa lý
- Xem xét network path

**Bandwidth Issues:**

- Xác minh giới hạn instance type
- Kiểm tra trạng thái enhanced networking
- Xem xét cấu hình network interface

### Công cụ chẩn đoán

- **ping**: Kiểm tra connectivity
- **traceroute**: Theo dõi network path
- **netstat**: Xem network connections
- **CloudWatch**: Giám sát network metrics
- **VPC Flow Logs**: Phân tích network traffic

## Best Practices

1. **Use Private Subnets**: Cho application và database tiers
2. **Implement Security Groups**: Cơ chế bảo mật chính
3. **Enable Enhanced Networking**: Để có hiệu suất tốt hơn
4. **Use Elastic IPs Wisely**: Chỉ khi cần thiết
5. **Monitor Network Traffic**: Sử dụng CloudWatch và Flow Logs
6. **Use Placement Groups**: Cho các yêu cầu low-latency
7. **Implement Least Privilege**: Hạn chế security group rules
8. **Regular Security Reviews**: Kiểm tra cấu hình network

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [EC2 Placement Groups](./placement-groups.md) - Chiến lược đặt instance
- [VPC Documentation](../../networking/vpc/index.md) - Networking VPC
