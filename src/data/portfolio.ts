export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  isFlagship?: boolean;
  stack: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  demoUrl?: string;
  repoUrl?: string;
  mockupType: 'three-tier-eks' | 'kubernetes-grafana';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: 'Full-Time' | 'Internship' | 'Engineering';
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  featured?: boolean;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
  badgeCode: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    avatarUrl: string;
    role: string;
    subRole: string;
    statusBadge: string;
    availability: string;
    location: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    githubUsername: string;
    githubUrl: string;
    linkedinUsername: string;
    linkedinUrl: string;
    portfolioDomain: string;
    portfolioUrl: string;
    resumeFilename: string;
    resumeConfigured: boolean;
    summary: string;
  };
  heroCodeSnippet: string;
  techStrip: { name: string; category: string }[];
  projects: Project[];
  skillGroups: SkillGroup[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Sachin Santosh Deore",
    monogram: "SD",
    avatarUrl: "/sachin-profile.jpg",
    role: "DevOps Engineer",
    subRole: "Cloud & CI/CD Automation Specialist",
    statusBadge: "DEVSECOPS & CLOUD INFRASTRUCTURE",
    availability: "Available for DevOps Roles & Projects",
    location: "Pune, Maharashtra, India",
    phone: "+91 9146504014",
    phoneDisplay: "+91 9146504014",
    email: "deoressachin@gmail.com",
    githubUsername: "sachdeore",
    githubUrl: "https://github.com/sachdeore",
    linkedinUsername: "sachin-sdeore",
    linkedinUrl: "https://linkedin.com/in/sachin-sdeore",
    portfolioDomain: "sachindeore.dev",
    portfolioUrl: "https://github.com/sachdeore",
    resumeFilename: "Sachin_Deore_Resume.pdf",
    resumeConfigured: true,
    summary:
      "DevOps Engineer with hands-on experience in CI/CD automation, cloud infrastructure (AWS), Docker, Kubernetes, and Infrastructure as Code (Terraform). Skilled in building and deploying scalable applications, improving release reliability, and ensuring secure, efficient deployments using monitoring and DevSecOps practices. Strong problem-solving mindset with a focus on automation, performance, and continuous improvement.",
  },

  heroCodeSnippet: `// Sachin Santosh Deore — DevOps & Cloud Engineer Profile
const devopsEngineer = {
  name: "Sachin Santosh Deore",
  role: "DevOps Engineer",
  education: "B.E. Computer Engineering (Sinhgad SIT)",
  cgpa: "9.25 / 10",
  coreCloud: ["AWS (EKS, EC2, S3, VPC, IAM)", "Azure (AZ-900)"],
  containersAndOrchestration: ["Docker", "Kubernetes", "Helm"],
  iacAndAutomation: ["Terraform", "Ansible", "Jenkins CI/CD", "Bash"],
  monitoringAndObservability: ["Prometheus", "Grafana", "Alertmanager"],
  securityAndQuality: ["SonarQube", "Trivy Vulnerability Scanning"],
  continuousDeployment: true,
  status: "Automating resilient pipelines & highly available infrastructure"
};

export default devopsEngineer;`,

  techStrip: [
    { name: "AWS", category: "Cloud" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Docker", category: "Containers" },
    { name: "Terraform", category: "IaC" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "Ansible", category: "Automation" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Visualization" },
    { name: "SonarQube", category: "DevSecOps" },
    { name: "Trivy", category: "Security" },
    { name: "Linux / Bash", category: "OS" },
    { name: "Git / GitHub", category: "Version Control" },
  ],

  projects: [
    {
      id: "three-tier-aws-eks",
      title: "Deployment of a Three-Tier Application on AWS EKS",
      tagline: "Production-grade Managed Kubernetes architecture with end-to-end automated CI/CD & DevSecOps",
      category: "Cloud & DevSecOps Application",
      isFlagship: true,
      stack: [
        "AWS EKS",
        "Kubernetes",
        "Docker",
        "Jenkins (CI/CD)",
        "Terraform",
        "Ansible",
        "Helm",
        "Prometheus",
        "Grafana",
        "SonarQube",
        "Trivy",
        "Nginx Ingress"
      ],
      features: [
        "Containerized multi-tier microservices with Docker and orchestrated workloads across AWS EKS clusters",
        "Fully automated build-test-deploy pipelines via Jenkins CI/CD with Git-triggered webhooks",
        "Integrated DevSecOps pipelines with SonarQube code analysis and Trivy vulnerability image scanning",
        "Provisioned immutable cloud infrastructure using Terraform (IaC) and configured instances with Ansible",
        "Nginx Ingress controller for intelligent routing, SSL termination, and external traffic load balancing",
        "Prometheus & Grafana integrated monitoring with automated alerting for node and pod health metrics",
        "Helm charts for structured release packaging, rolling updates, and zero-downtime rollbacks"
      ],
      overview:
        "Designed and deployed a complete three-tier application architecture on AWS EKS, containerizing services with Docker, orchestrating workloads using Kubernetes, and automating build–test–deploy workflows through Jenkins CI/CD, along with monitoring, security checks, and infrastructure automation for a stable production-like deployment.",
      problem:
        "Monolithic application deployments suffered from manual releases, lack of security scanning prior to production, unpredictable server drift, and zero visibility into cluster workload health during traffic spikes.",
      solution:
        "Architected an automated GitOps-ready pipeline: Terraform provisions AWS VPC and EKS infrastructure, Ansible handles host configuration, Jenkins executes multi-stage pipelines with SonarQube & Trivy gates, and workloads deploy to Kubernetes with Nginx Ingress routing and Prometheus/Grafana observability.",
      repoUrl: "https://github.com/sachdeore/DevOps-Project-Zomato.git",
      mockupType: "three-tier-eks",
    },
    {
      id: "kubernetes-grafana-prometheus",
      title: "Monitoring & Visualization for Kubernetes with Prometheus & Grafana",
      tagline: "End-to-end Kubernetes cluster observability, custom Grafana dashboards, and proactive Alertmanager triggers",
      category: "Cluster Observability & SRE",
      isFlagship: false,
      stack: [
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "kube-state-metrics",
        "Node Exporter",
        "Alertmanager",
        "Docker",
        "Linux",
        "Git/GitHub"
      ],
      features: [
        "Configured Prometheus server to dynamically scrape cluster-level and application-level metrics",
        "Deployed kube-state-metrics and Node Exporter DaemonSets for deep CPU, memory, and disk tracking",
        "Custom Grafana dashboards for real-time visualization of pod states, cluster utilization, and network I/O",
        "Implemented proactive alerting rules in Alertmanager with Slack/email thresholds for cluster anomalies",
        "Complete real-time visibility into Kubernetes cluster health and application performance",
        "Reduced mean-time-to-resolution (MTTR) with centralized log correlation and automated health indicators"
      ],
      overview:
        "Implemented end-to-end Kubernetes monitoring by configuring Prometheus to collect cluster and application metrics, and building Grafana dashboards for real-time visualization, performance tracking, and proactive alerting to improve reliability and troubleshooting.",
      problem:
        "Production workloads experienced silent performance bottlenecks, memory leaks, and CPU throttling without timely notice, causing unexpected downtime and difficult post-mortem root-cause analysis.",
      solution:
        "Deployed a centralized observability stack utilizing Prometheus service discovery, Node Exporter host metrics, kube-state-metrics, and rich Grafana dashboards with proactive Alertmanager notification webhooks.",
      repoUrl: "https://github.com/sachdeore",
      mockupType: "kubernetes-grafana",
    },
  ],

  skillGroups: [
    {
      category: "DevOps Tools & Technologies",
      description: "Industry-standard tools for containerization, orchestration, automation, and DevSecOps pipelines",
      skills: [
        { name: "Docker", highlight: true },
        { name: "Kubernetes", highlight: true },
        { name: "Terraform (IaC)", highlight: true },
        { name: "Ansible", highlight: true },
        { name: "Jenkins (CI/CD)", highlight: true },
        { name: "Helm", highlight: false },
        { name: "Prometheus", highlight: true },
        { name: "Grafana", highlight: true },
        { name: "SonarQube", highlight: true },
        { name: "Trivy", highlight: true },
        { name: "Bash / Shell Scripting", highlight: true },
        { name: "YAML", highlight: false },
        { name: "Git / GitHub", highlight: true },
        { name: "Linux", highlight: true },
        { name: "Windows", highlight: false },
      ],
    },
    {
      category: "Cloud Infrastructure",
      description: "Cloud computing architectures, managed services, compute, and scalable storage",
      skills: [
        { name: "AWS (EKS, EC2, S3, EBS, VPC, IAM)", highlight: true },
        { name: "Azure (Virtual Machines, Blob Storage)", highlight: false },
        { name: "Subnets & Route Tables", highlight: false },
        { name: "Security Groups & NACLs", highlight: true },
        { name: "Regions & Availability Zones", highlight: false },
        { name: "High Availability & Auto-scaling", highlight: true },
      ],
    },
    {
      category: "Networking Fundamentals",
      description: "Network architecture, routing, security perimeter, and traffic distribution",
      skills: [
        { name: "IP Addressing (Public / Private IP)", highlight: true },
        { name: "DNS", highlight: true },
        { name: "TCP / IP", highlight: true },
        { name: "Firewalls & Security Groups", highlight: true },
        { name: "Load Balancing (ALB / NLB)", highlight: true },
        { name: "Nginx / Ingress Controller", highlight: true },
        { name: "Basic Routing Concepts", highlight: false },
      ],
    },
    {
      category: "Behavioral & Leadership",
      description: "Professional workplace skills, technical documentation, and cross-team collaboration",
      skills: [
        { name: "Leadership", highlight: true },
        { name: "Decision Making", highlight: true },
        { name: "Communication", highlight: true },
        { name: "Adaptability", highlight: false },
        { name: "Time Management", highlight: false },
        { name: "Ability to Follow Technical Documentation", highlight: true },
      ],
    },
  ],

  experience: [
    {
      id: "hisan-labs",
      role: "Jr. DevOps Engineer",
      company: "Hisan Labs Pvt. Ltd.",
      type: "Full-Time",
      period: "Present",
      location: "Pune, India",
      description:
        "Working as a Jr. DevOps Engineer managing containerized workloads, automating CI/CD pipelines, provisioning infrastructure as code, and maintaining system observability.",
      highlights: [
        "Used Git/GitHub for version control and collaborated with development teams for smooth, frequent releases",
        "Managed Docker containers and deployed applications on Kubernetes clusters with high availability",
        "Provisioned cloud infrastructure using Terraform and automated configuration management tasks using Ansible",
        "Automated CI/CD pipelines using Jenkins for continuous build, automated testing, security gates, and deployment",
        "Implemented end-to-end monitoring using Prometheus and Grafana for system performance tracking and proactive alerting",
        "Managed Linux servers including user access management, file permissions, and infrastructure troubleshooting"
      ],
      skills: ["Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "Prometheus", "Grafana", "Linux", "Git"],
    },
  ],

  education: [
    {
      id: "be-comp",
      degree: "Bachelor’s of Engineering (Computer Engineering)",
      institution: "Sinhgad Institute of Technology",
      location: "Lonavala, Maharashtra",
      period: "2023 – 2026",
      grade: "9.25 / 10 CGPA",
      gradeType: "CGPA",
      featured: true,
      highlights: [
        "Exceptional academic record with an outstanding aggregate of 9.25 / 10 CGPA",
        "Specialized in Cloud Infrastructure, Distributed Systems, Operating Systems, and Computer Networks",
        "Hands-on execution of production-ready containerized architectures and DevOps automation"
      ],
    },
    {
      id: "diploma-comp",
      degree: "Diploma in Computer Technology",
      institution: "SNJB'S H.H.J.B Polytechnic College",
      location: "Nashik, Maharashtra",
      period: "2020 – 2023",
      grade: "84.06%",
      gradeType: "Percentage",
      featured: false,
      highlights: [
        "Graduated with First Class with Distinction (84.06%)",
        "Solid grounding in Computer Hardware, Networking Protocols, Linux System Administration, and Programming"
      ],
    },
  ],

  certifications: [
    {
      id: "az-900",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Certified",
      credentialUrl: "https://learn.microsoft.com/credentials",
      description:
        "Validation of foundational knowledge of cloud services, Azure architectural components, cloud governance, privacy, compliance, and cloud cost management.",
      badgeCode: "AZ-900",
    },
    {
      id: "oci-ai-2025",
      title: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
      issuer: "Oracle",
      date: "2025 Certified",
      credentialUrl: "https://education.oracle.com/",
      description:
        "Certified in fundamental AI and Machine Learning concepts, OCI Generative AI services, infrastructure deployment paradigms, and AI model lifecycle management.",
      badgeCode: "OCI-AI-2025",
    },
  ],
};