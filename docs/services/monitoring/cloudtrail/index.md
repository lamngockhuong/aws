# AWS CloudTrail

AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account.

## Overview

CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.

## Key Features

- **Event History**: 90-day history of API calls
- **Trail Logging**: Continuous logging to S3
- **Log File Integrity**: Cryptographic validation
- **Multi-Region Logging**: Log events from all regions
- **Organization Trails**: Centralized logging for organizations
- **Data Events**: Log data plane operations (S3, Lambda)
- **Insights**: Detect unusual API activity
- **Event Selectors**: Filter events to log

## Core Concepts

### Trails

Configurations that enable CloudTrail logging. Trails specify:

- Where to deliver logs (S3 bucket)
- Which events to log
- Log file encryption
- Log file validation

### Events

Records of API calls made in your AWS account. Two types:

- **Management Events**: Control plane operations
- **Data Events**: Data plane operations

### Event History

90-day history of API calls available in CloudTrail console. No S3 delivery required.

### Log Files

JSON files containing CloudTrail events. Delivered to S3 bucket.

## Event Types

### Management Events

Control plane operations that create, modify, or delete resources. Examples:

- Creating EC2 instances
- Modifying S3 bucket policies
- Deleting IAM users
- Starting/stopping services

### Data Events

Data plane operations that read or write data. Examples:

- S3 object operations (GetObject, PutObject)
- Lambda function invocations
- DynamoDB item operations

## Trail Configuration

### Single-Region Trail

- Logs events from one region
- Simpler configuration
- Lower cost
- Use for single-region deployments

### Multi-Region Trail

- Logs events from all regions
- Global event history
- Better for multi-region deployments
- Higher cost

### Organization Trail

- Centralized logging for AWS Organizations
- All accounts in organization
- Single S3 bucket
- Organization-wide visibility

## Log File Delivery

### S3 Bucket

- Destination for log files
- Encrypted storage
- Lifecycle policies
- Access logging

### CloudWatch Logs

- Real-time log delivery
- Log analysis
- Metric filters
- Alarms

### Log File Format

- JSON format
- GZIP compressed
- Multiple events per file
- Partitioned by date/time

## Security Features

### Log File Integrity

- Cryptographic validation
- SHA-256 hash
- Detect tampering
- Digital signatures

### Encryption

- Server-side encryption (SSE)
- KMS encryption
- Encrypt log files at rest
- Encrypt in transit

### Access Control

- S3 bucket policies
- IAM policies
- MFA Delete
- Versioning

## Event Selectors

### Management Event Selectors

- Include or exclude management events
- Read-only or write-only
- All events or specific events

### Data Event Selectors

- S3 bucket-level or object-level
- Lambda function-level
- Include or exclude specific operations

## CloudTrail Insights

### Anomaly Detection

- Machine learning-based
- Detect unusual API activity
- Automatic baseline learning
- Reduce false positives

### Insights Events

- Unusual API call volume
- Unusual API call patterns
- Unusual error rates
- Unusual user activity

## Best Practices

- **Enable Multi-Region Logging**: For global deployments
- **Enable Log File Validation**: Detect tampering
- **Encrypt Log Files**: Use KMS encryption
- **Use Separate S3 Bucket**: Isolate log files
- **Enable MFA Delete**: Protect log files
- **Set Up Lifecycle Policies**: Manage log retention
- **Monitor CloudTrail**: Set up alarms
- **Use Event Selectors**: Filter events to reduce cost
- **Regular Reviews**: Review and analyze logs
- **Use CloudTrail Insights**: Detect anomalies

## Use Cases

- **Compliance**: Meet regulatory requirements
- **Security Auditing**: Track security events
- **Operational Troubleshooting**: Debug issues
- **Change Tracking**: Track resource changes
- **Forensics**: Investigate security incidents
- **Cost Optimization**: Track resource usage

## Integration with AWS Services

### S3

- Log S3 data events
- Store log files
- Access logging

### CloudWatch

- Real-time log delivery
- Metric filters
- Alarms

### AWS Organizations

- Organization trails
- Centralized logging
- Cross-account visibility

### Security Services

- GuardDuty: Threat detection
- Macie: Data security
- Security Hub: Security findings

## Cost Optimization

- Use event selectors to filter events
- Set appropriate log retention
- Use S3 lifecycle policies
- Monitor CloudTrail costs
- Use single-region trails when appropriate

## Limits

- **Trails per Region**: 5
- **Event Selectors per Trail**: 5
- **Event History**: 90 days
- **Log File Size**: Up to 2 GB (compressed)
- **Events per Log File**: Up to 50,000

## Related Services

- [Amazon S3](../storage/s3/index.md) - Log storage
- [Amazon CloudWatch](./cloudwatch/index.md) - Log analysis
- [AWS Security Hub](./index.md) - Security findings
- [AWS GuardDuty](./index.md) - Threat detection
