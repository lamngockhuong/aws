# EC2 Troubleshooting

This guide covers common EC2 issues and their solutions. Use this as a checklist when troubleshooting EC2 instances and related services.

## Instance Launch Issues

### Cannot Launch Instance

**Common Causes:**

- Insufficient capacity in Availability Zone
- Instance type not available
- Service limits exceeded
- Invalid configuration

**Solutions:**

- Try different Availability Zone
- Try different instance type
- Request limit increase
- Review launch configuration
- Check IAM permissions

### Instance Stuck in Pending

**Possible Causes:**

- Initialization taking time
- Resource constraints
- Configuration issues

**Solutions:**

- Wait a few minutes (normal for first launch)
- Check instance status checks
- Review CloudWatch logs
- Try launching in different AZ
- Check service health dashboard

## Connection Issues

### Cannot SSH to Linux Instance

**Checklist:**

1. **Instance State**: Verify instance is running
2. **Security Group**: Check inbound SSH rule (port 22)
3. **Public IP**: Verify instance has public IP
4. **Key Pair**: Use correct private key
5. **Network ACLs**: Check subnet-level rules
6. **Route Table**: Verify internet gateway route
7. **User**: Use correct username (ec2-user, ubuntu, etc.)

**Common Solutions:**

```bash
# Verify key permissions
chmod 400 your-key.pem

# Test connectivity
ping <public-ip>

# Try SSH with verbose output
ssh -v -i your-key.pem ec2-user@<public-ip>
```

### Cannot RDP to Windows Instance

**Checklist:**

1. **Instance State**: Verify instance is running
2. **Security Group**: Check inbound RDP rule (port 3389)
3. **Public IP**: Verify instance has public IP
4. **Password**: Get administrator password from console
5. **Network**: Check network configuration

**Solutions:**

- Get password from EC2 console
- Decrypt password with private key
- Use EC2 Instance Connect (if available)
- Check Windows firewall settings

## Performance Issues

### High CPU Utilization

**Symptoms:**

- Slow application response
- High CloudWatch CPU metrics
- Timeout errors

**Diagnosis:**

- Check CloudWatch CPU metrics
- Identify processes using CPU
- Review application logs
- Check for runaway processes

**Solutions:**

- Right-size instance (upgrade if needed)
- Optimize application code
- Use Auto Scaling
- Kill runaway processes
- Use placement groups for low latency

### High Memory Usage

**Symptoms:**

- Out of memory errors
- Application crashes
- Swap usage

**Diagnosis:**

- Check CloudWatch memory metrics
- Review system memory usage
- Check for memory leaks
- Review application configuration

**Solutions:**

- Upgrade to memory-optimized instance
- Optimize application memory usage
- Implement caching strategies
- Fix memory leaks
- Use swap space (temporary)

### Slow Disk I/O

**Symptoms:**

- Slow file operations
- High disk wait times
- Application timeouts

**Diagnosis:**

- Check CloudWatch disk metrics
- Review EBS volume type
- Check IOPS utilization
- Review disk queue depth

**Solutions:**

- Upgrade to io1/io2 volumes
- Increase IOPS provisioning
- Use multiple volumes in RAID
- Use instance store for temporary data
- Optimize application I/O patterns

### Network Performance Issues

**Symptoms:**

- Slow network transfers
- High latency
- Packet loss

**Diagnosis:**

- Check CloudWatch network metrics
- Verify enhanced networking
- Check security group rules
- Review network path

**Solutions:**

- Enable enhanced networking
- Use placement groups
- Optimize security group rules
- Use same region/AZ for low latency
- Check instance type network performance

## Status Check Failures

### System Status Check Failure

**Meaning:**

- Issue with underlying host
- Hardware problem
- Network connectivity issue

**Solutions:**

- Stop and start instance (moves to new host)
- Wait for AWS to resolve
- Contact AWS support if persistent
- Check service health dashboard

### Instance Status Check Failure

**Meaning:**

- Software or network issue
- Instance configuration problem
- Application not responding

**Solutions:**

- Check instance logs
- Review application status
- Verify network configuration
- Check security group rules
- Review system logs

## Storage Issues

### Cannot Attach EBS Volume

**Common Causes:**

- Volume in different AZ
- Instance limit reached (40 volumes)
- Volume already attached
- Invalid volume state

**Solutions:**

- Ensure volume in same AZ as instance
- Detach unused volumes
- Check volume state
- Verify instance state

### Volume Performance Issues

**Symptoms:**

- Slow I/O operations
- High latency
- Throttling

