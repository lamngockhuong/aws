# Placement Groups EC2

Placement groups là các nhóm logic của instances trong một Availability Zone duy nhất ảnh hưởng đến cách các instances được đặt trên phần cứng cơ bản. Chúng giúp tối ưu hóa cho hiệu suất, availability hoặc cả hai.

## Tổng quan

Placement groups kiểm soát vị trí vật lý của các instances so với nhau, điều này ảnh hưởng đến:

- **Network Performance**: Latency và throughput giữa các instances
- **Availability**: Rủi ro của correlated failures
- **Use Cases**: Các chiến lược khác nhau cho các workloads khác nhau

## Các loại Placement Group

### Cluster Placement Group

**Đặc điểm:**

- **Low Latency**: Instances trong cùng rack
- **High Throughput**: Network 10 Gbps giữa các instances
- **Single AZ**: Tất cả instances trong cùng Availability Zone
- **Tight Coupling**: Được tối ưu hóa cho tightly coupled workloads

**Use Cases:**

- High Performance Computing (HPC)
- Applications yêu cầu low latency
- Tightly coupled workloads
- Applications hưởng lợi từ high network throughput

**Hạn chế:**

- **Single AZ**: Không thể span nhiều AZs
- **Instance Types**: Một số instance types không được hỗ trợ
- **Cannot Modify**: Không thể thêm instances từ các instance types khác sau khi tạo
- **Risk**: Rủi ro cao hơn về correlated failures

**Best Practices:**

- Sử dụng cho workloads cần low latency
- Đảm bảo application có thể xử lý single AZ failure
- Sử dụng với các instance types tương thích
- Giám sát các vấn đề phần cứng

### Spread Placement Group

**Đặc điểm:**

- **High Availability**: Instances trên phần cứng khác nhau
- **Isolation**: Giảm correlated failures
- **Multiple AZs**: Có thể span nhiều Availability Zones
- **Maximum Isolation**: Mỗi instance trên phần cứng riêng biệt

**Use Cases:**

- Critical applications yêu cầu high availability
- Applications không thể chịu được correlated failures
- Small clusters (lên đến 7 instances mỗi AZ)
- Applications yêu cầu maximum isolation

**Hạn chế:**

- **Instance Limit**: 7 instances mỗi Availability Zone
- **Cannot Modify**: Không thể merge placement groups
- **Cost**: Có thể yêu cầu nhiều instances hơn cho redundancy

**Best Practices:**

- Sử dụng cho critical applications
- Phân phối qua nhiều AZs
- Giữ trong giới hạn instances
- Lập kế hoạch cho capacity constraints

### Partition Placement Group

**Đặc điểm:**

- **Large Scale**: Lên đến 7 partitions mỗi AZ
- **Isolation**: Instances trong các partitions khác nhau được cô lập
- **Scalability**: Hàng trăm instances
- **Partition Awareness**: Applications có thể là partition-aware

**Use Cases:**

- Distributed systems (Hadoop, Cassandra, Kafka)
- Large-scale applications
- Applications yêu cầu partition awareness
- Workloads cần cả scale và isolation

**Partition Strategy:**

- **Partition 0**: Tập hợp instances đầu tiên
- **Partition 1**: Tập hợp instances thứ hai
- **Up to 7**: Maximum partitions mỗi AZ
- **Isolation**: Instances trong các partitions khác nhau trên phần cứng khác nhau

**Best Practices:**

- Sử dụng cho distributed systems
- Thiết kế applications để partition-aware
- Phân phối qua nhiều AZs
- Lập kế hoạch partition strategy

## Chọn Placement Group

### Các yếu tố quyết định

1. **Latency Requirements**: Cần low latency? → Cluster
2. **Availability Requirements**: Cần high availability? → Spread
3. **Scale Requirements**: Cần hàng trăm instances? → Partition
4. **Workload Type**: Tightly coupled? → Cluster
5. **Failure Tolerance**: Có thể chịu được correlated failures? → Cluster

### Hướng dẫn lựa chọn

**Cluster Placement Group:**

- HPC workloads
- Yêu cầu low latency
- Nhu cầu high network throughput
- Có thể chịu được single AZ failure

**Spread Placement Group:**

- Critical applications
- Nhu cầu maximum availability
- Small clusters
- Không thể chịu được correlated failures

