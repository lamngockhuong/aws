# Loại Instance EC2

EC2 cung cấp nhiều loại instance types được tối ưu hóa cho các use cases khác nhau. Hiểu về instance families và đặc điểm của chúng là rất quan trọng để chọn đúng compute resources cho workloads của bạn.

## Quy ước đặt tên Instance

Tên instance tuân theo pattern: `[instance family][generation].[size]`

- **Family**: Mục đích (ví dụ: `t` cho burstable, `m` cho general purpose)
- **Generation**: Thế hệ phần cứng (ví dụ: `3`, `4`, `5`, `6`)
- **Size**: Kích thước instance (ví dụ: `nano`, `small`, `large`, `xlarge`, `2xlarge`)

Ví dụ: `t3.micro`, `m5.large`, `c5.2xlarge`

## Instance Families

### General Purpose (M, T, Mac)

Cân bằng compute, memory và networking resources cho các workloads đa dạng.

#### M Family (General Purpose)

- **Use Cases**: Application servers, databases nhỏ đến trung bình, môi trường phát triển
- **Balance**: CPU, memory và network
- **Generations**: M5, M5a, M5ad, M5d, M5dn, M5n, M6i, M6id, M6a, M6in, M7i, M7a
- **Ví dụ**: `m5.large` - 2 vCPU, 8 GiB RAM

#### T Family (Burstable Performance)

- **Use Cases**: Web servers, môi trường phát triển, ứng dụng nhỏ
- **Baseline Performance**: Hệ thống CPU credits
- **Burst Capability**: Có thể burst vượt baseline
- **Generations**: T2, T3, T3a, T4g
- **Ví dụ**: `t3.micro` - 2 vCPU, 1 GiB RAM, burstable

#### Mac Instances

- **Use Cases**: Phát triển macOS, build iOS apps, workloads macOS
- **Types**: Mac1 (Intel), Mac2 (Apple Silicon M1)
- **Lưu ý**: Chỉ dedicated tenancy

### Compute Optimized (C)

Processors hiệu suất cao cho các workloads nặng về tính toán.

#### C Family

- **Use Cases**: Web servers hiệu suất cao, batch processing, scientific modeling, gaming servers
- **High CPU-to-Memory Ratio**: Nhiều sức mạnh CPU hơn mỗi GB RAM
- **Generations**: C5, C5a, C5ad, C5d, C5n, C6i, C6id, C6a, C6in, C7i, C7a
- **Ví dụ**: `c5.xlarge` - 4 vCPU, 8 GiB RAM

### Memory Optimized (R, X, High Memory)

Memory capacity lớn cho các ứng dụng nặng về memory.

#### R Family

- **Use Cases**: Databases hiệu suất cao, in-memory caches, real-time big data analytics
- **High Memory-to-CPU Ratio**: Nhiều RAM hơn mỗi vCPU
- **Generations**: R5, R5a, R5ad, R5d, R5dn, R5n, R6i, R6id, R6a, R6in, R7i, R7a
- **Ví dụ**: `r5.xlarge` - 4 vCPU, 32 GiB RAM

#### X Family (X1e, X2gd)

- **Use Cases**: SAP HANA, in-memory databases lớn
- **Very High Memory**: Lên đến 4 TB RAM
- **Ví dụ**: `x1e.32xlarge` - 128 vCPU, 3,904 GiB RAM

#### High Memory Instances

- **Use Cases**: SAP HANA, in-memory databases quy mô lớn
- **Memory**: 6 TB đến 24 TB
- **Ví dụ**: `u-6tb1.metal` - 448 vCPU, 6 TB RAM

### Storage Optimized (I, D, H)

Truy cập read/write tuần tự cao cho các datasets lớn.

#### I Family

- **Use Cases**: NoSQL databases, data warehousing, distributed file systems
- **High IOPS**: NVMe SSD instance store
- **Generations**: I3, I3en, I4i
- **Ví dụ**: `i3.xlarge` - 4 vCPU, 30.5 GiB RAM, 950 GB NVMe SSD