**Diagnosis:**

- Check volume type
- Review IOPS provisioning
- Check CloudWatch metrics
- Review volume size

**Solutions:**

- Upgrade to io1/io2 for high IOPS
- Increase IOPS provisioning
- Use gp3 with higher IOPS
- Increase volume size (for gp2)
- Use multiple volumes

### Snapshot Issues

**Cannot Create Snapshot:**

- Check volume state
- Verify permissions
- Check service limits
- Review volume encryption

**Slow Snapshot Creation:**

- Normal for large volumes
- First snapshot takes longer
- Subsequent snapshots incremental
- Check volume activity

## Security Issues

### Security Group Not Working

**Checklist:**

- Verify security group attached to instance
- Check rule configuration
- Verify source IP/CIDR
- Check outbound rules (for return traffic)
- Review network ACLs

**Solutions:**

- Review security group rules
- Test with temporary permissive rule
- Check for conflicting rules
- Verify source IP address
- Review VPC configuration

### IAM Role Issues

**Cannot Access AWS Services:**

- Verify IAM role attached
- Check role permissions
- Review instance metadata service
- Check service endpoints

**Solutions:**

- Attach IAM role to instance
- Verify role permissions
- Test with AWS CLI
- Check VPC endpoints
- Review IAM policies

## Network Issues

### No Internet Connectivity

**Checklist:**

- Verify public IP or Elastic IP
- Check security group outbound rules
- Review route table
- Verify internet gateway
- Check network ACLs

**Solutions:**

- Assign public IP or Elastic IP
- Add outbound rule to security group
- Verify internet gateway route
- Check NAT gateway (for private subnets)
- Review network ACL rules

### Cannot Access Between Instances

**Checklist:**

- Verify same VPC
- Check security group rules
- Review route tables
- Verify network ACLs
- Check instance state

**Solutions:**

- Ensure instances in same VPC
- Allow traffic in security groups
- Verify route table configuration
- Check network ACL rules
- Use private IPs for communication

## Cost Issues

### Unexpected Charges

**Common Causes:**

- Running instances 24/7
- Unattached EBS volumes
- Unused Elastic IPs
- Old snapshots
- Data transfer charges

**Solutions:**

- Stop unused instances
- Delete unattached volumes
- Release unused Elastic IPs
- Delete old snapshots
- Monitor data transfer

### High Costs

**Investigation:**

- Use Cost Explorer
- Filter by service and tags
- Review instance usage
- Check Reserved Instance utilization
- Analyze data transfer

**Optimization:**

- Right-size instances
- Use Reserved Instances
- Implement Auto Scaling
- Optimize storage
- Minimize data transfer

## Monitoring and Logging

### CloudWatch Issues

**Metrics Not Appearing:**

- Enable detailed monitoring
- Check IAM permissions
- Verify instance is running
- Wait for metric collection

**Logs Not Appearing:**

- Verify CloudWatch Logs agent
- Check IAM permissions
- Review log group configuration
- Check agent configuration

### Troubleshooting Tools

**AWS Tools:**

- CloudWatch Metrics
- CloudWatch Logs
- VPC Flow Logs
- Systems Manager
- EC2 Instance Connect

**System Tools:**

- `top`, `htop`: Process monitoring
- `df`, `du`: Disk usage
- `netstat`, `ss`: Network connections
- `iostat`: I/O statistics
- `sar`: System activity

## Best Practices for Troubleshooting

1. **Check Basics First**: Instance state, security groups, network
2. **Use CloudWatch**: Monitor metrics and logs
3. **Review Logs**: System logs, application logs
4. **Test Incrementally**: Make one change at a time
5. **Document Issues**: Keep notes of problems and solutions
6. **Use AWS Support**: For persistent issues
7. **Prevent Issues**: Implement monitoring and alerting

## Getting Help

### AWS Resources

- **AWS Documentation**: Comprehensive guides
- **AWS Support**: Technical support
- **AWS Forums**: Community help
- **AWS Health Dashboard**: Service status

### Diagnostic Commands

```bash
# Check instance metadata
curl http://169.254.169.254/latest/meta-data/

# Check IAM role credentials
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/

# Test connectivity
ping <target>
telnet <host> <port>

# Check system resources
free -h
df -h
top
```

## Related Documentation

- [EC2 Basics](./basics.md) - Getting started with EC2
- [EC2 Best Practices](./best-practices.md) - Best practices
- [CloudWatch Documentation](../../monitoring/cloudwatch/index.md) - Monitoring
