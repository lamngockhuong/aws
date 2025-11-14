# Amazon FSx

Amazon FSx provides fully managed third-party file systems with the native compatibility and feature sets of widely-used open source and commercial file systems.

## Overview

FSx makes it easy and cost-effective to launch, run, and scale feature-rich, high-performance file systems in the cloud. It supports multiple file system types optimized for different use cases.

## File System Types

### Amazon FSx for Windows File Server

Fully managed Windows file system built on Windows Server, providing shared storage for Windows-based applications.

### Amazon FSx for Lustre

High-performance file system optimized for fast processing of workloads such as machine learning, high performance computing, and media processing.

### Amazon FSx for NetApp ONTAP

Fully managed NetApp ONTAP file system with advanced data management capabilities.

### Amazon FSx for OpenZFS

Fully managed OpenZFS file system with snapshots, clones, and data compression.

## FSx for Windows File Server

### Key Features

- **SMB Protocol**: Native Windows file sharing
- **Active Directory Integration**: Full AD integration
- **VSS**: Volume Shadow Copy Service support
- **Deduplication**: Built-in data deduplication
- **Backup Integration**: Native backup to S3
- **Multi-AZ**: High availability deployments

### Use Cases

- **Windows Applications**: .NET applications, SQL Server
- **User Home Directories**: Windows user profiles
- **Content Management**: SharePoint, media files
- **Enterprise Applications**: Legacy Windows applications

### Performance

- **Throughput**: Up to 2 GB/s
- **IOPS**: Up to 200,000 IOPS
- **Latency**: Single-digit millisecond latency

## FSx for Lustre

### Key Features

- **High Performance**: Sub-millisecond latencies, hundreds of GB/s throughput
- **POSIX Compatible**: Standard POSIX file system interface
- **S3 Integration**: Direct data access from S3
- **Automatic Backups**: Backup to S3
- **Scratch and Persistent**: Two deployment types

### Use Cases

- **Machine Learning**: Training data, model storage
- **High Performance Computing**: Scientific computing, simulations
- **Media Processing**: Video processing, rendering
- **Financial Modeling**: Risk analysis, Monte Carlo simulations

### Deployment Types

#### Scratch File System

- Temporary storage for short-lived workloads
- Highest performance
- Data not replicated
- Lower cost

#### Persistent File System

- Long-term storage
- Data replicated within AZ
- Automatic backups
- Higher cost

### Performance

- **Throughput**: Up to hundreds of GB/s
- **IOPS**: Millions of IOPS
- **Latency**: Sub-millisecond

## FSx for NetApp ONTAP

### Key Features

- **Advanced Data Management**: Snapshots, clones, replication
- **Multi-Protocol**: NFS, SMB, iSCSI support
- **Storage Efficiency**: Deduplication, compression, thin provisioning
- **Multi-AZ**: High availability across AZs
- **Cloud Backup**: Backup to S3

### Use Cases

- **Enterprise Workloads**: Complex data management needs
- **Hybrid Cloud**: Integration with on-premises NetApp
- **Data Protection**: Advanced backup and recovery
- **Compliance**: Data governance and retention

## FSx for OpenZFS

### Key Features

- **Snapshots**: Point-in-time copies
- **Clones**: Instant writable copies
- **Compression**: Built-in data compression
- **Multi-Protocol**: NFS support
- **Automatic Backups**: Backup to S3

### Use Cases

- **Development/Testing**: Fast cloning for test environments
- **Backup and Recovery**: Snapshot-based backups
- **Content Repositories**: Media and content storage

## Security

### Encryption

- **Encryption at Rest**: AWS KMS integration
- **Encryption in Transit**: Supported for all file system types
- **Automatic**: Can enable encryption by default

### Access Control

- **Windows File Server**: Active Directory, NTFS permissions
- **Lustre**: POSIX permissions, IAM policies
- **NetApp ONTAP**: Multi-protocol access control
- **OpenZFS**: POSIX permissions, IAM policies

### Network Security

- **VPC Isolation**: Deploy in private subnets
- **Security Groups**: Control network access
- **Private Endpoints**: Access from on-premises

## Backup and Recovery

### Automated Backups

- Daily automated backups
- Retention: 7-90 days
- Stored in S3
- Point-in-time recovery

### Manual Backups

- User-initiated backups
- Retained until deleted
- Can be copied across regions

## Best Practices

- **Choose Right File System Type**: Match to workload requirements
- **Use Multi-AZ for Production**: High availability
- **Enable Encryption**: For sensitive data
- **Implement Proper Backup Strategy**: Automated backups
- **Monitor Performance**: Use CloudWatch metrics
- **Right-Size File Systems**: Match capacity to needs
- **Use Appropriate Deployment Type**: Scratch vs Persistent for Lustre
- **Implement Access Controls**: Security groups and permissions

## Cost Optimization

- Use Scratch file systems for temporary workloads (Lustre)
- Right-size file systems to match actual usage
- Delete unused backups
- Use appropriate storage type
- Monitor and optimize storage usage
- Use Reserved Capacity for predictable workloads

## Comparison

### FSx vs EFS

**FSx Advantages:**

- Higher performance (Lustre)
- Windows compatibility (Windows File Server)
- Advanced features (ONTAP, OpenZFS)

**EFS Advantages:**

- Lower cost
- Simpler management
- Better for general-purpose workloads

### FSx vs EBS

**FSx Advantages:**

- Shared access
- Managed service
- Advanced features

**EBS Advantages:**

- Lower cost
- Lower latency
- More control

## Related Services

- [Amazon EBS](../ebs/index.md) - Block storage
- [Amazon EFS](../efs/index.md) - Elastic file system
- [Amazon S3](../s3/index.md) - Object storage
