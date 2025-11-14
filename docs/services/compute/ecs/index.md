# Amazon ECS

Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications.

## Overview

ECS eliminates the need to install, operate, and scale your own container orchestration infrastructure. It integrates seamlessly with AWS services and provides a secure, scalable platform for running containers.

## Key Features

- **Fully Managed**: No infrastructure to manage, automatic scaling
- **Multiple Launch Types**: EC2 and Fargate launch types
- **Task Definitions**: Declarative configuration for containers
- **Service Management**: Long-running tasks with automatic restarts
- **Load Balancing**: Integration with ALB and NLB
- **Auto Scaling**: Automatic scaling based on CloudWatch metrics
- **Security**: IAM roles, security groups, and encryption support
- **Networking**: VPC integration with public/private subnets

## Core Concepts

### Clusters

A logical grouping of tasks or services. Clusters can use EC2 instances or Fargate.

### Task Definitions

Blueprints for your applications that describe:

- Container images to use
- CPU and memory requirements
- Networking configuration
- IAM roles
- Environment variables
- Logging configuration

### Tasks

Instances of a task definition running in a cluster. Tasks can run standalone or as part of a service.

### Services

Maintains a specified number of running tasks simultaneously. Services handle:

- Task placement
- Load balancing
- Auto scaling
- Health checks
- Rolling updates

## Launch Types

### EC2 Launch Type

- Run containers on EC2 instances you manage
- Full control over instance types and configuration
- Cost-effective for consistent workloads
- Requires cluster management

### Fargate Launch Type

- Serverless compute for containers
- No EC2 instances to manage
- Pay only for resources used
- Automatic scaling and patching

## Use Cases

- **Microservices**: Deploy and manage microservices architectures
- **Batch Processing**: Run batch jobs and scheduled tasks
- **Web Applications**: Host web applications with load balancing
- **CI/CD Pipelines**: Container-based build and deployment
- **Hybrid Workloads**: Mix EC2 and Fargate in the same cluster

## Integration with AWS Services

- **Application Load Balancer**: Distribute traffic across tasks
- **CloudWatch**: Monitoring, logging, and metrics
- **IAM**: Fine-grained access control
- **VPC**: Network isolation and security
- **ECR**: Container image registry
- **Auto Scaling**: Automatic capacity management

## Best Practices

- Use Fargate for most workloads to reduce operational overhead
- Implement health checks for reliable service management
- Use task placement strategies for optimal distribution
- Enable CloudWatch Container Insights for monitoring
- Implement proper IAM roles with least privilege
- Use secrets management (Secrets Manager, Parameter Store)
- Configure log aggregation to CloudWatch Logs
- Implement auto scaling based on CPU/memory metrics

## Related Services

- [AWS Fargate](./fargate/index.md) - Serverless compute for containers
- [Amazon EKS](./eks/index.md) - Kubernetes on AWS
- [Amazon EC2](../ec2/index.md) - Virtual servers
