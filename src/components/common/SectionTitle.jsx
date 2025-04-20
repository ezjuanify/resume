import React, { useState, useEffect } from "react";

export default function SectionTitle({ children }) {
    return (
        <div>
            <h2 className="text-3xl font-semibold tracking-wide text-gray-400 uppercase mb-2">{children}</h2>
        </div>
    );
};
