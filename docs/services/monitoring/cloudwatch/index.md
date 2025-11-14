# Amazon CloudWatch

Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS, hybrid, and on-premises applications and infrastructure resources.

## Overview

CloudWatch collects monitoring and operational data in the form of logs, metrics, and events, and provides you with a unified view of AWS resources, applications, and services.

## Key Features

- **Metrics**: Collect and track metrics
- **Logs**: Centralized log management
- **Alarms**: Automated actions based on thresholds
- **Dashboards**: Customizable visualization
- **Events**: Event-driven automation
- **Insights**: Log analytics and queries
- **Synthetics**: Monitor endpoints and APIs
- **ServiceLens**: End-to-end application monitoring

## Core Concepts

### Metrics

Time-ordered data points that represent a measurement over time. Examples:

- CPU utilization
- Network traffic
- Request count
- Error rate

### Namespaces

Containers for metrics. AWS services use namespaces like `AWS/EC2`, `AWS/S3`.

### Dimensions

Name-value pairs that uniquely identify a metric. Examples:

- Instance ID
- Auto Scaling Group
- Environment

### Alarms

Monitor metrics and perform actions when thresholds are crossed.

### Dashboards

Customizable home pages for monitoring resources.

## Metrics

### Standard Metrics

- Automatically collected by AWS services
- No additional configuration
- 1-minute or 5-minute granularity
- Free tier available

### Custom Metrics

- Metrics you publish
- Any application or business metric
- 1-second to 1-hour granularity
- Charged per metric

### Metric Math

- Perform calculations on metrics
- Create composite metrics
- Statistical functions
- Time-series functions

### Anomaly Detection

- Machine learning-based detection
- Identify unusual patterns
- Reduce false alarms
- Automatic baseline learning

## Logs

### Log Groups

Containers for log streams. Organize logs by application or service.

### Log Streams

Sequences of log events from the same source. Instances, containers, etc.

### Log Insights

- Query log data using SQL-like syntax
- Real-time log analysis
- Visualize query results
- Save queries for reuse

### Metric Filters

- Extract metrics from logs
- Create CloudWatch metrics from log data
- No code changes required
- Cost-effective monitoring

## Alarms

### Alarm States

- **OK**: Within threshold
- **ALARM**: Threshold breached
- **INSUFFICIENT_DATA**: Not enough data

### Alarm Actions

- **SNS Notifications**: Send notifications
- **Auto Scaling**: Scale resources
- **EC2 Actions**: Stop, terminate, reboot instances
- **Lambda**: Invoke functions
- **Systems Manager**: Run automation

### Composite Alarms

- Combine multiple alarms
- Reduce alarm noise
- Complex alerting logic
- AND/OR conditions

## Dashboards

### Custom Dashboards

- Visualize metrics and logs
- Multiple widgets
- Auto-refresh
- Share with team

### Widget Types

- Line charts
- Number widgets
- Logs table
- Alarm status

## Events (EventBridge)

### Event Rules

- Match incoming events
- Route to targets
- Schedule-based rules
- Event pattern matching

### Targets

- Lambda functions
- SNS topics
- SQS queues
- Step Functions
- Many more

## CloudWatch Insights

### Container Insights

- Monitor containerized applications
- ECS, EKS, Fargate support
- Performance metrics
- Log aggregation

### Lambda Insights

- Monitor Lambda functions
- Performance metrics
- Error tracking
- Cold start analysis

### Contributor Insights

- Identify top contributors to metrics
- Anomaly detection
- Cost optimization insights

## Best Practices

- **Set Up Alarms**: For critical metrics
- **Use Dashboards**: For visibility
- **Enable Logging**: For troubleshooting
- **Use Metric Filters**: Extract metrics from logs
- **Implement Log Retention**: Control costs
- **Use Anomaly Detection**: Reduce false alarms
- **Monitor Costs**: CloudWatch can be expensive
- **Use Log Insights**: For log analysis
- **Set Up Composite Alarms**: Reduce noise
- **Regular Reviews**: Review and optimize alarms

## Use Cases

- **Application Monitoring**: Monitor application performance
- **Infrastructure Monitoring**: Monitor AWS resources
- **Log Management**: Centralized log storage and analysis
- **Alerting**: Automated notifications
- **Capacity Planning**: Track resource utilization
- **Troubleshooting**: Debug issues with logs and metrics

## Cost Optimization

- Use standard metrics (free tier)
- Set appropriate log retention
- Use metric filters instead of custom metrics when possible
- Delete unused dashboards
- Use appropriate metric granularity
- Monitor CloudWatch costs
- Use Log Insights efficiently

## Limits

- **Metrics per Namespace**: Unlimited
- **Alarms per Account**: 5,000
- **Dashboards per Account**: 3,000
- **Log Retention**: 1 day to forever
- **Metric Data Retention**: 15 months

## Related Services

- [AWS X-Ray](./xray/index.md) - Distributed tracing
- [AWS CloudTrail](./cloudtrail/index.md) - API logging
- [AWS Systems Manager](./index.md) - Automation
- [Amazon SNS](./index.md) - Notifications
