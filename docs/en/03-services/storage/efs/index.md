# Amazon EFS

Amazon Elastic File System (EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources.

## Overview

EFS is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files. It provides the performance, throughput, and low latency needed for a wide range of workloads.

## Key Features

- **Fully Managed**: No file servers to manage
- **Elastic Scaling**: Automatically scales to petabytes
- **Shared Storage**: Multiple EC2 instances can access simultaneously
- **Regional**: Accessible across multiple Availability Zones
- **Performance Modes**: General Purpose and Max I/O
- **Throughput Modes**: Bursting and Provisioned
- **Lifecycle Management**: Automatic cost optimization
- **Encryption**: Encryption at rest and in transit

## Core Concepts

### File Systems

The primary resource in EFS. A file system is a regional resource that can be mounted on EC2 instances.

### Mount Targets

Network interfaces in your VPC subnets that allow EC2 instances to access your file system.

### Access Points

Application-specific entry points that enforce a root directory and POSIX user/group permissions.

### Performance Modes

- **General Purpose**: Low latency, suitable for most workloads
- **Max I/O**: Higher throughput, higher latency, for highly parallel workloads

### Throughput Modes

- **Bursting**: Throughput scales with file system size
- **Provisioned**: Specify throughput independent of size

## Performance Characteristics

### General Purpose Mode

- Low latency (< 1ms for most operations)
- Suitable for most applications
- Recommended for most use cases

### Max I/O Mode

- Higher throughput
- Higher latency
- For highly parallel applications
- Cannot be changed after creation

### Bursting Throughput

- Baseline: 50 MB/s per TB of data
- Burst: Up to 100 MB/s per TB
- Scales automatically with size

### Provisioned Throughput

- Specify throughput independent of size
- Up to 10 GB/s
- Useful for smaller file systems with high throughput needs

## Storage Classes

### Standard Storage

- Frequently accessed files
- Standard performance and durability
- Standard pricing

### Infrequent Access (EFS IA)

- Files not accessed every day
- 85% lower storage cost
- Per-GB retrieval fee
- Automatic lifecycle management

## Lifecycle Management

### Automatic Transitions

- Move files to EFS IA after 30 days of no access
- Move files back to Standard on access
- Automatic cost optimization
- Configurable policies

## Security

### Encryption at Rest

- **AWS KMS Integration**: Uses AWS KMS for key management
- **Automatic**: Can enable encryption by default
- **Performance**: No performance impact

### Encryption in Transit

- **TLS**: Encrypt data in transit
- **Mount Options**: Enable encryption when mounting
- **IAM Integration**: Control access with IAM policies

### Network Security

- **Security Groups**: Control network access
- **VPC Isolation**: Deploy in private subnets
- **Private Endpoints**: Access from on-premises via VPN/Direct Connect

## Access Patterns

### Network File System (NFS)

- Standard NFSv4.1 protocol
- Compatible with existing NFS clients
- POSIX-compliant file system semantics

### Access Points

- Application-specific entry points
- Enforce root directory
- POSIX user/group permissions
- IAM-based access control

## Use Cases

- **Content Management**: Shared content repositories
- **Web Serving**: Shared web content
- **Application Development**: Shared development environments
- **Data Analytics**: Shared data for analytics
- **Media Processing**: Shared media files
- **Container Storage**: Persistent storage for containers
- **Home Directories**: User home directories

## Best Practices

- **Choose Right Performance Mode**: General Purpose for most workloads
- **Use Access Points**: For application-specific access control
- **Enable Lifecycle Management**: Automatic cost optimization
- **Use EFS IA**: For infrequently accessed files
- **Monitor Performance**: Use CloudWatch metrics
- **Implement Proper Security**: Encryption and security groups
- **Use Provisioned Throughput**: For smaller file systems with high throughput
- **Mount in Multiple AZs**: For high availability
- **Use IAM for Access Control**: Fine-grained permissions

## Integration with AWS Services

- **EC2**: Mount on EC2 instances
- **ECS**: Persistent storage for containers
- **Lambda**: Access via EFS for Lambda functions
- **CloudWatch**: Monitoring and metrics
- **KMS**: Encryption key management
- **VPC**: Network isolation

## Cost Optimization

- Use EFS IA for infrequently accessed files
- Enable lifecycle management
- Use Bursting mode for variable workloads
- Use Provisioned mode only when needed
- Monitor and optimize file system size
- Delete unused file systems
- Use appropriate performance mode

## Limits

- **File System Size**: Unlimited (scales automatically)
- **File Size**: Up to 47.9 TB per file
- **Throughput**: Up to 10 GB/s (Provisioned mode)
- **IOPS**: Scales with file system size
- **Mount Targets**: One per Availability Zone

## Comparison with EBS

### EFS Advantages

- Shared access across multiple instances
- Regional (multi-AZ) availability
- Automatic scaling
- Pay for what you use

### EBS Advantages

- Lower latency
- Higher IOPS (with io1/io2)
- Lower cost for single-instance use
- More volume types

## Related Services

- [Amazon EBS](../ebs/index.md) - Block storage
- [Amazon FSx](../fsx/index.md) - Managed file systems
- [Amazon S3](../s3/index.md) - Object storage
