# Amazon DynamoDB

Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.

## Overview

DynamoDB is a serverless, key-value and document database that delivers single-digit millisecond performance at any scale. It's built for applications that need consistent, single-digit millisecond latency.

## Key Features

- **Serverless**: No servers to manage, automatic scaling
- **Fast Performance**: Single-digit millisecond latency
- **Scalable**: Handles millions of requests per second
- **Fully Managed**: Automatic backups, patching, and monitoring
- **Global Tables**: Multi-region, multi-active replication
- **Streams**: Real-time data capture and processing
- **On-Demand Mode**: Pay-per-request pricing
- **Point-in-Time Recovery**: Automatic backups with PITR

## Core Concepts

### Tables

Collections of items. Tables are schema-less except for the primary key.

### Items

Collection of attributes. Each item is uniquely identified by its primary key.

### Attributes

Name-value pairs. DynamoDB is schema-less, so items can have different attributes.

### Primary Key

Uniquely identifies each item in a table. Can be:

- **Partition Key**: Simple primary key
- **Partition Key + Sort Key**: Composite primary key

### Secondary Indexes

- **Global Secondary Index (GSI)**: Can have different partition and sort keys
- **Local Secondary Index (LSI)**: Same partition key, different sort key

## Data Models

### Key-Value

Simple key-value pairs, suitable for simple data structures.

### Document

Structured documents (JSON), supports nested data structures.

## Capacity Modes

### On-Demand

- Pay per request
- No capacity planning
- Automatic scaling
- Suitable for unpredictable workloads
- Higher cost per request

### Provisioned

- Specify read and write capacity units
- Cost-effective for predictable workloads
- Auto scaling available
- Reserved capacity options

## Access Patterns

### Query

Retrieve items by partition key (and optionally sort key). Very efficient.

### Scan

Examine every item in a table. Less efficient, use sparingly.

### GetItem

Retrieve a single item by its primary key. Most efficient for single items.

### Batch Operations

- BatchGetItem: Retrieve up to 100 items
- BatchWriteItem: Write up to 25 items

## Advanced Features

### DynamoDB Streams

- Time-ordered sequence of item-level changes
- Enables event-driven architectures
- Integrates with Lambda, Kinesis
- Real-time processing capabilities

### Global Tables

- Multi-region, multi-active replication
- Automatic conflict resolution
- Eventual consistency across regions
- Disaster recovery and low latency

### Transactions

- ACID transactions across multiple items
- All-or-nothing operations
- Up to 25 items or 4 MB
- Conditional writes and deletes

### TTL (Time To Live)

- Automatically delete items after expiration
- No additional cost
- Useful for session data, temporary records
- Background deletion process

## Security

- **Encryption at Rest**: AWS KMS integration
- **Encryption in Transit**: SSL/TLS connections
- **IAM Integration**: Fine-grained access control
- **VPC Endpoints**: Private connectivity
- **Point-in-Time Recovery**: Automatic backups

## Use Cases

- **Web Applications**: User sessions, shopping carts
- **Gaming**: Player data, leaderboards
- **IoT**: Device state, telemetry data
- **Mobile Apps**: User profiles, app data
- **Real-Time Applications**: Live leaderboards, chat
- **Content Management**: Metadata, content catalogs

## Best Practices

- **Design for Access Patterns**: Model data based on query patterns
- **Use Composite Keys**: Enable flexible querying
- **Avoid Scans**: Use queries and GSIs instead
- **Use GSIs Wisely**: Balance query flexibility with cost
- **Implement Exponential Backoff**: Handle throttling gracefully
- **Use Batch Operations**: Reduce round trips
- **Monitor Metrics**: Track consumed capacity and throttles
- **Use TTL**: Automatically clean up expired data
- **Enable Point-in-Time Recovery**: For critical data
- **Use Global Tables**: For multi-region applications

## Performance Optimization

- **Right-Size Capacity**: Match provisioned capacity to actual usage
- **Use On-Demand for Variable Workloads**: Automatic scaling
- **Optimize Item Size**: Smaller items = better performance
- **Use Projection Expressions**: Retrieve only needed attributes
- **Implement Caching**: Use DAX or ElastiCache
- **Monitor Throttling**: Adjust capacity or use on-demand
- **Use Parallel Scans**: For large table scans

## Cost Optimization

- Use on-demand for unpredictable workloads
- Use provisioned for predictable, steady workloads
- Right-size capacity units
- Use reserved capacity for long-term workloads
- Enable TTL to reduce storage costs
- Compress large items
- Use sparse indexes
- Monitor and optimize unused capacity

## Limits

- **Item Size**: 400 KB maximum
- **Table Size**: Unlimited
- **Throughput**: On-demand scales automatically
- **GSIs per Table**: 20 (soft limit, can be increased)
- **LSIs per Table**: 5
- **Attribute Values**: 400 KB per attribute value

## Related Services

- [Amazon RDS](../rds/index.md) - Relational databases
- [Amazon Aurora](../aurora/index.md) - High-performance relational database
- [Amazon DocumentDB](../documentdb/index.md) - MongoDB compatible
