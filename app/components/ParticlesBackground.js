"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "../../components/magicui/particles";

export function ParticlesBackground() {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);

    return (
        
            <Particles
                className="fixed inset-0 z-0"
                quantity={1000}
                ease={8}
                color={color}
                refresh
            />

    );
}
