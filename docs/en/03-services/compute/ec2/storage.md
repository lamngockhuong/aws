# EC2 Storage Options

EC2 instances support multiple storage options, each optimized for different use cases. Understanding these options helps you choose the right storage for your workloads.

## Storage Types Overview

### EBS Volumes

- **Persistent**: Data survives instance termination
- **Network-Attached**: Attached over network
- **Flexible**: Can attach/detach volumes
- **Multiple Types**: gp3, io1, io2, st1, sc1

### Instance Store Volumes

- **Ephemeral**: Data lost on stop/terminate
- **Local**: Physically attached to host
- **High Performance**: Very fast I/O
- **Limited Availability**: Not all instance types

### EFS

- **Shared**: Multiple instances can access
- **Regional**: Accessible across AZs
- **Scalable**: Automatically scales
- **NFS Protocol**: Standard NFS interface

## EBS Volumes

### Volume Types

#### General Purpose SSD (gp3)

**Characteristics:**

- **Baseline IOPS**: 3,000 (configurable up to 16,000)
- **Baseline Throughput**: 125 MB/s (configurable up to 1,000 MB/s)
- **Size**: 1 GB to 16 TB
- **Use Cases**: Most workloads, boot volumes
- **Cost**: Most cost-effective SSD option

**When to Use:**

- General-purpose workloads
- Boot volumes
- Development and testing
- Most applications

#### Provisioned IOPS SSD (io1/io2)

**Characteristics:**

- **Maximum IOPS**: 64,000 (io1), 256,000 (io2)
- **Maximum Throughput**: 1,000 MB/s
- **Size**: 4 GB to 16 TB
- **Use Cases**: I/O-intensive applications, databases
- **Cost**: Higher cost, predictable performance

**When to Use:**

- Databases requiring high IOPS
- I/O-intensive applications
- Applications needing consistent performance
- Multi-attach requirements (io1/io2)

#### Throughput Optimized HDD (st1)

**Characteristics:**

- **Maximum Throughput**: 500 MB/s
- **Maximum IOPS**: 500
- **Size**: 125 GB to 16 TB
- **Use Cases**: Big data, data warehouses, log processing
- **Cost**: Lower cost per GB

**When to Use:**

- Sequential workloads
- Big data processing
- Log processing
- Data warehouses

#### Cold HDD (sc1)

**Characteristics:**

- **Maximum Throughput**: 250 MB/s
- **Maximum IOPS**: 250
- **Size**: 125 GB to 16 TB
- **Use Cases**: Less frequently accessed data
- **Cost**: Lowest cost per GB

**When to Use:**

- Infrequently accessed data
- Cost-sensitive workloads
- Backup storage
- Archive data

### EBS Features

#### Snapshots

**Features:**

- **Point-in-Time Backups**: Capture volume state
- **Incremental**: Only changed blocks stored
- **Encrypted**: Snapshots of encrypted volumes are encrypted
- **Copyable**: Can copy across regions
- **Shareable**: Can share with other accounts

**Use Cases:**

- Backup and recovery
- Disaster recovery
- Volume migration
- Compliance requirements

#### Elastic Volumes

**Capabilities:**

- **Resize**: Increase volume size
- **Change Type**: Modify volume type
- **Modify IOPS**: Adjust IOPS (io1/io2)
- **No Downtime**: Modify while in use

**Limitations:**

- Cannot decrease size
- Some changes require instance stop
- Performance impact during modification

#### Multi-Attach (io1/io2)

**Features:**

- **Multiple Instances**: Attach to up to 16 instances
- **Same AZ**: All instances must be in same AZ
- **Cluster-Aware FS**: Requires cluster file system
- **Concurrent Access**: All instances can read/write

**Use Cases:**

- Clustered applications
- High availability databases
- Concurrent write workloads

### EBS Best Practices

1. **Right-Size Volumes**: Match volume type to workload
2. **Use gp3**: For most workloads (better price/performance)
3. **Enable Encryption**: Encrypt sensitive data
4. **Regular Snapshots**: Implement automated backup strategy
5. **Monitor Performance**: Use CloudWatch metrics
6. **Delete Unused Snapshots**: Reduce storage costs
7. **Use Provisioned IOPS**: For databases requiring high IOPS