**Partition Placement Group:**

- Distributed systems
- Large-scale applications
- Partition-aware applications
- Cần cả scale và isolation

## Tạo Placement Groups

### Yêu cầu

- **Instance Types**: Một số instance types không được hỗ trợ
- **Region**: Placement groups là region-specific
- **AZ Selection**: Chọn AZ(s) phù hợp

### Các bước tạo

1. **Create Placement Group**: Qua console, CLI hoặc API
2. **Choose Type**: Chọn cluster, spread hoặc partition
3. **Launch Instances**: Chỉ định placement group khi khởi chạy
4. **Verify Placement**: Kiểm tra vị trí instance

### Hạn chế

- **Cannot Modify Type**: Không thể thay đổi sau khi tạo
- **Instance Type Restrictions**: Một số types không được hỗ trợ
- **Cannot Merge**: Không thể kết hợp placement groups
- **Region-Specific**: Không thể di chuyển giữa các regions

## Hiệu suất Network

### Cluster Placement Group

**Hiệu suất:**

- **Latency**: < 1ms giữa các instances
- **Throughput**: Lên đến 10 Gbps
- **Bandwidth**: Full instance network bandwidth
- **Jitter**: Low jitter

**Tối ưu hóa:**

- Sử dụng enhanced networking
- Sử dụng các instance types tương thích
- Giám sát network performance

### Spread Placement Group

**Hiệu suất:**

- **Latency**: Standard network latency
- **Throughput**: Standard network throughput
- **Isolation**: Network isolation giữa các instances
- **Reliability**: Network reliability cao hơn

### Partition Placement Group

**Hiệu suất:**

- **Within Partition**: Low latency trong partition
- **Between Partitions**: Standard latency
- **Scalability**: Duy trì hiệu suất ở quy mô
- **Isolation**: Network isolation giữa các partitions

## Best Practices

### Tổng quát

1. **Plan Ahead**: Chọn loại placement group trước khi khởi chạy
2. **Understand Limitations**: Biết các hạn chế instance type
3. **Monitor Performance**: Theo dõi network và instance metrics
4. **Design for Failure**: Lập kế hoạch cho các hạn chế placement group

### Cluster Placement Groups

1. **Use Enhanced Networking**: Tối đa hóa hiệu suất
2. **Monitor Hardware**: Theo dõi các vấn đề phần cứng
3. **Plan for AZ Failure**: Thiết kế cho single AZ failure
4. **Use Compatible Types**: Đảm bảo tương thích instance type

### Spread Placement Groups

1. **Distribute Across AZs**: Tối đa hóa availability
2. **Stay Within Limits**: Giám sát số lượng instances
3. **Use for Critical Apps**: Chỉ cho nhu cầu high-availability
4. **Plan Capacity**: Tính đến giới hạn instances

### Partition Placement Groups

1. **Design Partition-Aware**: Làm cho applications partition-aware
2. **Distribute Evenly**: Cân bằng instances qua các partitions
3. **Monitor Partitions**: Theo dõi health của partitions
4. **Scale Strategically**: Lập kế hoạch tăng trưởng partition

## Troubleshooting

### Các vấn đề thường gặp

**Cannot Launch in Placement Group:**

- Kiểm tra tương thích instance type
- Xác minh placement group tồn tại
- Kiểm tra AZ availability
- Xác minh capacity

**Performance Issues:**

- Xác minh enhanced networking được bật
- Kiểm tra tương thích instance type
- Giám sát network metrics
- Xem xét cấu hình placement group

**Availability Issues:**

- Xem xét loại placement group
- Kiểm tra phân phối AZ
- Giám sát instance health
- Xem xét các kịch bản failure

## Cân nhắc về Chi phí

### Không có Chi phí Bổ sung

- Placement groups tự thân là miễn phí
- Không có phí bổ sung cho việc sử dụng placement groups
- Giá instance tiêu chuẩn áp dụng

### Tối ưu hóa Chi phí

- **Right-Size Instances**: Khớp instance type với workload
- **Use Reserved Instances**: Cho các workloads có thể dự đoán được
- **Optimize Network**: Sử dụng loại placement group phù hợp
- **Monitor Usage**: Theo dõi utilization của instances

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [EC2 Networking](./networking.md) - Networking EC2
- [EC2 Best Practices](./best-practices.md) - Best practices EC2
