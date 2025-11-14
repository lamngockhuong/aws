# Networking EC2

## Tóm tắt

- Amazon EC2 sử dụng **VPC, subnets, Elastic Network Interfaces, IP addresses, Security Groups và Network ACLs** để kiểm soát cách instances giao tiếp với nhau, internet và các AWS services khác.
- **Security Groups (stateful)** là lớp firewall chính ở cấp instance, trong khi **Network ACLs (stateless)** hoạt động ở cấp subnet để bổ sung lớp bảo vệ thứ hai.
- **Enhanced networking** (Nitro + SR‑IOV, EFA) cung cấp băng thông cao, latency thấp và PPS tốt hơn cho workloads HPC/ML hoặc network‑intensive.
- Thiết kế đúng **mô hình public/private subnet + Internet/NAT Gateway** giúp vừa đảm bảo bảo mật, vừa tối ưu chi phí và hiệu suất.

## Sơ đồ mạng EC2 trong VPC

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

- **Đặt EC2 trong private subnets** cho application/database tiers, chỉ để load balancer, NAT Gateway, bastion host ở public subnets.
- **Thiết kế Security Groups theo chức năng**, dùng nguyên tắc least privilege và tham chiếu security group khác thay vì mở CIDR rộng (0.0.0.0/0) trừ khi thực sự cần.
- **Bật VPC Flow Logs** cho VPC/subnet/ENI quan trọng để có log network flows phục vụ troubleshooting và security analysis.
- **Dùng Enhanced Networking** (ENA/Nitro, EFA) cho workloads yêu cầu băng thông cao/latency thấp; kiểm tra instance type hỗ trợ trước khi chọn.
- **Giảm dùng Elastic IPs không cần thiết**: ưu tiên dùng private IP + NAT Gateway/VPN/Direct Connect, release Elastic IPs idle để tránh phí.
- **Ràng buộc routing rõ ràng**: route internet qua Internet Gateway cho public subnets, qua NAT Gateway cho private; tránh cấu hình route vòng hoặc quá phức tạp.
- **Giám sát network metrics và logs** (CloudWatch, VPC Flow Logs) và thiết lập alarms cho lưu lượng bất thường, latency cao hoặc lỗi kết nối.

## Exam Notes

- Nhớ sự khác biệt: **Security Groups (stateful, instance‑level)** vs **Network ACLs (stateless, subnet‑level)** và khi nào dùng mỗi loại trong kịch bản exam.
- Đối với **kết nối internet**: public subnet + public/Elastic IP + Internet Gateway; đối với private subnet outbound internet: NAT Gateway/NAT Instance.
- Câu hỏi về **low‑latency / high‑throughput** thường gợi ý: dùng placement group (cluster) + enhanced networking (ENA/EFA) + current generation instance.
- Đối với **bảo mật**, AWS khuyến nghị: deny‑all by default, allow‑list cụ thể trong security group, bật VPC Flow Logs và tách environment (dev/stage/prod) bằng VPC/subnets.

## Tài liệu AWS tham khảo

- [Amazon EC2 security groups for your EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html)
- [Security group rules reference](https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html)

## Tài liệu liên quan trong Hub

- [EC2 Basics](./basics.md)
- [EC2 Placement Groups](./placement-groups.md)
- [VPC Documentation](../../networking/vpc/index.md)
