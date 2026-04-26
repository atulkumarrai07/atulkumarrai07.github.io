export const personal = {
  name: "Atul Kumar Rai",
  title: "Software Engineer II",
  tagline: "Building distributed systems at PlayStation · Ex-AWS · CMU Grad",
  email: "atulkumarrai3@gmail.com",
  linkedin: "https://linkedin.com/in/atulkumarrai",
  github: "https://github.com/atulkumarrai",
  location: "San Jose, CA",
  summary:
    "Software engineer with 7+ years of experience designing and operating distributed systems across PlayStation, AWS, and enterprise environments. Focused on systems design, service reliability, observability, and performance optimization.",
};

export const experiences = [
  {
    company: "Sony Interactive Entertainment",
    role: "Software Engineer II",
    duration: "Sep 2023 – Present",
    location: "San Mateo, CA",
    logo: "SIE",
    color: "#00439c",
    points: [
      "Reduced Game Media Service video transcoding egress costs by ~$500K/year by restricting instantaneous transcoding to active CMG PlayStation App members",
      "Architected mobile session lifecycle management with server-side opaque session handles, cross-app SSO via multi-tenant DynamoDB, and device-bound security aligned with OAuth 2.0",
      "Assumed primary ownership of off-console session management and proxy services, leading cross-team initiatives including PlayStation.com, Family mobile app, and PlayStation mobile app onboarding",
      "Designed and built the IsoPerf performance testing framework end-to-end for GraphQL Federation — adopted platform-wide for data-driven feature rollout decisions",
      "Diagnosed and resolved a critical memory leak in session-service that persisted for over two years, presenting root cause analysis to North America Services leadership",
      "Led AWS CloudWatch Synthetic Canaries initiative from POC through team-wide adoption across US, Japan, and India teams",
      "Expanded platform observability across GraphQL Federation with service metrics, Grafana dashboards, and LTIE/LTIP resiliency framework integration",
    ],
    tech: ["Java", "GraphQL", "Apollo Federation", "Kubernetes", "AWS", "DynamoDB", "k6", "Grafana"],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer",
    duration: "Sep 2022 – Jun 2023",
    location: "Santa Clara, CA",
    logo: "AWS",
    color: "#ff9900",
    points: [
      "Designed an anti-entropy reconciliation system to detect and repair data inconsistencies from dropped notifications, targeting 12% reduction in monthly escalations",
      "Optimized AWS Lambda functions and CloudWatch resource management, resolving critical bottlenecks and reducing average API response time",
      "Built event-driven microservices using Lambda, SNS, SQS, and DynamoDB with CloudFormation IaC",
      "Automated custom report generation using API Gateway, S3, and iText, streamlining customer information delivery",
    ],
    tech: ["Java", "Python", "AWS Lambda", "DynamoDB", "SNS/SQS", "CloudFormation"],
  },
  {
    company: "Infosys Limited",
    role: "Senior Systems Engineer",
    duration: "Jun 2017 – Apr 2021",
    location: "Pune, India",
    logo: "INFY",
    color: "#007cc3",
    points: [
      "Designed and developed scalable RESTful APIs in C# for a Fortune 500 insurance client, integrating Federal, State, and company regulatory requirements",
      "Performed root cause analysis using data-driven techniques, reducing mean resolution time by 20%",
      "Optimized SQL queries for high-volume data processing, improving retrieval performance and storage efficiency across production databases",
      "Mentored engineers across geographically distributed teams on SOLID principles, OOP design, and engineering best practices",
      "Automated recurring workflows with Python scripts, reducing manual intervention and accelerating key operational processes",
    ],
    tech: ["C#", "Python", "SQL", "RESTful APIs", "Jenkins", "Docker"],
  },
];

export const skills = {
  "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C#", "Shell Script"],
  "Frameworks & Libraries": ["Apollo Server", "Apollo Federation", "GraphQL", "Express.js", "Node.js", "Spring Boot", "Hibernate"],
  "Cloud & Infrastructure": ["Kubernetes", "Helm", "Terraform", "Docker", "AWS Lambda", "DynamoDB", "SQS/SNS", "S3", "CloudFormation"],
  "Databases & Messaging": ["Cassandra", "Redis", "MongoDB", "Kafka", "Kinesis", "PostgreSQL", "MySQL"],
  "Testing & Performance": ["k6", "Jest", "JUnit", "Mockito", "Supertest", "Clinic.js", "IsoPerf"],
  "Build & Observability": ["Datadog", "Grafana", "Prometheus", "Splunk", "Jenkins", "GitHub", "Maven", "Jira"],
};

export const projects = [
  {
    title: "IsoPerf — Isolated Performance Testing Framework",
    description:
      "End-to-end isolated performance testing framework for Federated GraphQL service. Includes test environments, mock services, Helm charts, k6 scripts, and Grafana dashboards — adopted platform-wide at Sony PlayStation for data-driven feature rollout decisions.",
    tech: ["k6", "Grafana", "Helm", "Kubernetes", "GraphQL"],
    github: "",
    live: "",
    featured: true,
  },
  {
    title: "Stream Processing with Kafka & Samza",
    description:
      "Backend for an Uber-like application leveraging Kafka and Samza for real-time driver/rider matching. Analyzes streams considering preferences, rating, salary, and location for optimal personalized matching.",
    tech: ["Java", "Apache Kafka", "Apache Samza", "Stream Processing"],
    github: "https://github.com/atulkumarrai",
    live: "",
    featured: false,
  },
  {
    title: "Multi-Cloud Microservice Deployment",
    description:
      "Deployed 3 microservices for a WeChat-inspired app across Kubernetes clusters on AWS, GCP, and Azure. Created Helm charts for simplified provisioning, updates, and rollbacks.",
    tech: ["Kubernetes", "Helm", "AWS", "GCP", "Azure", "Docker"],
    github: "https://github.com/atulkumarrai",
    live: "",
    featured: false,
  },
  {
    title: "Mobile Session Architecture",
    description:
      "Architected session lifecycle management for PlayStation mobile and Family apps. Server-side opaque session handles, cross-app SSO via multi-tenant DynamoDB, and device-bound security aligned with OAuth 2.0.",
    tech: ["Java", "DynamoDB", "OAuth 2.0", "Apollo Federation"],
    github: "",
    live: "",
    featured: true,
  },
];

export const education = [
  {
    school: "Carnegie Mellon University",
    degree: "M.S. Information Systems Management",
    duration: "2021 – 2022",
    gpa: "3.93 / 4.0",
    location: "Pittsburgh, PA",
    color: "#c41230",
    highlights: ["Top GPA", "Systems & Data Science Focus"],
  },
  {
    school: "SRM University",
    degree: "B.Tech Electrical & Electronics Engineering",
    duration: "2013 – 2017",
    gpa: "3.95 / 4.0",
    location: "Chennai, India",
    color: "#1a56db",
    highlights: ["Outstanding Academic Record"],
  },
];

export const certifications = [
  "Certified Kubernetes Application Developer (CKAD) — In Progress",
  "Apollo GraphQL Workshop — Sony Interactive Entertainment",
  "GDFT Team 6 AI Workshop — LangChain, RAG, LLM Integration (Top 15 Selected)",
  "GMX Mentorship Program — AnitaB.org (2024–2025)",
];
