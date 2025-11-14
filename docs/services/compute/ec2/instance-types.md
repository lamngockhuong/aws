# EC2 Instance Types

EC2 offers a wide variety of instance types optimized for different use cases. Understanding instance families and their characteristics is crucial for selecting the right compute resources for your workloads.

## Instance Naming Convention

Instance names follow this pattern: `[instance family][generation].[size]`

- **Family**: Purpose (e.g., `t` for burstable, `m` for general purpose)
- **Generation**: Hardware generation (e.g., `3`, `4`, `5`, `6`)
- **Size**: Instance size (e.g., `nano`, `small`, `large`, `xlarge`, `2xlarge`)

Examples: `t3.micro`, `m5.large`, `c5.2xlarge`

## Instance Families

### General Purpose (M, T, Mac)

Balanced compute, memory, and networking resources for diverse workloads.

#### M Family (General Purpose)

- **Use Cases**: Application servers, small to medium databases, development environments
- **Balance**: CPU, memory, and network
- **Generations**: M5, M5a, M5ad, M5d, M5dn, M5n, M6i, M6id, M6a, M6in, M7i, M7a
- **Example**: `m5.large` - 2 vCPU, 8 GiB RAM

#### T Family (Burstable Performance)

- **Use Cases**: Web servers, development environments, small applications
- **Baseline Performance**: CPU credits system
- **Burst Capability**: Can burst above baseline
- **Generations**: T2, T3, T3a, T4g
- **Example**: `t3.micro` - 2 vCPU, 1 GiB RAM, burstable

#### Mac Instances

- **Use Cases**: macOS development, iOS app builds, macOS workloads
- **Types**: Mac1 (Intel), Mac2 (Apple Silicon M1)
- **Note**: Dedicated tenancy only

### Compute Optimized (C)

High-performance processors for compute-intensive workloads.

#### C Family

- **Use Cases**: High-performance web servers, batch processing, scientific modeling, gaming servers
- **High CPU-to-Memory Ratio**: More CPU power per GB of RAM
- **Generations**: C5, C5a, C5ad, C5d, C5n, C6i, C6id, C6a, C6in, C7i, C7a
- **Example**: `c5.xlarge` - 4 vCPU, 8 GiB RAM

### Memory Optimized (R, X, High Memory)

Large memory capacity for memory-intensive applications.

#### R Family

- **Use Cases**: High-performance databases, in-memory caches, real-time big data analytics
- **High Memory-to-CPU Ratio**: More RAM per vCPU
- **Generations**: R5, R5a, R5ad, R5d, R5dn, R5n, R6i, R6id, R6a, R6in, R7i, R7a
- **Example**: `r5.xlarge` - 4 vCPU, 32 GiB RAM

#### X Family (X1e, X2gd)

- **Use Cases**: SAP HANA, large in-memory databases
- **Very High Memory**: Up to 4 TB RAM
- **Example**: `x1e.32xlarge` - 128 vCPU, 3,904 GiB RAM

#### High Memory Instances

- **Use Cases**: SAP HANA, large-scale in-memory databases
- **Memory**: 6 TB to 24 TB
- **Example**: `u-6tb1.metal` - 448 vCPU, 6 TB RAM

### Storage Optimized (I, D, H)

High, sequential read/write access to large datasets.

#### I Family

- **Use Cases**: NoSQL databases, data warehousing, distributed file systems
- **High IOPS**: NVMe SSD instance store
- **Generations**: I3, I3en, I4i
- **Example**: `i3.xlarge` - 4 vCPU, 30.5 GiB RAM, 950 GB NVMe SSD

#### D Family

- **Use Cases**: Data warehousing, Hadoop/Spark clusters, log processing
- **Dense Storage**: HDD instance store
- **Generations**: D2, D3, D3en
- **Example**: `d3.xlarge` - 4 vCPU, 32 GiB RAM, 1.8 TB HDD

#### H Family

- **Use Cases**: Big data workloads, distributed file systems
- **High Throughput**: Optimized for sequential I/O
- **Example**: `h1.2xlarge` - 8 vCPU, 32 GiB RAM, 2 TB HDD

### Accelerated Computing (P, G, Inf, Trn, DL)

Hardware accelerators (GPUs, FPGAs) for specialized workloads.

#### P Family (GPU - General Purpose)

- **Use Cases**: Machine learning training, high-performance computing, graphics rendering
- **GPU**: NVIDIA GPUs
- **Generations**: P3, P4, P5
- **Example**: `p3.2xlarge` - 8 vCPU, 61 GiB RAM, 1x NVIDIA V100 GPU

#### G Family (GPU - Graphics)

- **Use Cases**: Graphics-intensive applications, video encoding, 3D visualization
- **GPU**: NVIDIA GPUs optimized for graphics
- **Generations**: G3, G4, G5
- **Example**: `g4dn.xlarge` - 4 vCPU, 16 GiB RAM, 1x NVIDIA T4 GPU

#### Inf Family (Inference)

- **Use Cases**: Machine learning inference, real-time predictions
- **GPU**: NVIDIA Inferentia chips
- **Example**: `inf1.xlarge` - 4 vCPU, 8 GiB RAM, 1x AWS Inferentia

