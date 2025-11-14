import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { ViteImageOptimizer} from 'vite-plugin-image-optimizer'
import taskLists from 'markdown-it-task-lists'

const englishNav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Introduction', link: '/introduction/' },
  { text: 'Fundamentals', link: '/fundamentals/' },
  { text: 'Services', link: '/services/' },
  { text: 'Architecture', link: '/architecture/' },
  { text: 'Exam Prep', link: '/exam/' },
  { text: 'Labs', link: '/labs/' },
  { text: 'Real-world', link: '/real-world/' },
  { text: 'Glossary', link: '/glossary/' },
]

const englishSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Introduction',
    collapsed: false,
    items: [
      { text: 'Start Here', link: '/introduction/' },
      { text: 'What is AWS', link: '/introduction/what-is-aws' },
      { text: 'Global Infrastructure', link: '/introduction/aws-global-infrastructure' },
      { text: 'How to Study', link: '/introduction/how-to-study' },
      { text: 'Certification Roadmap', link: '/introduction/certification-roadmap' },
    ],
  },
  {
    text: 'Fundamentals',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/fundamentals/' },
      { text: 'Compute Overview', link: '/fundamentals/compute-overview' },
      { text: 'Storage Overview', link: '/fundamentals/storage-overview' },
      { text: 'Networking Overview', link: '/fundamentals/networking-overview' },
      { text: 'IAM Basics', link: '/fundamentals/iam-basics' },
      { text: 'Pricing & Billing', link: '/fundamentals/pricing-billing' },
      { text: 'Well-Architected Framework', link: '/fundamentals/well-architected-overview' },
    ],
  },
  {
    text: 'Services',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/services/' },
      {
        text: 'Compute',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/services/compute/' },
          {
            text: 'Amazon EC2',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/services/compute/ec2/' },
              { text: 'Basics', link: '/services/compute/ec2/basics' },
              { text: 'Instance Types', link: '/services/compute/ec2/instance-types' },
              { text: 'Networking', link: '/services/compute/ec2/networking' },
              { text: 'Storage', link: '/services/compute/ec2/storage' },
              { text: 'Placement Groups', link: '/services/compute/ec2/placement-groups' },
              { text: 'Exam Notes', link: '/services/compute/ec2/exam-notes' },
              { text: 'Best Practices', link: '/services/compute/ec2/best-practices' },
              { text: 'Cost Optimization', link: '/services/compute/ec2/cost-optimization' },
              { text: 'Troubleshooting', link: '/services/compute/ec2/troubleshooting' },
            ],
          },
          { text: 'AWS Lambda', link: '/services/compute/lambda/' },
          { text: 'AWS Fargate', link: '/services/compute/fargate/' },
          { text: 'Amazon ECS', link: '/services/compute/ecs/' },
          { text: 'Amazon EKS', link: '/services/compute/eks/' },
        ],
      },
      {
        text: 'Storage',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/services/storage/' },
          { text: 'Amazon S3', link: '/services/storage/s3/' },
          { text: 'Amazon EFS', link: '/services/storage/efs/' },
          { text: 'Amazon EBS', link: '/services/storage/ebs/' },
          { text: 'Amazon FSx', link: '/services/storage/fsx/' },
          { text: 'Service Comparison', link: '/services/storage/storage-comparison' },
        ],
      },
      {
        text: 'Database',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/services/database/' },
          { text: 'Amazon RDS', link: '/services/database/rds/' },
          { text: 'Amazon DynamoDB', link: '/services/database/dynamodb/' },
          { text: 'Amazon Aurora', link: '/services/database/aurora/' },
          { text: 'Amazon DocumentDB', link: '/services/database/documentdb/' },
          { text: 'Service Comparison', link: '/services/database/database-comparison' },
        ],
      },
      {
        text: 'Networking & Delivery',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/services/networking/' },
          { text: 'Amazon VPC', link: '/services/networking/vpc/' },
          { text: 'Amazon Route 53', link: '/services/networking/route53/' },
          { text: 'Amazon API Gateway', link: '/services/networking/api-gateway/' },
          { text: 'Amazon CloudFront', link: '/services/networking/cloudfront/' },
          { text: 'VPC Connectivity', link: '/services/networking/vpc-connectivity' },
        ],
      },
      {
        text: 'Security & Identity',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/services/security/' },
          { text: 'AWS IAM', link: '/services/security/iam/' },
          { text: 'AWS KMS', link: '/services/security/kms/' },
          { text: 'Amazon Cognito', link: '/services/security/cognito/' },
          { text: 'Best Practices', link: '/services/security/security-best-practices' },
        ],
      },
      {
        text: 'Monitoring & Observability',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/services/monitoring/' },
          { text: 'Amazon CloudWatch', link: '/services/monitoring/cloudwatch/' },
          { text: 'AWS X-Ray', link: '/services/monitoring/xray/' },
          { text: 'AWS CloudTrail', link: '/services/monitoring/cloudtrail/' },
          { text: 'Strategy', link: '/services/monitoring/monitoring-strategy' },
        ],
      },
    ],
  },
  {
    text: 'Architecture',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/architecture/' },
      { text: 'High Availability', link: '/architecture/high-availability' },
      { text: 'Fault Tolerance', link: '/architecture/fault-tolerance' },
      { text: 'Serverless Architecture', link: '/architecture/serverless-architecture' },
      { text: 'Microservices on AWS', link: '/architecture/microservices-on-aws' },
      { text: 'Event-driven Architecture', link: '/architecture/event-driven-architecture' },
      { text: 'Hybrid Architecture', link: '/architecture/hybrid-architecture' },
      {
        text: 'Reference Architectures',
        collapsed: true,
        items: [
          { text: 'Web Application', link: '/architecture/reference-architectures/webapp' },
          { text: 'Mobile Backend', link: '/architecture/reference-architectures/mobile-backend' },
          { text: 'Real-time Apps', link: '/architecture/reference-architectures/real-time-apps' },
          { text: 'Data Lake', link: '/architecture/reference-architectures/data-lake' },
          { text: 'AI/ML Workflows', link: '/architecture/reference-architectures/ai-ml-workflows' },
        ],
      },
    ],
  },
  {
    text: 'Exam Preparation',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/exam/' },
      {
        text: 'Solutions Architect Associate (SAA-C03)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/exam/saa/exam-guide' },
          { text: 'Cheat Sheet', link: '/exam/saa/cheat-sheet' },
          { text: 'Sample Questions', link: '/exam/saa/sample-questions' },
          { text: 'Last-minute Tips', link: '/exam/saa/last-minute-tips' },
        ],
      },
      {
        text: 'Developer Associate (DVA-C02)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/exam/dva/exam-guide' },
        ],
      },
      {
        text: 'Solutions Architect Professional (SAP-C02)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/exam/sap/exam-guide' },
        ],
      },
      {
        text: 'SysOps Administrator Associate (SOA-C02)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/exam/soa/exam-guide' },
        ],
      },
    ],
  },
  {
    text: 'Hands-on Labs',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/labs/' },
      { text: 'VPC Lab', link: '/labs/vpc-lab' },
      { text: 'S3 Lab', link: '/labs/s3-lab' },
      { text: 'EC2 Lab', link: '/labs/ec2-lab' },
      { text: 'Load Balancer Lab', link: '/labs/load-balancer-lab' },
      { text: 'Serverless Lab', link: '/labs/serverless-lab' },
    ],
  },
  {
    text: 'Real-world Playbooks',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/real-world/' },
      { text: 'Cost Optimization', link: '/real-world/cost-optimization' },
      { text: 'Logging Strategy', link: '/real-world/logging-strategy' },
      { text: 'Multi-account Structure', link: '/real-world/multi-account-structure' },
      { text: 'CloudFormation vs Terraform', link: '/real-world/cf-vs-tf' },
      { text: 'Disaster Recovery', link: '/real-world/disaster-recovery' },
      { text: 'Migration to AWS', link: '/real-world/migration-to-aws' },
    ],
  },
  {
    text: 'Glossary & References',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/glossary/' },
      { text: 'Acronyms', link: '/glossary/acronyms' },
      { text: 'Interview Questions', link: '/glossary/interview-questions' },
      { text: 'AWS Cheat Sheet', link: '/glossary/aws-cheat-sheet' },
    ],
  },
]

