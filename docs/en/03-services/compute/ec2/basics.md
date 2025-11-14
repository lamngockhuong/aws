# EC2 Basics

This guide covers the fundamentals of launching and managing Amazon EC2 instances, from choosing the right configuration to connecting to your instances.

## Getting Started

### Prerequisites

- AWS account with appropriate permissions
- Basic understanding of cloud computing concepts
- Familiarity with command-line tools (optional)

### First Steps

1. **Sign in to AWS Console**: Access EC2 service
2. **Choose a Region**: Select the region closest to your users
3. **Launch an Instance**: Use the Launch Instance wizard
4. **Connect to Instance**: Use SSH (Linux) or RDP (Windows)

## Launching an Instance

### Step 1: Choose an AMI

**Amazon Machine Images (AMIs)** are templates that contain:

- Operating system (Linux, Windows, etc.)
- Application server or software
- Configuration settings

**Types of AMIs:**

- **Amazon Linux AMI**: Optimized for AWS
- **Ubuntu**: Popular Linux distribution
- **Windows Server**: Microsoft Windows
- **Custom AMIs**: Your own configured images

### Step 2: Choose an Instance Type

Instance types determine:

- **vCPU**: Number of virtual CPUs
- **Memory**: Amount of RAM
- **Storage**: Instance store volumes
- **Network Performance**: Network bandwidth

**Common Instance Families:**

- **General Purpose**: Balanced compute, memory, and networking
- **Compute Optimized**: High-performance processors
- **Memory Optimized**: Large memory for in-memory databases
- **Storage Optimized**: High, sequential read/write access
- **Accelerated Computing**: Hardware accelerators (GPUs, FPGAs)

### Step 3: Configure Instance Details

**Key Configuration Options:**

- **Number of Instances**: Launch one or multiple instances
- **Purchasing Options**: On-Demand, Reserved, Spot, Dedicated
- **Network**: VPC and subnet selection
- **IAM Role**: Permissions for the instance
- **Shutdown Behavior**: Stop or terminate
- **Monitoring**: Enable detailed monitoring

### Step 4: Add Storage

**Storage Options:**

- **Root Volume**: Boot volume for the OS
- **Additional EBS Volumes**: Persistent block storage
- **Instance Store Volumes**: Ephemeral storage (some instance types)

**Volume Types:**

- **gp3**: General purpose SSD (recommended)
- **gp2**: General purpose SSD (legacy)
- **io1/io2**: Provisioned IOPS SSD
- **st1**: Throughput optimized HDD
- **sc1**: Cold HDD

### Step 5: Add Tags

Tags help you:

- Organize resources
- Track costs
- Manage resources programmatically

**Common Tags:**

- Name: Instance name
- Environment: dev, staging, prod
- Project: Project identifier
- Owner: Team or individual

### Step 6: Configure Security Group

**Security Groups** are virtual firewalls that control:

- Inbound traffic (to your instance)
- Outbound traffic (from your instance)

**Best Practices:**

- Restrict SSH/RDP access to your IP
- Use least privilege principle
- Separate security groups by function
- Document security group rules

### Step 7: Review and Launch

- Review all configurations
- Select or create a key pair
- Launch the instance

## Connecting to Instances

### Linux/Unix Instances

**Using SSH:**

```bash
ssh -i your-key.pem ec2-user@public-ip-address
```

**Common Users:**

- Amazon Linux: `ec2-user`
- Ubuntu: `ubuntu`
- RHEL: `ec2-user` or `root`
- SUSE: `ec2-user` or `root`

### Windows Instances

**Using RDP:**

1. Get the administrator password from EC2 console
2. Download the RDP file
3. Connect using Remote Desktop

**Using EC2 Instance Connect:**

- Browser-based SSH connection
- No need to manage keys
- Available for Amazon Linux 2

## Instance Management

### Starting and Stopping

- **Start**: Launch a stopped instance
- **Stop**: Gracefully shut down (data preserved)
- **Reboot**: Restart without stopping
- **Terminate**: Permanently delete instance

### Monitoring

**CloudWatch Metrics:**

- CPU utilization
- Network in/out
- Disk read/write
- Status checks

**Status Checks:**

- **System Status**: Physical host issues
- **Instance Status**: Software/network issues

### Modifying Instances

**What Can Be Modified:**

- Instance type (stop instance first)
- Security groups
- EBS volumes (add/remove)
- User data (before first launch)

**What Cannot Be Modified:**

- AMI (must launch new instance)
- Placement group (after launch)
- Tenancy (after launch)

## Common Tasks

### Installing Software

**Amazon Linux:**

```bash
sudo yum update -y
sudo yum install -y package-name
```

**Ubuntu:**

```bash
sudo apt update
sudo apt install -y package-name
```

### Configuring Web Server

**Apache (Amazon Linux):**

```bash
sudo yum install -y httpd
sudo systemctl start httpd
sudo systemctl enable httpd
```

**Nginx (Ubuntu):**

```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Transferring Files

**Using SCP:**

```bash
scp -i key.pem file.txt ec2-user@public-ip:/path/
```

**Using SFTP:**

```bash
sftp -i key.pem ec2-user@public-ip
```

## Security Best Practices

1. **Use Key Pairs**: Never share private keys
2. **Restrict Security Groups**: Only allow necessary ports
3. **Keep Systems Updated**: Regular security patches
4. **Use IAM Roles**: Instead of access keys on instances
5. **Enable CloudWatch Logs**: Monitor system logs
6. **Use VPC**: Network isolation
7. **Encrypt EBS Volumes**: Protect data at rest

## Cost Optimization

1. **Right-Size Instances**: Match workload to instance type
2. **Use Reserved Instances**: For predictable workloads (up to 72% savings)
3. **Use Spot Instances**: For fault-tolerant workloads (up to 90% savings)
4. **Stop Unused Instances**: Don't pay for stopped instances
5. **Use Auto Scaling**: Scale down during low demand
6. **Monitor Costs**: Use Cost Explorer and billing alerts

## Next Steps

- [Instance Types](./instance-types.md) - Learn about different instance types
- [Networking](./networking.md) - Configure EC2 networking
- [Storage](./storage.md) - Understand EC2 storage options
- [Best Practices](./best-practices.md) - EC2 best practices
