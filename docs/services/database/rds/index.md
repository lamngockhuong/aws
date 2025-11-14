# Amazon RDS

Amazon Relational Database Service (RDS) is a managed relational database service that makes it easy to set up, operate, and scale databases in the cloud.

## Overview

RDS manages common database administration tasks such as provisioning, patching, backup, recovery, failure detection, and repair. It supports multiple database engines and provides high availability, automated backups, and scaling capabilities.

## Supported Database Engines

- **Amazon Aurora** (MySQL and PostgreSQL compatible)
- **PostgreSQL**
- **MySQL**
- **MariaDB**
- **Oracle**
- **SQL Server**

## Key Features

- **Fully Managed**: Automated backups, patching, and monitoring
- **High Availability**: Multi-AZ deployments for failover
- **Automated Backups**: Point-in-time recovery and automated snapshots
- **Scaling**: Vertical (instance size) and horizontal (read replicas) scaling
- **Security**: Encryption at rest and in transit, VPC isolation
- **Monitoring**: CloudWatch integration for metrics and alarms
- **Performance Insights**: Database performance monitoring and optimization

## Core Concepts

### DB Instances

A database instance is an isolated database environment in the cloud. Each instance runs a single database engine.

### DB Parameter Groups

Collections of engine configuration values that can be applied to one or more DB instances.

### DB Option Groups

Collections of optional features that can be enabled for a DB instance.

### Read Replicas

Read-only copies of your database instance that can be used for read scaling and disaster recovery.

### Multi-AZ Deployments

Synchronous replication to a standby instance in a different Availability Zone for high availability.

## Deployment Options

### Single-AZ

- One database instance in one Availability Zone
- Cost-effective for development and testing
- No automatic failover
- Suitable for non-critical workloads

### Multi-AZ

- Primary instance in one AZ, standby in another
- Automatic failover (typically 60-120 seconds)
- Synchronous replication
- Enhanced durability and availability

### Read Replicas

- Asynchronous replication
- Up to 15 read replicas per source
- Can be promoted to standalone instance
- Cross-region replication supported

## Storage Types

### General Purpose SSD (gp3)

- Baseline 3,000 IOPS, up to 16,000 IOPS
- 125 MB/s baseline throughput, up to 1,000 MB/s
- Suitable for most workloads
- Cost-effective

### Provisioned IOPS SSD (io1/io2)

- Up to 256,000 IOPS (io2)
- Up to 1,000 MB/s throughput
- Predictable performance
- I/O-intensive applications

### Magnetic Storage

- Legacy storage type
- Not recommended for new deployments
- Lower performance

## Backup and Recovery

### Automated Backups

- Daily automated backups during backup window
- Retention period: 0-35 days (default: 7 days)
- Point-in-time recovery within retention period
- Stored in S3 with encryption

### Manual Snapshots

- User-initiated backups
- Retained until explicitly deleted
- Can be copied to other regions
- Used for long-term retention

### Point-in-Time Recovery

- Restore to any second within backup retention period
- Creates new DB instance from backup
- Useful for accidental data deletion or corruption

## Security Features

- **Encryption at Rest**: AWS KMS integration
- **Encryption in Transit**: SSL/TLS connections
- **VPC Isolation**: Deploy in private subnets
- **Security Groups**: Network-level access control
- **IAM Database Authentication**: IAM users for database access
- **Network Isolation**: Private endpoints

## Performance Optimization

### Performance Insights

- Real-time database performance monitoring
- Identify bottlenecks and slow queries
- Retention up to 24 months
- No performance impact

### Enhanced Monitoring

- Real-time metrics at 1-second granularity
- 60+ CPU, memory, disk, and network metrics
- CloudWatch Logs integration

### Parameter Tuning

- Optimize database parameters
- Use parameter groups for customization
- Test changes in non-production first

## Use Cases

- **Web Applications**: Backend databases for web apps
- **Enterprise Applications**: Business-critical databases
- **Development/Testing**: Isolated database environments
- **Analytics**: Read replicas for reporting
- **Disaster Recovery**: Cross-region replication

## Best Practices

- Use Multi-AZ for production workloads
- Enable automated backups with appropriate retention
- Use read replicas for read-heavy workloads
- Monitor performance with Performance Insights
- Implement proper security groups and network isolation
- Use encryption for sensitive data
- Regular security patching
- Test backup and restore procedures
- Right-size instances based on workload
- Use parameter groups for optimization

## Cost Optimization

- Use Reserved Instances for predictable workloads
- Right-size instances to match actual usage
- Use read replicas instead of larger instances for read scaling
- Delete unused snapshots
- Use Aurora Serverless for variable workloads
- Monitor and optimize storage usage

## Related Services

- [Amazon Aurora](./aurora/index.md) - High-performance MySQL/PostgreSQL compatible
- [Amazon DynamoDB](./dynamodb/index.md) - NoSQL database
- [Amazon DocumentDB](./documentdb/index.md) - MongoDB compatible
