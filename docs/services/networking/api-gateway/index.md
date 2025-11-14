# Amazon API Gateway

Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.

## Overview

API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.

## Key Features

- **REST APIs**: Build RESTful APIs
- **HTTP APIs**: Low-latency, cost-effective HTTP APIs
- **WebSocket APIs**: Real-time two-way communication
- **API Management**: Versioning, throttling, caching
- **Security**: Authentication, authorization, API keys
- **Monitoring**: CloudWatch integration, API logging
- **Integration**: Lambda, HTTP endpoints, AWS services
- **Developer Portal**: Self-service API discovery

## API Types

### REST APIs

- Full-featured REST API management
- Request/response transformation
- API keys and usage plans
- Request validation
- More features, higher cost

### HTTP APIs

- Low-latency, cost-effective
- Built-in OIDC and OAuth 2.0
- Automatic CORS
- Simpler configuration
- Lower cost

### WebSocket APIs

- Real-time two-way communication
- Persistent connections
- Route messages to backend services
- Lower latency than REST

## Core Concepts

### APIs

Collections of resources and methods that define your API.

### Resources

Logical entities that can be accessed via a URL path.

### Methods

HTTP verbs (GET, POST, PUT, DELETE, etc.) that define operations on resources.

### Integrations

Backend services that process API requests. Can be:

- Lambda functions
- HTTP endpoints
- AWS services
- Mock integrations

### Stages

Named references to deployments of your API. Examples: dev, staging, prod.

### Models

Data structures that define request and response payloads.

## Integration Types

### Lambda Integration

- Invoke Lambda functions
- Asynchronous or synchronous
- Automatic request/response mapping
- Error handling

### HTTP Integration

- Connect to HTTP endpoints
- Support for VPC endpoints
- Custom headers and parameters
- Timeout configuration

### AWS Service Integration

- Direct integration with AWS services
- IAM-based authorization
- Service-specific features
- Examples: S3, DynamoDB, SNS

### Mock Integration

- Return static responses
- Testing and development
- No backend required

## Security

### Authentication

- **API Keys**: Simple key-based authentication
- **IAM**: AWS IAM roles and policies
- **Lambda Authorizers**: Custom authorization logic
- **Cognito**: User pools and identity pools
- **OIDC/OAuth 2.0**: Standard protocols (HTTP APIs)

### Authorization

- Resource-based policies
- IAM policies
- Lambda authorizers
- Cognito user pools

### CORS

- Cross-Origin Resource Sharing
- Configure CORS headers
- Automatic CORS (HTTP APIs)

## Request/Response Processing

### Request Flow

1. Client sends request
2. API Gateway receives request
3. Request validation (if configured)
4. Authorization check
5. Integration request transformation
6. Backend service processes request
7. Integration response transformation
8. Response sent to client

### Transformations

- Request transformation: Modify request before sending to backend
- Response transformation: Modify response before sending to client
- Velocity Template Language (VTL)
- JSON mapping templates

## Features

### Caching

- Reduce backend load
- Improve response times
- Configurable TTL
- Per-stage caching
- Cache key customization

### Throttling

- Rate limiting per API key
- Burst and steady-state limits
- Per-method throttling
- Default limits: 10,000 requests/second

### Request Validation

- Validate request body
- Validate query parameters
- Validate headers
- JSON schema validation

### API Keys

- Identify API consumers
- Track usage per key
- Enable throttling per key
- Usage plans

### Usage Plans

- Associate API keys with stages
- Set throttling limits
- Set quota limits
- Track usage

## Monitoring

### CloudWatch Metrics

- Request count
- Latency
- Error rates
- Cache hits/misses
- Integration latency

### CloudWatch Logs

- Enable execution logging
- Log full requests/responses
- Log format customization
- Log retention

### X-Ray Integration

- Distributed tracing
- Service map visualization
- Performance analysis
- Error tracking

## Best Practices

- **Use HTTP APIs for Simple Use Cases**: Lower cost and latency
- **Use REST APIs for Complex Features**: When you need advanced features
- **Implement Proper Authentication**: Use appropriate auth method
- **Enable Caching**: For read-heavy workloads
- **Set Up Throttling**: Protect backend from overload
- **Use Stages**: Separate dev, staging, and production
- **Enable Logging**: For debugging and monitoring
- **Implement Request Validation**: Catch errors early
- **Use API Keys**: For usage tracking and throttling
- **Monitor Performance**: Use CloudWatch and X-Ray

## Use Cases

- **Microservices**: API frontend for microservices
- **Mobile Backends**: Backend for mobile applications
- **Serverless Applications**: API layer for serverless apps
- **Third-Party Integration**: Expose APIs to partners
- **Web Applications**: Backend API for web apps
- **Real-Time Applications**: WebSocket APIs for real-time

## Cost Optimization

- Use HTTP APIs instead of REST when possible
- Enable caching to reduce backend calls
- Use appropriate throttling limits
- Monitor and optimize API usage
- Use regional endpoints when possible
- Delete unused APIs and stages

## Limits

- **Request Size**: 10 MB (REST), 10 MB (HTTP)
- **Response Size**: 10 MB (REST), 10 MB (HTTP)
- **Timeout**: 29 seconds (REST), 30 seconds (HTTP)
- **Concurrent Requests**: Virtually unlimited
- **API Keys**: Unlimited
- **Usage Plans**: Unlimited

## Related Services

- [AWS Lambda](../compute/lambda/index.md) - Serverless compute
- [Amazon Cognito](../security/cognito/index.md) - User authentication
- [AWS IAM](../security/iam/index.md) - Access control
- [Amazon CloudWatch](../monitoring/cloudwatch/index.md) - Monitoring
