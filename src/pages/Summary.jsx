import React, { useState, useEffect } from "react";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";

export default function Summary() {
    const [summary, setSummary] = useState(`Senior Software Engineer with 5 years of experience in Site Reliability Engineering (SRE), and backend development. Skilled in Root Cause Analysis (RCA), defect resolution, and application optimization to enhance stability and performance. Passionate about building efficient automation tools to eliminate repetitive task and improve team productivity. Hands-on experience with Kubernetes, Docker, Linux systems, and cloud environments. Currently expanding into security domain and seeking a role that leverages my existing strengths while allowing me to grow further in cybersecurity.`);

    return (
        <Section>
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="whitespace-pre-line">
                {summary}
            </p>
        </Section>
    );
};
