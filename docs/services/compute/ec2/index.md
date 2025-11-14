# Amazon EC2

Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud. Using Amazon EC2 reduces hardware costs so you can develop and deploy applications faster.

## Overview

EC2 provides virtual computing environments, known as instances, that you can use to build and host your applications. With EC2, you can launch as many or as few virtual servers as you need, configure security and networking, and manage storage. You can add capacity (scale up) to handle compute-heavy tasks, such as monthly or yearly processes, or spikes in website traffic. When usage decreases, you can reduce capacity (scale down) again.

An EC2 instance is a virtual server in the AWS Cloud. When you launch an EC2 instance, the instance type that you specify determines the hardware available to your instance. Each instance type offers a different balance of compute, memory, network, and storage resources.

## Key Features

- **Instances**: Virtual servers that you can launch with different configurations
- **Amazon Machine Images (AMIs)**: Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional software)
- **Instance Types**: Various configurations of CPU, memory, storage, networking capacity, and graphics hardware for your instances
- **Amazon EBS Volumes**: Persistent storage volumes for your data using Amazon Elastic Block Store
- **Instance Store Volumes**: Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance
- **Key Pairs**: Secure login information for your instances. AWS stores the public key and you store the private key in a secure place
- **Security Groups**: A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances, and the destination IP ranges to which your instances can connect
- **Placement Groups**: Control instance placement for performance and availability

## Core Concepts

### Instances

Virtual servers in the cloud. You can launch multiple instances from a single Amazon Machine Image (AMI).

### Amazon Machine Images (AMIs)

Pre-configured templates for your instances that package the bits you need for your server (including the operating system and additional software).

### Instance Types

Different combinations of CPU, memory, storage, and networking capacity. Optimized for different use cases.

### Security Groups

Virtual firewalls that control the traffic allowed to reach your instances.

### Key Pairs

Used to securely connect to your instances. Consists of a public key (stored by AWS) and a private key (stored by you).

## Instance Lifecycle

### Launching

- Choose an AMI, instance type, and configure instance details
- Configure security groups and key pairs
- Review and launch

### Running

- Instance is running and ready to use
- You're billed for compute time
- Can be stopped, terminated, or rebooted

### Stopping

- Instance is stopped (not terminated)
- Data on instance store volumes is lost
- EBS volumes are preserved
- You're not billed for compute time

### Terminating

- Instance is permanently deleted
- All data is lost
- Cannot be recovered

## Use Cases

- **Web Applications**: Host web servers and applications
- **Development/Testing**: Quick and cost-effective development environments
- **High Performance Computing**: Compute-intensive workloads
- **Machine Learning**: Training and inference workloads
- **Big Data Processing**: Data analytics and processing
- **Enterprise Applications**: Business-critical applications

## Integration with AWS Services

### Services to Use with Amazon EC2

- **Amazon EC2 Auto Scaling**: Helps ensure you have the correct number of Amazon EC2 instances available to handle the load for your application
- **AWS Backup**: Automate backing up your Amazon EC2 instances and the Amazon EBS volumes attached to them
- **Amazon CloudWatch**: Monitor your instances and Amazon EBS volumes
- **Elastic Load Balancing**: Automatically distribute incoming application traffic across multiple instances
- **Amazon GuardDuty**: Detect potentially unauthorized or malicious use of your EC2 instances
- **EC2 Image Builder**: Automate the creation, management, and deployment of customized, secure, and up-to-date server images
- **AWS Launch Wizard**: Size, configure, and deploy AWS resources for third-party applications without having to manually identify and provision individual AWS resources
- **AWS Systems Manager**: Perform operations at scale on EC2 instances with this secure end-to-end management solution
- **VPC**: Network isolation and security
- **IAM**: Access control

### Additional Compute Services

- **Amazon Lightsail**: Build websites or web applications using a cloud platform that provides the resources you need to deploy your project quickly, for a low, predictable monthly price
- **Amazon ECS**: Deploy, manage, and scale containerized applications on a cluster of EC2 instances
- **Amazon EKS**: Run your Kubernetes applications on AWS

## Access Amazon EC2

You can create and manage your Amazon EC2 instances using the following interfaces:

- **Amazon EC2 Console**: A simple web interface to create and manage Amazon EC2 instances and resources
- **AWS Command Line Interface (CLI)**: Enables you to interact with AWS services using commands in your command-line shell
- **AWS CloudFormation**: Amazon EC2 supports creating resources using AWS CloudFormation templates
- **AWS SDKs**: Language-specific APIs for building applications
- **AWS Tools for PowerShell**: PowerShell modules for scripting operations on your AWS resources
- **Query API**: Amazon EC2 provides a Query API with HTTP or HTTPS requests

## Pricing for Amazon EC2

Amazon EC2 provides the following pricing options:

- **Free Tier**: You can get started with Amazon EC2 for free using the AWS Free Tier
- **On-Demand Instances**: Pay for the instances you use by the hour or second
- **Reserved Instances**: Significant discounts (up to 72%) for predictable workloads with 1-year or 3-year commitments
- **Spot Instances**: Up to 90% discount for fault-tolerant workloads that can be interrupted
- **Savings Plans**: Flexible pricing model that provides savings up to 72% in exchange for a commitment to a consistent amount of usage

## Compliance

Amazon EC2 supports the processing, storage, and transmission of credit card data by a merchant or service provider, and has been validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS). For more information about PCI DSS, see [PCI DSS Level 1](https://aws.amazon.com/compliance/pci-dss-level-1-faqs/).

## Best Practices

- **Right-Size Instances**: Match instance type to workload
- **Use Reserved Instances**: For predictable workloads
- **Enable Monitoring**: Use CloudWatch for visibility
- **Implement Auto Scaling**: Handle variable demand
- **Use Security Groups**: Implement proper network security
- **Regular Backups**: Use EBS snapshots or AWS Backup
- **Tag Resources**: For cost allocation and management
- **Use Spot Instances**: For fault-tolerant workloads
- **Use EC2 Capacity Manager**: For capacity planning and optimization

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [Instance Types](./instance-types.md) - Choosing the right instance type
- [Networking](./networking.md) - EC2 networking configuration
- [Storage](./storage.md) - EC2 storage options
- [Placement Groups](./placement-groups.md) - Instance placement strategies
- [Best Practices](./best-practices.md) - EC2 best practices
- [Cost Optimization](./cost-optimization.md) - Optimize EC2 costs
- [Troubleshooting](./troubleshooting.md) - Common issues and solutions
- [Exam Notes](./exam-notes.md) - EC2 for certification exams

## AWS Documentation

This documentation is based on the latest AWS EC2 User Guide. For the most up-to-date information, refer to:

- [Amazon EC2 User Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html) - Official AWS documentation
- [Get Started with Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) - Getting started tutorial
