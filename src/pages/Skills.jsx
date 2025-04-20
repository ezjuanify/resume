import React, { useState, useEffect } from "react";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";

export default function Skills() {
    const [domains, setDomains] = useState([
        { name: "Cloud & Infra", skills:
            [
                "AWS (EC2, IAM, S3)",
                "Terraform",
                "Docker",
                "Kubernetes",
            ]
        },
        { name: "Languages & Scripting", skills:
            [
                "Golang",
                "Python",
                "Bash",
                "TCL",
                "Java",
                "JavaScript",
                "Cuelang",
                "Lua",
            ]
        },
        { name: "Databases", skills:
            [
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Redis",
                "Informix",
            ]
        },
        { name: "Monitoring Tools", skills:
            [
                "Prometheus",
                "Grafana",
                "Loki",
                "ELK Stack"
            ]
        },
        { name: "CI/CD Tools", skills:
            [
                "GitHub Actions",
                "Jenkins",
                "Ansible",
            ]
        },
        { name: "Security Tools", skills:
            [
                "IAM Policies",
                "Security Groups",
                "TLS",
                "CloudTrail",
                "Container Hardening",
                "Least Privilege Principles",
                "OWASP Top 10",
            ]
        },
        { name: "Dev Tools", skills:
            [
                "Jira",
                "Confluence",
                "Git",
                "Kafka",
            ]
        },
        { name: "Platforms", skills:
            [
                "Linux",
                "Networking Fundamentals",
                "Systemd",
                "Windows Server",
            ]
        },
        { name: "Soft Skills", skills:
            [
                "Ownsership Mindset",
                "Team-Oriented",
                "Growth Focused",
            ]
        },
    ]);

    return (
        <Section>
            <SectionTitle>Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {domains.map((domain, i) => (
                    <div key={`domain_${i}`}>
                        <h3 className="text-lg font-semibold underline text-gray-300 tracking-tight">{domain.name}</h3>
                        <ul className="flex flex-wrap justify-center">
                            {domain.skills.map((skill, j) => (
                                <li key={`${i}_${j}`} className="flex items-center">
                                    {skill}
                                    {j !== domain.skills.length - 1 && <span className="mx-2">-</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};
