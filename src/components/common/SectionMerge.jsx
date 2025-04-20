import React, { useState, useEffect } from "react";

export default function SectionMerge({ children }) {
    return (
        <div className="grid grid-cols-2">
            {children}
        </div>
    )
}