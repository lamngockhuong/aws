# AWS Lambda

AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the compute resources for you.

## Overview

Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume, and there's no charge when your code isn't running.

## Key Features

- **Serverless**: No infrastructure to manage
- **Event-Driven**: Responds to events from 200+ AWS services
- **Automatic Scaling**: Scales automatically from a few requests to thousands per second
- **Pay-per-Use**: Pay only for compute time consumed
- **Multiple Runtimes**: Support for Node.js, Python, Java, Go, .NET, Ruby, and custom runtimes
- **VPC Integration**: Connect to resources in your VPC
- **Dead Letter Queues**: Handle failed invocations
- **Reserved Concurrency**: Control maximum concurrent executions

## Core Concepts

### Functions

Your code packaged as a Lambda function. Functions can be written in supported languages or use custom runtimes.

### Invocations

Execution of a Lambda function. Can be synchronous or asynchronous.

### Event Sources

AWS services or custom applications that trigger Lambda functions. Examples:

- API Gateway
- S3 events
- DynamoDB streams
- SQS queues
- EventBridge rules

### Layers

Distribution mechanism for libraries, custom runtimes, and other function dependencies.

## Execution Model

### Execution Environment

- Isolated runtime environment
- Ephemeral storage (/tmp)
- Environment variables
- IAM execution role

### Cold Starts

- First invocation or after idle period
- Initialization overhead
- Can be minimized with provisioned concurrency

### Warm Starts

- Reuse of execution environment
- Faster invocation times
- Variables persist between invocations

## Pricing

- **Requests**: First 1M requests free, then $0.20 per 1M requests
- **Compute**: $0.0000166667 per GB-second
- **Free Tier**: 1M requests and 400,000 GB-seconds per month

## Use Cases

- **API Backends**: Serverless REST and GraphQL APIs
- **Data Processing**: Transform and process data streams
- **Real-time File Processing**: Process files uploaded to S3
- **Scheduled Tasks**: Cron-like scheduled executions
- **Event-Driven Workflows**: Orchestrate multi-step processes
- **Microservices**: Build serverless microservices architectures
- **Chatbots**: Natural language processing and responses

## Integration Patterns

### Synchronous Invocations

- API Gateway → Lambda
- Application Load Balancer → Lambda
- Direct invocation from applications
- Immediate response required

### Asynchronous Invocations

- S3 events → Lambda
- SNS topics → Lambda
- EventBridge → Lambda
- Retry on failure (up to 2 times)

### Stream-Based Invocations

- DynamoDB Streams → Lambda
- Kinesis Streams → Lambda
- Process records in batches
- Automatic scaling

## Best Practices

- **Function Design**:
  - Keep functions small and focused
  - Use environment variables for configuration
  - Implement proper error handling
  - Use layers for shared code

- **Performance**:
  - Minimize cold starts with provisioned concurrency
  - Optimize package size
  - Use connection pooling for databases
  - Implement caching where appropriate

- **Security**:
  - Use IAM roles with least privilege
  - Encrypt environment variables
  - Use VPC endpoints for private resources
  - Enable AWS X-Ray for tracing

- **Monitoring**:
  - Use CloudWatch for metrics and logs
  - Set up alarms for errors and throttles
  - Monitor duration and memory usage
  - Use X-Ray for distributed tracing

- **Cost Optimization**:
  - Right-size memory allocation
  - Use appropriate timeout values
  - Leverage reserved concurrency wisely
  - Monitor and optimize function duration

## Limits

- **Memory**: 128 MB to 10,240 MB (1 MB increments)
- **Timeout**: Up to 15 minutes
- **Package Size**: 50 MB (zipped), 250 MB (unzipped)
- **Environment Variables**: 4 KB total
- **Concurrent Executions**: 1,000 per region (can be increased)
- **Temporary Storage**: 512 MB to 10,240 MB

## Related Services

- [API Gateway](../networking/api-gateway/index.md) - HTTP APIs and REST APIs
- [EventBridge](../networking/index.md) - Event-driven architectures
- [DynamoDB](../database/dynamodb/index.md) - NoSQL database with streams
- [S3](../storage/s3/index.md) - Object storage with event triggers
