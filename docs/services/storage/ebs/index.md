# Amazon EBS

Amazon Elastic Block Store (EBS) provides persistent block storage volumes for use with Amazon EC2 instances.

## Overview

EBS volumes are network-attached storage that persist independently from the life of an instance. They provide high availability and durability, making them suitable for a wide variety of workloads.

## Key Features

- **Persistent Storage**: Data persists independently of instance life
- **High Performance**: Low-latency, high-throughput block storage
- **Multiple Volume Types**: Optimized for different use cases
- **Snapshots**: Point-in-time backups stored in S3
- **Encryption**: Built-in encryption at rest
- **Multi-Attach**: Attach volumes to multiple instances (io1/io2)
- **Elastic Volumes**: Modify volume size, type, and IOPS without downtime

## Volume Types

### General Purpose SSD (gp3)

- **Baseline Performance**: 3,000 IOPS, 125 MB/s
- **Maximum Performance**: 16,000 IOPS, 1,000 MB/s
- **Use Cases**: Most workloads, boot volumes
- **Cost**: Most cost-effective SSD option
- **Size**: 1 GB to 16 TB

### Provisioned IOPS SSD (io1/io2)

- **Maximum IOPS**: 64,000 IOPS (io1), 256,000 IOPS (io2)
- **Maximum Throughput**: 1,000 MB/s
- **Use Cases**: I/O-intensive applications, databases
- **Cost**: Higher cost, predictable performance
- **Size**: 4 GB to 16 TB
- **Multi-Attach**: Supported (io1/io2)

### Throughput Optimized HDD (st1)

- **Maximum Throughput**: 500 MB/s
- **Maximum IOPS**: 500
- **Use Cases**: Big data, data warehouses, log processing
- **Cost**: Lower cost per GB
- **Size**: 125 GB to 16 TB

### Cold HDD (sc1)

- **Maximum Throughput**: 250 MB/s
- **Maximum IOPS**: 250
- **Use Cases**: Less frequently accessed data
- **Cost**: Lowest cost per GB
- **Size**: 125 GB to 16 TB

### Magnetic (standard)

- **Maximum IOPS**: 40-200
- **Maximum Throughput**: 40-90 MB/s
- **Use Cases**: Legacy workloads
- **Cost**: Low cost
- **Note**: Legacy volume type, not recommended for new deployments

## Core Concepts

### Volumes

Block-level storage devices that can be attached to EC2 instances. Volumes are Availability Zone-specific.

### Snapshots

Point-in-time copies of EBS volumes stored in S3. Snapshots are incremental and region-specific.

### Volume Attachments

The association between an EBS volume and an EC2 instance. Volumes must be in the same AZ as the instance.

### Elastic Volumes

Ability to modify volume configuration (size, type, IOPS) without detaching or creating a new volume.

## Performance Characteristics

### IOPS (Input/Output Operations Per Second)

- Measures read/write operations per second
- Important for database and transactional workloads
- Can be provisioned independently (io1/io2)

### Throughput

- Measures data transfer rate (MB/s)
- Important for large file transfers and sequential workloads
- Depends on volume type and size

### Latency

- Time for a single I/O operation
- Lower latency = better performance
- SSD volumes have lower latency than HDD

## Snapshots

### Automated Snapshots

- Create snapshots on a schedule using Data Lifecycle Manager
- Automate backup and retention policies
- Cost-effective backup strategy

### Manual Snapshots

- User-initiated point-in-time backups
- Retained until explicitly deleted
- Can be shared across accounts and regions

### Snapshot Features

- **Incremental**: Only changed blocks are stored
- **Encrypted**: Snapshots of encrypted volumes are encrypted
- **Copyable**: Can copy snapshots across regions
- **Shareable**: Can share snapshots with other accounts

## Encryption

### Encryption at Rest

- **AWS KMS Integration**: Uses AWS KMS for key management
- **Automatic**: Can enable encryption by default
- **Performance**: No performance impact
- **Snapshots**: Encrypted volumes create encrypted snapshots

### Encryption in Transit

- Data encrypted when moving between instance and volume
- No additional configuration required
- Uses AWS encryption protocols

## Multi-Attach

### Supported Volume Types

- io1 and io2 volumes only
- Up to 16 instances per volume
- All instances must be in the same AZ

### Use Cases

- Clustered applications
- High availability applications
- Concurrent write workloads

### Considerations

- Requires cluster-aware file systems
- Applications must handle concurrent access
- Not suitable for all workloads

## Best Practices

- **Right-Size Volumes**: Match volume type to workload requirements
- **Use gp3 for Most Workloads**: Best balance of cost and performance
- **Enable Encryption**: Encrypt sensitive data at rest
- **Regular Snapshots**: Implement automated backup strategy
- **Monitor Performance**: Use CloudWatch to monitor volume metrics
- **Use Elastic Volumes**: Modify volumes without downtime
- **Delete Unused Snapshots**: Reduce storage costs
- **Use Provisioned IOPS for Databases**: For consistent performance
- **Implement Lifecycle Policies**: Automate snapshot management

## Use Cases

- **Boot Volumes**: Root volumes for EC2 instances
- **Databases**: High-performance database storage
- **Applications**: Application data and logs
- **Big Data**: Data processing and analytics
- **Backup Storage**: Snapshot-based backup solutions

## Cost Optimization

- Use gp3 instead of gp2 for better price/performance
- Right-size volumes to match actual usage
- Delete unused snapshots
- Use st1/sc1 for appropriate workloads
- Implement snapshot lifecycle policies
- Monitor and optimize unused volumes
- Use Reserved Capacity for predictable workloads

## Limits

- **Volume Size**: 1 GB to 16 TB (varies by type)
- **Volumes per Instance**: Up to 40 volumes
- **Total Storage per Instance**: Up to 300 TB
- **Snapshots**: Unlimited (charged for storage)
- **IOPS**: Up to 256,000 (io2)

## Related Services

- [Amazon EC2](../../compute/ec2/index.md) - Virtual servers
- [Amazon EFS](../efs/index.md) - Shared file storage
- [Amazon FSx](../fsx/index.md) - Managed file systems
- [Amazon S3](../s3/index.md) - Object storage
