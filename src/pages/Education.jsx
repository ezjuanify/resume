import React, { useState, useEffect } from "react";
import Section from "../components/common/Section";
import SectionTitle from "../components/common/SectionTitle";

export default function Education() {
    const [schools, setSchool] = useState([
        {
            name: "University of Wollongong",
            level: "Bachelor",
            major: "Computer Science (Digital Systems Security)",
            country: "SG",
            year: "2021",
        },
        {
            name: "Victoria University",
            level: "Professional Diploma",
            major: "ERP Applications",
            specialization: "",
            country: "SG",
            year: "2016",
        },
        {
            name: "Republic Polytechnic",
            level: "Diploma",
            major: "Information Technology (IT)",
            specialization: "",
            country: "SG",
            year: "2012",
        },
    ]);

    return (
        <Section>
            <SectionTitle>Education</SectionTitle>
            {schools.map((sch, idx) => (
                <div key={idx} className="my-5">
                    <h3 className="font-semibold text-lg tracking-tighter">
                        {`${sch.level} in ${sch.major}`}
                    </h3>
                    <p className="italic tracking-wider">
                        {`${sch.name} - ${sch.country} - ${sch.year}`}
                    </p>
                </div>
            ))}
        </Section>
    );
};