#### D Family

- **Use Cases**: Data warehousing, Hadoop/Spark clusters, log processing
- **Dense Storage**: HDD instance store
- **Generations**: D2, D3, D3en
- **Ví dụ**: `d3.xlarge` - 4 vCPU, 32 GiB RAM, 1.8 TB HDD

#### H Family

- **Use Cases**: Big data workloads, distributed file systems
- **High Throughput**: Được tối ưu hóa cho sequential I/O
- **Ví dụ**: `h1.2xlarge` - 8 vCPU, 32 GiB RAM, 2 TB HDD

### Accelerated Computing (P, G, Inf, Trn, DL)

Hardware accelerators (GPUs, FPGAs) cho các workloads chuyên biệt.

#### P Family (GPU - General Purpose)

- **Use Cases**: Machine learning training, high-performance computing, graphics rendering
- **GPU**: NVIDIA GPUs
- **Generations**: P3, P4, P5
- **Ví dụ**: `p3.2xlarge` - 8 vCPU, 61 GiB RAM, 1x NVIDIA V100 GPU

#### G Family (GPU - Graphics)

- **Use Cases**: Ứng dụng nặng về graphics, video encoding, 3D visualization
- **GPU**: NVIDIA GPUs được tối ưu hóa cho graphics
- **Generations**: G3, G4, G5
- **Ví dụ**: `g4dn.xlarge` - 4 vCPU, 16 GiB RAM, 1x NVIDIA T4 GPU

#### Inf Family (Inference)

- **Use Cases**: Machine learning inference, real-time predictions
- **GPU**: NVIDIA Inferentia chips
- **Ví dụ**: `inf1.xlarge` - 4 vCPU, 8 GiB RAM, 1x AWS Inferentia

#### Trn Family (Training)

- **Use Cases**: Deep learning training
- **GPU**: Trainium chips
- **Ví dụ**: `trn1.2xlarge` - 8 vCPU, 32 GiB RAM, 1x AWS Trainium

#### DL Family (Deep Learning)

- **Use Cases**: Deep learning AMIs, ML frameworks
- **Pre-configured**: Deep learning AMIs
- **Ví dụ**: `dl1.24xlarge` - 96 vCPU, 768 GiB RAM, 8x Gaudi accelerators

## Kích thước Instance

### Nano và Micro

- **t3.nano**: 2 vCPU, 0.5 GiB RAM
- **t3.micro**: 2 vCPU, 1 GiB RAM
- **Use Cases**: Development, testing, websites có traffic thấp

### Small và Medium

- **t3.small**: 2 vCPU, 2 GiB RAM
- **t3.medium**: 2 vCPU, 4 GiB RAM
- **Use Cases**: Ứng dụng nhỏ, môi trường phát triển

### Large

- **m5.large**: 2 vCPU, 8 GiB RAM
- **Use Cases**: Ứng dụng nhỏ đến trung bình, databases

### XLarge và 2XLarge

- **m5.xlarge**: 4 vCPU, 16 GiB RAM
- **m5.2xlarge**: 8 vCPU, 32 GiB RAM
- **Use Cases**: Ứng dụng trung bình đến lớn, databases

### 4XLarge và Lớn hơn

- **m5.4xlarge**: 16 vCPU, 64 GiB RAM
- **m5.8xlarge**: 32 vCPU, 128 GiB RAM
- **m5.16xlarge**: 64 vCPU, 256 GiB RAM
- **Use Cases**: Ứng dụng lớn, databases hiệu suất cao

### Metal Instances

- **Full server access**: Hiệu suất bare metal
- **Use Cases**: Ứng dụng cần truy cập phần cứng trực tiếp
- **Ví dụ**: `m5.metal` - 96 vCPU, 384 GiB RAM

## Thế hệ Instance

### Current Generation (Được khuyến nghị)

