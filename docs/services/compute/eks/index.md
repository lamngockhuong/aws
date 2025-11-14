# Amazon EKS

Amazon Elastic Kubernetes Service (EKS) is a managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes control plane.

## Overview

EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. It automatically detects and replaces unhealthy control plane instances and provides automated version upgrades and patching.

## Key Features

- **Managed Control Plane**: Fully managed Kubernetes control plane
- **High Availability**: Multi-AZ control plane deployment
- **Kubernetes Compatibility**: Certified Kubernetes conformant
- **Security**: IAM integration, VPC networking, encryption
- **Auto Scaling**: Cluster Autoscaler and Karpenter support
- **Observability**: CloudWatch Container Insights integration
- **Networking**: VPC CNI for native AWS networking
- **Add-ons**: Managed add-ons for common requirements

## Core Concepts

### EKS Cluster

A Kubernetes cluster managed by AWS. The control plane runs on AWS-managed infrastructure.

### Node Groups

Groups of EC2 instances that run your containerized applications. Can be managed or self-managed.

### Pods

The smallest deployable units in Kubernetes, containing one or more containers.

### Services

Abstract way to expose an application running on a set of pods as a network service.

### Deployments

Manage the desired state for your pods and ReplicaSets.

## Node Types

### Managed Node Groups

- AWS manages the lifecycle of EC2 instances
- Automatic updates and patching
- Simplified cluster management
- Supports multiple instance types

### Self-Managed Node Groups

- Full control over EC2 instances
- Custom AMIs and configurations
- More flexibility, more responsibility

### Fargate

- Serverless compute for pods
- No node management required
- Pay only for resources used
- Limited to specific pod configurations

## Networking

### VPC CNI

- Native AWS networking integration
- Pods get VPC IP addresses
- Security groups at pod level
- High performance networking

### Service Mesh

- AWS App Mesh for microservices communication
- Istio support available
- Traffic management and observability

## Use Cases

- **Enterprise Kubernetes**: Production-grade Kubernetes on AWS
- **Microservices**: Complex microservices architectures
- **Multi-Cloud**: Kubernetes workloads across clouds
- **CI/CD**: Container-based development workflows
- **Machine Learning**: ML workloads with GPU support

## Integration with AWS Services

- **ECR**: Container image registry
- **IAM**: Kubernetes RBAC integration with AWS IAM
- **VPC**: Native networking and security
- **CloudWatch**: Logging and monitoring
- **ALB Ingress Controller**: Application load balancing
- **EBS/EFS**: Persistent storage for pods
- **Secrets Manager**: Kubernetes secrets integration

## Best Practices

- Use managed node groups for most workloads
- Enable cluster logging to CloudWatch
- Implement pod security policies
- Use IAM roles for service accounts (IRSA)
- Enable encryption at rest for etcd
- Implement network policies for pod-to-pod communication
- Use Karpenter for efficient node scaling
- Enable CloudWatch Container Insights
- Implement proper backup and disaster recovery
- Use GitOps workflows (ArgoCD, Flux)

## Security Considerations

- Enable encryption for secrets in etcd
- Use IAM roles for service accounts
- Implement network policies
- Regular security updates and patching
- Enable audit logging
- Use private endpoints for control plane access
- Implement least privilege IAM policies

## Related Services

- [Amazon ECS](../ecs/index.md) - Container orchestration service
- [AWS Fargate](../fargate/index.md) - Serverless compute
- [Amazon EC2](../ec2/index.md) - Virtual servers
