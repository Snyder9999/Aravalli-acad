'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SCHOOL_INFO, NAVIGATION_LINKS } from '@/constants';

export function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                            <span className="text-xl font-bold">AA</span>
                        </div>
                        <div>
                            <div className="text-xl font-bold text-gray-900">{SCHOOL_INFO.name}</div>
                            <div className="text-xs text-gray-600">Excellence in Education</div>
                        </div>
                    </Link>

                    {/* Center: Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAVIGATION_LINKS.map((link) => (
                            <div
                                key={link.href}
                                className="relative"
                                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.submenu ? (
                                    <>
                                        <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-blue-600">
                                            {link.label}
                                            <ChevronDown className="h-4 w-4" />
                                        </button>
                                        {activeDropdown === link.label && (
                                            <div className="absolute left-0 top-full w-56 pt-2">
                                                <div className="rounded-lg bg-white py-2 shadow-xl">
                                                    {link.submenu.map((sublink) => (
                                                        <Link
                                                            key={sublink.href}
                                                            href={sublink.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                                                        >
                                                            {sublink.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="font-medium text-gray-700 transition hover:text-blue-600"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right: Contact & CTA */}
                    <div className="flex items-center gap-4">
                        <div className="hidden items-center gap-2 md:flex">
                            <Phone className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">{SCHOOL_INFO.phone}</span>
                        </div>
                        <Button asChild className="bg-orange-500 hover:bg-orange-600">
                            <Link href="/contact">Enroll Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
