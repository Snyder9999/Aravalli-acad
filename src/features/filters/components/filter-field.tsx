import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    label: string;
    span?: "full" | "half";
    children: React.ReactNode;
}

export function FilterField({ label, span = "half", children }: Props) {
    return (
        <div className={cn(span === "full" ? "col-span-2" : "col-span-1")}>
            <label className="text-sm font-medium mb-1 block">{label}</label>
            {children}
        </div>
    );
}