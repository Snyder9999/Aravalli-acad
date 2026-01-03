import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { SCHOOL_INFO, NAVIGATION_LINKS } from '@/constants';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">{SCHOOL_INFO.name}</h3>
                        <p className="mb-4 text-sm">
                            Providing quality education from Class 1 to 12 with SEBA affiliation and
                            dedicated faculty.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={SCHOOL_INFO.social.facebook}
                                className="rounded-full bg-gray-800 p-2 transition hover:bg-blue-600"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href={SCHOOL_INFO.social.twitter}
                                className="rounded-full bg-gray-800 p-2 transition hover:bg-blue-400"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a
                                href={SCHOOL_INFO.social.instagram}
                                className="rounded-full bg-gray-800 p-2 transition hover:bg-pink-600"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href={SCHOOL_INFO.social.youtube}
                                className="rounded-full bg-gray-800 p-2 transition hover:bg-red-600"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {NAVIGATION_LINKS.filter((link) => !link.submenu).map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="transition hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Academics */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Academics</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/academics#primary" className="transition hover:text-white">
                                    Classes 1–5
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics#middle" className="transition hover:text-white">
                                    Classes 6–8
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics#secondary" className="transition hover:text-white">
                                    Classes 9–10
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics#science" className="transition hover:text-white">
                                    Class 11–12 (Science)
                                </Link>
                            </li>
                            <li>
                                <Link href="/academics#arts" className="transition hover:text-white">
                                    Class 11–12 (Arts)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                                <span>{SCHOOL_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 flex-shrink-0" />
                                <a href={`tel:${SCHOOL_INFO.phone}`} className="transition hover:text-white">
                                    {SCHOOL_INFO.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 flex-shrink-0" />
                                <a
                                    href={`mailto:${SCHOOL_INFO.email}`}
                                    className="transition hover:text-white"
                                >
                                    {SCHOOL_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
                    <p>
                        © {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
