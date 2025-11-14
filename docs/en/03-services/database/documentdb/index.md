# Amazon DocumentDB

Amazon DocumentDB is a fully managed document database service that is MongoDB-compatible and designed for mission-critical workloads.

## Overview

DocumentDB is built on the same distributed, fault-tolerant, self-healing storage system as Amazon Aurora. It provides the performance, availability, and scalability you need while maintaining MongoDB compatibility.

## Key Features

- **MongoDB Compatible**: Works with existing MongoDB applications and tools
- **High Performance**: 2x the throughput of MongoDB
- **Fully Managed**: Automated backups, patching, and monitoring
- **Scalable**: Auto-scaling storage from 10 GB to 64 TB
- **High Availability**: Multi-AZ deployments with automatic failover
- **Fast Replication**: Low-latency read replicas
- **Security**: Encryption at rest and in transit

## MongoDB Compatibility

- **API Compatibility**: MongoDB 3.6, 4.0, and 5.0 API compatibility
- **Drivers**: Works with existing MongoDB drivers
- **Tools**: Compatible with MongoDB tools (mongodump, mongorestore, etc.)
- **Applications**: Minimal code changes required

## Core Concepts

### Clusters

A DocumentDB cluster consists of:

- One primary instance
- Up to 15 read replica instances
- Cluster storage volume (shared across instances)

### Instances

Compute resources that run the database engine. Can be primary or replica instances.

### Parameter Groups

Collections of engine configuration values that can be applied to clusters.

### Subnet Groups

Collections of subnets in your VPC where DocumentDB clusters can be deployed.

## Architecture

### Storage Layer

- Distributed, self-healing storage across 3 AZs
- 6 copies of data across 3 AZs
- Automatic repair and recovery
- Auto-scaling from 10 GB to 64 TB

### Compute Layer

- Primary instance for read/write operations
- Read replicas for read scaling
- Independent scaling of compute and storage

## Deployment Options

### Single-AZ

- One instance in one Availability Zone
- Cost-effective for development and testing
- No automatic failover

### Multi-AZ

- Primary instance in one AZ, replica in another
- Automatic failover (typically 30-60 seconds)
- Enhanced durability and availability

### Read Replicas

- Up to 15 read replicas per cluster
- Asynchronous replication
- Can be in different regions
- Can be promoted to primary

## Backup and Recovery

### Automated Backups

- Continuous backup to S3
- Point-in-time recovery
- Retention: 1-35 days
- No performance impact

### Manual Snapshots

- User-initiated backups
- Retained until explicitly deleted
- Can be shared across accounts
- Can be copied to other regions

## Security

- **Encryption at Rest**: AWS KMS integration
- **Encryption in Transit**: SSL/TLS connections
- **Network Isolation**: VPC deployment
- **IAM Integration**: Fine-grained access control
- **Audit Logging**: Comprehensive audit logs

## Use Cases

- **Content Management**: Document storage and retrieval
- **Catalogs**: Product catalogs, content catalogs
- **User Profiles**: User data and preferences
- **IoT Applications**: Device data and telemetry
- **Mobile Applications**: Backend database for mobile apps
- **Real-Time Analytics**: Time-series data and analytics

## Migration from MongoDB

### Migration Options

1. **AWS Database Migration Service (DMS)**

   - Continuous data replication
   - Minimal downtime migration
   - Schema conversion support

2. **Native Tools**
   - mongodump and mongorestore
   - Works with existing MongoDB tools
   - Simple one-time migration

### Migration Considerations

- Review MongoDB features not supported in DocumentDB
- Test application compatibility
- Plan for network connectivity
- Consider downtime vs. continuous replication
- Test backup and restore procedures

## Best Practices

- Use Multi-AZ deployments for production
- Enable automated backups with appropriate retention
- Use read replicas for read scaling
- Monitor performance with CloudWatch
- Implement proper security groups and encryption
- Use parameter groups for optimization
- Right-size instances based on workload
- Test failover procedures
- Use connection pooling
- Monitor and optimize storage usage

## Performance Optimization

- Right-size instances to match workload
- Use read replicas for read-heavy workloads
- Optimize indexes for query patterns
- Use connection pooling
- Monitor CloudWatch metrics
- Use parameter groups for tuning
- Implement proper indexing strategy

## Cost Optimization

- Use Reserved Instances for predictable workloads
- Right-size instances to match actual usage
- Use read replicas instead of larger instances
- Delete unused snapshots
- Monitor and optimize storage usage
- Use appropriate instance types

## Limits

- **Cluster Storage**: 10 GB to 64 TB
- **Read Replicas**: Up to 15 per cluster
- **Instance Types**: db.r5, db.r6g, db.t3, db.t4g families
- **Backup Retention**: 1-35 days
- **Manual Snapshots**: Unlimited (until deleted)

## Related Services

- [Amazon RDS](../rds/index.md) - Relational databases
- [Amazon Aurora](../aurora/index.md) - High-performance relational database
- [Amazon DynamoDB](../dynamodb/index.md) - NoSQL database
