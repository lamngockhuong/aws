# Compute Overview

AWS offers a comprehensive suite of compute services to meet diverse workload requirements, from virtual servers to serverless functions.

## Overview

Compute services are the foundation of cloud applications. AWS provides multiple compute options, each optimized for specific use cases, from traditional virtual machines to modern serverless architectures.

## Compute Service Categories

### Virtual Servers

**Amazon EC2 (Elastic Compute Cloud)**

- Resizable virtual servers in the cloud
- Full control over operating system and applications
- Wide variety of instance types
- Suitable for: Traditional applications, custom configurations, full OS control

**Key Features:**

- Multiple instance types (general purpose, compute-optimized, memory-optimized, etc.)
- Flexible pricing (On-Demand, Reserved, Spot, Dedicated)
- Integration with VPC, EBS, and other AWS services
- Auto Scaling and Load Balancing support

### Container Services

**Amazon ECS (Elastic Container Service)**

- Fully managed container orchestration
- Supports Docker containers
- Two launch types: EC2 and Fargate
- Suitable for: Microservices, containerized applications

**Amazon EKS (Elastic Kubernetes Service)**

- Managed Kubernetes service
- Compatible with Kubernetes ecosystem
- Supports both EC2 and Fargate
- Suitable for: Kubernetes-based applications, multi-cloud deployments

**AWS Fargate**

- Serverless compute for containers
- No server management required
- Works with ECS and EKS
- Suitable for: Container workloads without server management

### Serverless Compute

**AWS Lambda**

- Run code without provisioning servers
- Event-driven execution
- Automatic scaling
- Pay per request
- Suitable for: Event processing, API backends, scheduled tasks

**Key Features:**

- Supports multiple runtimes (Node.js, Python, Java, Go, .NET, Ruby)
- Integrates with 200+ AWS services
- Automatic scaling from zero to thousands of concurrent executions
- Sub-second billing

### Application Hosting

**AWS Elastic Beanstalk**

- Platform-as-a-Service (PaaS)
- Deploy and scale web applications
- Supports multiple languages and frameworks
- Suitable for: Web applications, quick deployments

**AWS App Runner**

- Fully managed service to build and run containerized applications
- Automatic scaling and load balancing
- Source code or container image deployment
- Suitable for: Web applications, APIs, microservices

## Choosing the Right Compute Service

### Use EC2 When

- You need full control over the OS
- You have existing applications to migrate
- You need specific instance configurations
- You require long-running processes
- You need GPU instances

### Use Containers (ECS/EKS) When

- You're building microservices
- You want application portability
- You need container orchestration
- You're using Kubernetes

### Use Lambda When

- You have event-driven workloads
- You want to avoid server management
- You have variable or unpredictable traffic
- You need automatic scaling
- Cost optimization is important

### Use Fargate When

- You want containers without server management
- You have variable workloads
- You want to avoid cluster management
- Cost optimization through pay-per-use

## Compute Pricing Models

### On-Demand Instances

- Pay for compute capacity by the hour or second
- No upfront costs
- No long-term commitments
- Most flexible, highest cost

### Reserved Instances

- 1 or 3-year commitment
- Up to 72% savings compared to On-Demand
- Predictable workloads
- Payment options: All upfront, partial upfront, no upfront

### Spot Instances

- Bid on unused EC2 capacity
- Up to 90% savings
- Can be interrupted with 2-minute notice
- Fault-tolerant workloads

### Dedicated Instances

- Physical EC2 servers dedicated to your use
- Compliance and regulatory requirements
- No other customers share the hardware
- Higher cost

## Auto Scaling

### EC2 Auto Scaling

- Automatically adjust capacity
- Maintain application availability
- Scale based on demand
- Cost optimization

### Application Auto Scaling

- Scale ECS services, DynamoDB tables, and more
- Target tracking scaling policies
- Scheduled scaling
- Step scaling

## Load Balancing

### Application Load Balancer (ALB)

- Layer 7 load balancing
- Content-based routing
- SSL/TLS termination
- Container and serverless support

### Network Load Balancer (NLB)

- Layer 4 load balancing
- Ultra-low latency
- High performance
- Static IP addresses

### Classic Load Balancer

- Legacy load balancer
- Basic load balancing
- Not recommended for new deployments

## Best Practices

1. **Right-Size Compute**: Match instance type to workload
2. **Use Auto Scaling**: Handle variable demand automatically
3. **Implement Load Balancing**: Distribute traffic and improve availability
4. **Use Reserved Instances**: For predictable workloads
5. **Consider Spot Instances**: For fault-tolerant workloads
6. **Monitor Performance**: Use CloudWatch for visibility
7. **Implement Health Checks**: Ensure application availability
8. **Use Multiple AZs**: For high availability

## Related Services

- [EC2](../03-services/compute/ec2/index.md) - Virtual servers
- [Lambda](../03-services/compute/lambda/index.md) - Serverless compute
- [ECS](../03-services/compute/ecs/index.md) - Container orchestration
- [EKS](../03-services/compute/eks/index.md) - Kubernetes service
- [Fargate](../03-services/compute/fargate/index.md) - Serverless containers
