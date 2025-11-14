import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { ViteImageOptimizer} from 'vite-plugin-image-optimizer'
import taskLists from 'markdown-it-task-lists'

const englishNav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Introduction', link: '/01-introduction/' },
  { text: 'Fundamentals', link: '/02-fundamentals/' },
  { text: 'Services', link: '/03-services/' },
  { text: 'Architecture', link: '/04-architecture/' },
  { text: 'Exam Prep', link: '/07-exam/' },
  { text: 'Labs', link: '/05-labs/' },
  { text: 'Real-world', link: '/06-real-world/' },
  { text: 'Glossary', link: '/08-glossary/' },
]

const englishSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Introduction',
    collapsed: false,
    items: [
      { text: 'Start Here', link: '/01-introduction/' },
      { text: 'What is AWS', link: '/01-introduction/what-is-aws' },
      { text: 'Global Infrastructure', link: '/01-introduction/aws-global-infrastructure' },
      { text: 'How to Study', link: '/01-introduction/how-to-study' },
      { text: 'Certification Roadmap', link: '/01-introduction/certification-roadmap' },
    ],
  },
  {
    text: 'Fundamentals',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/02-fundamentals/' },
      { text: 'Compute Overview', link: '/02-fundamentals/compute-overview' },
      { text: 'Storage Overview', link: '/02-fundamentals/storage-overview' },
      { text: 'Networking Overview', link: '/02-fundamentals/networking-overview' },
      { text: 'IAM Basics', link: '/02-fundamentals/iam-basics' },
      { text: 'Pricing & Billing', link: '/02-fundamentals/pricing-billing' },
      { text: 'Well-Architected Framework', link: '/02-fundamentals/well-architected-overview' },
    ],
  },
  {
    text: 'Services',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/03-services/' },
      {
        text: 'Compute',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/03-services/compute/' },
          {
            text: 'Amazon EC2',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/03-services/compute/ec2/' },
              { text: 'Basics', link: '/03-services/compute/ec2/basics' },
              { text: 'Instance Types', link: '/03-services/compute/ec2/instance-types' },
              { text: 'Networking', link: '/03-services/compute/ec2/networking' },
              { text: 'Storage', link: '/03-services/compute/ec2/storage' },
              { text: 'Placement Groups', link: '/03-services/compute/ec2/placement-groups' },
              { text: 'Exam Notes', link: '/03-services/compute/ec2/exam-notes' },
              { text: 'Best Practices', link: '/03-services/compute/ec2/best-practices' },
              { text: 'Cost Optimization', link: '/03-services/compute/ec2/cost-optimization' },
              { text: 'Troubleshooting', link: '/03-services/compute/ec2/troubleshooting' },
            ],
          },
          { text: 'AWS Lambda', link: '/03-services/compute/lambda/' },
          { text: 'AWS Fargate', link: '/03-services/compute/fargate/' },
          { text: 'Amazon ECS', link: '/03-services/compute/ecs/' },
          { text: 'Amazon EKS', link: '/03-services/compute/eks/' },
        ],
      },
      {
        text: 'Storage',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/03-services/storage/' },
          { text: 'Amazon S3', link: '/03-services/storage/s3/' },
          { text: 'Amazon EFS', link: '/03-services/storage/efs/' },
          { text: 'Amazon EBS', link: '/03-services/storage/ebs/' },
          { text: 'Amazon FSx', link: '/03-services/storage/fsx/' },
          { text: 'Service Comparison', link: '/03-services/storage/storage-comparison' },
        ],
      },
      {
        text: 'Database',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/03-services/database/' },
          { text: 'Amazon RDS', link: '/03-services/database/rds/' },
          { text: 'Amazon DynamoDB', link: '/03-services/database/dynamodb/' },
          { text: 'Amazon Aurora', link: '/03-services/database/aurora/' },
          { text: 'Amazon DocumentDB', link: '/03-services/database/documentdb/' },
          { text: 'Service Comparison', link: '/03-services/database/database-comparison' },
        ],
      },
      {
        text: 'Networking & Delivery',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/03-services/networking/' },
          { text: 'Amazon VPC', link: '/03-services/networking/vpc/' },
          { text: 'Amazon Route 53', link: '/03-services/networking/route53/' },
          { text: 'Amazon API Gateway', link: '/03-services/networking/api-gateway/' },
          { text: 'Amazon CloudFront', link: '/03-services/networking/cloudfront/' },
          { text: 'VPC Connectivity', link: '/03-services/networking/vpc-connectivity' },
        ],
      },
      {
        text: 'Security & Identity',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/03-services/security/' },
          { text: 'AWS IAM', link: '/03-services/security/iam/' },
          { text: 'AWS KMS', link: '/03-services/security/kms/' },
          { text: 'Amazon Cognito', link: '/03-services/security/cognito/' },
          { text: 'Best Practices', link: '/03-services/security/security-best-practices' },
        ],
      },
      {
        text: 'Monitoring & Observability',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/03-services/monitoring/' },
          { text: 'Amazon CloudWatch', link: '/03-services/monitoring/cloudwatch/' },
          { text: 'AWS X-Ray', link: '/03-services/monitoring/xray/' },
          { text: 'AWS CloudTrail', link: '/03-services/monitoring/cloudtrail/' },
          { text: 'Strategy', link: '/03-services/monitoring/monitoring-strategy' },
        ],
      },
    ],
  },
  {
    text: 'Architecture',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/04-architecture/' },
      { text: 'High Availability', link: '/04-architecture/high-availability' },
      { text: 'Fault Tolerance', link: '/04-architecture/fault-tolerance' },
      { text: 'Serverless Architecture', link: '/04-architecture/serverless-architecture' },
      { text: 'Microservices on AWS', link: '/04-architecture/microservices-on-aws' },
      { text: 'Event-driven Architecture', link: '/04-architecture/event-driven-architecture' },
      { text: 'Hybrid Architecture', link: '/04-architecture/hybrid-architecture' },
      {
        text: 'Reference Architectures',
        collapsed: true,
        items: [
          { text: 'Web Application', link: '/04-architecture/reference-architectures/webapp' },
          { text: 'Mobile Backend', link: '/04-architecture/reference-architectures/mobile-backend' },
          { text: 'Real-time Apps', link: '/04-architecture/reference-architectures/real-time-apps' },
          { text: 'Data Lake', link: '/04-architecture/reference-architectures/data-lake' },
          { text: 'AI/ML Workflows', link: '/04-architecture/reference-architectures/ai-ml-workflows' },
        ],
      },
    ],
  },
  {
    text: 'Exam Preparation',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/07-exam/' },
      {
        text: 'Solutions Architect Associate (SAA-C03)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/07-exam/saa/exam-guide' },
          { text: 'Cheat Sheet', link: '/07-exam/saa/cheat-sheet' },
          { text: 'Sample Questions', link: '/07-exam/saa/sample-questions' },
          { text: 'Last-minute Tips', link: '/07-exam/saa/last-minute-tips' },
        ],
      },
      {
        text: 'Developer Associate (DVA-C02)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/07-exam/dva/exam-guide' },
        ],
      },
      {
        text: 'Solutions Architect Professional (SAP-C02)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/07-exam/sap/exam-guide' },
        ],
      },
      {
        text: 'SysOps Administrator Associate (SOA-C02)',
        collapsed: true,
        items: [
          { text: 'Exam Guide', link: '/07-exam/soa/exam-guide' },
        ],
      },
    ],
  },
  {
    text: 'Hands-on Labs',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/05-labs/' },
      { text: 'VPC Lab', link: '/05-labs/vpc-lab' },
      { text: 'S3 Lab', link: '/05-labs/s3-lab' },
      { text: 'EC2 Lab', link: '/05-labs/ec2-lab' },
      { text: 'Load Balancer Lab', link: '/05-labs/load-balancer-lab' },
      { text: 'Serverless Lab', link: '/05-labs/serverless-lab' },
    ],
  },
  {
    text: 'Real-world Playbooks',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/06-real-world/' },
      { text: 'Cost Optimization', link: '/06-real-world/cost-optimization' },
      { text: 'Logging Strategy', link: '/06-real-world/logging-strategy' },
      { text: 'Multi-account Structure', link: '/06-real-world/multi-account-structure' },
      { text: 'CloudFormation vs Terraform', link: '/06-real-world/cf-vs-tf' },
      { text: 'Disaster Recovery', link: '/06-real-world/disaster-recovery' },
      { text: 'Migration to AWS', link: '/06-real-world/migration-to-aws' },
    ],
  },
  {
    text: 'Glossary & References',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/08-glossary/' },
      { text: 'Acronyms', link: '/08-glossary/acronyms' },
      { text: 'Interview Questions', link: '/08-glossary/interview-questions' },
      { text: 'AWS Cheat Sheet', link: '/08-glossary/aws-cheat-sheet' },
    ],
  },
]

