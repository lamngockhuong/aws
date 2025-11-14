# Amazon Route 53

Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications.

## Overview

Route 53 performs three main functions: domain registration, DNS routing, and health checking. It's designed to automatically answer DNS queries with low latency by using a global network of DNS servers.

## Key Features

- **Domain Registration**: Register and manage domain names
- **DNS Service**: Highly available DNS resolution
- **Health Checking**: Monitor endpoint health
- **Traffic Routing**: Multiple routing policies
- **Latency-Based Routing**: Route to lowest latency
- **Geolocation Routing**: Route based on user location
- **Weighted Routing**: Distribute traffic across resources
- **Failover Routing**: Automatic failover

## Core Concepts

### Hosted Zones

Containers for DNS records for a domain. Two types:

- **Public Hosted Zones**: For internet-facing resources
- **Private Hosted Zones**: For VPC-internal resources

### Record Sets

DNS records that define how to route traffic for a domain. Common types:

- A: IPv4 address
- AAAA: IPv6 address
- CNAME: Canonical name
- MX: Mail exchange
- TXT: Text records
- NS: Name servers

### Health Checks

Monitor the health of your resources and automatically route traffic away from unhealthy resources.

### Routing Policies

Determine how Route 53 responds to DNS queries.

## Routing Policies

### Simple Routing

- Route traffic to a single resource
- No health checks
- Basic routing

### Weighted Routing

- Distribute traffic across multiple resources
- Assign weights to resources
- Useful for A/B testing, gradual rollouts

### Latency-Based Routing

- Route to resource with lowest latency
- Based on user's location
- Multiple resources in different regions

### Failover Routing

- Active-passive failover
- Primary and secondary resources
- Automatic failover on health check failure

### Geolocation Routing

- Route based on user's geographic location
- Country, continent, or default
- Content localization

### Geoproximity Routing

- Route based on geographic location and bias
- Bias to expand or shrink geographic region
- Traffic flow management

### Multivalue Answer Routing

- Return multiple healthy IP addresses
- Health check enabled
- Simple load balancing

## Health Checks

### Types

- **Endpoint Health Checks**: Monitor HTTP, HTTPS, TCP endpoints
- **CloudWatch Alarms**: Monitor CloudWatch metrics
- **Calculated Health Checks**: Combine multiple health checks
- **Health Check of Health Checks**: Monitor other health checks

### Configurations

- **Protocol**: HTTP, HTTPS, TCP
- **Path**: For HTTP/HTTPS checks
- **Port**: Custom port
- **Interval**: How often to check (10 or 30 seconds)
- **Failure Threshold**: Consecutive failures before unhealthy

### Use Cases

- Monitor application health
- Automatic failover
- Multi-region deployments
- Disaster recovery

## Domain Registration

### Features

- Register new domains
- Transfer existing domains
- Domain privacy protection
- Auto-renewal
- Domain locking

### Supported TLDs

- Hundreds of top-level domains
- Common: .com, .net, .org
- Country codes: .us, .uk, .de, etc.
- New gTLDs: .app, .dev, .cloud, etc.

## Private Hosted Zones

### Use Cases

- VPC-internal DNS resolution
- Private service discovery
- Internal application routing
- Hybrid cloud DNS

### Features

- VPC association
- Multiple VPC support
- Same DNS features as public zones
- Private DNS resolution

## Integration with AWS Services

### EC2

- Associate Elastic IPs
- Instance DNS names
- Load balancer integration

### ELB/ALB

- Automatic DNS registration
- Health check integration
- Multi-region load balancing

### S3

- Static website hosting
- Bucket website endpoints
- CloudFront integration

### CloudFront

- Distribution aliases
- Global content delivery
- Low-latency routing

## Best Practices

- **Use Alias Records**: For AWS resources (no cost, better performance)
- **Enable Health Checks**: For critical resources
- **Use Appropriate Routing Policies**: Match to use case
- **Implement Failover**: For high availability
- **Use Private Hosted Zones**: For VPC-internal resources
- **Monitor Health Checks**: Set up CloudWatch alarms
- **Use Weighted Routing**: For gradual rollouts
- **Enable DNSSEC**: For additional security
- **Use Geoproximity**: For traffic flow management
- **Regular Review**: Review and optimize routing

## Use Cases

- **Domain Management**: Register and manage domains
- **DNS Resolution**: Fast, reliable DNS
- **Load Balancing**: Distribute traffic across resources
- **Failover**: Automatic failover for high availability
- **A/B Testing**: Weighted routing for testing
- **Geographic Routing**: Route based on location
- **Service Discovery**: Private DNS for microservices

## Security

### DNSSEC

- DNS Security Extensions
- Cryptographic authentication
- Prevent DNS spoofing
- Additional security layer

### Access Control

- IAM policies
- Resource-based policies
- Fine-grained permissions

## Cost Optimization

- Use Alias records (no charge)
- Use appropriate record types
- Minimize health checks
- Use private hosted zones for internal resources
- Monitor and optimize queries

## Limits

- **Hosted Zones**: 500 per account (can be increased)
- **Records per Hosted Zone**: 50,000 (can be increased)
- **Health Checks**: 200 per account (can be increased)
- **Domains**: 50 per account (can be increased)

## Pricing

- **Hosted Zones**: $0.50 per month
- **Queries**: $0.40 per million queries
- **Health Checks**: $0.50 per health check per month
- **Domain Registration**: Varies by TLD

## Related Services

- [Amazon VPC](../vpc/index.md) - Virtual private cloud
- [Amazon CloudFront](../cloudfront/index.md) - Content delivery
