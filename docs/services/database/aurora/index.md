# Amazon Aurora

Amazon Aurora is a MySQL and PostgreSQL-compatible relational database engine that combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.

## Overview

Aurora is built for the cloud, with a distributed, fault-tolerant, self-healing storage system that auto-scales up to 128 TB per database instance. It provides up to 15 low-latency read replicas, point-in-time recovery, continuous backup to S3, and replication across three Availability Zones.

## Key Features

- **High Performance**: Up to 5x better performance than MySQL, 3x better than PostgreSQL
- **High Availability**: 99.99% availability, automatic failover
- **Auto Scaling Storage**: Automatically grows from 10 GB to 128 TB
- **Fast Replication**: Low-latency read replicas (typically < 100ms)
- **Backup and Recovery**: Continuous backup to S3, point-in-time recovery
- **Multi-Master**: Aurora Multi-Master for read/write scaling
- **Serverless**: Aurora Serverless for variable workloads
- **Global Database**: Cross-region replication with < 1 second replication lag

## Database Engines

### Aurora MySQL

- MySQL 5.7 and 8.0 compatible
- Up to 5x better performance than MySQL
- Compatible with MySQL applications and tools

### Aurora PostgreSQL

- PostgreSQL 11, 12, 13, 14, 15 compatible
- Up to 3x better performance than PostgreSQL
- Compatible with PostgreSQL applications and tools

## Architecture

### Storage Layer

- Distributed, self-healing storage across 3 AZs
- 6 copies of data across 3 AZs
- Automatic repair and recovery
- No I/O freezing during backup

### Compute Layer

- DB instances (primary and replicas)
- Independent scaling of compute and storage
- Fast failover (typically < 30 seconds)

## Deployment Options

### Single-Master

- One primary instance, multiple read replicas
- Read replicas can be promoted to primary
- Suitable for most workloads

### Multi-Master

- Multiple read/write instances
- Automatic conflict detection and resolution
- Suitable for applications with high write traffic
- All instances can accept writes

### Serverless

- Automatically starts, scales, and shuts down
- Pay per ACU (Aurora Capacity Unit) second
- Suitable for variable or unpredictable workloads
- No capacity planning required

## Read Replicas

- Up to 15 read replicas per cluster
- Low-latency replication (typically < 100ms)
- Can be in different regions
- Automatic failover support
- Can be promoted to standalone cluster

## Global Database

- Cross-region replication
- Up to 16 secondary regions
- < 1 second replication lag
- Automatic failover to secondary region
- Useful for disaster recovery and low latency

## Backup and Recovery

### Automated Backups

- Continuous backup to S3
- Point-in-time recovery to any second
- Retention: 1-35 days
- No performance impact

### Manual Snapshots

- User-initiated backups
- Retained until explicitly deleted
- Can be shared across accounts
- Can be copied to other regions

### Backtrack

- Rewind database to any point in time
- No need to restore from backup
- Available for up to 72 hours
- Useful for testing and recovery

## Performance Features

### Performance Insights

- Real-time database performance monitoring
- Identify bottlenecks and slow queries
- Retention up to 24 months

### Query Plan Management

- Pin optimal query plans
- Prevent plan regressions
- Automatic plan evolution

### Parallel Query

- Parallel execution of analytical queries
- Faster complex queries
- Automatic parallelization

## Security

- **Encryption at Rest**: AWS KMS integration
- **Encryption in Transit**: SSL/TLS connections
- **Network Isolation**: VPC deployment
- **IAM Database Authentication**: IAM users for database access
- **Audit Logging**: Comprehensive audit logs

## Use Cases

- **Enterprise Applications**: High-performance database needs
- **Web Applications**: Scalable backend databases
- **SaaS Applications**: Multi-tenant databases
- **Analytics**: Fast analytical queries with parallel query
- **Global Applications**: Low-latency access with Global Database

## Best Practices

- Use Multi-AZ deployments for high availability
- Enable automated backups with appropriate retention
- Use read replicas for read scaling
- Monitor performance with Performance Insights
- Use Aurora Serverless for variable workloads
- Implement proper security groups and encryption
- Use Global Database for multi-region applications
- Right-size instances based on workload
- Enable backtrack for critical databases
- Use parallel query for analytical workloads

## Cost Optimization

- Use Reserved Instances for predictable workloads
- Use Aurora Serverless for variable workloads
- Right-size instances to match actual usage
- Use read replicas instead of larger instances
- Delete unused snapshots
- Monitor and optimize storage usage
- Use Global Database only when needed

## Comparison with RDS

### Advantages

- Better performance (up to 5x MySQL, 3x PostgreSQL)
- Auto-scaling storage (10 GB to 128 TB)
- Faster replication (< 100ms vs seconds)
- More read replicas (15 vs 5)
- Backtrack feature
- Global Database for multi-region

### When to Choose RDS

- Need specific MySQL/PostgreSQL versions not in Aurora
- Cost optimization for smaller workloads
- Don't need Aurora-specific features

## Related Services

- [Amazon RDS](../rds/index.md) - Managed relational databases
- [Amazon DynamoDB](../dynamodb/index.md) - NoSQL database
- [Amazon DocumentDB](../documentdb/index.md) - MongoDB compatible
