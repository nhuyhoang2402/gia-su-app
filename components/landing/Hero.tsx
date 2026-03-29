"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const stats = [
  { num: "5+", label: "Giáo viên tâm huyết" },
  { num: "6", label: "Môn học đa dạng" },
  { num: "3", label: "Cấp học phù hợp" },
  { num: "2–5", label: "Học sinh / lớp nhỏ" },
  { num: "100%", label: "Tâm huyết & uy tín" },
  { num: "FREE", label: "2 buổi học thử" },
];

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate vào khi load
    const timer = setTimeout(() => {
      leftRef.current?.classList.add("visible");
      rightRef.current?.classList.add("visible");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-navy-gradient flex items-center relative overflow-hidden"
      style={{ padding: "130px 24px 90px" }}
    >
      {/* Background glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 55%, rgba(59,130,246,0.18) 0%, transparent 50%), radial-gradient(circle at 82% 18%, rgba(245,158,11,0.12) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text */}
          <div ref={leftRef} className="reveal">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-sky-300 text-sm font-medium mb-6 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(59,130,246,0.18)",
                border: "1px solid rgba(59,130,246,0.38)",
              }}
            >
              📍 Trung tâm gia sư tại Bắc Ninh
            </div>

            {/* Heading */}
            <h1
              className="font-playfair text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              Nơi <em style={{ color: "#f59e0b", fontStyle: "normal" }}>tri thức</em>
              <br />
              được thắp sáng
            </h1>

            {/* Sub */}
            <p
              className="leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}
            >
              Chúng tôi đồng hành cùng học sinh từ Tiểu học đến THPT — với
              đội ngũ giáo viên tâm huyết, lớp học sĩ số nhỏ và phương pháp
              giảng dạy hiệu quả.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#register"
                className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#f59e0b",
                  color: "#0a1628",
                  boxShadow: "0 4px 18px rgba(245,158,11,0.35)",
                }}
              >
                🎓 Đăng ký học thử miễn phí
              </Link>
              <Link
                href="#subjects"
                className="inline-flex items-center gap-2 font-medium text-sm px-6 py-3 rounded-lg transition-all duration-200 text-white hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
              >
                Xem môn học →
              </Link>
            </div>
          </div>

          {/* RIGHT — Stats grid */}
          <div
            ref={rightRef}
            className="reveal grid grid-cols-3 gap-3"
            style={{ transitionDelay: "150ms" }}
          >
            {stats.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl p-5 text-center transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div
                  className="font-playfair font-black leading-none mb-1.5"
                  style={{ fontSize: "1.9rem", color: "#f59e0b" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-xs leading-snug"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}