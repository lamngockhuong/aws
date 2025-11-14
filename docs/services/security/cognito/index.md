# Amazon Cognito

Amazon Cognito provides authentication, authorization, and user management for your web and mobile apps. It supports user sign-up, sign-in, and access control, and scales to millions of users.

## Overview

Cognito handles user authentication and authorization, allowing you to focus on your application logic. It supports multiple authentication methods and integrates with identity providers.

## Key Features

- **User Pools**: User directory and authentication service
- **Identity Pools**: Federated identities and AWS credentials
- **Social Identity Providers**: Facebook, Google, Apple, etc.
- **SAML/OIDC**: Enterprise identity providers
- **Multi-Factor Authentication**: SMS and TOTP
- **Password Policies**: Enforce password requirements
- **User Migration**: Import existing users
- **Lambda Triggers**: Customize authentication flows

## Core Components

### User Pools

User directories that provide:

- User registration and authentication
- User profile management
- Password reset and account recovery
- Email and phone verification
- MFA support

### Identity Pools

Provide temporary AWS credentials for users to access AWS services. Identity pools:

- Federate identities from various providers
- Map identities to IAM roles
- Provide temporary credentials
- Support unauthenticated access

## Authentication Flows

### User Pool Authentication

1. User signs in with username/password
2. Cognito validates credentials
3. Returns JWT tokens (ID, Access, Refresh)
4. Application uses tokens for authorization

### Federated Identity

1. User authenticates with identity provider
2. Provider returns identity token
3. Cognito exchanges token for AWS credentials
4. Application uses credentials to access AWS

## User Pool Features

### Sign-Up and Sign-In

- Email or phone number as username
- Password-based authentication
- Custom authentication challenges
- Account verification

### User Attributes

- Standard attributes (email, phone, name)
- Custom attributes
- Mutable and immutable attributes
- Attribute verification

### Password Policies

- Minimum length
- Complexity requirements
- Password expiration
- Password history

### Multi-Factor Authentication

- SMS-based MFA
- TOTP-based MFA (authenticator apps)
- Optional or required
- Per-user configuration

### Lambda Triggers

Customize authentication flows:

- Pre sign-up
- Post authentication
- Pre token generation
- Custom message
- Post confirmation

## Identity Pool Features

### Federated Identities

- User Pools
- Social identity providers
- SAML identity providers
- OpenID Connect providers
- Developer authenticated identities

### IAM Role Mapping

- Map identities to IAM roles
- Authenticated and unauthenticated roles
- Fine-grained permissions
- Policy-based access control

### Temporary Credentials

- AWS credentials via STS
- Automatic refresh
- Scoped to IAM role
- Time-limited access

## Social Identity Providers

### Supported Providers

- Amazon
- Facebook
- Google
- Apple
- OIDC providers
- SAML providers

### Configuration

- App ID and secret
- OAuth scopes
- Attribute mapping
- User pool integration

## Security Features

### Token-Based Authentication

- JWT tokens (ID, Access, Refresh)
- Token expiration
- Token refresh
- Token validation

### Encryption

- Data encryption at rest
- HTTPS for all communications
- Secure token storage

### Access Control

- IAM policies
- Resource-based policies
- Fine-grained permissions

## Best Practices

- **Use User Pools for Authentication**: User directory and auth
- **Use Identity Pools for AWS Access**: When users need AWS credentials
- **Enable MFA**: For additional security
- **Use Strong Password Policies**: Enforce complexity
- **Implement Token Refresh**: Handle token expiration
- **Use Lambda Triggers**: Customize authentication flows
- **Monitor Usage**: Track authentication events
- **Secure Token Storage**: Store tokens securely
- **Use HTTPS**: Encrypt all communications
- **Regular Security Reviews**: Review and update policies

## Use Cases

- **Mobile Apps**: User authentication for mobile applications
- **Web Applications**: User sign-up and sign-in
- **API Authentication**: Secure API access
- **AWS Resource Access**: Provide AWS credentials to users
- **Social Login**: Allow users to sign in with social providers
- **Enterprise SSO**: Integrate with SAML providers

## Integration with AWS Services

- **API Gateway**: Authorize API requests
- **Lambda**: Trigger functions on auth events
- **S3**: Control access to S3 resources
- **DynamoDB**: Control access to DynamoDB tables
- **IAM**: Map identities to IAM roles

## Limits

- **User Pools per Account**: 1,000
- **Users per User Pool**: Unlimited
- **Identity Pools per Account**: 100
- **App Clients per User Pool**: 50
- **Custom Attributes per User Pool**: 50

## Related Services

- [AWS IAM](../iam/index.md) - Access control
- [API Gateway](../../networking/api-gateway/index.md) - API authorization
- [AWS Lambda](../../compute/lambda/index.md) - Authentication triggers