- **M6i/M6a/M6id**: General purpose mới nhất
- **C6i/C6a/C6id**: Compute optimized mới nhất
- **R6i/R6a/R6id**: Memory optimized mới nhất
- **M7i/M7a**: General purpose thế hệ tiếp theo
- **C7i/C7a**: Compute optimized thế hệ tiếp theo
- **R7i/R7a**: Memory optimized thế hệ tiếp theo

### Previous Generations

- **M5/C5/R5**: Vẫn được hỗ trợ, nhưng cũ hơn
- **M4/C4/R4**: Legacy, nên cân nhắc migration
- **T2**: Legacy burstable, nên migrate sang T3/T4g

## Tính năng đặc biệt

### Nitro System

Công nghệ ảo hóa hiện đại cung cấp:

- **Better Performance**: Overhead thấp hơn, hiệu suất cao hơn
- **Enhanced Security**: Hypervisor được cô lập
- **Faster Boot Times**: Khởi tạo được tối ưu hóa
- **Better Networking**: Khả năng networking được nâng cao

### Enhanced Networking

- **SR-IOV**: Single Root I/O Virtualization
- **Higher Bandwidth**: Lên đến 100 Gbps
- **Lower Latency**: Giảm jitter
- **Better PPS**: Nhiều packets mỗi giây hơn

### EBS-Optimized

- **Dedicated Bandwidth**: Hiệu suất EBS được đảm bảo
- **Consistent Performance**: Hiệu suất I/O có thể dự đoán được
- **Available on**: Hầu hết các instances thế hệ hiện tại

### Instance Store Volumes

- **Ephemeral Storage**: Block-level storage tạm thời
- **High Performance**: I/O rất nhanh
- **Data Lost on Stop**: Không persistent
- **Use Cases**: Cache, temporary files, scratch space

## Chọn đúng Instance Type

### Các yếu tố quyết định

1. **Workload Type**: CPU-intensive, memory-intensive, I/O-intensive
2. **Performance Requirements**: Baseline vs. burstable
3. **Cost Constraints**: Cân nhắc ngân sách
4. **Scalability Needs**: Horizontal vs. vertical scaling
5. **Special Requirements**: GPU, high memory, v.v.

### Hướng dẫn lựa chọn

- **Web Applications**: T3, M5, M6i
- **Databases**: R5, R6i, R7i (memory optimized)
- **High-Performance Computing**: C5, C6i, C7i
- **Big Data**: I3, D3, H1
- **Machine Learning**: P3, P4, G4, Inf1, Trn1
- **Development/Testing**: T3, T4g

## Cân nhắc về Chi phí

### On-Demand Pricing

- Thanh toán theo giờ/giây
- Không có cam kết trước
- Chi phí cao nhất mỗi giờ

### Reserved Instances

- Kỳ hạn 1 năm hoặc 3 năm
- Tiết kiệm lên đến 72%
- Workloads có thể dự đoán được

### Spot Instances

- Tiết kiệm lên đến 90%
- Có thể bị gián đoạn
- Workloads chịu lỗi

### Savings Plans

- Mô hình giá cả linh hoạt
- Tiết kiệm lên đến 72%
- Áp dụng trên các instance families

## Best Practices

1. **Start Small**: Bắt đầu với các instances nhỏ hơn và scale up
2. **Right-Size**: Khớp instance type với yêu cầu workload
3. **Use Current Generation**: Hiệu suất và tính năng tốt hơn
4. **Consider Burstable**: T3/T4g cho các workloads biến đổi
5. **Monitor Performance**: Sử dụng CloudWatch để theo dõi utilization
6. **Use Reserved Instances**: Cho các workloads có thể dự đoán được
7. **Test Before Committing**: Thử các instance types khác nhau
8. **Review Regularly**: Đánh giá lại các lựa chọn instance định kỳ

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [EC2 Cost Optimization](./cost-optimization.md) - Tối ưu hóa chi phí EC2
- [EC2 Best Practices](./best-practices.md) - Best practices EC2
