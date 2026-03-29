"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Giới thiệu", href: "#about" },
    { label: "Đội ngũ", href: "#team" },
    { label: "Môn học", href: "#subjects" },
    { label: "Lịch học", href: "#schedule" },
    { label: "Phản hồi", href: "#feedback" },
    { label: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 140) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => setMobileOpen(false);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg"
                    : "bg-[#0a1628]/80 backdrop-blur-sm"
            )}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-playfair text-xl font-bold text-white flex items-center gap-2"
                >
                    ⭐ Gia Sư <span className="text-amber-400">Hải Anh</span>
                </Link>

                <ul className="hidden md:flex items-center gap-7 list-none">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors duration-200",
                                    activeSection === link.href.replace("#", "")
                                        ? "text-sky-300"
                                        : "text-white/70 hover:text-sky-300"
                                )}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <Link
                    href="#register"
                    className="hidden md:inline-flex items-center gap-2 bg-amber-400 text-[#0a1628] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-amber-300 transition-all"
                >
                    🎓 Đăng ký học thử
                </Link>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-1.5"
                    aria-label="Menu"
                >
                    <span className={cn("block w-6 h-0.5 bg-white transition-all duration-300", mobileOpen && "rotate-45 translate-y-2")} />
                    <span className={cn("block w-6 h-0.5 bg-white transition-all duration-300", mobileOpen && "opacity-0")} />
                    <span className={cn("block w-6 h-0.5 bg-white transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-2")} />
                </button>
            </div>

            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 border-t border-white/10",
                    mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="bg-[#0a1628] px-6 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleNavClick}
                            className={cn(
                                "py-3 text-sm font-medium border-b border-white/10 transition-colors",
                                activeSection === link.href.replace("#", "")
                                    ? "text-sky-300"
                                    : "text-white/75 hover:text-sky-300"
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link
                        href="#register"
                        onClick={handleNavClick}
                        className="mt-3 text-center bg-amber-400 text-[#0a1628] font-bold text-sm px-5 py-3 rounded-lg"
                    >
                        🎓 Đăng ký học thử miễn phí
                    </Link>
                </div>
            </div >
        </nav >
    );
}