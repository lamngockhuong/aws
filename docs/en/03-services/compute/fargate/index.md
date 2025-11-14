# AWS Fargate

AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. It eliminates the need to provision and manage servers, allowing you to focus on building applications.

## Overview

Fargate removes the operational overhead of managing servers, clusters, and container orchestration infrastructure. You simply define your application requirements, and Fargate handles the rest.

## Key Features

- **Serverless**: No servers to provision or manage
- **Pay-per-Use**: Pay only for the resources you use
- **Automatic Scaling**: Scales automatically with your workload
- **Security**: Built-in isolation and security
- **ECS Integration**: Native integration with Amazon ECS
- **EKS Integration**: Support for Amazon EKS pods
- **VPC Integration**: Full VPC networking support
- **IAM Integration**: Fine-grained access control

## How It Works

### With ECS

1. Define your task with CPU and memory requirements
2. Fargate launches and manages the compute
3. Tasks run in isolated environments
4. Automatic scaling based on service configuration

### With EKS

1. Create a Fargate profile for your namespace
2. Pods matching the profile run on Fargate
3. No node management required
4. Automatic scaling with cluster autoscaler

## Pricing Model

- **ECS Fargate**: Billed per vCPU-hour and GB-hour
- **EKS Fargate**: Billed per vCPU-hour and GB-hour
- No charges for stopped tasks/pods
- No minimum fees or upfront costs

## Use Cases

- **Microservices**: Serverless containerized microservices
- **Batch Jobs**: On-demand batch processing
- **Development/Testing**: Quick container testing without infrastructure
- **Variable Workloads**: Workloads with unpredictable demand
- **Compliance**: Isolated workloads for compliance requirements

## Benefits

- **Reduced Operational Overhead**: No server management
- **Cost Efficiency**: Pay only for what you use
- **Fast Scaling**: Instant capacity when needed
- **Security**: Built-in isolation and security
- **Flexibility**: Easy to adjust resources per task

## Limitations

- **ECS Fargate**:

  - No GPU support
  - Limited to specific regions
  - No access to underlying OS

- **EKS Fargate**:
  - Limited pod configurations
  - No DaemonSets support
  - No privileged containers
  - No host networking

## Best Practices

- Right-size CPU and memory to optimize costs
- Use Fargate Spot for fault-tolerant workloads (ECS only)
- Implement proper health checks
- Use CloudWatch for monitoring and logging
- Leverage IAM roles for tasks/pods
- Implement auto scaling for variable workloads
- Use secrets management for sensitive data
- Monitor costs with Cost Explorer

## When to Use Fargate vs EC2

### Choose Fargate When

- You want to avoid server management
- Workloads are variable or unpredictable
- You need quick deployment without infrastructure setup
- Cost optimization through pay-per-use is important
- You don't need GPU support

### Choose EC2 When

- You need GPU instances
- You require specific instance configurations
- You have consistent, predictable workloads
- You need to optimize for cost with reserved instances
- You require access to the underlying OS

## Related Services

- [Amazon ECS](../ecs/index.md) - Container orchestration with Fargate
- [Amazon EKS](../eks/index.md) - Kubernetes with Fargate support
- [Amazon EC2](../ec2/index.md) - Virtual servers alternative
