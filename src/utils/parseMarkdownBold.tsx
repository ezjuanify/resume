import React from "react";

export const parseMarkdownBold = (text: string | undefined) => {
    if (!text) return "";

    const parts = text.split(/(\*\*[^*]+\*\*)/g);

    return parts.map((p, idx) => {
        if (p.startsWith("**") && p.endsWith("**")) {
            const clean = p.slice(2, -2);
            return <span key={idx} className="font-bold">{clean}</span>;
        }
        return p;
    });
};