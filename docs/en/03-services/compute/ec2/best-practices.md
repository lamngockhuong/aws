# EC2 Best Practices

Following best practices helps ensure your EC2 instances are secure, performant, cost-effective, and reliable. This guide covers operational and architectural best practices for EC2.

## Security Best Practices

### IAM Roles

**Use IAM Roles Instead of Access Keys:**

- **No Credentials on Instances**: Roles provide temporary credentials
- **Automatic Rotation**: Credentials automatically rotated
- **Least Privilege**: Grant minimum permissions needed
- **Audit Trail**: All access logged in CloudTrail

**Implementation:**

- Create IAM role with necessary permissions
- Attach role to instance during launch or after
- Applications use instance metadata service
- No access keys stored on instances

### Security Groups

**Principle of Least Privilege:**

- Only allow necessary ports and protocols
- Restrict source IPs when possible
- Use security groups as sources
- Document security group rules

**Best Practices:**

- Separate security groups by function (web, app, DB)
- Use descriptive names and descriptions
- Regular security reviews
- Remove unused security group rules

### Network Security

**VPC Best Practices:**

- Use private subnets for application and database tiers
- Use public subnets only for load balancers and NAT
- Implement network ACLs for additional layer
- Enable VPC Flow Logs for monitoring

**Network Isolation:**

- Separate environments (dev, staging, prod)
- Use different VPCs or subnets
- Implement proper routing
- Use VPC endpoints for AWS services

### Encryption

**Data at Rest:**

- Enable EBS volume encryption
- Use KMS for key management
- Encrypt instance store data (if storing sensitive data)
- Encrypt snapshots

**Data in Transit:**

- Use HTTPS/TLS for all communications
- Use VPN for remote access
- Encrypt data before transmission
- Use secure protocols

### Patch Management

**Regular Updates:**

- Keep operating systems updated
- Apply security patches promptly
- Use Systems Manager Patch Manager
- Test patches in non-production first

**Automation:**

- Use Systems Manager for automated patching
- Schedule maintenance windows
- Monitor patch compliance
- Document patch procedures

## Performance Best Practices

### Instance Selection

**Right-Sizing:**

- Match instance type to workload requirements
- Monitor CloudWatch metrics
- Use current generation instances
- Consider burstable instances for variable workloads

**Instance Types:**

- Use general purpose (M) for balanced workloads
- Use compute optimized (C) for CPU-intensive
- Use memory optimized (R) for memory-intensive
- Use storage optimized (I, D) for I/O-intensive

### Enhanced Networking

**Enable Enhanced Networking:**

- Better network performance
- Lower latency
- Higher bandwidth
- Required for some instance types

**Implementation:**

- Use current generation instances
- Enable during instance launch
- Verify after launch
- Monitor network performance

### Storage Optimization

**EBS Volume Selection:**

- Use gp3 for most workloads
- Use io1/io2 for high IOPS requirements
- Use st1/sc1 for sequential workloads
- Right-size volumes

**Instance Store:**

- Use for temporary data and cache
- Don't store critical data
- Backup important data to EBS or S3
- Understand data lifecycle

### Monitoring

**CloudWatch Metrics:**

- Monitor CPU, memory, disk, network
- Set up alarms for thresholds
- Track performance trends
- Use custom metrics for applications

**Logging:**

- Enable CloudWatch Logs
- Centralize log collection
- Implement log retention policies
- Monitor for errors and anomalies

## Cost Optimization

### Instance Purchasing

**On-Demand Instances:**

- Pay per hour/second
- No upfront commitment
- Use for: Variable workloads, testing

**Reserved Instances:**

- 1-year or 3-year term
- Up to 72% savings
- Use for: Predictable workloads

**Spot Instances:**

- Up to 90% savings
- Can be interrupted
- Use for: Fault-tolerant workloads

**Savings Plans:**

- Flexible pricing model
- Up to 72% savings
- Applies across instance families

### Right-Sizing

**Monitor Utilization:**

- Track CPU, memory, network usage
- Identify over-provisioned instances
- Identify under-utilized instances
- Use CloudWatch metrics

**Optimization:**

- Downsize over-provisioned instances
- Consolidate under-utilized instances
- Use Auto Scaling for variable workloads
- Regular reviews

### Auto Scaling

**Benefits:**

- Scale up during high demand
- Scale down during low demand
- Cost optimization
- High availability

**Implementation:**

- Create launch templates
- Configure scaling policies
- Set up health checks
- Monitor scaling activities

### Lifecycle Management

**Stop Unused Instances:**

- Stop instances when not needed
- Don't pay for stopped instances (EBS still charged)
- Use scheduling for predictable patterns
- Automate with Lambda

## High Availability

### Multi-AZ Deployment

**Distribution:**

- Deploy instances across multiple AZs
- Use Auto Scaling across AZs
- Use load balancers across AZs
- Design for AZ failure

**Benefits:**

- Higher availability
- Reduced risk of correlated failures
- Better disaster recovery
- Improved performance (closer to users)

### Health Checks

**Instance Health:**

- Monitor system status checks
- Monitor instance status checks
- Set up CloudWatch alarms
- Automate recovery

**Application Health:**

- Implement application health checks
- Use load balancer health checks
- Monitor application metrics
- Set up automated remediation

### Backup and Recovery

**EBS Snapshots:**

- Regular automated snapshots
- Test restore procedures
- Cross-region snapshot copies
- Long-term retention

**AMI Management:**

- Create AMIs for golden images
- Version control AMIs
- Test AMI launches
- Document AMI contents

## Operational Excellence

### Tagging

**Consistent Tagging:**

- Use consistent tagging strategy
- Tag for cost allocation
- Tag for automation
- Tag for compliance

**Common Tags:**

- Name, Environment, Project
- Owner, Team, Cost Center
- Application, Service
- Compliance, Backup

### Automation

**Infrastructure as Code:**

- Use CloudFormation or Terraform
- Version control infrastructure
- Automated deployments
- Repeatable processes

**Configuration Management:**

- Use Systems Manager
- Use user data scripts
- Use configuration management tools
- Document configurations

### Documentation

**Instance Documentation:**

- Document instance purpose
- Document configurations
- Document dependencies
- Document runbooks

**Procedures:**

- Document launch procedures
- Document troubleshooting steps
- Document recovery procedures
- Keep documentation updated

## Monitoring and Alerting

### CloudWatch Setup

**Metrics:**

- Enable detailed monitoring
- Create custom metrics
- Set up dashboards
- Configure alarms

**Logs:**

- Enable CloudWatch Logs
- Centralize log collection
- Set up log retention
- Monitor for errors

### Alerting

**Critical Alarms:**

- Instance status check failures
- High CPU/memory usage
- Disk space issues
- Network problems

**Alerting Best Practices:**

- Set appropriate thresholds
- Avoid alert fatigue
- Route to appropriate channels
- Test alerting

## Disaster Recovery

### Backup Strategy

**EBS Snapshots:**

- Regular automated snapshots
- Point-in-time recovery
- Cross-region copies
- Test restore procedures

**AMI Backups:**

- Create AMIs regularly
- Store in multiple regions
- Version control
- Test AMI launches

### Recovery Procedures

**Documentation:**

- Document recovery procedures
- Test recovery regularly
- Update procedures
- Train team members

**Automation:**

- Automate recovery where possible
- Use Systems Manager
- Use Lambda functions
- Test automation

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [EC2 Cost Optimization](./cost-optimization.md) - Cost optimization
- [EC2 Troubleshooting](./troubleshooting.md) - Troubleshooting guide
