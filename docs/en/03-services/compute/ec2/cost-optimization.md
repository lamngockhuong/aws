# EC2 Cost Optimization

EC2 costs can be a significant portion of your AWS bill. This guide covers strategies and best practices for optimizing EC2 costs while maintaining performance and availability.

## Understanding EC2 Pricing

### Pricing Components

**Instance Costs:**

- **On-Demand**: Pay per hour/second
- **Reserved Instances**: Upfront payment + hourly rate
- **Spot Instances**: Discounted pricing (up to 90% off)
- **Savings Plans**: Flexible pricing model

**Additional Costs:**

- **EBS Volumes**: Storage and IOPS costs
- **Data Transfer**: Outbound data transfer charges
- **Elastic IPs**: Charges when not attached
- **Snapshots**: Storage costs for snapshots

### Pricing Models Comparison

| Model          | Savings   | Commitment | Flexibility | Use Case                 |
| -------------- | --------- | ---------- | ----------- | ------------------------ |
| On-Demand      | 0%        | None       | High        | Variable workloads       |
| Reserved (1yr) | Up to 40% | 1 year     | Low         | Predictable workloads    |
| Reserved (3yr) | Up to 72% | 3 years    | Low         | Long-term workloads      |
| Spot           | Up to 90% | None       | Low         | Fault-tolerant workloads |
| Savings Plans  | Up to 72% | 1-3 years  | Medium      | Flexible usage           |

## Instance Purchasing Strategies

### On-Demand Instances

**When to Use:**

- Variable or unpredictable workloads
- Short-term workloads
- Testing and development
- Applications that can't be interrupted

**Cost Optimization:**

- Use for baseline capacity
- Combine with Reserved Instances
- Use Auto Scaling to minimize usage
- Monitor and optimize usage

### Reserved Instances

**Types:**

- **Standard Reserved**: Can modify instance type
- **Convertible Reserved**: Can change instance family
- **Scheduled Reserved**: For specific time windows

**Payment Options:**

- **All Upfront**: Maximum savings
- **Partial Upfront**: Medium savings
- **No Upfront**: Lower savings, monthly payments

**Best Practices:**

- Analyze usage patterns first
- Start with 1-year terms
- Use Convertible for flexibility
- Monitor utilization

### Spot Instances

**Characteristics:**

- Up to 90% discount
- Can be interrupted with 2-minute notice
- Best for fault-tolerant workloads
- Not suitable for persistent workloads

**Use Cases:**

- Batch processing
- Data analysis
- CI/CD pipelines
- Testing environments
- Container workloads (ECS, EKS)

**Best Practices:**

- Use Spot Fleet for capacity
- Implement checkpointing
- Use multiple instance types
- Set appropriate bid prices

### Savings Plans

**Types:**

- **Compute Savings Plans**: Flexible across EC2, Lambda, Fargate
- **EC2 Instance Savings Plans**: Specific to EC2

**Benefits:**

- Flexible instance family and size
- Automatic application
- Up to 72% savings
- 1-year or 3-year terms

**Best Practices:**

- Analyze historical usage
- Start with Compute Savings Plans
- Monitor commitment utilization
- Adjust as needed

## Right-Sizing Instances

### Monitoring Utilization

**Key Metrics:**

- **CPU Utilization**: Average and peak
- **Memory Utilization**: Average and peak
- **Network Utilization**: Inbound and outbound
- **Disk I/O**: Read and write operations

**CloudWatch Metrics:**

- `CPUUtilization`
- `NetworkIn`, `NetworkOut`
- `DiskReadOps`, `DiskWriteOps`
- Custom application metrics

### Right-Sizing Process

1. **Collect Metrics**: 2-4 weeks of data
2. **Analyze Patterns**: Identify trends and peaks
3. **Identify Opportunities**: Over/under-provisioned instances
4. **Test Changes**: Validate in non-production
5. **Implement**: Make changes gradually
6. **Monitor**: Track impact of changes

### Instance Type Optimization

**Downsizing:**

- Reduce instance size if over-provisioned
- Use smaller instance types
- Consider burstable instances (T3, T4g)
- Monitor performance after changes

**Upsizing:**

- Increase size if consistently at capacity
- Consider performance impact
- Balance cost vs. performance
- Use Auto Scaling instead when possible

## Auto Scaling

### Benefits

**Cost Optimization:**

- Scale down during low demand
- Scale up during high demand
- Pay only for what you use
- Automatic capacity management

**High Availability:**

- Distribute across AZs
- Replace unhealthy instances
- Maintain desired capacity
- Handle traffic spikes

