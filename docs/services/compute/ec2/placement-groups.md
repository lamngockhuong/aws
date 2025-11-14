# EC2 Placement Groups

Placement groups are logical groupings of instances within a single Availability Zone that influence how instances are placed on underlying hardware. They help optimize for performance, availability, or both.

## Overview

Placement groups control the physical placement of instances relative to each other, which affects:

- **Network Performance**: Latency and throughput between instances
- **Availability**: Risk of correlated failures
- **Use Cases**: Different strategies for different workloads

## Placement Group Types

### Cluster Placement Group

**Characteristics:**

- **Low Latency**: Instances in same rack
- **High Throughput**: 10 Gbps network between instances
- **Single AZ**: All instances in same Availability Zone
- **Tight Coupling**: Optimized for tightly coupled workloads

**Use Cases:**

- High Performance Computing (HPC)
- Applications requiring low latency
- Tightly coupled workloads
- Applications that benefit from high network throughput

**Limitations:**

- **Single AZ**: Cannot span multiple AZs
- **Instance Types**: Some instance types not supported
- **Cannot Modify**: Cannot add instances from different instance types after creation
- **Risk**: Higher risk of correlated failures

**Best Practices:**

- Use for workloads that need low latency
- Ensure application can handle single AZ failure
- Use with compatible instance types
- Monitor for hardware issues

### Spread Placement Group

**Characteristics:**

- **High Availability**: Instances on different hardware
- **Isolation**: Reduces correlated failures
- **Multiple AZs**: Can span multiple Availability Zones
- **Maximum Isolation**: Each instance on distinct hardware

**Use Cases:**

- Critical applications requiring high availability
- Applications that cannot tolerate correlated failures
- Small clusters (up to 7 instances per AZ)
- Applications requiring maximum isolation

**Limitations:**

- **Instance Limit**: 7 instances per Availability Zone
- **Cannot Modify**: Cannot merge placement groups
- **Cost**: May require more instances for redundancy

**Best Practices:**

- Use for critical applications
- Distribute across multiple AZs
- Keep within instance limits
- Plan for capacity constraints

### Partition Placement Group

**Characteristics:**

- **Large Scale**: Up to 7 partitions per AZ
- **Isolation**: Instances in different partitions isolated
- **Scalability**: Hundreds of instances
- **Partition Awareness**: Applications can be partition-aware

**Use Cases:**

- Distributed systems (Hadoop, Cassandra, Kafka)
- Large-scale applications
- Applications requiring partition awareness
- Workloads needing both scale and isolation

**Partition Strategy:**

- **Partition 0**: First set of instances
- **Partition 1**: Second set of instances
- **Up to 7**: Maximum partitions per AZ
- **Isolation**: Instances in different partitions on different hardware

**Best Practices:**

- Use for distributed systems
- Design applications to be partition-aware
- Distribute across multiple AZs
- Plan partition strategy

## Choosing a Placement Group

### Decision Factors

1. **Latency Requirements**: Need low latency? → Cluster
2. **Availability Requirements**: Need high availability? → Spread
3. **Scale Requirements**: Need hundreds of instances? → Partition
4. **Workload Type**: Tightly coupled? → Cluster
5. **Failure Tolerance**: Can tolerate correlated failures? → Cluster

### Selection Guide

**Cluster Placement Group:**

- HPC workloads
- Low latency requirements
- High network throughput needs
- Can tolerate single AZ failure

**Spread Placement Group:**

- Critical applications
- Maximum availability needs
- Small clusters
- Cannot tolerate correlated failures

**Partition Placement Group:**

- Distributed systems
- Large-scale applications
- Partition-aware applications
- Need both scale and isolation

## Creating Placement Groups

### Prerequisites

- **Instance Types**: Some instance types not supported
- **Region**: Placement groups are region-specific
- **AZ Selection**: Choose appropriate AZ(s)

### Creation Steps

1. **Create Placement Group**: Via console, CLI, or API
2. **Choose Type**: Select cluster, spread, or partition
3. **Launch Instances**: Specify placement group during launch
4. **Verify Placement**: Check instance placement

### Limitations

- **Cannot Modify Type**: Cannot change after creation
- **Instance Type Restrictions**: Some types not supported
- **Cannot Merge**: Cannot combine placement groups
- **Region-Specific**: Cannot move between regions

## Network Performance

### Cluster Placement Group

**Performance:**

- **Latency**: < 1ms between instances
- **Throughput**: Up to 10 Gbps
- **Bandwidth**: Full instance network bandwidth
- **Jitter**: Low jitter

**Optimization:**

- Use enhanced networking
- Use compatible instance types
- Monitor network performance

### Spread Placement Group

**Performance:**

- **Latency**: Standard network latency
- **Throughput**: Standard network throughput
- **Isolation**: Network isolation between instances
- **Reliability**: Higher network reliability

### Partition Placement Group

**Performance:**

- **Within Partition**: Low latency within partition
- **Between Partitions**: Standard latency
- **Scalability**: Maintains performance at scale
- **Isolation**: Network isolation between partitions

## Best Practices

### General

1. **Plan Ahead**: Choose placement group type before launching
2. **Understand Limitations**: Know instance type restrictions
3. **Monitor Performance**: Track network and instance metrics
4. **Design for Failure**: Plan for placement group limitations

### Cluster Placement Groups

1. **Use Enhanced Networking**: Maximize performance
2. **Monitor Hardware**: Watch for hardware issues
3. **Plan for AZ Failure**: Design for single AZ failure
4. **Use Compatible Types**: Ensure instance type compatibility

### Spread Placement Groups

1. **Distribute Across AZs**: Maximize availability
2. **Stay Within Limits**: Monitor instance count
3. **Use for Critical Apps**: Only for high-availability needs
4. **Plan Capacity**: Account for instance limits

### Partition Placement Groups

1. **Design Partition-Aware**: Make applications partition-aware
2. **Distribute Evenly**: Balance instances across partitions
3. **Monitor Partitions**: Track partition health
4. **Scale Strategically**: Plan partition growth

## Troubleshooting

### Common Issues

**Cannot Launch in Placement Group:**

- Check instance type compatibility
- Verify placement group exists
- Check AZ availability
- Verify capacity

**Performance Issues:**

- Verify enhanced networking enabled
- Check instance type compatibility
- Monitor network metrics
- Review placement group configuration

**Availability Issues:**

- Review placement group type
- Check AZ distribution
- Monitor instance health
- Review failure scenarios

## Cost Considerations

### No Additional Cost

- Placement groups themselves are free
- No additional charges for using placement groups
- Standard instance pricing applies

### Cost Optimization

- **Right-Size Instances**: Match instance type to workload
- **Use Reserved Instances**: For predictable workloads
- **Optimize Network**: Use appropriate placement group type
- **Monitor Usage**: Track instance utilization

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [EC2 Networking](./networking.md) - EC2 networking
- [EC2 Best Practices](./best-practices.md) - EC2 best practices
