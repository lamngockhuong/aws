# AWS KMS

AWS Key Management Service (KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data.

## Overview

KMS is a scalable key management service that uses hardware security modules (HSMs) to protect your encryption keys. It integrates with AWS services and your applications to encrypt and decrypt data.

## Key Features

- **Customer Master Keys (CMKs)**: Encryption keys you create and manage
- **Automatic Key Rotation**: Automatic annual rotation
- **Hardware Security Modules**: FIPS 140-2 Level 3 validated HSMs
- **Audit Trail**: CloudTrail integration for key usage
- **Key Policies**: Fine-grained access control
- **Envelope Encryption**: Encrypt data encryption keys
- **Multi-Region Keys**: Replicate keys across regions
- **Import Keys**: Bring your own keys

## Core Concepts

### Customer Master Keys (CMKs)

Encryption keys that can be used to encrypt and decrypt data. Three types:

- **AWS Managed Keys**: Created and managed by AWS
- **Customer Managed Keys**: Created and managed by you
- **AWS Owned Keys**: Shared across AWS accounts

### Data Keys

Encryption keys used to encrypt data. Generated from CMKs using envelope encryption.

### Key Policies

Resource-based policies that control access to CMKs. Similar to IAM policies but specific to KMS.

### Aliases

Friendly names for CMKs. Easier to reference than key IDs.

## Key Types

### AWS Managed Keys

- Automatically created by AWS services
- Managed by AWS
- Cannot be deleted
- Automatic rotation
- Free (no monthly fee)

### Customer Managed Keys

- Created and managed by you
- Full control over key policies
- Can be deleted (after waiting period)
- Automatic or manual rotation
- $1/month per key

### AWS Owned Keys

- Shared across AWS accounts
- Managed by AWS
- Cannot be viewed or managed
- Used by some AWS services

## Key Management

### Key Creation

- Create via console, CLI, or API
- Define key policy
- Set key administrators
- Configure key usage

### Key Rotation

- **Automatic**: Annual rotation for customer managed keys
- **Manual**: Rotate on-demand
- **Import Keys**: Rotate imported keys manually
- Backward compatible (old data still decryptable)

### Key Deletion

- Schedule key deletion (7-30 day waiting period)
- Cannot be recovered after deletion
- Data encrypted with deleted key cannot be decrypted
- Plan carefully before deletion

### Key Import

- Import your own key material
- More control over key lifecycle
- Must manage key material yourself
- Manual rotation required

## Key Policies

### Policy Structure

- Similar to IAM policies
- Define who can use the key
- Define key administrators
- Control key usage permissions

### Key Administrators

- Users/roles that can manage the key
- Can modify key policy
- Cannot use key for encryption/decryption

### Key Users

- Users/roles that can use the key
- Can encrypt/decrypt data
- Cannot modify key policy

## Envelope Encryption

### Process

1. Generate data key from CMK
2. Use data key to encrypt data
3. Encrypt data key with CMK
4. Store encrypted data key with encrypted data
5. Decrypt data key, then decrypt data

### Benefits

- Encrypt large amounts of data efficiently
- Data keys can be cached
- CMK never leaves KMS
- Better performance

## Security Features

### Hardware Security Modules

- FIPS 140-2 Level 3 validated
- Keys never leave HSM unencrypted
- Tamper-resistant hardware
- High availability

### Audit Trail

- All key usage logged in CloudTrail
- Track who used which key when
- Compliance and auditing
- Security monitoring

### Access Control

- Key policies for key-level access
- IAM policies for user-level access
- Grant permissions to specific keys
- Least privilege principle

## Integration with AWS Services

### Automatic Integration

- S3: Server-side encryption
- EBS: Volume encryption
- RDS: Database encryption
- DynamoDB: Table encryption
- Lambda: Environment variable encryption
- Many more services

### Grant Permissions

- Allow services to use your keys
- Service-specific grants
- Automatic key policy updates
- Fine-grained control

## Best Practices

- **Use Customer Managed Keys**: For production workloads
- **Enable Automatic Rotation**: Annual key rotation
- **Implement Least Privilege**: Restrict key access
- **Monitor Key Usage**: Use CloudTrail
- **Use Envelope Encryption**: For large data
- **Separate Keys by Environment**: Dev, staging, prod
- **Use Key Aliases**: Easier key management
- **Plan Key Deletion**: Understand implications
- **Regular Key Reviews**: Audit key usage
- **Use Multi-Region Keys**: For multi-region applications

## Use Cases

- **Data Encryption**: Encrypt data at rest
- **Application Encryption**: Encrypt application data
- **Database Encryption**: Encrypt database storage
- **S3 Encryption**: Encrypt S3 objects
- **EBS Encryption**: Encrypt EBS volumes
- **Secrets Management**: Encrypt secrets

## Cost Optimization

- Use AWS managed keys when possible (no monthly fee)
- Delete unused keys
- Use envelope encryption for large data
- Monitor key usage
- Use appropriate key types

## Limits

- **CMKs per Account**: 10,000 (soft limit)
- **Aliases per Account**: 10,000 (soft limit)
- **Grants per Key**: 50,000
- **Key Policy Size**: 32 KB
- **Data Key Size**: 4 KB

## Related Services

- [AWS CloudTrail](../../monitoring/cloudtrail/index.md) - Audit logging
- [Amazon S3](../../storage/s3/index.md) - Object encryption
- [Amazon EBS](../../storage/ebs/index.md) - Volume encryption