### Implementation

**Launch Templates:**

- Define instance configuration
- Use latest AMIs
- Configure security groups
- Set up IAM roles

**Scaling Policies:**

- **Target Tracking**: Maintain target metric
- **Step Scaling**: Scale by steps
- **Simple Scaling**: Simple scale up/down

**Best Practices:**

- Set appropriate min/max capacity
- Use multiple AZs
- Implement health checks
- Monitor scaling activities

## Storage Optimization

### EBS Volume Optimization

**Volume Type Selection:**

- Use gp3 for most workloads (better price/performance)
- Use io1/io2 only when needed
- Use st1/sc1 for sequential workloads
- Right-size volumes

**Snapshot Management:**

- Delete unused snapshots
- Use lifecycle policies
- Archive old snapshots to S3
- Monitor snapshot costs

**Volume Lifecycle:**

- Delete unused volumes
- Right-size volumes
- Use Elastic Volumes to modify
- Monitor volume utilization

### Instance Store

**When to Use:**

- Temporary data and cache
- High-performance workloads
- Data that can be regenerated
- Cost-sensitive applications

**Considerations:**

- Data lost on stop/terminate
- Not all instance types support
- Backup important data
- Use for performance, not persistence

## Data Transfer Optimization

### Minimize Data Transfer

**Strategies:**

- Use same region for communication
- Use VPC endpoints for AWS services
- Use CloudFront for content delivery
- Compress data before transfer

**Cost Optimization:**

- Minimize cross-region transfer
- Use private connectivity
- Cache content at edge
- Optimize application architecture

### VPC Endpoints

**Gateway Endpoints (Free):**

- S3 and DynamoDB
- No data transfer charges
- Use for private access

**Interface Endpoints:**

- Other AWS services
- Hourly and data transfer charges
- Use when cost-effective

## Lifecycle Management

### Stop Unused Instances

**Benefits:**

- No compute charges when stopped
- EBS volumes still charged
- Can restart when needed
- Preserve instance configuration

**Automation:**

- Use Lambda functions
- Schedule with EventBridge
- Use Systems Manager
- Implement policies

### Terminate Unnecessary Resources

**Review Regularly:**

- Unused instances
- Unattached EBS volumes
- Unused Elastic IPs
- Old snapshots

**Automation:**

- Tag resources for lifecycle
- Use Lambda for cleanup
- Set up alerts
- Regular reviews

## Cost Monitoring

### Cost Explorer

**Features:**

- View costs by service
- Filter by tags
- Forecast future costs
- Identify cost trends

**Best Practices:**

- Review regularly
- Set up cost budgets
- Tag resources properly
- Analyze trends

### Billing Alerts

**Setup:**

- Configure billing alerts
- Set thresholds
- Multiple alert levels
- Email notifications

**Monitoring:**

- Track spending trends
- Identify cost spikes
- Review alerts regularly
- Adjust budgets

### Cost Allocation Tags

**Tagging Strategy:**

- Environment (dev, staging, prod)
- Project or application
- Cost center
- Owner or team

**Benefits:**

- Track costs by tag
- Allocate costs properly
- Identify optimization opportunities
- Support chargeback

## Best Practices Summary

1. **Use Reserved Instances**: For predictable workloads
2. **Right-Size Instances**: Match instance type to workload
3. **Use Auto Scaling**: Scale based on demand
4. **Optimize Storage**: Right-size EBS volumes
5. **Use Spot Instances**: For fault-tolerant workloads
6. **Monitor Costs**: Regular cost reviews
7. **Tag Resources**: For cost allocation
8. **Automate Lifecycle**: Stop/terminate unused resources
9. **Optimize Data Transfer**: Minimize cross-region transfer
10. **Regular Reviews**: Continuous optimization

## Tools and Services

### AWS Cost Management Tools

- **Cost Explorer**: Cost analysis and forecasting
- **AWS Budgets**: Budget alerts and tracking
- **Cost Anomaly Detection**: Identify unusual spending
- **Reserved Instance Recommendations**: Optimization suggestions

### Third-Party Tools

- **CloudHealth**: Cost management and optimization
- **CloudCheckr**: Cost optimization and compliance
- **Spot.io**: Spot instance management
- **ParkMyCloud**: Schedule instance stop/start

## Related Documentation

- [EC2 Best Practices](./best-practices.md) - EC2 best practices
- [EC2 Instance Types](./instance-types.md) - Instance type selection
- [AWS Pricing & Billing](../../../02-fundamentals/pricing-billing.md) - AWS pricing overview