#### Trn Family (Training)

- **Use Cases**: Deep learning training
- **GPU**: Trainium chips
- **Example**: `trn1.2xlarge` - 8 vCPU, 32 GiB RAM, 1x AWS Trainium

#### DL Family (Deep Learning)

- **Use Cases**: Deep learning AMIs, ML frameworks
- **Pre-configured**: Deep learning AMIs
- **Example**: `dl1.24xlarge` - 96 vCPU, 768 GiB RAM, 8x Gaudi accelerators

## Instance Sizes

### Nano and Micro

- **t3.nano**: 2 vCPU, 0.5 GiB RAM
- **t3.micro**: 2 vCPU, 1 GiB RAM
- **Use Cases**: Development, testing, low-traffic websites

### Small and Medium

- **t3.small**: 2 vCPU, 2 GiB RAM
- **t3.medium**: 2 vCPU, 4 GiB RAM
- **Use Cases**: Small applications, development environments

### Large

- **m5.large**: 2 vCPU, 8 GiB RAM
- **Use Cases**: Small to medium applications, databases

### XLarge and 2XLarge

- **m5.xlarge**: 4 vCPU, 16 GiB RAM
- **m5.2xlarge**: 8 vCPU, 32 GiB RAM
- **Use Cases**: Medium to large applications, databases

### 4XLarge and Larger

- **m5.4xlarge**: 16 vCPU, 64 GiB RAM
- **m5.8xlarge**: 32 vCPU, 128 GiB RAM
- **m5.16xlarge**: 64 vCPU, 256 GiB RAM
- **Use Cases**: Large applications, high-performance databases

### Metal Instances

- **Full server access**: Bare metal performance
- **Use Cases**: Applications that need direct hardware access
- **Example**: `m5.metal` - 96 vCPU, 384 GiB RAM

## Instance Generations

### Current Generation (Recommended)

- **M6i/M6a/M6id**: Latest general purpose
- **C6i/C6a/C6id**: Latest compute optimized
- **R6i/R6a/R6id**: Latest memory optimized
- **M7i/M7a**: Next-gen general purpose
- **C7i/C7a**: Next-gen compute optimized
- **R7i/R7a**: Next-gen memory optimized

### Previous Generations

- **M5/C5/R5**: Still supported, but older
- **M4/C4/R4**: Legacy, consider migrating
- **T2**: Legacy burstable, migrate to T3/T4g

## Special Features

### Nitro System

Modern virtualization technology providing:

- **Better Performance**: Lower overhead, higher performance
- **Enhanced Security**: Isolated hypervisor
- **Faster Boot Times**: Optimized initialization
- **Better Networking**: Enhanced networking capabilities

### Enhanced Networking

- **SR-IOV**: Single Root I/O Virtualization
- **Higher Bandwidth**: Up to 100 Gbps
- **Lower Latency**: Reduced jitter
- **Better PPS**: Higher packets per second

### EBS-Optimized

- **Dedicated Bandwidth**: Guaranteed EBS performance
- **Consistent Performance**: Predictable I/O performance
- **Available on**: Most current-generation instances

### Instance Store Volumes

- **Ephemeral Storage**: Temporary block-level storage
- **High Performance**: Very fast I/O
- **Data Lost on Stop**: Not persistent
- **Use Cases**: Cache, temporary files, scratch space

## Choosing the Right Instance Type

### Decision Factors

1. **Workload Type**: CPU-intensive, memory-intensive, I/O-intensive
2. **Performance Requirements**: Baseline vs. burstable
3. **Cost Constraints**: Budget considerations
4. **Scalability Needs**: Horizontal vs. vertical scaling
5. **Special Requirements**: GPU, high memory, etc.

### Selection Guide

- **Web Applications**: T3, M5, M6i
- **Databases**: R5, R6i, R7i (memory optimized)
- **High-Performance Computing**: C5, C6i, C7i
- **Big Data**: I3, D3, H1
- **Machine Learning**: P3, P4, G4, Inf1, Trn1
- **Development/Testing**: T3, T4g

## Cost Considerations

### On-Demand Pricing

- Pay per hour/second
- No upfront commitment
- Highest cost per hour

### Reserved Instances

- 1-year or 3-year term
- Up to 72% savings
- Predictable workloads

### Spot Instances

- Up to 90% savings
- Can be interrupted
- Fault-tolerant workloads

### Savings Plans

- Flexible pricing model
- Up to 72% savings
- Applies across instance families

## Best Practices

1. **Start Small**: Begin with smaller instances and scale up
2. **Right-Size**: Match instance type to workload requirements
3. **Use Current Generation**: Better performance and features
4. **Consider Burstable**: T3/T4g for variable workloads
5. **Monitor Performance**: Use CloudWatch to track utilization
6. **Use Reserved Instances**: For predictable workloads
7. **Test Before Committing**: Try different instance types
8. **Review Regularly**: Re-evaluate instance choices periodically

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [EC2 Cost Optimization](./cost-optimization.md) - Optimize EC2 costs
- [EC2 Best Practices](./best-practices.md) - EC2 best practices
