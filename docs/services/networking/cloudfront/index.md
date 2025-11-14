# Amazon CloudFront

Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.

## Overview

CloudFront delivers content through a worldwide network of edge locations that cache content close to viewers, reducing latency and improving performance. It integrates with other AWS services and supports both static and dynamic content.

## Key Features

- **Global Edge Network**: 400+ edge locations worldwide
- **Low Latency**: Content delivered from nearest edge location
- **High Performance**: Optimized for speed and reliability
- **Security**: DDoS protection, SSL/TLS, field-level encryption
- **Integration**: Works with S3, EC2, ALB, Lambda@Edge
- **Cost-Effective**: Pay only for data transfer
- **Real-Time Metrics**: CloudWatch integration

## Core Concepts

### Distributions

Configurations that define how CloudFront delivers your content. Two types:

- **Web Distribution**: For websites and HTTP/HTTPS content
- **RTMP Distribution**: For streaming media (legacy)

### Edge Locations

Data centers located around the world where CloudFront caches copies of your content.

### Origins

The source location of your content. Can be:

- S3 buckets
- EC2 instances
- Application Load Balancers
- Custom origins (HTTP servers)

### Cache Behaviors

Rules that determine how CloudFront handles requests for your content.

### Invalidations

Process of removing objects from CloudFront cache before they expire.

## Content Delivery

### Caching

- **Cache Hit**: Content served from edge location
- **Cache Miss**: Content fetched from origin
- **TTL**: Time-to-live for cached content
- **Cache-Control Headers**: Control caching behavior

### Origin Types

#### S3 Origins

- Static website hosting
- S3 bucket as origin
- OAI/OAC for secure access
- S3 Transfer Acceleration

#### Custom Origins

- HTTP/HTTPS servers
- EC2 instances
- Application Load Balancers
- On-premises servers

#### MediaPackage Origins

- Live and on-demand video
- HLS and DASH streaming
- DRM support

## Features

### Lambda@Edge

- Run code at edge locations
- Modify requests and responses
- A/B testing
- Authentication/authorization
- Custom error pages

### CloudFront Functions

- Lightweight JavaScript functions
- Sub-millisecond latency
- Request/response manipulation
- URL rewrites
- Header manipulation

### Field-Level Encryption

- Encrypt sensitive data fields
- End-to-end encryption
- Client-side decryption
- PCI-DSS compliance

### Signed URLs and Cookies

- Time-limited access
- IP address restrictions
- Path restrictions
- Secure content delivery

### Geo-Restrictions

- Block or allow countries
- Whitelist/blacklist
- Compliance requirements
- Content licensing

### Custom Error Pages

- Custom 404 pages
- Custom error responses
- Lambda@Edge integration
- User-friendly errors

## Security

### SSL/TLS

- Free SSL certificates (SNI)
- Dedicated IP certificates
- Minimum TLS version
- Perfect Forward Secrecy

### DDoS Protection

- AWS Shield Standard (included)
- AWS Shield Advanced (optional)
- Automatic DDoS mitigation
- Always-on protection

### Access Control

- Signed URLs
- Signed Cookies
- Origin Access Identity (OAI)
- Origin Access Control (OAC)
- Geo-restrictions

### WAF Integration

- Web Application Firewall
- Protect against common attacks
- Custom rules
- Rate limiting

## Performance Optimization

### Caching Strategies

- **Static Content**: Long TTL, cache at edge
- **Dynamic Content**: Short TTL or no cache
- **Cache-Control Headers**: Control caching
- **Query String Handling**: Cache by query string

### Compression

- Automatic compression (gzip, brotli)
- Reduce transfer size
- Faster delivery
- Configurable file types

### HTTP/2

- Multiplexing
- Server push
- Header compression
- Better performance

### Connection Keep-Alive

- Reuse connections
- Reduce latency
- Better performance

## Monitoring

### CloudWatch Metrics

- Requests
- Bytes downloaded
- Error rates
- Cache hit ratio
- Origin latency

### Real-Time Logs

- Real-time access logs
- Kinesis Data Streams integration
- Custom log analysis
- Performance insights

### Reports

- Popular objects
- Top referrers
- Top countries
- Cache statistics

## Best Practices

- **Use Appropriate TTL**: Balance freshness and performance
- **Enable Compression**: Reduce transfer size
- **Use Lambda@Edge**: For dynamic content manipulation
- **Implement Proper Caching**: Cache static, don't cache dynamic
- **Use Signed URLs**: For private content
- **Enable Logging**: Monitor and analyze traffic
- **Use WAF**: Protect against attacks
- **Optimize Origins**: Reduce origin latency
- **Use CloudFront Functions**: For simple transformations
- **Monitor Performance**: Use CloudWatch metrics

## Use Cases

- **Static Website Hosting**: Deliver static websites
- **Content Delivery**: Images, videos, documents
- **API Acceleration**: Accelerate API responses
- **Live Streaming**: Video streaming
- **Software Distribution**: Software downloads
- **Global Applications**: Low-latency global access

## Cost Optimization

- Use appropriate cache behaviors
- Optimize TTL values
- Enable compression
- Use CloudFront Functions instead of Lambda@Edge when possible
- Monitor and optimize data transfer
- Use appropriate origin types
- Delete unused distributions

## Limits

- **Distributions**: 200 per account
- **Cache Behaviors**: 25 per distribution
- **Origins**: 25 per distribution
- **Custom Error Pages**: 10 per distribution
- **Invalidations**: 3 per distribution per day (free tier)

## Related Services

- [Amazon S3](../../storage/s3/index.md) - Object storage
- [AWS Lambda](../../compute/lambda/index.md) - Lambda@Edge
