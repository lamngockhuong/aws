# Amazon EC2

Amazon Elastic Compute Cloud (Amazon EC2) cung cấp khả năng tính toán có thể mở rộng theo nhu cầu trên AWS Cloud. Sử dụng Amazon EC2 giúp giảm chi phí phần cứng, cho phép bạn phát triển và triển khai ứng dụng nhanh hơn.

## Tổng quan

EC2 cung cấp môi trường tính toán ảo, được gọi là instances, mà bạn có thể sử dụng để xây dựng và lưu trữ các ứng dụng của mình. Với EC2, bạn có thể khởi chạy nhiều hoặc ít virtual servers tùy theo nhu cầu, cấu hình bảo mật và mạng, cũng như quản lý storage. Bạn có thể tăng capacity (scale up) để xử lý các tác vụ nặng về tính toán, chẳng hạn như các quy trình hàng tháng hoặc hàng năm, hoặc các đợt tăng đột biến về traffic của website. Khi mức sử dụng giảm, bạn có thể giảm capacity (scale down) lại.

Một EC2 instance là một virtual server trong AWS Cloud. Khi bạn khởi chạy một EC2 instance, instance type mà bạn chỉ định sẽ quyết định phần cứng có sẵn cho instance của bạn. Mỗi instance type cung cấp một sự cân bằng khác nhau về compute, memory, network và storage resources.

## Tính năng chính

- **Instances**: Virtual servers mà bạn có thể khởi chạy với các cấu hình khác nhau
- **Amazon Machine Images (AMIs)**: Các template được cấu hình sẵn cho instances của bạn, đóng gói các thành phần bạn cần cho server (bao gồm operating system và phần mềm bổ sung)
- **Instance Types**: Các cấu hình khác nhau về CPU, memory, storage, networking capacity và graphics hardware cho instances của bạn
- **Amazon EBS Volumes**: Persistent storage volumes cho dữ liệu của bạn sử dụng Amazon Elastic Block Store
- **Instance Store Volumes**: Storage volumes cho dữ liệu tạm thời bị xóa khi bạn stop, hibernate hoặc terminate instance của mình
- **Key Pairs**: Thông tin đăng nhập an toàn cho instances của bạn. AWS lưu trữ public key và bạn lưu trữ private key ở nơi an toàn
- **Security Groups**: Một virtual firewall cho phép bạn chỉ định các protocols, ports và source IP ranges có thể truy cập instances của bạn, cũng như destination IP ranges mà instances của bạn có thể kết nối
- **Placement Groups**: Kiểm soát vị trí đặt instance để tối ưu performance và availability

## Khái niệm cốt lõi

### Instances

Virtual servers trên cloud. Bạn có thể khởi chạy nhiều instances từ một Amazon Machine Image (AMI) duy nhất.

### Amazon Machine Images (AMIs)

Các template được cấu hình sẵn cho instances của bạn, đóng gói các thành phần bạn cần cho server (bao gồm operating system và phần mềm bổ sung).

### Instance Types

Các kết hợp khác nhau về CPU, memory, storage và networking capacity. Được tối ưu hóa cho các use cases khác nhau.

### Security Groups

Virtual firewalls kiểm soát traffic được phép truy cập instances của bạn.

### Key Pairs

Được sử dụng để kết nối an toàn với instances của bạn. Bao gồm một public key (được lưu trữ bởi AWS) và một private key (được lưu trữ bởi bạn).

## Vòng đời Instance

### Launching

- Chọn AMI, instance type và cấu hình chi tiết instance
- Cấu hình security groups và key pairs
- Xem xét và khởi chạy

### Running

- Instance đang chạy và sẵn sàng sử dụng
- Bạn được tính phí cho thời gian compute
- Có thể được stop, terminate hoặc reboot

### Stopping

- Instance bị dừng (không bị terminate)
- Dữ liệu trên instance store volumes bị mất
- EBS volumes được giữ lại
- Bạn không bị tính phí cho thời gian compute

### Terminating

- Instance bị xóa vĩnh viễn
- Tất cả dữ liệu bị mất
- Không thể khôi phục

## Use Cases

- **Web Applications**: Lưu trữ web servers và applications
- **Development/Testing**: Môi trường phát triển nhanh chóng và tiết kiệm chi phí
- **High Performance Computing**: Workloads nặng về tính toán
- **Machine Learning**: Workloads training và inference
- **Big Data Processing**: Phân tích và xử lý dữ liệu
- **Enterprise Applications**: Ứng dụng quan trọng cho doanh nghiệp

## Tích hợp với AWS Services

### Services để sử dụng với Amazon EC2

