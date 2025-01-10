"use client";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const routes = [
        {
            icon: Home, 
            href: '/',
            label: 'Home',
            pro: false
        },
        {
            icon: Plus, 
            href: '/companion/new',
            label: 'Create',
            pro: true
        },
        {
            icon: Settings, 
            href: '/settings',
            label: 'Settings',
            pro: false
        },

    ];

    const onNavigate = (url: string, pro: boolean) => {
        //TODO, check if pro 
        return router.push(url);
    }
    return ( 
        <div className="space-y-4 flex flex-col h-full text-primary bg-background/50 dark:bg-zinc-800/50 backdrop-blur-sm">
            <div className="p-3 flex-1 flex justify-center">
                <div className="space-y-2">
                    {routes.map((route)=>(
                        <div
                            onClick={()=> onNavigate(route.href, route.pro)}
                            key={route.href}
                            className={cn(
                                "text-muted-foreground dark:text-zinc-400 text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary dark:text-indigo-400/90 hover:bg-primary/10 dark:hover:bg-zinc-700/50 rounded-lg transition-all duration-200",
                                pathname === route.href && "bg-primary/10 dark:bg-zinc-700/75 text-primary dark:text-violet-400/90"
                            )}
                        >
                            <div className="flex flex-col gap-y-2 items-center flex-1">
                                <route.icon className="h-5 w-5"/>
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}