## Instance Store Volumes

### Characteristics

**Performance:**

- **Very Fast**: Local NVMe SSD
- **Low Latency**: Direct attached storage
- **High IOPS**: Millions of IOPS possible
- **High Throughput**: Up to 7,000 MB/s

**Limitations:**

- **Ephemeral**: Data lost on stop/terminate
- **Instance-Specific**: Tied to instance lifecycle
- **Limited Availability**: Not all instance types
- **Cannot Detach**: Cannot move between instances

### Use Cases

- **Cache**: Temporary cache storage
- **Scratch Space**: Temporary file processing
- **High-Performance Workloads**: When performance > persistence
- **Temporary Data**: Data that can be regenerated

### Best Practices

1. **Don't Store Critical Data**: Use for temporary data only
2. **Backup Important Data**: Copy to EBS or S3
3. **Use for Cache**: Leverage high performance
4. **Understand Lifecycle**: Data lost on stop/terminate

## EFS Integration

### Overview

- **Shared File System**: Multiple instances can mount
- **NFS Protocol**: Standard NFSv4.1
- **Regional**: Accessible across AZs
- **Scalable**: Automatically scales

### Use Cases

- **Shared Content**: Web content shared across instances
- **Application Data**: Shared application files
- **Home Directories**: User home directories
- **Container Storage**: Persistent storage for containers

### Performance Modes

- **General Purpose**: Low latency, most workloads
- **Max I/O**: Higher throughput, parallel workloads

### Throughput Modes

- **Bursting**: Scales with file system size
- **Provisioned**: Specify throughput independent of size

## Storage Configuration

### Root Volume

**Configuration:**

- **Size**: Default 8 GB (can increase)
- **Type**: Usually gp3 or gp2
- **Encryption**: Can enable encryption
- **Delete on Terminate**: Can configure

**Best Practices:**

- Increase size if needed
- Enable encryption
- Set delete on terminate appropriately

### Additional Volumes

**Attaching Volumes:**

- **Multiple Volumes**: Up to 40 volumes per instance
- **Total Storage**: Up to 300 TB per instance
- **Same AZ**: Volumes must be in same AZ as instance
- **Hot Swapping**: Can attach/detach while running

**Best Practices:**

- Separate data from OS
- Use appropriate volume types
- Implement backup strategy
- Monitor performance

## Performance Optimization

### IOPS Optimization

**For High IOPS:**

- Use io1/io2 volumes
- Provision sufficient IOPS
- Use multiple volumes in RAID
- Consider instance store for temporary data

### Throughput Optimization

**For High Throughput:**

- Use st1 volumes for sequential workloads
- Provision sufficient throughput (gp3)
- Use multiple volumes
- Consider EFS for shared access

### Latency Optimization

**For Low Latency:**

- Use SSD volumes (gp3, io1, io2)
- Use instance store for temporary data
- Place volumes in same AZ
- Use enhanced networking

## Backup and Recovery

### EBS Snapshots

**Automated Snapshots:**

- Use Data Lifecycle Manager
- Schedule-based backups
- Retention policies
- Cost-effective

**Manual Snapshots:**

- On-demand backups
- Before major changes
- Long-term retention
- Cross-region copies

### Recovery Procedures

1. **Create Snapshot**: Before making changes
2. **Copy Snapshot**: To other regions if needed
3. **Create Volume**: From snapshot
4. **Attach Volume**: To instance
5. **Mount Volume**: In operating system

## Cost Optimization

### Volume Type Selection

- **Use gp3**: For most workloads (better price/performance)
- **Use st1/sc1**: For appropriate sequential workloads
- **Right-Size**: Match volume size to actual usage

### Snapshot Management

- **Delete Unused Snapshots**: Reduce storage costs
- **Use Lifecycle Policies**: Automate snapshot management
- **Archive Old Snapshots**: Move to cheaper storage

### Monitoring

- **Track Usage**: Monitor volume utilization
- **Optimize Size**: Right-size volumes
- **Review Snapshots**: Regular cleanup

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [EBS Documentation](../../storage/ebs/index.md) - EBS details
- [EFS Documentation](../../storage/efs/index.md) - EFS details
