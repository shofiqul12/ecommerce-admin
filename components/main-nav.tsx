"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { useParams, usePathname } from "next/navigation";



export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [

        {
            href: `/${params.storeId}`,
            label: 'Overview',
            active: pathname === `/${params.stoeId}/`,
        },
        {
            href: `/${params.storeId}/billboards`,
            label: 'Billboards',
            active: pathname === `/${params.stoeId}/billboards`,
        },
        {
            href: `/${params.storeId}/categories`,
            label: 'Categories',
            active: pathname === `/${params.stoeId}/categories`,
        },
        {
            href: `/${params.storeId}/sizes`,
            label: 'Sizes',
            active: pathname === `/${params.stoeId}/sizes`,
        },
        {
            href: `/${params.storeId}/colors`,
            label: 'Colors',
            active: pathname === `/${params.stoeId}/colors`,
        },
        {
            href: `/${params.storeId}/products`,
            label: 'Products',
            active: pathname === `/${params.stoeId}/products`,
        },
        {
            href: `/${params.storeId}/settings`,
            label: 'Settings',
            active: pathname === `/${params.stoeId}/settings`,
        },
    ];

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}

        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground"
                    )}
                >
                    {route.label}

                </Link>
            ))}


        </nav>

    )

};