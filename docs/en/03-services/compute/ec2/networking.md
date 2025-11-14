# EC2 Networking

EC2 instances have extensive networking capabilities that allow you to control how your instances communicate with each other, the internet, and other AWS services.

## Network Interfaces

### Elastic Network Interfaces (ENIs)

Virtual network cards attached to EC2 instances.

**Characteristics:**

- **Primary ENI**: Created automatically with instance
- **Secondary ENIs**: Can attach multiple ENIs (up to 8)
- **Elastic IPs**: Static public IP addresses
- **Security Groups**: Applied at ENI level
- **MAC Addresses**: Unique MAC per ENI

**Use Cases:**

- Multiple IP addresses per instance
- Network interface failover
- Low-level network management

### Enhanced Networking

**Benefits:**

- **Higher Bandwidth**: Up to 100 Gbps
- **Lower Latency**: Reduced jitter
- **Better PPS**: Higher packets per second
- **Consistent Performance**: More predictable

**Technologies:**

- **SR-IOV**: Single Root I/O Virtualization
- **EFA**: Elastic Fabric Adapter (for HPC/ML)

## IP Addressing

### Private IP Addresses

- **Automatic Assignment**: From subnet CIDR
- **Static Assignment**: Can assign specific IPs
- **Multiple IPs**: Multiple private IPs per ENI
- **VPC Scope**: Private to VPC

### Public IP Addresses

- **Automatic Assignment**: Can enable on launch
- **Dynamic**: Changes on stop/start
- **Elastic IP**: Static public IP
- **Internet Access**: Required for internet connectivity

### Elastic IP Addresses

**Features:**

- **Static Public IP**: Doesn't change
- **Regional**: Tied to region
- **Reassociation**: Can move between instances
- **Charges**: Free when attached, charged when idle

**Best Practices:**

- Use for instances that need static public IPs
- Release unused Elastic IPs to avoid charges
- Use with NAT Gateways for outbound traffic

## Security Groups

### Overview

Stateful virtual firewalls that control traffic at instance level.

**Key Features:**

- **Stateful**: Return traffic automatically allowed
- **Instance Level**: Applied to instances
- **Default Deny**: All traffic denied by default
- **Multiple Groups**: Instance can have multiple SGs

### Security Group Rules

**Inbound Rules:**

- Control traffic coming to instance
- Specify source (IP, CIDR, security group)
- Specify protocol and port
- Example: Allow SSH from specific IP

**Outbound Rules:**

- Control traffic leaving instance
- Specify destination
- Default: All outbound allowed
- Can restrict outbound traffic

### Best Practices

1. **Least Privilege**: Only allow necessary ports
2. **Use Security Groups as Source**: Reference other security groups
3. **Separate by Function**: Different SGs for web, app, DB tiers
4. **Document Rules**: Add descriptions to rules
5. **Regular Reviews**: Audit security group rules periodically

## VPC Integration

### Subnets

**Public Subnets:**

- Route table includes Internet Gateway
- Instances can have public IPs
- Direct internet access
- Use for: Load balancers, NAT gateways, bastion hosts

**Private Subnets:**

- No route to Internet Gateway
- Instances cannot have public IPs
- No direct internet access
- Use for: Application servers, databases

### Route Tables

- **Control Traffic Flow**: Determine where traffic is routed
- **Subnet Association**: Each subnet has a route table
- **Default Route**: Local VPC traffic
- **Internet Gateway Route**: For public subnets
- **NAT Gateway Route**: For private subnet outbound

### Internet Gateway

- **Internet Access**: Provides internet connectivity
- **One per VPC**: Single IGW per VPC
- **Highly Available**: Redundant and scalable
- **No Bandwidth Constraints**: Scales automatically

### NAT Gateway

- **Outbound Internet**: For private subnet instances
- **Managed Service**: Fully managed by AWS
- **High Availability**: Deploy in each AZ
- **Elastic IP Required**: Static IP for outbound traffic

## Network Performance

### Bandwidth

**Instance-Specific:**

- Varies by instance type
- Enhanced networking increases bandwidth
- Up to 100 Gbps on some instances

**Factors Affecting Bandwidth:**

- Instance type
- Enhanced networking enabled
- Network interface configuration

### Latency

**Factors:**

- Geographic location
- Instance type
- Enhanced networking
- Network path

**Optimization:**

- Use same region/AZ for low latency
- Enable enhanced networking
- Use placement groups for low latency

## Placement Groups

### Cluster Placement Group

- **Low Latency**: Same rack, high-speed network
- **High Throughput**: 10 Gbps between instances
- **Use Cases**: HPC, tightly coupled workloads
- **Limitation**: Single AZ only

### Spread Placement Group

- **High Availability**: Different hardware
- **Isolation**: Reduces correlated failures
- **Use Cases**: Critical applications
- **Limitation**: 7 instances per AZ

### Partition Placement Group

- **Large Scale**: Up to 7 partitions per AZ
- **Isolation**: Instances in different partitions
- **Use Cases**: Distributed systems (Hadoop, Cassandra)
- **Scalability**: Hundreds of instances

## Network Monitoring

### CloudWatch Metrics

**Key Metrics:**

- **NetworkIn**: Bytes received
- **NetworkOut**: Bytes sent
- **NetworkPacketsIn**: Packets received
- **NetworkPacketsOut**: Packets sent

**Monitoring:**

- Set up alarms for unusual traffic
- Track bandwidth utilization
- Monitor packet loss

### VPC Flow Logs

- **Capture IP Traffic**: Log network flows
- **Troubleshooting**: Debug connectivity issues
- **Security Analysis**: Identify suspicious traffic
- **Destination**: CloudWatch Logs or S3

## Network Troubleshooting

### Common Issues

**Cannot Connect:**

- Check security group rules
- Verify route tables
- Check network ACLs
- Verify instance is running

**High Latency:**

- Check instance type
- Verify enhanced networking
- Check geographic distance
- Review network path

**Bandwidth Issues:**

- Verify instance type limits
- Check enhanced networking status
- Review network interface configuration

### Diagnostic Tools

- **ping**: Test connectivity
- **traceroute**: Trace network path
- **netstat**: View network connections
- **CloudWatch**: Monitor network metrics
- **VPC Flow Logs**: Analyze network traffic

## Best Practices

1. **Use Private Subnets**: For application and database tiers
2. **Implement Security Groups**: Primary security mechanism
3. **Enable Enhanced Networking**: For better performance
4. **Use Elastic IPs Wisely**: Only when needed
5. **Monitor Network Traffic**: Use CloudWatch and Flow Logs
6. **Use Placement Groups**: For low-latency requirements
7. **Implement Least Privilege**: Restrict security group rules
8. **Regular Security Reviews**: Audit network configuration

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [EC2 Placement Groups](./placement-groups.md) - Instance placement strategies
- [VPC Documentation](../../networking/vpc/index.md) - VPC networking
