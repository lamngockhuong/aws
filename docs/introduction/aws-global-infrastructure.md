# AWS Global Infrastructure

AWS operates the most extensive global cloud infrastructure, providing low-latency access to services worldwide. Understanding this infrastructure is crucial for designing highly available and performant applications.

## Overview

AWS infrastructure consists of Regions, Availability Zones, and Edge Locations strategically placed around the world to provide low latency, high availability, and fault tolerance.

## Regions

### What are Regions?

A **Region** is a geographic area that contains multiple Availability Zones. Each region is completely independent and isolated from other regions.

### Key Characteristics

- **Geographic Separation**: Regions are in different geographic areas
- **Isolation**: Resources in one region are isolated from others
- **Compliance**: Choose regions based on data residency requirements
- **Pricing**: Costs vary by region
- **Service Availability**: Not all services available in all regions

### Current Regions (as of 2024)

**North America:**

- US East (N. Virginia, Ohio)
- US West (N. California, Oregon)
- Canada (Central)
- AWS GovCloud (US-East, US-West)

**South America:**

- South America (São Paulo)

**Europe:**

- Europe (Ireland, London, Paris, Frankfurt, Milan, Stockholm, Spain)
- Middle East (Bahrain, UAE)
- Africa (Cape Town)

**Asia Pacific:**

- Asia Pacific (Mumbai, Seoul, Singapore, Sydney, Tokyo, Osaka, Hong Kong, Jakarta, Hyderabad)
- China (Beijing, Ningxia)

### Choosing a Region

Consider these factors:

1. **Latency**: Proximity to your users
2. **Compliance**: Data residency requirements
3. **Cost**: Regional pricing differences
4. **Service Availability**: Required services available
5. **Disaster Recovery**: Multi-region deployments

## Availability Zones

### What are Availability Zones?

An **Availability Zone (AZ)** is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.

### Key Characteristics

- **Physical Separation**: AZs are physically separated
- **Independent Infrastructure**: Each AZ has independent power, cooling, networking
- **Low Latency**: Connected via high-speed fiber
- **Fault Isolation**: Failure in one AZ doesn't affect others

### Typical Region Structure

- **Multiple AZs**: Most regions have 3+ AZs
- **Minimum 2 AZs**: All regions have at least 2 AZs
- **Expansion**: AWS continuously adds new AZs

### Using Multiple AZs

**Benefits:**

- **High Availability**: Deploy across multiple AZs
- **Fault Tolerance**: Survive AZ failures
- **Disaster Recovery**: Data redundancy
- **Load Distribution**: Distribute traffic

**Best Practices:**

- Deploy applications across multiple AZs
- Use Multi-AZ for databases
- Distribute load balancers across AZs
- Replicate data across AZs

## Edge Locations

### What are Edge Locations?

**Edge Locations** are points of presence (PoPs) for AWS services like CloudFront and Lambda@Edge, located in major cities worldwide.

### Key Characteristics

- **Global Distribution**: 400+ edge locations worldwide
- **Low Latency**: Content delivered closer to users
- **CloudFront**: Content delivery network
- **Lambda@Edge**: Run code at edge locations

### Edge Location Services

**CloudFront:**

- Cache content closer to users
- Reduce latency
- Reduce origin load
- Global content delivery

**Lambda@Edge:**

- Run code at edge locations
- Customize content
- A/B testing
- Authentication/authorization

**Route 53:**

- DNS resolution
- Low-latency DNS queries
- Global DNS service

## Local Zones

### What are Local Zones?

**Local Zones** are extensions of AWS Regions that are closer to end users, providing single-digit millisecond latency.

### Use Cases

- **Low Latency Applications**: Gaming, media processing
- **Real-Time Applications**: Interactive applications
- **Content Creation**: Video rendering, live streaming

### Current Local Zones

- US (Los Angeles, Boston, Miami, Houston, etc.)
- Expanding to more cities

## Wavelength Zones

### What are Wavelength Zones?

**Wavelength Zones** embed AWS compute and storage within telecommunications providers' 5G networks.

### Use Cases

- **Mobile Edge Computing**: Ultra-low latency
- **5G Applications**: Real-time applications
- **IoT**: Connected devices

## Infrastructure Resilience

### Design Principles

1. **Redundancy**: Multiple components at every level
2. **Isolation**: Failures don't cascade
3. **Automation**: Automatic failover and recovery
4. **Monitoring**: Continuous health monitoring

### Service Level Agreements (SLAs)

- **EC2**: 99.99% availability (Multi-AZ)
- **S3**: 99.999999999% (11 9's) durability
- **RDS**: 99.95% availability (Multi-AZ)
- **CloudFront**: 99.9% availability

## Data Residency and Compliance

### Data Residency

- **Regions**: Choose regions based on data residency requirements
- **Data Locality**: Data stored in selected region
- **Compliance**: Meet regulatory requirements

### Compliance Programs

AWS maintains compliance with:

- **SOC**: System and Organization Controls
- **PCI DSS**: Payment Card Industry
- **HIPAA**: Health Insurance Portability
- **ISO**: International Organization for Standardization
- **GDPR**: General Data Protection Regulation

## Cost Considerations

### Regional Pricing

- **US Regions**: Generally lowest cost
- **Asia Pacific**: Higher costs
- **Europe**: Moderate costs
- **Data Transfer**: Costs vary by region

### Cost Optimization

- **Choose Appropriate Region**: Balance cost and latency
- **Data Transfer**: Minimize cross-region transfer
- **Reserved Instances**: Region-specific pricing
- **Spot Instances**: Regional availability varies

## Best Practices

1. **Multi-Region Deployment**: For global applications
2. **Multi-AZ Deployment**: For high availability
3. **Edge Locations**: For content delivery
4. **Data Replication**: Across regions and AZs
5. **Disaster Recovery**: Plan for regional failures
6. **Compliance**: Choose regions based on requirements
7. **Cost Optimization**: Consider regional pricing

## Monitoring Infrastructure

### CloudWatch

- Monitor regional metrics
- Set up alarms
- Track service health

### Service Health Dashboard

- Real-time service status
- Regional service issues
- Planned maintenance

### Personal Health Dashboard

- Account-specific events
- Service-specific notifications
- Proactive notifications

## Next Steps

- [What is AWS](./what-is-aws.md) - AWS overview
- [How to Study AWS](./how-to-study.md) - Study strategies
- [VPC Networking](../services/networking/vpc/index.md) - Network configuration
