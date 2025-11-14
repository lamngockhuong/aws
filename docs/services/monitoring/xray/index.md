# AWS X-Ray

AWS X-Ray helps developers analyze and debug distributed applications, including those built using a microservices architecture.

## Overview

X-Ray provides a complete view of requests as they travel through your application, showing a map of your application's underlying components and helping you identify performance bottlenecks and errors.

## Key Features

- **Distributed Tracing**: End-to-end request tracing
- **Service Map**: Visualize application architecture
- **Performance Analysis**: Identify bottlenecks
- **Error Tracking**: Find and debug errors
- **Sampling**: Control trace volume
- **Annotations**: Add custom metadata
- **Filtering**: Filter traces by criteria
- **Integration**: Works with many AWS services

## Core Concepts

### Traces

End-to-end request paths through your application. A trace consists of segments and subsegments.

### Segments

Represent work done by a single service. Contain:

- Timing information
- Request/response data
- Metadata
- Subsegments

### Subsegments

Represent work done within a service, such as:

- Database queries
- HTTP calls
- External service calls

### Service Map

Visual representation of your application architecture showing:

- Services and their relationships
- Request flow
- Error rates
- Latency

## How It Works

### Instrumentation

1. **SDK**: Instrument your application with X-Ray SDK
2. **Sampling**: X-Ray decides which requests to trace
3. **Segments**: Application creates segments for work
4. **Submission**: Segments sent to X-Ray service
5. **Processing**: X-Ray processes and stores traces
6. **Visualization**: View traces in X-Ray console

### Sampling

- Control which requests are traced
- Reduce cost and overhead
- Configurable sampling rules
- Default: 1 request per second, 5% of additional requests

## Supported Services

### Automatic Instrumentation

- **API Gateway**: Automatic tracing
- **Lambda**: Automatic tracing
- **Elastic Beanstalk**: Automatic tracing
- **ECS**: Container-based tracing
- **EC2**: SDK-based tracing

### Manual Instrumentation

- **Applications**: Use X-Ray SDK
- **Custom Segments**: Add custom segments
- **Annotations**: Add metadata
- **Metadata**: Add key-value pairs

## X-Ray SDK

### Supported Languages

- Java
- Node.js
- Python
- .NET
- Go
- Ruby

### Features

- Automatic instrumentation
- Manual instrumentation
- Annotations and metadata
- Subsegments
- Error recording

## Service Map

### Components

- **Services**: Your application services
- **Edges**: Connections between services
- **Metrics**: Error rate, latency, throughput
- **Time Range**: Filter by time period

### Use Cases

- Understand application architecture
- Identify dependencies
- Find performance bottlenecks
- Track error propagation

## Trace Analysis

### Trace Details

- Complete request path
- Timing information
- Request/response data
- Error information
- Annotations and metadata

### Filtering

- Filter by service
- Filter by error
- Filter by response time
- Filter by user
- Custom filters

## Best Practices

- **Enable X-Ray**: For all services
- **Use Sampling**: Control trace volume
- **Add Annotations**: Custom metadata
- **Monitor Service Map**: Track architecture
- **Set Up Alarms**: For error rates
- **Use Filtering**: Find specific traces
- **Instrument All Services**: Complete visibility
- **Monitor Costs**: X-Ray charges per trace
- **Use Annotations**: For debugging
- **Regular Reviews**: Analyze performance

## Use Cases

- **Microservices Debugging**: Debug distributed systems
- **Performance Optimization**: Find slow operations
- **Error Tracking**: Identify and fix errors
- **Architecture Understanding**: Visualize application
- **Dependency Analysis**: Understand service dependencies
- **Troubleshooting**: Debug production issues

## Integration with AWS Services

### API Gateway

- Automatic tracing
- Request/response data
- Error tracking

### Lambda

- Automatic tracing
- Function execution time
- Error tracking

### ECS/EKS

- Container-based tracing
- Service discovery
- Load balancer integration

### CloudWatch

- Metrics from traces
- Alarms on error rates
- Log integration

## Cost Optimization

- Use sampling to control trace volume
- Set appropriate sampling rules
- Monitor X-Ray costs
- Use filtering to reduce analysis time
- Delete old traces (automatic after 30 days)

## Limits

- **Traces per Second**: Unlimited (with sampling)
- **Trace Retention**: 30 days
- **Annotations per Segment**: 50
- **Metadata Size**: 64 KB per segment
- **Subsegments per Segment**: 1,000

## Related Services

- [Amazon CloudWatch](../cloudwatch/index.md) - Metrics and alarms
- [AWS CloudTrail](../cloudtrail/index.md) - API logging
- [API Gateway](../../networking/api-gateway/index.md) - API tracing
- [AWS Lambda](../../compute/lambda/index.md) - Function tracing