- **Amazon EC2 Auto Scaling**: Giúp đảm bảo bạn có số lượng Amazon EC2 instances phù hợp để xử lý tải cho ứng dụng của mình
- **AWS Backup**: Tự động hóa việc sao lưu các Amazon EC2 instances và Amazon EBS volumes được gắn vào chúng
- **Amazon CloudWatch**: Giám sát instances và Amazon EBS volumes của bạn
- **Elastic Load Balancing**: Tự động phân phối incoming application traffic trên nhiều instances
- **Amazon GuardDuty**: Phát hiện việc sử dụng có khả năng không được ủy quyền hoặc độc hại đối với EC2 instances của bạn
- **EC2 Image Builder**: Tự động hóa việc tạo, quản lý và triển khai các server images được tùy chỉnh, an toàn và cập nhật
- **AWS Launch Wizard**: Định cỡ, cấu hình và triển khai AWS resources cho các ứng dụng của bên thứ ba mà không cần phải xác định và cung cấp thủ công từng AWS resource riêng lẻ
- **AWS Systems Manager**: Thực hiện các operations ở quy mô lớn trên EC2 instances với giải pháp quản lý end-to-end an toàn này
- **VPC**: Network isolation và bảo mật
- **IAM**: Kiểm soát truy cập

### Các Compute Services bổ sung

- **Amazon Lightsail**: Xây dựng websites hoặc web applications sử dụng một cloud platform cung cấp các resources bạn cần để triển khai dự án nhanh chóng, với mức giá hàng tháng thấp và có thể dự đoán được
- **Amazon ECS**: Triển khai, quản lý và mở rộng các containerized applications trên một cluster của EC2 instances
- **Amazon EKS**: Chạy các Kubernetes applications của bạn trên AWS

## Truy cập Amazon EC2

Bạn có thể tạo và quản lý các Amazon EC2 instances của mình bằng các giao diện sau:

- **Amazon EC2 Console**: Một giao diện web đơn giản để tạo và quản lý Amazon EC2 instances và resources
- **AWS Command Line Interface (CLI)**: Cho phép bạn tương tác với AWS services bằng các lệnh trong command-line shell của bạn
- **AWS CloudFormation**: Amazon EC2 hỗ trợ tạo resources bằng AWS CloudFormation templates
- **AWS SDKs**: Các API theo ngôn ngữ cụ thể để xây dựng applications
- **AWS Tools for PowerShell**: Các PowerShell modules để script các operations trên AWS resources của bạn
- **Query API**: Amazon EC2 cung cấp một Query API với các HTTP hoặc HTTPS requests

## Giá cả cho Amazon EC2

Amazon EC2 cung cấp các tùy chọn giá cả sau:

- **Free Tier**: Bạn có thể bắt đầu với Amazon EC2 miễn phí bằng cách sử dụng AWS Free Tier
- **On-Demand Instances**: Thanh toán cho các instances bạn sử dụng theo giờ hoặc giây
- **Reserved Instances**: Giảm giá đáng kể (lên đến 72%) cho các workloads có thể dự đoán được với cam kết 1 năm hoặc 3 năm
- **Spot Instances**: Giảm giá lên đến 90% cho các workloads chịu lỗi có thể bị gián đoạn
- **Savings Plans**: Mô hình giá cả linh hoạt cung cấp tiết kiệm lên đến 72% để đổi lấy cam kết về một lượng sử dụng nhất quán

## Tuân thủ

Amazon EC2 hỗ trợ việc xử lý, lưu trữ và truyền dữ liệu thẻ tín dụng bởi một merchant hoặc service provider, và đã được xác thực là tuân thủ Payment Card Industry (PCI) Data Security Standard (DSS). Để biết thêm thông tin về PCI DSS, xem [PCI DSS Level 1](https://aws.amazon.com/compliance/pci-dss-level-1-faqs/).

## Best Practices

- **Right-Size Instances**: Khớp instance type với workload
- **Use Reserved Instances**: Cho các workloads có thể dự đoán được
- **Enable Monitoring**: Sử dụng CloudWatch để có visibility
- **Implement Auto Scaling**: Xử lý nhu cầu biến đổi
- **Use Security Groups**: Triển khai network security phù hợp
- **Regular Backups**: Sử dụng EBS snapshots hoặc AWS Backup
- **Tag Resources**: Để phân bổ chi phí và quản lý
- **Use Spot Instances**: Cho các workloads chịu lỗi
- **Use EC2 Capacity Manager**: Để lập kế hoạch và tối ưu hóa capacity

## Tài liệu liên quan

- [EC2 Basics](./basics.md) - Bắt đầu với EC2
- [Instance Types](./instance-types.md) - Chọn instance type phù hợp
- [Networking](./networking.md) - Cấu hình networking EC2
- [Storage](./storage.md) - Tùy chọn storage EC2
- [Placement Groups](./placement-groups.md) - Chiến lược đặt instance
- [Best Practices](./best-practices.md) - Best practices EC2
- [Cost Optimization](./cost-optimization.md) - Tối ưu hóa chi phí EC2
- [Troubleshooting](./troubleshooting.md) - Các vấn đề thường gặp và giải pháp
- [Exam Notes](./exam-notes.md) - EC2 cho các kỳ thi chứng chỉ

## Tài liệu AWS

Tài liệu này dựa trên AWS EC2 User Guide mới nhất. Để có thông tin cập nhật nhất, tham khảo:

- [Amazon EC2 User Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html) - Tài liệu chính thức của AWS
- [Get Started with Amazon EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html) - Hướng dẫn bắt đầu
