# Amazon EC2

Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

## Overview

EC2 provides virtual computing environments, known as instances, that you can use to build and host your applications. With EC2, you can launch instances with a variety of operating systems, load them with your custom applications, manage your network's security, and access your resources.

## Key Features

- **Virtual Servers**: Launch instances with different configurations
- **Instance Types**: Wide variety of instance types optimized for different use cases
- **Operating Systems**: Multiple OS options including Linux and Windows
- **Elastic IP Addresses**: Static IP addresses for dynamic cloud computing
- **Auto Scaling**: Automatically scale your application up and down
- **Elastic Load Balancing**: Distribute incoming traffic across instances
- **Security Groups**: Virtual firewalls for your instances
- **Placement Groups**: Control instance placement for performance

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

- **Elastic Load Balancing**: Distribute traffic across instances
- **Auto Scaling**: Automatically adjust capacity
- **EBS**: Persistent block storage
- **VPC**: Network isolation and security
- **CloudWatch**: Monitoring and logging
- **IAM**: Access control

## Best Practices

- **Right-Size Instances**: Match instance type to workload
- **Use Reserved Instances**: For predictable workloads
- **Enable Monitoring**: Use CloudWatch for visibility
- **Implement Auto Scaling**: Handle variable demand
- **Use Security Groups**: Implement proper network security
- **Regular Backups**: Use EBS snapshots
- **Tag Resources**: For cost allocation and management
- **Use Spot Instances**: For fault-tolerant workloads

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
