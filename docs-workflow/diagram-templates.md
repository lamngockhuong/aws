# Diagram Templates - Mermaid

Templates và examples cho các loại Mermaid diagrams thường dùng trong tài liệu AWS.

## 1. Architecture Diagrams

### Basic Service Architecture

```mermaid
graph TB
    User[User] --> LB[Load Balancer]
    LB --> App1[App Server 1]
    LB --> App2[App Server 2]
    App1 --> DB[(Database)]
    App2 --> DB
    App1 --> Cache[(Cache)]
    App2 --> Cache
```

### Serverless Architecture

```mermaid
graph LR
    Client[Client] --> API[API Gateway]
    API --> Lambda1[Lambda Function 1]
    API --> Lambda2[Lambda Function 2]
    Lambda1 --> DynamoDB[(DynamoDB)]
    Lambda2 --> S3[(S3)]
    Lambda1 --> SQS[SQS Queue]
```

### Multi-Tier Architecture

```mermaid
graph TB
    subgraph "Public Subnet"
        ALB[Application Load Balancer]
    end
    subgraph "Private Subnet"
        App1[App Server 1]
        App2[App Server 2]
    end
    subgraph "Database Subnet"
        DB[(RDS Database)]
    end
    ALB --> App1
    ALB --> App2
    App1 --> DB
    App2 --> DB
```

## 2. Flowcharts

### Request Flow

```mermaid
flowchart TD
    Start([User Request]) --> Auth{Authenticated?}
    Auth -->|No| Reject[Reject Request]
    Auth -->|Yes| Process[Process Request]
    Process --> Validate{Valid?}
    Validate -->|No| Error[Return Error]
    Validate -->|Yes| Success[Return Success]
    Error --> End([End])
    Success --> End
    Reject --> End
```

### Decision Flow

```mermaid
flowchart TD
    Start([Start]) --> Check{Check Condition}
    Check -->|Option A| ActionA[Action A]
    Check -->|Option B| ActionB[Action B]
    Check -->|Option C| ActionC[Action C]
    ActionA --> End([End])
    ActionB --> End
    ActionC --> End
```

### EC2 Instance Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Pending
    Pending --> Running
    Running --> Stopping
    Stopping --> Stopped
    Stopped --> Running
    Running --> Shutting-down
    Shutting-down --> Terminated
    Terminated --> [*]
```

## 3. Sequence Diagrams

### API Request Flow

```mermaid
sequenceDiagram
    participant User
    participant API
    participant Lambda
    participant DynamoDB

    User->>API: POST /items
    API->>Lambda: Invoke Function
    Lambda->>DynamoDB: PutItem
    DynamoDB-->>Lambda: Success
    Lambda-->>API: Response
    API-->>User: 200 OK
```

### Event-Driven Flow

```mermaid
sequenceDiagram
    participant App
    participant S3
    participant Lambda
    participant SNS

    App->>S3: Upload File
    S3->>Lambda: Trigger Event
    Lambda->>Lambda: Process File
    Lambda->>SNS: Publish Notification
    SNS->>App: Send Notification
```

## 4. Mindmaps

### EC2 Overview

```mermaid
mindmap
  root((EC2))
    Instance Types
      General Purpose
        M Series
        T Series
      Compute Optimized
        C Series
      Memory Optimized
        R Series
        X Series
    Pricing
      On-Demand
      Reserved
      Spot
      Savings Plans
    Storage
      EBS
        gp3
        io1/io2
      Instance Store
    Networking
      VPC
      Security Groups
      Elastic IP
```

### AWS Services Overview

```mermaid
mindmap
  root((AWS))
    Compute
      EC2
      Lambda
      ECS
      EKS
    Storage
      S3
      EBS
      EFS
    Database
      RDS
      DynamoDB
      Aurora
    Networking
      VPC
      CloudFront
      Route 53
    Security
      IAM
      KMS
      Cognito
```

## 5. Class/Entity Diagrams

### IAM Structure

```mermaid
classDiagram
    class User {
        +String name
        +List~Policy~ policies
        +List~Group~ groups
    }
    class Group {
        +String name
        +List~Policy~ policies
        +List~User~ users
    }
    class Role {
        +String name
        +String trustPolicy
        +List~Policy~ policies
    }
    class Policy {
        +String name
        +JSON document
    }
    User "many" --> "many" Group
    User "many" --> "many" Policy
    Group "many" --> "many" Policy
    Role "many" --> "many" Policy
```

## 6. Gantt Charts

### Project Timeline

```mermaid
gantt
    title AWS Migration Timeline
    dateFormat YYYY-MM-DD
    section Planning
    Design Architecture    :a1, 2024-01-01, 30d
    section Implementation
    Setup Infrastructure   :a2, after a1, 20d
    Migrate Data           :a3, after a2, 15d
    section Testing
    Testing                :a4, after a3, 10d
```

## 7. Pie Charts

### Cost Distribution

```mermaid
pie title AWS Monthly Costs
    "EC2" : 40
    "S3" : 25
    "RDS" : 20
    "Data Transfer" : 10
    "Other" : 5
```

## 8. Git Graph

### Deployment Flow

```mermaid
gitgraph
    commit id: "Initial"
    branch develop
    checkout develop
    commit id: "Feature 1"
    commit id: "Feature 2"
    checkout main
    merge develop
    commit id: "Deploy"
```

## Best Practices

### 1. Simplicity

- Giữ diagrams đơn giản, dễ hiểu
- Tránh quá nhiều nodes/connections
- Tập trung vào concepts chính

### 2. Labels

- Sử dụng labels tiếng Việt cho mô tả
- Giữ service names tiếng Anh (EC2, S3, Lambda, v.v.)
- Thêm title và mô tả ngắn cho mỗi diagram

### 3. Colors & Styling

- Mermaid tự động apply theme (dark/light) dựa trên VitePress theme
- Có thể customize colors nếu cần:

  ```mermaid
  graph TB
      A[Node A]:::highlight
      B[Node B]
      classDef highlight fill:#f9f,stroke:#333,stroke-width:2px
  ```

### 4. Testing

- Luôn test render diagram trước khi commit
- Kiểm tra trên cả dark và light theme
- Đảm bảo diagram không quá lớn (có thể scroll)

## Examples trong Repo

Xem các file sau để tham khảo cách sử dụng diagrams:

- `docs/services/compute/ec2/` - EC2 concepts với diagrams
- `docs/architecture/` - Architecture patterns
- `docs/real-world/` - Real-world scenarios

## Resources

- [Mermaid Documentation](https://mermaid.js.org/)
- [Mermaid Live Editor](https://mermaid.live/) - Test diagrams online
- [Mermaid Syntax Guide](https://mermaid.js.org/intro/syntax-reference.html)
