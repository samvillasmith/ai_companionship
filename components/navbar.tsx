"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; 
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export const Navbar = () => {
    return(
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-primary-10 bg-background/75 dark:bg-zinc-800/75 backdrop-blur-md border-b border-border border-zinc-700 h-16">
            <MobileSidebar />
            <div className="flex items-center">
                <Link href="/">
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-colors",
                        font.className
                        )}>
                        Souls Interlinked
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button size="sm" variant="premium" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                </Button>
                <ModeToggle />
                <UserButton />
            </div>
        </div>
    );
};