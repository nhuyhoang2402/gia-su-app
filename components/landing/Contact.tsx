"use client";

import { useEffect, useRef } from "react";

const contacts = [
    {
        icon: "📞",
        label: "Điện thoại",
        value: "0912 345 678",
        href: "tel:0912345678",
    },
    {
        icon: "💬",
        label: "Zalo",
        value: "Chat qua Zalo",
        href: "https://zalo.me/0912345678",
    },
    {
        icon: "📘",
        label: "Facebook",
        value: "fb.com/giasuhaiah",
        href: "https://facebook.com",
    },
    {
        icon: "📍",
        label: "Địa chỉ",
        value: "Phường ..., TP. Bắc Ninh",
        href: null,
    },
    {
        icon: "🕐",
        label: "Giờ làm việc",
        value: "Thứ 2 – CN · 07:00–21:00",
        href: null,
    },
];

export default function Contact() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );
        refs.current.forEach((r) => r && observer.observe(r));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="section-pad bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div
                    ref={(el) => { refs.current[0] = el; }}
                    className="reveal mb-12"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
                        Liên hệ
                    </p>
                    <h2
                        className="font-playfair text-slate-900 leading-tight"
                        style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
                    >
                        Gặp chúng tôi{" "}
                        <em style={{ color: "#3b82f6", fontStyle: "normal" }}>dễ dàng</em>
                    </h2>
                    <div
                        className="mt-3 rounded-full"
                        style={{ width: 48, height: 3, background: "#f59e0b" }}
                    />
                </div>

                {/* Contact cards */}
                <div
                    ref={(el) => { refs.current[1] = el; }}
                    className="reveal grid grid-cols-2 md:grid-cols-5 gap-4"
                >
                    {contacts.map((c) => (
                        c.href ? (
                            <a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                className="rounded-2xl p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md block"
                                style={{ border: "1px solid #e2e8f0" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.borderColor = "#3b82f6")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.borderColor = "#e2e8f0")
                                }
                            >   
                                <div className="text-3xl mb-3">{c.icon}</div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                                    {c.label}
                                </div>
                                <div className="font-bold text-blue-500 text-sm">
                                    {c.value}
                                </div>
                            </a>
                        ) : (
                            <div
                                key={c.label}
                                className="rounded-2xl p-6 text-center"
                                style={{ border: "1px solid #e2e8f0" }}
                            >   
                                <div className="text-3xl mb-3">{c.icon}</div>
                                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                                    {c.label}
                                </div>
                                <div className="font-bold text-slate-700 text-sm">{c.value}</div>
                            </div>
                        )
                    ))}
                </div>

                {/* Map placeholder */}
                <div
                    ref={(el) => { refs.current[2] = el; }}
                    className="reveal mt-10 rounded-2xl flex flex-col items-center justify-center gap-3"
                    style={{
                        border: "1px solid #e2e8f0",
                        height: 200,
                        background: "#f0f4fb",
                    }}
                >
                    <span className="text-4xl">🗺️</span>
                    <p className="text-slate-400 text-sm">Bản đồ đường đến trung tâm</p>
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 text-sm font-semibold hover:underline"
                    >
                        → Mở Google Maps
                    </a>
                </div>
            </div>
        </section >
    );
}