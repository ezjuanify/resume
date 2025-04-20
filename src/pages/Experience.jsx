import React, { useState, useEffect } from "react";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";
import { parseMarkdownBold } from "../utils/parseMarkdownBold";

export default function Experience() {
    const [experiences, setExperiences] = useState([
        {
            title: "Senior Software Engineer (SRE)",
            company: "Openbet Singapore Pte Ltd",
            location: "SG",
            from_m: 1,
            from_y: 2023,
            to_m: "-",
            to_y: "-",
            responsibilities: [
                "Operated within a **Kubernetes**-based infrastructure to support scalable and resilient applications.",
                "Enhanced backend performance and ensured high availability by identifying system inefficiencies and troubleshooting workloads within **Kuberenetes Clusters**.",
                "Investigated and **resolved high-priority production defects**, delivering **Root Cause Analysis (RCA)** and documenting remediation actions.",
                "Investigated and resolved **Kafka**-related issues to **maintain data pipeline stability and performance**.",
                "Built a robust **migration tool** for **transferring high-volume client data into internal systems**, now widely used across the company.",
                "Built **custom tools** that **automates tedious, repetitive, and time-consuming tasks**, saving time and improving productivity.",
                "Developed and maintained multiple modules for the core product line, contributing to key feature delivery and long-term stability.",
                "Collaborated closely with teammates, providing guidance and technical support across various tasks.",
                "Coordinated with teams across different time zones to expedite PR approvals and facilitate smooth release cycles.",
                "Participated in **code reviews**, delivered technical demos, and provided analysis on technical feasibility and implementation concerns.",
            ]
        },
        {
            title: "Software Developer",
            company: "Acronis Asia Pte Ltd",
            location: "SG",
            from_m: 12,
            from_y: 2021,
            to_m: 10,
            to_y: 2022,
            responsibilities: [
                "Contributed to the development of a firewall module integrated into company's mainline security product.",
                "Designed a custom reverse proxy proof of concept (PoC) for integration into company's mainline security product.",
                "Built and tested security products on Linux-based platforms.",
            ]
        },
        {
            title: "Software Developer (SRE) - Client: DBS Bank",
            company: "Comtel Solutions Pte Ltd",
            location: "SG",
            from_m: 12,
            from_y: 2019,
            to_m: 12,
            to_y: 2021,
            responsibilities: [
                "Maintain and configured IBM Tivoli Workload Schedule (TWS) to support high-volume financial systems.",
                "Develop performance testing tools used for high-volume simulations to identify bottlenecks and support system optimization.",
                "Performed Root Cause Analysis (RCA) on issues affecting high-performance trading systems and documented findings and resolutions.",
                "Worked with Redis and Lua-based data storage systems, conducting Root Cause Analysis (RCA), and implementing optimizations.",
                "Supported and maintained a high-volume, high-performance trading system written in Go, utilizing concurrency and API-based architecture.",
                "Maintained and supported multiple real-time data ingestioon entry points within a high-performance trading system, and developed one of the key modules for processing incoming data streams.",
            ]
        },
        {
            title: "System Engineer",
            company: "Chilli Api Catering Pte Ltd",
            location: "SG",
            from_m: 11,
            from_y: 2017,
            to_m: 12,
            to_y: 2019,
            responsibilities: [
                "Conducted internal security training sessions to educate users on common threats and best practices.",
                "Monitored network traffic for anomalies, investigated suspicious activity and documented findings and resolutions.",
                "Managed EC2 applications and instances, including configuration of security group and IAM policies.",
                "Developed and maintained custom analytics tools to support sales data interpretation and insight generation.",
                "Provided after-hours support for system upgrades and issue resolution requiring off-peak execution.",
            ]
        },
        {
            title: "Software Engineer",
            company: "AIT Technologies Pte Ltd",
            location: "SG",
            from_m: 8,
            from_y: 2014,
            to_m: 8,
            to_y: 2016,
            responsibilities: [
                "Developed and maintained interactive kiosk applications used in customer-facing environments.",
                "Built and maintained hardware APIs to support integration between kiosk software and peripherals devices.",
                "Developed demo software for customer showcases and product demonstrations.",
                "Provided on-site support and communicated directly with clients to address technical issues and fulfill requirements.",
                "Provided after-hours support based on customer demands and urgent deadlines, ensuring timely delivery under pressure.",
            ]
        },
    ]);

    const months  = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <Section>
            <SectionTitle>Professional Experience</SectionTitle>
            {experiences.map((exp, i) => (
                <div key={i} className="text-left my-10">
                    <h3 className="text-lg font-semibold underline decoration-2 underline-offset-4">{exp.title}</h3>
                    <p className="italic"><span className="font-semibold">{exp.company}</span> - <span>{exp.location}</span></p>
                    <p className="text-sm italic">
                        {`${months[exp.from_m - 1]} ${exp.from_y} - `}
                        {exp.to_m === "-" && exp.to_y === "-" ? "Present" : ""}
                        {exp.to_m !== "-" ? months[exp.to_m - 1]  : ""}
                        {exp.to_y !== "-" ? ` ${exp.to_y}`  : ""}
                    </p>
                    <ul className="list-disc list-inside my-2">
                        {exp.responsibilities.map((resp, j) => (
                            <li key={j} className="my-2">
                                {parseMarkdownBold(resp)}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Section>
    );
};