const vietnameseNav: DefaultTheme.NavItem[] = [
  { text: 'Trang chủ', link: '/vi/' },
  { text: 'Giới thiệu', link: '/vi/introduction/' },
  { text: 'Kiến thức nền', link: '/vi/fundamentals/' },
  { text: 'Dịch vụ', link: '/vi/services/' },
  { text: 'Kiến trúc', link: '/vi/architecture/' },
  { text: 'Luyện thi', link: '/vi/exam/' },
  { text: 'Phòng lab', link: '/vi/labs/' },
  { text: 'Thực chiến', link: '/vi/real-world/' },
  { text: 'Từ điển', link: '/vi/glossary/' },
]

const vietnameseSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Giới thiệu',
    collapsed: false,
    items: [
      { text: 'Bắt đầu', link: '/vi/introduction/' },
      { text: 'AWS là gì?', link: '/vi/introduction/what-is-aws' },
      { text: 'Hạ tầng toàn cầu', link: '/vi/introduction/aws-global-infrastructure' },
      { text: 'Cách học hiệu quả', link: '/vi/introduction/how-to-study' },
      { text: 'Lộ trình chứng chỉ', link: '/vi/introduction/certification-roadmap' },
    ],
  },
  {
    text: 'Kiến thức nền',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/fundamentals/' },
      { text: 'Compute', link: '/vi/fundamentals/compute-overview' },
      { text: 'Storage', link: '/vi/fundamentals/storage-overview' },
      { text: 'Networking', link: '/vi/fundamentals/networking-overview' },
      { text: 'IAM cơ bản', link: '/vi/fundamentals/iam-basics' },
      { text: 'Pricing & Billing', link: '/vi/fundamentals/pricing-billing' },
      { text: 'Well-Architected', link: '/vi/fundamentals/well-architected-overview' },
    ],
  },
  {
    text: 'Dịch vụ',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/services/' },
      {
        text: 'Compute',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/services/compute/' },
          {
            text: 'Amazon EC2',
            collapsed: true,
            items: [
              { text: 'Tổng quan', link: '/vi/services/compute/ec2/' },
              { text: 'Kiến thức cơ bản', link: '/vi/services/compute/ec2/basics' },
              { text: 'Loại instance', link: '/vi/services/compute/ec2/instance-types' },
              { text: 'Networking', link: '/vi/services/compute/ec2/networking' },
              { text: 'Lưu trữ', link: '/vi/services/compute/ec2/storage' },
              { text: 'Placement Groups', link: '/vi/services/compute/ec2/placement-groups' },
              { text: 'Ghi chú thi', link: '/vi/services/compute/ec2/exam-notes' },
              { text: 'Best practice', link: '/vi/services/compute/ec2/best-practices' },
              { text: 'Tối ưu chi phí', link: '/vi/services/compute/ec2/cost-optimization' },
              { text: 'Khắc phục sự cố', link: '/vi/services/compute/ec2/troubleshooting' },
            ],
          },
          { text: 'AWS Lambda', link: '/vi/services/compute/lambda/' },
          { text: 'AWS Fargate', link: '/vi/services/compute/fargate/' },
          { text: 'Amazon ECS', link: '/vi/services/compute/ecs/' },
          { text: 'Amazon EKS', link: '/vi/services/compute/eks/' },
        ],
      },
      {
        text: 'Storage',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/services/storage/' },
          { text: 'Amazon S3', link: '/vi/services/storage/s3/' },
          { text: 'Amazon EFS', link: '/vi/services/storage/efs/' },
          { text: 'Amazon EBS', link: '/vi/services/storage/ebs/' },
          { text: 'Amazon FSx', link: '/vi/services/storage/fsx/' },
          { text: 'So sánh dịch vụ', link: '/vi/services/storage/storage-comparison' },
        ],
      },
      {
        text: 'Cơ sở dữ liệu',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/services/database/' },
          { text: 'Amazon RDS', link: '/vi/services/database/rds/' },
          { text: 'Amazon DynamoDB', link: '/vi/services/database/dynamodb/' },
          { text: 'Amazon Aurora', link: '/vi/services/database/aurora/' },
          { text: 'Amazon DocumentDB', link: '/vi/services/database/documentdb/' },
          { text: 'So sánh dịch vụ', link: '/vi/services/database/database-comparison' },
        ],
      },
      {
        text: 'Mạng & CDN',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/services/networking/' },
          { text: 'Amazon VPC', link: '/vi/services/networking/vpc/' },
          { text: 'Amazon Route 53', link: '/vi/services/networking/route53/' },
          { text: 'Amazon API Gateway', link: '/vi/services/networking/api-gateway/' },
          { text: 'Amazon CloudFront', link: '/vi/services/networking/cloudfront/' },
          { text: 'Kết nối VPC', link: '/vi/services/networking/vpc-connectivity' },
        ],
      },
      {
        text: 'Bảo mật & Danh tính',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/services/security/' },
          { text: 'AWS IAM', link: '/vi/services/security/iam/' },
          { text: 'AWS KMS', link: '/vi/services/security/kms/' },
          { text: 'Amazon Cognito', link: '/vi/services/security/cognito/' },
          { text: 'Best practice bảo mật', link: '/vi/services/security/security-best-practices' },
        ],
      },
      {
        text: 'Giám sát & Quan sát',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/services/monitoring/' },
          { text: 'Amazon CloudWatch', link: '/vi/services/monitoring/cloudwatch/' },
          { text: 'AWS X-Ray', link: '/vi/services/monitoring/xray/' },
          { text: 'AWS CloudTrail', link: '/vi/services/monitoring/cloudtrail/' },
          { text: 'Chiến lược quan sát', link: '/vi/services/monitoring/monitoring-strategy' },
        ],
      },
    ],
  },
  {
    text: 'Kiến trúc',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/architecture/' },
      { text: 'High Availability', link: '/vi/architecture/high-availability' },
      { text: 'Fault Tolerance', link: '/vi/architecture/fault-tolerance' },
      { text: 'Kiến trúc Serverless', link: '/vi/architecture/serverless-architecture' },
      { text: 'Microservices trên AWS', link: '/vi/architecture/microservices-on-aws' },
      { text: 'Kiến trúc hướng sự kiện', link: '/vi/architecture/event-driven-architecture' },
      { text: 'Kiến trúc Hybrid', link: '/vi/architecture/hybrid-architecture' },
      {
        text: 'Blueprint tham chiếu',
        collapsed: true,
        items: [
          { text: 'Web Application', link: '/vi/architecture/reference-architectures/webapp' },
          { text: 'Mobile Backend', link: '/vi/architecture/reference-architectures/mobile-backend' },
          { text: 'Ứng dụng realtime', link: '/vi/architecture/reference-architectures/real-time-apps' },
          { text: 'Data Lake', link: '/vi/architecture/reference-architectures/data-lake' },
          { text: 'Quy trình AI/ML', link: '/vi/architecture/reference-architectures/ai-ml-workflows' },
        ],
      },
    ],
  },
  {
    text: 'Luyện thi chứng chỉ',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/exam/' },
      {
        text: 'SAA-C03',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/exam/saa/exam-guide' },
          { text: 'Cheat Sheet', link: '/vi/exam/saa/cheat-sheet' },
          { text: 'Câu hỏi mẫu', link: '/vi/exam/saa/sample-questions' },
          { text: 'Tips cuối cùng', link: '/vi/exam/saa/last-minute-tips' },
        ],
      },
      {
        text: 'DVA-C02',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/exam/dva/exam-guide' },
        ],
      },
      {
        text: 'SAP-C02',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/exam/sap/exam-guide' },
        ],
      },
      {
        text: 'SOA-C02',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/exam/soa/exam-guide' },
        ],
      },
    ],
  },
  {
    text: 'Phòng lab',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/labs/' },
      { text: 'Lab VPC', link: '/vi/labs/vpc-lab' },
      { text: 'Lab S3', link: '/vi/labs/s3-lab' },
      { text: 'Lab EC2', link: '/vi/labs/ec2-lab' },
      { text: 'Lab Load Balancer', link: '/vi/labs/load-balancer-lab' },
      { text: 'Lab Serverless', link: '/vi/labs/serverless-lab' },
    ],
  },
  {
    text: 'Thực chiến',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/real-world/' },
      { text: 'Tối ưu chi phí', link: '/vi/real-world/cost-optimization' },
      { text: 'Chiến lược logging', link: '/vi/real-world/logging-strategy' },
      { text: 'Cấu trúc multi-account', link: '/vi/real-world/multi-account-structure' },
      { text: 'CloudFormation vs Terraform', link: '/vi/real-world/cf-vs-tf' },
      { text: 'Chiến lược DR', link: '/vi/real-world/disaster-recovery' },
      { text: 'Migration lên AWS', link: '/vi/real-world/migration-to-aws' },
    ],
  },
  {
    text: 'Từ điển & tham khảo',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/glossary/' },
      { text: 'Thuật ngữ & viết tắt', link: '/vi/glossary/acronyms' },
      { text: 'Câu hỏi phỏng vấn', link: '/vi/glossary/interview-questions' },
      { text: 'AWS Cheat Sheet', link: '/vi/glossary/aws-cheat-sheet' },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AWS Knowledge Hub",
  description:
    "Structured AWS learning from fundamentals to production playbooks.",
  lastUpdated: true,
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  markdown: {
    // Enable checkbox rendering: - [ ] and - [x]
    // This allows markdown lists with checkboxes to render as interactive checkboxes
    breaks: false,
    config: (md) => {
      // Enable task lists (checkboxes) using markdown-it-task-lists plugin
      // Syntax: - [ ] unchecked, - [x] checked
      md.use(taskLists);
    },
  },
  vite: {
    // Build optimization to handle chunk size warnings
    build: {
      chunkSizeWarningLimit: Infinity, // Disable chunk size warnings for docs
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Split node_modules into more granular chunks
            if (id.includes("node_modules")) {
              if (id.includes("vue")) {
                return "vue";
              }
              if (id.includes("vitepress")) {
                return "vitepress";
              }
              if (id.includes("@vueuse")) {
                return "vueuse";
              }
              if (id.includes("markdown-it")) {
                return "markdown";
              }
              if (id.includes("shiki") || id.includes("highlight")) {
                return "syntax-highlight";
              }
              if (id.includes("lodash") || id.includes("ramda")) {
                return "utils";
              }
              // Other vendor libraries
              return "vendor";
            }

            // Split large documentation files if any
            if (id.includes("/docs/")) {
              if (id.includes("/onboarding-guide/")) {
                return "docs-onboarding-guide";
              }
            }
          },
        },
      },
    },
    plugins: [ViteImageOptimizer({})],
  },
  head: [
    // Favicon configurations
    [
      "link",
      { rel: "shortcut icon", href: "/favicon.ico", sizes: "48x48" },
    ],
    [
      "link",
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        outline: {
          level: [2, 3],
        },
        nav: englishNav,
        sidebar: englishSidebar,
      },
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi",
      link: "/vi/",
      themeConfig: {
        lastUpdated: {
          text: "Cập nhật lần cuối",
        },
        editLink: {
          text: "Chỉnh sửa trang này",
        },
        outline: {
          label: "Mục lục",
          level: [2, 3],
        },
        nav: vietnameseNav,
        sidebar: vietnameseSidebar,
      },
    },
  },
  themeConfig: {
    logo: "/icon.svg",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lamngockhuong/aws",
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/lamngockhuong/aws/edit/main/docs/:path",
    },
    footer: {
      message:
        "Released under the <a href='https://github.com/lamngockhuong/aws/blob/main/LICENSE'>MIT License</a>.",
      copyright: "Copyright © 2025 <a href='https://khuong.dev'>Khuong Dev</a>",
    },
  },
  sitemap: {
    hostname: "https://aws.khuong.dev",
  },
});
