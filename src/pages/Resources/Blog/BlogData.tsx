import Blog1 from "../../../../assets/images/Resourses/blog1.png";
import Blog2 from "../../../../assets/images/Resourses/blog2.png";
import Blog3 from "../../../../assets/images/Resourses/blog3.png";
import Blog4 from "../../../../assets/images/Resourses/blog4.png";
import Blog5 from "../../../../assets/images/Resourses/blog5.png";
import Blog6 from "../../../../assets/images/Resourses/blog6.png";
import Blog7 from "../../../../assets/images/Resourses/blog7.png";
import Blog8 from "../../../../assets/images/Resourses/blog8.png";
import Blog9 from "../../../../assets/images/Resourses/blog9.png";

export interface BlogItem {
    id: number;
    title: string;
    image: string;
    author: string;
    content: string;
}

export const blogs: BlogItem[] = [
    {
        id: 1,
        title:
            "Architecting Fast, Secure Cloud Sandboxes for AI Development with Namespace",
        image: Blog1,
        author: "Rahul",
        content: `
Cloud sandboxes are essential for safe AI development.

In this blog, we cover:
• Why secure sandboxes matter
• Namespace isolation concepts
• Performance vs security trade-offs
• Best practices for real-world AI workloads

This approach ensures developers can experiment freely
without risking production systems.
    `,
    },
    {
        id: 2,
        title: "Building Scalable AI Workflows with Modern Tooling",
        image: Blog2,
        author: "Rahul",
        content: `
Scalable AI workflows require strong foundations.

Topics discussed:
• Workflow orchestration
• CI/CD for AI models
• Automation strategies
• Monitoring and observability

A well-architected workflow saves time and cost.
    `,
    },
    {
        id: 3,
        title: "Optimizing Developer Experience in AI Platforms",
        image: Blog3,
        author: "Rahul",
        content: `
Developer experience directly impacts productivity.

This article explains:
• Fast feedback loops
• Local vs cloud environments
• Tooling consistency
• Reducing cognitive load

Great DX leads to better AI products.
    `,
    },
    {
        id: 4,
        title: "Security-First Design for AI Infrastructure",
        image: Blog4,
        author: "Rahul",
        content: `
Security must be built-in, not added later.

Covered areas:
• Zero trust architecture
• Secure model access
• Secrets management
• Compliance considerations

Security-first design prevents costly breaches.
    `,
    },
    {
        id: 5,
        title: "Managing Compute Costs in Large-Scale AI Systems",
        image: Blog5,
        author: "Rahul",
        content: `
AI workloads can be expensive if unmanaged.

This blog discusses:
• Cost-aware architecture
• Autoscaling strategies
• GPU utilization
• Monitoring and alerts

Smart planning keeps AI affordable.
    `,
    },
    {
        id: 6,
        title: "From Prototype to Production: AI Deployment Strategies",
        image: Blog6,
        author: "Rahul",
        content: `
Moving AI to production is challenging.

Key focus:
• Model versioning
• Deployment pipelines
• Rollbacks and testing
• Reliability engineering

Production readiness defines AI success.
    `,
    },
    {
        id: 7,
        title: "Improving AI Reliability with Observability",
        image: Blog7,
        author: "Rahul",
        content: `
Observability helps teams trust AI systems.

Learn about:
• Logging and tracing
• Model drift detection
• Performance metrics
• Error analysis

Visibility leads to reliability.
    `,
    },
    {
        id: 8,
        title: "Designing User-Centric AI Interfaces",
        image: Blog8,
        author: "Rahul",
        content: `
AI is only useful if users understand it.

This blog explores:
• Clear UI feedback
• Explainability
• Human-in-the-loop systems
• UX best practices

User-centric design drives adoption.
    `,
    },
    {
        id: 9,
        title: "Future Trends in AI Platform Engineering",
        image: Blog9,
        author: "Rahul",
        content: `
AI platforms are evolving rapidly.

Discussed trends:
• Agent-based systems
• Serverless AI
• Open model ecosystems
• AI governance

The future belongs to flexible platforms.
    `,
    },
];
