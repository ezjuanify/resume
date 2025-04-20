import React, { useState, useEffect } from "react";
import ContactBar from "../components/common/ContactBar";

export default function Header() {
    const [name, setName] = useState("Manuel Juan Martinez");

    return (
        <header>
            <h1 className="font-semibold">{name}</h1>
            <ContactBar />
        </header>
    );
};