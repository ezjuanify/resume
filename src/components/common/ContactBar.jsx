import React, { useState, useEffect } from "react";

export default function ContactBar() {
    const [contactInfo, setContactInfo] = useState([
       { type: "label", value: "Singaporean" }, 
       { type: "phone", value: "+6589228924" }, 
       { type: "email", value: "ezJuanify@gmail.com" }, 
       { type: "link", value: "https://www.linkedin.com/in/manuel-martinez-90850093/" },
    ]);

    return (
        <div className="flex flex-wrap justify-center content-center gap-x-8 text-gray-400">
            {contactInfo.map((item, idx) => {
                switch (item.type) {
                    case "email":
                        return (
                            <a key={idx} href={`mailto:${item.value}`} className="hover:underline">
                                {item.value}
                            </a>
                        );
                    case "phone":
                        return (
                            <a key={idx} href={`tel:${item.value}`} className="hover:underline">
                                {item.value}
                            </a>
                        );
                    case "link":
                        return (
                            <a key={idx} href={item.value} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                LinkedIn
                            </a>
                        );
                    default:
                        return <span key={idx}>{item.value}</span>;
                }
            })}
        </div>
    );
};
