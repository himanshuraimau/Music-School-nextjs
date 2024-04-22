"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive} >
            <Link href={"/"}>
                <MenuItem active={active} item={"Home"} setActive={setActive}>
                    
                </MenuItem>
            </Link>
            <MenuItem active={active} item={"Coures"} setActive={setActive}>
              <div className="flex flex-col space-y-4 text-sm">
                 <HoveredLink href="/coures">All Courses</HoveredLink>
                 <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                 <HoveredLink href="/coures">Advance Composition</HoveredLink>
                 <HoveredLink href="/coures">Song Writing</HoveredLink>
                 <HoveredLink href="/coures">Music Production</HoveredLink>
                 </div>
                </MenuItem>
                <Link href="/contact">
                <MenuItem active={active} item={"Contact"} setActive={setActive}>
                    
                    </MenuItem>
                </Link>
        </Menu>
        </div>
  )
}


export default Navbar;