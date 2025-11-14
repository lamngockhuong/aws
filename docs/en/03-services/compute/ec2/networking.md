# EC2 Networking

## Summary

- EC2 networking is built on **VPC, subnets, Elastic Network Interfaces, IP addressing, Security Groups and Network ACLs**, which together control how instances talk to each other, the internet, and AWS services.
- **Security Groups (stateful)** are the primary firewall at the instance level, while **Network ACLs (stateless)** act at the subnet level as an additional guardrail.
- **Enhanced networking** (Nitro/ENA, EFA) provides higher bandwidth, lower latency and higher PPS for HPC/ML or network‑intensive workloads.
- A well‑designed layout of **public/private subnets plus Internet/NAT Gateways** gives you a secure, cost‑efficient, and high‑performing network for EC2.

## Typical EC2 networking layout in a VPC

```mermaid
flowchart LR
  Internet((Internet)) --> IGW[Internet Gateway]
  IGW --> RTpub[Route Table (public)]
  RTpub --> PubSubnet[Public Subnet]
  PubSubnet --> ALB[ALB / Bastion / NAT GW]

  PvtSubnet[Private Subnet] -->|Routes| RTpvt[Route Table (private)]
  RTpvt --> NAT[NAT Gateway]
  NAT --> IGW

  PvtSubnet --> EC2A[EC2 App Server]
  PvtSubnet --> EC2B[EC2 App Server]
  EC2A & EC2B --> ENI[ENI + Private IPs]
  EC2A & EC2B --> SG[Security Groups]
  EC2A & EC2B --> CW[CloudWatch + VPC Flow Logs]
```

## Best Practices

- Place **application and database tiers in private subnets**, and reserve public subnets for load balancers, NAT Gateways, and bastion hosts.
- Design **Security Groups by function** (web/app/db), follow least privilege, and reference other security groups instead of wide CIDR ranges like `0.0.0.0/0` whenever possible.
- Enable **VPC Flow Logs** on critical VPCs/subnets/ENIs to capture flow‑level visibility for troubleshooting and security investigations.
- Turn on **enhanced networking** (ENA/EFA) for workloads that need high throughput or low latency; verify the instance type supports it.
- Use **Elastic IPs sparingly**: prefer private IP + NAT/VPN/Direct Connect for outbound access, and release idle Elastic IPs to avoid charges.
- Keep routing simple and explicit: internet via **Internet Gateway** for public subnets, outbound from private subnets via **NAT Gateway**, and avoid unnecessary routing complexity.
- Continuously **monitor network metrics and logs** (CloudWatch, VPC Flow Logs) and set alarms for abnormal traffic patterns, high latency, or connectivity failures.

## Exam Notes

- Be able to compare **Security Groups (stateful, instance‑level)** and **Network ACLs (stateless, subnet‑level)** and know typical scenarios where each is used.
- For **internet connectivity**: public subnet + public/Elastic IP + Internet Gateway; for outbound‑only internet from private subnets: NAT Gateway/NAT Instance.
- Questions about **low‑latency/high‑throughput** between instances often point to Cluster placement groups + enhanced networking (ENA/EFA) + current‑generation instances.
- For security scenarios, AWS best practice is: deny‑all by default, explicitly allow only necessary traffic in Security Groups, enable VPC Flow Logs, and separate environments (dev/stage/prod) via VPCs/subnets.

## AWS documentation

- [Amazon EC2 security groups for your EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html)
- [Security group rules reference](https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html)

## Related docs in this Hub

- [EC2 Basics](./basics.md)
- [EC2 Placement Groups](./placement-groups.md)
- [VPC Documentation](../../networking/vpc/index.md)
