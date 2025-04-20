import React, { useState, useEffect } from "react";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";

export default function Certification() {
    const [certs, setCert] = useState([
        {
            name: "AWS Certified Solutions Architect - Associate",
            status: "In Progress",
            id: null,
        },
        {
            name: "AWS Certified Security - Specialty",
            status: "Planned",
            id: null,
        },
        {
            name: "Certified Kubernetes Administrator (CKA)",
            status: "Planned",
            id: null,
        },
        {
            name: "DevOps Institute - DevOps Foundation",
            status: "Active",
            id: "24049410",
        }
    ]);

    return (
        <Section>
            <SectionTitle>Certification</SectionTitle>
            <ul className="text-lg">
                {certs.map((cert, idx) => (
                    <li key={idx} className="my-2">
                        {cert.name}
                        <span className="italic">
                            {cert.status === "Active" ? "" : ` (${cert.status})`}
                        </span>
                    </li>
                ))}
            </ul>
        </Section>
    );
};
