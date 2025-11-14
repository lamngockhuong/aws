# Database Service Comparison

AWS offers multiple database services, each optimized for different use cases. This guide helps you choose the right database service for your workload.

## Database Categories

### Relational Databases

**Services:**

- Amazon RDS (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server)
- Amazon Aurora (MySQL and PostgreSQL compatible)

**Characteristics:**

- ACID compliance
- SQL queries
- Structured data
- Vertical and horizontal scaling

### NoSQL Databases

**Services:**

- Amazon DynamoDB
- Amazon DocumentDB (MongoDB compatible)

**Characteristics:**

- Flexible schema
- High performance
- Horizontal scaling
- Eventual consistency (some)

### In-Memory Databases

**Services:**

- Amazon ElastiCache (Redis, Memcached)

**Characteristics:**

- Very fast (in-memory)
- Caching use cases
- Session storage
- Real-time analytics

## Service Comparison

### Amazon RDS

**Best For:**

- Traditional relational databases
- Applications requiring SQL
- Existing database migrations
- Multiple database engine options

**Features:**

- Managed service
- Automated backups
- Multi-AZ deployments
- Read replicas (up to 5)
- Automated patching

**Limitations:**

- Vertical scaling (instance size)
- Limited horizontal scaling
- Storage limits (up to 64 TB)
- Manual scaling

**Use Cases:**

- Web applications
- Enterprise applications
- Content management systems
- E-commerce platforms

### Amazon Aurora

**Best For:**

- High-performance applications
- MySQL/PostgreSQL workloads
- Applications needing high availability
- Large-scale applications

**Features:**

- Up to 5x MySQL, 3x PostgreSQL performance
- Auto-scaling storage (10 GB to 128 TB)
- Up to 15 read replicas
- Multi-Master support
- Serverless option
- Global Database

**Advantages over RDS:**

- Better performance
- More read replicas
- Auto-scaling storage
- Faster replication
- Backtrack feature

**Use Cases:**

- High-traffic web applications
- SaaS applications
- Enterprise databases
- Global applications

### Amazon DynamoDB

**Best For:**

- Serverless applications
- High-traffic applications
- NoSQL workloads
- Key-value and document data

**Features:**

- Fully managed
- Serverless
- Automatic scaling
- Single-digit millisecond latency
- Global Tables
- On-demand or provisioned capacity

**Data Models:**

- Key-value
- Document (JSON)

**Use Cases:**

- Web applications
- Gaming applications
- IoT applications
- Mobile backends
- Real-time applications

### Amazon DocumentDB

**Best For:**

- MongoDB workloads
- Document databases
- Existing MongoDB applications

**Features:**

- MongoDB compatible (3.6, 4.0, 5.0)
- Managed service
- High performance (2x MongoDB)
- Auto-scaling storage (10 GB to 64 TB)
- Up to 15 read replicas

**Use Cases:**

- Content management
- User profiles
- Catalogs
- IoT applications

### Amazon ElastiCache

**Best For:**

- Caching
- Session storage
- Real-time analytics
- High-performance reads

**Engines:**

- **Redis**: Advanced data structures, persistence
- **Memcached**: Simple key-value, multi-threaded

**Use Cases:**

- Application caching
- Session stores
- Real-time leaderboards
- Gaming applications

## Decision Matrix

### Choose RDS When

- Need traditional SQL database
- Want multiple engine options
- Have existing database to migrate
- Need specific database features
- Cost optimization for smaller workloads

### Choose Aurora When

- Need high performance
- Want auto-scaling storage
- Need many read replicas
- Want Global Database
- MySQL/PostgreSQL compatible

### Choose DynamoDB When

- Building serverless applications
- Need automatic scaling
- Want single-digit millisecond latency
- Have key-value or document data
- Need global replication

### Choose DocumentDB When

- Using MongoDB
- Need MongoDB compatibility
- Want managed MongoDB service
- Need high performance
- Have document data model

### Choose ElastiCache When

- Need caching layer
- Want in-memory performance
- Need session storage
- Want real-time analytics
- Need high-performance reads

## Performance Comparison

### Throughput

- **DynamoDB**: Millions of requests per second
- **Aurora**: High throughput, scales with replicas
- **RDS**: Depends on instance size
- **ElastiCache**: Very high (in-memory)

### Latency

- **ElastiCache**: Sub-millisecond (in-memory)
- **DynamoDB**: Single-digit milliseconds
- **Aurora**: Low latency, < 100ms replication
- **RDS**: Depends on instance and workload

### Scalability

- **DynamoDB**: Automatic, unlimited
- **Aurora**: Auto-scaling storage, many replicas
- **RDS**: Vertical scaling, limited horizontal
- **ElastiCache**: Cluster mode for scale

## Cost Considerations

### Pricing Models

**RDS:**

- Instance-based pricing
- Storage and IOPS costs
- Reserved Instances available

**Aurora:**

- Instance-based pricing
- Storage costs (auto-scaling)
- Serverless option (pay per ACU)

**DynamoDB:**

- On-demand: Pay per request
- Provisioned: Pay for capacity units
- Storage costs

**DocumentDB:**

- Instance-based pricing
- Storage costs
- Similar to RDS pricing

**ElastiCache:**

- Instance-based pricing
- Reserved Instances available

### Cost Optimization

- Use Reserved Instances for predictable workloads
- Right-size instances
- Use appropriate storage types
- Monitor and optimize usage
- Delete unused resources

## High Availability

### Multi-AZ Deployments

- **RDS**: Multi-AZ with automatic failover
- **Aurora**: Multi-AZ with 6 copies across 3 AZs
- **DynamoDB**: Built-in multi-AZ
- **DocumentDB**: Multi-AZ support
- **ElastiCache**: Multi-AZ clusters

### Backup and Recovery

- **RDS**: Automated backups, point-in-time recovery
- **Aurora**: Continuous backup, backtrack
- **DynamoDB**: Point-in-time recovery
- **DocumentDB**: Automated backups
- **ElastiCache**: Snapshot support (Redis)

## Security

### Encryption

- All services support encryption at rest
- All services support encryption in transit
- KMS integration for key management
- VPC isolation

### Access Control

- IAM integration
- VPC security groups
- Network isolation
- Database authentication

## Migration Considerations

### From On-Premises

- Use AWS DMS for migration
- Minimal downtime options
- Schema conversion support
- Continuous replication

### Between AWS Services

- Export/import tools
- DMS for RDS to Aurora
- Native tools for some services
- Consider downtime vs. continuous replication

## Best Practices

1. **Choose Right Service**: Match service to use case
2. **Design for Scale**: Plan for growth
3. **Implement HA**: Multi-AZ deployments
4. **Enable Backups**: Automated backup strategy
5. **Monitor Performance**: Use CloudWatch
6. **Optimize Costs**: Right-size and use Reserved Instances
7. **Secure Data**: Encryption and access control
8. **Plan Migrations**: Test and validate

## Related Documentation

- [Amazon RDS](./rds/index.md) - RDS details
- [Amazon Aurora](./aurora/index.md) - Aurora details
- [Amazon DynamoDB](./dynamodb/index.md) - DynamoDB details
- [Amazon DocumentDB](./documentdb/index.md) - DocumentDB details
