# AWS IAM

AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

## Overview

IAM is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.

## Key Features

- **Users**: Individual accounts for people or applications
- **Groups**: Collections of users with shared permissions
- **Roles**: Temporary credentials for AWS services or users
- **Policies**: Documents that define permissions
- **Multi-Factor Authentication (MFA)**: Additional security layer
- **Access Analyzer**: Identify resources shared externally
- **Credential Reports**: Audit user credentials
- **Password Policy**: Enforce password requirements

## Core Concepts

### Users

Individual accounts for people or applications that need access to AWS. Users have:

- Name and credentials
- Permissions via policies
- Access keys (for programmatic access)
- MFA devices

### Groups

Collections of IAM users. Groups make it easier to manage permissions for multiple users.

### Roles

Temporary credentials that can be assumed by:

- AWS services (service roles)
- IAM users (user roles)
- External identities (federated roles)

### Policies

JSON documents that define permissions. Two types:

- **Identity-Based Policies**: Attached to users, groups, or roles
- **Resource-Based Policies**: Attached to resources

## Policy Types

### Managed Policies

- AWS-managed or customer-managed
- Reusable across multiple identities
- Version controlled
- Cannot be edited (AWS-managed)

### Inline Policies

- Embedded directly in a single user, group, or role
- Deleted when identity is deleted
- Useful for unique permissions

### Resource-Based Policies

- Attached to resources (S3 buckets, Lambda functions, etc.)
- Define who can access the resource
- Cross-account access support

## Policy Structure

### Effect

- **Allow**: Explicitly allows an action
- **Deny**: Explicitly denies an action (overrides Allow)

### Action

- Specific API actions (e.g., `s3:GetObject`)
- Wildcards supported (e.g., `s3:*`)

### Resource

- Specific resources (ARNs)
- Wildcards supported
- Required for resource-based policies

### Condition

- Optional constraints on when policy applies
- Based on time, IP, tags, etc.

## Best Practices

- **Least Privilege**: Grant minimum permissions needed
- **Use Groups**: Manage permissions via groups, not individual users
- **Use Roles**: For applications and services, not users
- **Enable MFA**: For privileged users
- **Rotate Credentials**: Regularly rotate access keys
- **Use Policy Conditions**: Add additional security constraints
- **Monitor Access**: Use CloudTrail and Access Analyzer
- **Regular Audits**: Review and remove unused permissions
- **Use Managed Policies**: When possible, use AWS-managed policies
- **Separate Permissions**: Separate read and write permissions

## Common Use Cases

- **User Management**: Create and manage user accounts
- **Service Roles**: Allow services to access other services
- **Cross-Account Access**: Allow access from other accounts
- **Federated Access**: Allow external identities (SAML, OIDC)
- **Application Access**: Provide applications with AWS access

## Security Features

### Multi-Factor Authentication (MFA)

- Additional security layer
- Hardware or virtual MFA devices
- Required for sensitive operations
- Can be enforced via policy

### Access Keys

- Programmatic access credentials
- Access Key ID and Secret Access Key
- Should be rotated regularly
- Can be deactivated

### Password Policy

- Minimum password length
- Password complexity requirements
- Password expiration
- Password history

### Credential Reports

- List all users and credential status
- Last password change
- Access key age
- MFA status

## Access Analyzer

- Identify resources shared externally
- Unintended public access detection
- Cross-account access analysis
- Policy validation

## Integration with AWS Services

- **All AWS Services**: IAM controls access to all services
- **CloudTrail**: Logs all IAM API calls
- **AWS Organizations**: Service control policies
- **STS**: Temporary credentials via AssumeRole

## Limits

- **Users per Account**: 5,000
- **Groups per Account**: 300
- **Roles per Account**: 1,000
- **Policies per User/Group/Role**: 10 managed, unlimited inline
- **Policy Size**: 6,144 characters (managed), 2,048 characters (inline)

## Related Services

- [AWS Organizations](./index.md) - Multi-account management
- [AWS CloudTrail](../monitoring/cloudtrail/index.md) - API logging
- [AWS KMS](./kms/index.md) - Key management
- [Amazon Cognito](./cognito/index.md) - User authentication
