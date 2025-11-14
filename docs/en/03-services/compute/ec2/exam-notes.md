# EC2 Exam Notes

Key points about EC2 for AWS certification exams. This guide covers EC2 concepts commonly tested in AWS certification exams.

## Core Concepts

### Instance Types

**Instance Families:**

- **General Purpose (M, T)**: Balanced compute, memory, network
- **Compute Optimized (C)**: High CPU-to-memory ratio
- **Memory Optimized (R, X)**: High memory-to-CPU ratio
- **Storage Optimized (I, D, H)**: High I/O performance
- **Accelerated Computing (P, G)**: GPU instances

**Key Points:**

- T2/T3 are burstable (CPU credits)
- Current generation recommended (M6i, C6i, R6i)
- Metal instances = bare metal access
- Instance naming: `[family][generation].[size]`

### Pricing Models

**On-Demand:**

- Pay per hour/second
- No commitment
- Highest cost
- Use for: Variable workloads

**Reserved Instances:**

- 1-year: Up to 40% savings
- 3-year: Up to 72% savings
- Standard vs. Convertible
- Use for: Predictable workloads

**Spot Instances:**

- Up to 90% discount
- Can be interrupted (2-minute notice)
- Use for: Fault-tolerant workloads

**Savings Plans:**

- Up to 72% savings
- Flexible across instance families
- 1-year or 3-year commitment

### Instance Lifecycle

**States:**

- **Pending**: Launching
- **Running**: Active
- **Stopping**: Shutting down
- **Stopped**: Not running (EBS preserved)
- **Shutting-down**: Terminating
- **Terminated**: Deleted

**Key Points:**

- Instance store data lost on stop/terminate
- EBS data preserved on stop
- Cannot recover terminated instances
- Billing stops when terminated

## Storage

### EBS Volume Types

**gp3 (General Purpose SSD):**

- Baseline: 3,000 IOPS, 125 MB/s
- Max: 16,000 IOPS, 1,000 MB/s
- Use for: Most workloads

**io1/io2 (Provisioned IOPS SSD):**

- Max: 64,000 IOPS (io1), 256,000 IOPS (io2)
- Max: 1,000 MB/s throughput
- Multi-attach supported (io1/io2)
- Use for: Databases, high IOPS

**st1 (Throughput Optimized HDD):**

- Max: 500 MB/s, 500 IOPS
- Use for: Big data, sequential workloads

**sc1 (Cold HDD):**

- Max: 250 MB/s, 250 IOPS
- Use for: Infrequently accessed data

### Instance Store

**Characteristics:**

- Ephemeral (data lost on stop/terminate)
- High performance (local NVMe)
- Not all instance types
- Use for: Cache, temporary data

### Snapshots

**Features:**

- Incremental (only changed blocks)
- Encrypted if volume encrypted
- Can copy across regions
- Can share with other accounts
- Stored in S3

## Networking

### Security Groups

**Characteristics:**

- Stateful (return traffic allowed)
- Instance level
- Default: All inbound denied, all outbound allowed
- Multiple security groups per instance

**Rules:**

- Inbound: Control traffic to instance
- Outbound: Control traffic from instance
- Source: IP, CIDR, or security group

### Network Interfaces

**ENI (Elastic Network Interface):**

- Virtual network card
- Multiple ENIs per instance (up to 8)
- Elastic IPs attached to ENI
- Security groups applied at ENI level

### Enhanced Networking

**Benefits:**

- Higher bandwidth (up to 100 Gbps)
- Lower latency
- Better PPS (packets per second)
- SR-IOV technology

## Placement Groups

### Cluster Placement Group

- Low latency (same rack)
- High throughput (10 Gbps)
- Single AZ only
- Use for: HPC, tightly coupled workloads

### Spread Placement Group

- High availability (different hardware)
- Up to 7 instances per AZ
- Multiple AZs supported
- Use for: Critical applications

### Partition Placement Group

- Large scale (hundreds of instances)
- Up to 7 partitions per AZ
- Use for: Distributed systems (Hadoop, Cassandra)

## High Availability

### Multi-AZ Deployment

- Deploy across multiple Availability Zones
- Use Auto Scaling across AZs
- Use load balancers across AZs
- Design for AZ failure

### Auto Scaling

**Components:**

- Launch Template/Configuration
- Auto Scaling Group
- Scaling Policies
- Health Checks

**Scaling Policies:**

- Target Tracking: Maintain target metric
- Step Scaling: Scale by steps
- Simple Scaling: Simple scale up/down

## Security

### IAM Roles

- Use roles instead of access keys
- Temporary credentials
- Automatic rotation
- Attach to instances

### Encryption

**EBS Encryption:**

- Encrypt at rest
- Use KMS for key management
- Encrypted snapshots
- No performance impact

**Data in Transit:**

- Use HTTPS/TLS
- VPN for remote access
- Encrypt before transmission

## Monitoring

### CloudWatch Metrics

**Key Metrics:**

- `CPUUtilization`
- `NetworkIn`, `NetworkOut`
- `DiskReadOps`, `DiskWriteOps`
- `StatusCheckFailed_System`
- `StatusCheckFailed_Instance`

### Status Checks

**System Status:**

- Physical host issues
- Stop and start to move to new host

**Instance Status:**

- Software/network issues
- Troubleshoot application/configuration

## Cost Optimization

### Strategies

1. **Right-Size**: Match instance type to workload
2. **Reserved Instances**: For predictable workloads
3. **Spot Instances**: For fault-tolerant workloads
4. **Auto Scaling**: Scale based on demand
5. **Stop Unused**: Stop instances when not needed
6. **Delete Unused**: Delete unused resources

### Cost Monitoring

- Cost Explorer: Cost analysis
- AWS Budgets: Budget alerts
- Cost Allocation Tags: Track costs
- Reserved Instance Recommendations

## Exam Tips

### Common Topics

1. **Instance Types**: Know families and use cases
2. **Pricing Models**: When to use each model
3. **Storage**: EBS types and characteristics
4. **Security Groups**: Stateful, rules, best practices
5. **Placement Groups**: Types and use cases
6. **Auto Scaling**: Components and policies
7. **High Availability**: Multi-AZ, health checks
8. **Cost Optimization**: Strategies and tools

### Key Reminders

- **T2/T3**: Burstable, CPU credits
- **EBS**: Persistent, network-attached
- **Instance Store**: Ephemeral, local
- **Security Groups**: Stateful, instance level
- **Reserved Instances**: Up to 72% savings (3-year)
- **Spot Instances**: Up to 90% savings, can be interrupted
- **Multi-AZ**: For high availability
- **Auto Scaling**: For cost and availability

### Scenario-Based Questions

**Common Scenarios:**

- Choosing instance type for workload
- Optimizing costs
- High availability requirements
- Performance issues
- Security requirements

**Approach:**

- Read scenario carefully
- Identify requirements
- Consider cost, performance, availability
- Choose best option

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [EC2 Instance Types](./instance-types.md) - Instance types
- [EC2 Best Practices](./best-practices.md) - Best practices
- [AWS Certification Exam Guides](../../../07-exam/index.md) - Exam preparation