const vietnameseNav: DefaultTheme.NavItem[] = [
  { text: 'Trang chủ', link: '/vi/' },
  { text: 'Giới thiệu', link: '/vi/01-introduction/' },
  { text: 'Kiến thức nền', link: '/vi/02-fundamentals/' },
  { text: 'Dịch vụ', link: '/vi/03-services/' },
  { text: 'Kiến trúc', link: '/vi/04-architecture/' },
  { text: 'Luyện thi', link: '/vi/07-exam/' },
  { text: 'Phòng lab', link: '/vi/05-labs/' },
  { text: 'Thực chiến', link: '/vi/06-real-world/' },
  { text: 'Từ điển', link: '/vi/08-glossary/' },
]

const vietnameseSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Giới thiệu',
    collapsed: false,
    items: [
      { text: 'Bắt đầu', link: '/vi/01-introduction/' },
      { text: 'AWS là gì?', link: '/vi/01-introduction/what-is-aws' },
      { text: 'Hạ tầng toàn cầu', link: '/vi/01-introduction/aws-global-infrastructure' },
      { text: 'Cách học hiệu quả', link: '/vi/01-introduction/how-to-study' },
      { text: 'Lộ trình chứng chỉ', link: '/vi/01-introduction/certification-roadmap' },
    ],
  },
  {
    text: 'Kiến thức nền',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/02-fundamentals/' },
      { text: 'Compute', link: '/vi/02-fundamentals/compute-overview' },
      { text: 'Storage', link: '/vi/02-fundamentals/storage-overview' },
      { text: 'Networking', link: '/vi/02-fundamentals/networking-overview' },
      { text: 'IAM cơ bản', link: '/vi/02-fundamentals/iam-basics' },
      { text: 'Pricing & Billing', link: '/vi/02-fundamentals/pricing-billing' },
      { text: 'Well-Architected', link: '/vi/02-fundamentals/well-architected-overview' },
    ],
  },
  {
    text: 'Dịch vụ',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/03-services/' },
      {
        text: 'Compute',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/03-services/compute/' },
          {
            text: 'Amazon EC2',
            collapsed: true,
            items: [
              { text: 'Tổng quan', link: '/vi/03-services/compute/ec2/' },
              { text: 'Kiến thức cơ bản', link: '/vi/03-services/compute/ec2/basics' },
              { text: 'Loại instance', link: '/vi/03-services/compute/ec2/instance-types' },
              { text: 'Networking', link: '/vi/03-services/compute/ec2/networking' },
              { text: 'Lưu trữ', link: '/vi/03-services/compute/ec2/storage' },
              { text: 'Placement Groups', link: '/vi/03-services/compute/ec2/placement-groups' },
              { text: 'Ghi chú thi', link: '/vi/03-services/compute/ec2/exam-notes' },
              { text: 'Best practice', link: '/vi/03-services/compute/ec2/best-practices' },
              { text: 'Tối ưu chi phí', link: '/vi/03-services/compute/ec2/cost-optimization' },
              { text: 'Khắc phục sự cố', link: '/vi/03-services/compute/ec2/troubleshooting' },
            ],
          },
          { text: 'AWS Lambda', link: '/vi/03-services/compute/lambda/' },
          { text: 'AWS Fargate', link: '/vi/03-services/compute/fargate/' },
          { text: 'Amazon ECS', link: '/vi/03-services/compute/ecs/' },
          { text: 'Amazon EKS', link: '/vi/03-services/compute/eks/' },
        ],
      },
      {
        text: 'Storage',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/03-services/storage/' },
          { text: 'Amazon S3', link: '/vi/03-services/storage/s3/' },
          { text: 'Amazon EFS', link: '/vi/03-services/storage/efs/' },
          { text: 'Amazon EBS', link: '/vi/03-services/storage/ebs/' },
          { text: 'Amazon FSx', link: '/vi/03-services/storage/fsx/' },
          { text: 'So sánh dịch vụ', link: '/vi/03-services/storage/storage-comparison' },
        ],
      },
      {
        text: 'Cơ sở dữ liệu',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/03-services/database/' },
          { text: 'Amazon RDS', link: '/vi/03-services/database/rds/' },
          { text: 'Amazon DynamoDB', link: '/vi/03-services/database/dynamodb/' },
          { text: 'Amazon Aurora', link: '/vi/03-services/database/aurora/' },
          { text: 'Amazon DocumentDB', link: '/vi/03-services/database/documentdb/' },
          { text: 'So sánh dịch vụ', link: '/vi/03-services/database/database-comparison' },
        ],
      },
      {
        text: 'Mạng & CDN',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/03-services/networking/' },
          { text: 'Amazon VPC', link: '/vi/03-services/networking/vpc/' },
          { text: 'Amazon Route 53', link: '/vi/03-services/networking/route53/' },
          { text: 'Amazon API Gateway', link: '/vi/03-services/networking/api-gateway/' },
          { text: 'Amazon CloudFront', link: '/vi/03-services/networking/cloudfront/' },
          { text: 'Kết nối VPC', link: '/vi/03-services/networking/vpc-connectivity' },
        ],
      },
      {
        text: 'Bảo mật & Danh tính',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/03-services/security/' },
          { text: 'AWS IAM', link: '/vi/03-services/security/iam/' },
          { text: 'AWS KMS', link: '/vi/03-services/security/kms/' },
          { text: 'Amazon Cognito', link: '/vi/03-services/security/cognito/' },
          { text: 'Best practice bảo mật', link: '/vi/03-services/security/security-best-practices' },
        ],
      },
      {
        text: 'Giám sát & Quan sát',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/vi/03-services/monitoring/' },
          { text: 'Amazon CloudWatch', link: '/vi/03-services/monitoring/cloudwatch/' },
          { text: 'AWS X-Ray', link: '/vi/03-services/monitoring/xray/' },
          { text: 'AWS CloudTrail', link: '/vi/03-services/monitoring/cloudtrail/' },
          { text: 'Chiến lược quan sát', link: '/vi/03-services/monitoring/monitoring-strategy' },
        ],
      },
    ],
  },
  {
    text: 'Kiến trúc',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/04-architecture/' },
      { text: 'High Availability', link: '/vi/04-architecture/high-availability' },
      { text: 'Fault Tolerance', link: '/vi/04-architecture/fault-tolerance' },
      { text: 'Kiến trúc Serverless', link: '/vi/04-architecture/serverless-architecture' },
      { text: 'Microservices trên AWS', link: '/vi/04-architecture/microservices-on-aws' },
      { text: 'Kiến trúc hướng sự kiện', link: '/vi/04-architecture/event-driven-architecture' },
      { text: 'Kiến trúc Hybrid', link: '/vi/04-architecture/hybrid-architecture' },
      {
        text: 'Blueprint tham chiếu',
        collapsed: true,
        items: [
          { text: 'Web Application', link: '/vi/04-architecture/reference-architectures/webapp' },
          { text: 'Mobile Backend', link: '/vi/04-architecture/reference-architectures/mobile-backend' },
          { text: 'Ứng dụng realtime', link: '/vi/04-architecture/reference-architectures/real-time-apps' },
          { text: 'Data Lake', link: '/vi/04-architecture/reference-architectures/data-lake' },
          { text: 'Quy trình AI/ML', link: '/vi/04-architecture/reference-architectures/ai-ml-workflows' },
        ],
      },
    ],
  },
  {
    text: 'Luyện thi chứng chỉ',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/07-exam/' },
      {
        text: 'SAA-C03',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/07-exam/saa/exam-guide' },
          { text: 'Cheat Sheet', link: '/vi/07-exam/saa/cheat-sheet' },
          { text: 'Câu hỏi mẫu', link: '/vi/07-exam/saa/sample-questions' },
          { text: 'Tips cuối cùng', link: '/vi/07-exam/saa/last-minute-tips' },
        ],
      },
      {
        text: 'DVA-C02',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/07-exam/dva/exam-guide' },
        ],
      },
      {
        text: 'SAP-C02',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/07-exam/sap/exam-guide' },
        ],
      },
      {
        text: 'SOA-C02',
        collapsed: true,
        items: [
          { text: 'Hướng dẫn thi', link: '/vi/07-exam/soa/exam-guide' },
        ],
      },
    ],
  },
  {
    text: 'Phòng lab',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/05-labs/' },
      { text: 'Lab VPC', link: '/vi/05-labs/vpc-lab' },
      { text: 'Lab S3', link: '/vi/05-labs/s3-lab' },
      { text: 'Lab EC2', link: '/vi/05-labs/ec2-lab' },
      { text: 'Lab Load Balancer', link: '/vi/05-labs/load-balancer-lab' },
      { text: 'Lab Serverless', link: '/vi/05-labs/serverless-lab' },
    ],
  },
  {
    text: 'Thực chiến',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/06-real-world/' },
      { text: 'Tối ưu chi phí', link: '/vi/06-real-world/cost-optimization' },
      { text: 'Chiến lược logging', link: '/vi/06-real-world/logging-strategy' },
      { text: 'Cấu trúc multi-account', link: '/vi/06-real-world/multi-account-structure' },
      { text: 'CloudFormation vs Terraform', link: '/vi/06-real-world/cf-vs-tf' },
      { text: 'Chiến lược DR', link: '/vi/06-real-world/disaster-recovery' },
      { text: 'Migration lên AWS', link: '/vi/06-real-world/migration-to-aws' },
    ],
  },
  {
    text: 'Từ điển & tham khảo',
    collapsed: false,
    items: [
      { text: 'Tổng quan', link: '/vi/08-glossary/' },
      { text: 'Thuật ngữ & viết tắt', link: '/vi/08-glossary/acronyms' },
      { text: 'Câu hỏi phỏng vấn', link: '/vi/08-glossary/interview-questions' },
      { text: 'AWS Cheat Sheet', link: '/vi/08-glossary/aws-cheat-sheet' },
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
  rewrites: {
    'en/:rest*': ':rest*'
  },
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
