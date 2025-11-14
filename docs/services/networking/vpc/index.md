# Amazon VPC

Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.

## Overview

VPC gives you complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.

## Key Features

- **Isolated Network**: Logically isolated virtual network
- **IP Address Control**: Define your own IP address ranges
- **Subnet Configuration**: Create public and private subnets
- **Security Groups**: Stateful firewall at instance level
- **Network ACLs**: Stateless firewall at subnet level
- **Internet Gateway**: Internet access for resources
- **NAT Gateway**: Outbound internet for private subnets
- **VPC Peering**: Connect VPCs together
- **VPN/Direct Connect**: Connect to on-premises

## Core Concepts

### VPC

A virtual network dedicated to your AWS account. Isolated from other virtual networks in AWS.

### Subnets

Subdivisions of a VPC's IP address range. Can be public (internet-accessible) or private.

### Route Tables

Sets of rules that determine where network traffic is directed.

### Internet Gateway

Horizontally scaled, redundant gateway that allows communication between VPC and internet.

### NAT Gateway

Network Address Translation service that allows instances in private subnets to access internet.

### Security Groups

Virtual firewalls that control inbound and outbound traffic at instance level (stateful).

### Network ACLs

Stateless firewalls that control traffic at subnet level.

## IP Addressing

### CIDR Blocks

- Define IP address range for VPC
- Example: 10.0.0.0/16 (65,536 IP addresses)
- Cannot overlap with other VPCs
- Can be modified (with limitations)

### Subnets

- Subdivide VPC CIDR block
- Example: 10.0.1.0/24 (256 IP addresses)
- Must be within VPC CIDR
- Can span one Availability Zone

### Reserved IPs

- First 4 IPs and last IP reserved
- Example: 10.0.1.0/24 reserves 10.0.1.0, 10.0.1.1, 10.0.1.2, 10.0.1.3, 10.0.1.255

## Subnet Types

### Public Subnets

- Route table includes route to Internet Gateway
- Resources can have public IP addresses
- Direct internet access
- Use for: Load balancers, NAT gateways, bastion hosts

### Private Subnets

- No route to Internet Gateway
- Resources cannot have public IPs
- No direct internet access
- Use for: Application servers, databases, internal services

## Networking Components

### Internet Gateway

- Attach to VPC for internet access
- One per VPC
- Highly available
- No bandwidth constraints

### NAT Gateway

- Allow outbound internet from private subnets
- Managed service
- High availability (deploy in each AZ)
- Elastic IP required

### NAT Instance

- EC2 instance performing NAT
- Manual management
- Lower cost for low traffic
- Not highly available by default

### VPC Endpoints

- Private connectivity to AWS services
- **Gateway Endpoints**: S3, DynamoDB (free)
- **Interface Endpoints**: Other services (charged)
- No internet gateway required

### VPC Peering

- Connect two VPCs
- Private IP communication
- Can be same or different accounts/regions
- Non-transitive (A→B, B→C doesn't mean A→C)

### Transit Gateway

- Central hub for VPC connectivity
- Connect multiple VPCs
- VPN and Direct Connect support
- Route management

## Security

### Security Groups

- **Stateful**: Return traffic automatically allowed
- **Instance Level**: Applied to instances
- **Default Deny**: All traffic denied by default
- **Multiple Groups**: Instance can have multiple SGs

### Network ACLs

- **Stateless**: Must allow both inbound and outbound
- **Subnet Level**: Applied to subnets
- **Default Allow**: All traffic allowed by default
- **Rule Numbers**: Processed in order

### Flow Logs

- Capture IP traffic
- Log to CloudWatch or S3
- Troubleshooting and security analysis
- VPC, subnet, or ENI level

## Connectivity Options

### Internet Connectivity

- Internet Gateway for public subnets
- NAT Gateway for private subnets
- Elastic IP addresses

### On-Premises Connectivity

- **Site-to-Site VPN**: IPsec VPN connection
- **AWS Client VPN**: Remote access VPN
- **Direct Connect**: Dedicated network connection
- **Transit Gateway**: Centralized connectivity

### Inter-VPC Connectivity

- **VPC Peering**: Direct VPC-to-VPC connection
- **Transit Gateway**: Hub-and-spoke model
- **PrivateLink**: Private service endpoints

## Best Practices

- **Use Multiple AZs**: For high availability
- **Separate Public/Private Subnets**: Security isolation
- **Use Security Groups**: Primary security mechanism
- **Enable Flow Logs**: For monitoring and troubleshooting
- **Use VPC Endpoints**: For private AWS service access
- **Implement Least Privilege**: Restrict access as needed
- **Use NAT Gateway**: For outbound internet from private subnets
- **Plan IP Addressing**: Avoid overlapping CIDR blocks
- **Use Transit Gateway**: For complex multi-VPC architectures
- **Regular Security Reviews**: Review security groups and NACLs

## Use Cases

- **Multi-Tier Applications**: Web, app, database tiers
- **Hybrid Cloud**: Connect on-premises to AWS
- **Microservices**: Isolated network per service
- **Compliance**: Network isolation for compliance
- **Disaster Recovery**: Multi-region deployments

## Cost Optimization

- Use NAT instances for low-traffic scenarios
- Use Gateway Endpoints (free) when possible
- Right-size NAT gateways
- Use VPC sharing for cost sharing
- Monitor and optimize data transfer

## Limits

- **VPCs per Region**: 5 (soft limit, can be increased)
- **Subnets per VPC**: 200 (soft limit)
- **Route Tables per VPC**: 200 (soft limit)
- **Security Groups per VPC**: 2,500 (soft limit)
- **Rules per Security Group**: 60 (soft limit)

## Related Services

- [Amazon EC2](../compute/ec2/index.md) - Virtual servers
- [Application Load Balancer](./index.md) - Load balancing
- [AWS Direct Connect](./index.md) - Dedicated network
- [AWS VPN](./index.md) - VPN connectivity
