# Amazon S3

Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

## Overview

S3 is designed to store and retrieve any amount of data from anywhere on the web. It's built to deliver 99.999999999% (11 9's) of durability and stores data for millions of applications used by market leaders in every industry.

## Key Features

- **Unlimited Storage**: Store any amount of data
- **High Durability**: 99.999999999% (11 9's) durability
- **High Availability**: 99.99% availability SLA
- **Security**: Encryption, access control, compliance features
- **Scalability**: Automatically scales to handle any amount of data
- **Cost-Effective**: Pay only for what you use
- **Integration**: Works with other AWS services

## Core Concepts

### Buckets

Containers for objects. Bucket names must be globally unique and DNS-compliant.

### Objects

Files stored in buckets. Objects consist of data, key (name), and metadata.

### Keys

Unique identifier for an object within a bucket. The combination of bucket and key uniquely identifies each object.

### Regions

Geographic locations where buckets are stored. Choose regions based on latency, compliance, and cost.

## Storage Classes

### S3 Standard

- **Use Case**: Frequently accessed data
- **Availability**: 99.99%
- **Durability**: 99.999999999%
- **Retrieval**: Immediate
- **Cost**: Standard pricing

### S3 Intelligent-Tiering

- **Use Case**: Unknown or changing access patterns
- **Availability**: 99.9%
- **Durability**: 99.999999999%
- **Retrieval**: Immediate
- **Cost**: Automatic cost optimization

### S3 Standard-IA (Infrequent Access)

- **Use Case**: Infrequently accessed data
- **Availability**: 99.9%
- **Durability**: 99.999999999%
- **Retrieval**: Immediate
- **Cost**: Lower storage, retrieval fee

### S3 One Zone-IA

- **Use Case**: Infrequently accessed, non-critical data
- **Availability**: 99.5%
- **Durability**: 99.999999999% (single AZ)
- **Retrieval**: Immediate
- **Cost**: Lowest cost IA option

### S3 Glacier Instant Retrieval

- **Use Case**: Archive data with immediate access needs
- **Availability**: 99.9%
- **Durability**: 99.999999999%
- **Retrieval**: Immediate
- **Cost**: Lower than Standard-IA

### S3 Glacier Flexible Retrieval

- **Use Case**: Archive data with flexible retrieval
- **Availability**: 99.99%
- **Durability**: 99.999999999%
- **Retrieval**: 1-5 minutes (Expedited), 3-5 hours (Standard), 5-12 hours (Bulk)
- **Cost**: Very low storage cost

### S3 Glacier Deep Archive

- **Use Case**: Long-term archive, compliance
- **Availability**: 99.99%
- **Durability**: 99.999999999%
- **Retrieval**: 12 hours (Standard), 48 hours (Bulk)
- **Cost**: Lowest cost storage

### S3 Outposts

- **Use Case**: On-premises S3-compatible storage
- **Availability**: 99.9%
- **Durability**: 99.999999999%
- **Retrieval**: Immediate
- **Cost**: On-premises pricing

## Features

### Versioning

- Keep multiple versions of objects
- Protect against accidental deletion
- Enable MFA Delete for additional protection
- Can be enabled at bucket level

### Lifecycle Policies

- Automatically transition objects between storage classes
- Automatically delete objects after expiration
- Cost optimization
- Rule-based policies

### Encryption

- **Server-Side Encryption (SSE)**:
  - SSE-S3: S3-managed keys
  - SSE-KMS: AWS KMS-managed keys
  - SSE-C: Customer-provided keys
- **Client-Side Encryption**: Encrypt before uploading

### Access Control

- **Bucket Policies**: Bucket-level permissions
- **ACLs**: Legacy access control
- **IAM Policies**: User and role permissions
- **Presigned URLs**: Temporary access URLs

### CORS (Cross-Origin Resource Sharing)

- Enable cross-origin access to S3 resources
- Configure CORS rules on buckets
- Useful for web applications

### Static Website Hosting

- Host static websites
- Configure index and error documents
- Public or private access

### Event Notifications

- Trigger actions on object events
- Integrate with Lambda, SNS, SQS
- Real-time processing

### Transfer Acceleration

- Faster uploads to S3
- Uses CloudFront edge locations
- Useful for large files or distant locations

## Use Cases

- **Backup and Archive**: Data backup and long-term storage
- **Content Storage**: Media files, documents
- **Static Website Hosting**: Host static websites
- **Data Lakes**: Store structured and unstructured data
- **Disaster Recovery**: Backup and recovery storage
- **Application Data**: Application file storage
- **Big Data Analytics**: Data storage for analytics

## Best Practices

- **Use Appropriate Storage Classes**: Optimize for cost and access patterns
- **Enable Versioning**: Protect against accidental deletion
- **Implement Lifecycle Policies**: Automatic cost optimization
- **Use Encryption**: Encrypt sensitive data
- **Implement Access Controls**: Proper bucket policies and IAM
- **Enable Logging**: Monitor access with CloudTrail and access logs
- **Use Transfer Acceleration**: For large files or distant locations
- **Implement CORS**: For web applications
- **Use Presigned URLs**: For temporary access
- **Monitor Costs**: Use Cost Explorer and billing alerts

## Security

### Encryption

- Enable encryption at rest
- Use KMS for key management
- Encrypt data in transit (HTTPS)

### Access Control

- Use bucket policies for bucket-level access
- Use IAM policies for user/role access
- Implement least privilege
- Enable MFA Delete for versioning

### Compliance

- S3 Object Lock for WORM (Write Once Read Many)
- Compliance certifications (HIPAA, PCI-DSS, etc.)
- Audit logging with CloudTrail

## Performance Optimization

- **Multipart Upload**: For large files (> 5 GB)
- **Parallel Requests**: Increase throughput
- **CloudFront**: For content delivery
- **Transfer Acceleration**: For distant locations
- **Right Storage Class**: Match to access patterns

## Cost Optimization

- Use appropriate storage classes
- Implement lifecycle policies
- Delete unused objects
- Use Intelligent-Tiering for unknown patterns
- Compress objects before upload
- Use S3 Select for querying
- Monitor and optimize costs

## Limits

- **Object Size**: 5 TB maximum
- **Upload Size**: 5 GB single upload, multipart for larger
- **Bucket Size**: Unlimited
- **Buckets per Account**: 100 by default (can be increased)
- **Request Rate**: Virtually unlimited

## Related Services

- [Amazon CloudFront](../networking/cloudfront/index.md) - Content delivery
- [AWS Lambda](../compute/lambda/index.md) - Event-driven processing
- [Amazon Glacier](./index.md) - Long-term archive (now part of S3)
- [Amazon EBS](./ebs/index.md) - Block storage
