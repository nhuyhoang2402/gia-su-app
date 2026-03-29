"use client";

import { useEffect, useRef } from "react";
import { formatPrice } from "@/lib/utils";

const subjects = [
  {
    icon: "🔢",
    name: "Toán học",
    levels: "Tiểu học · THCS · THPT · Luyện thi ĐH",
    borderColor: "#3b82f6",
    prices: [
      { level: "Tiểu học", amount: 350000 },
      { level: "THCS", amount: 550000 },
      { level: "THPT", amount: 800000 },
    ],
  },
  {
    icon: "⚗️",
    name: "Vật Lý – Hóa Học",
    levels: "THCS · THPT · Luyện thi ĐH",
    borderColor: "#3b82f6",
    prices: [
      { level: "THCS", amount: 550000 },
      { level: "THPT", amount: 850000 },
      { level: "Luyện thi ĐH", amount: 1000000 },
    ],
  },
  {
    icon: "📖",
    name: "Ngữ Văn",
    levels: "Tiểu học · THCS · THPT",
    borderColor: "#3b82f6",
    prices: [
      { level: "Tiểu học", amount: 300000 },
      { level: "THCS", amount: 500000 },
      { level: "THPT", amount: 750000 },
    ],
  },
  {
    icon: "🌍",
    name: "Tiếng Anh",
    levels: "Tiểu học · THCS · THPT · Giao tiếp",
    borderColor: "#3b82f6",
    prices: [
      { level: "Tiểu học", amount: 400000 },
      { level: "THCS", amount: 600000 },
      { level: "THPT / Giao tiếp", amount: 900000 },
    ],
  },
  {
    icon: "🏆",
    name: "Luyện thi HSG",
    levels: "Cấp trường · huyện · tỉnh",
    borderColor: "#f59e0b",
    prices: [
      { level: "Toán / Lý / Hóa", amount: 1000000 },
      { level: "Văn / Anh", amount: 900000 },
    ],
  },
  {
    icon: "🎁",
    name: "Ưu đãi khai trương",
    levels: "Dành cho học sinh mới đăng ký",
    borderColor: "#16a34a",
    special: [
      { label: "Học thử", value: "Miễn phí 2 buổi" },
      { label: "Giới thiệu bạn", value: "Tặng 1 buổi" },
      { label: "Tháng khai trương", value: "Giảm 20%" },
    ],
  },
];

export default function Subjects() {
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
    <section id="subjects" className="section-pad" style={{ background: "#f0f4fb" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal mb-3"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            Môn học & Học phí
          </p>
          <h2
            className="font-playfair text-slate-900 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
          >
            Chương trình{" "}
            <em style={{ color: "#3b82f6", fontStyle: "normal" }}>đa dạng</em>
            , học phí{" "}
            <em style={{ color: "#3b82f6", fontStyle: "normal" }}>hợp lý</em>
          </h2>
          <div
            className="mt-3 rounded-full"
            style={{ width: 48, height: 3, background: "#f59e0b" }}
          />
          <p className="text-slate-500 text-sm mt-3">
            Học phí tính theo tháng (8 buổi/tháng, mỗi buổi 90 phút). Miễn phí 2 buổi học thử đầu tiên.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {subjects.map((s, i) => (
            <div
              key={s.name}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal bg-white rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              style={{
                borderLeft: `4px solid ${s.borderColor}`,
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-bold text-slate-800 text-base mb-1">{s.name}</div>
              <div className="text-slate-400 text-xs mb-4">{s.levels}</div>

              {/* Normal prices */}
              {s.prices && (
                <div className="flex flex-col gap-2">
                  {s.prices.map((p) => (
                    <div
                      key={p.level}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-slate-500">{p.level}</span>
                      <span
                        className="font-bold text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "#f0f4fb",
                          color: "#2563b0",
                          border: "1px solid rgba(59,130,246,0.2)",
                        }}
                      >
                        {formatPrice(p.amount)}/tháng
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Special offers */}
              {s.special && (
                <div className="flex flex-col gap-2">
                  {s.special.map((sp) => (
                    <div
                      key={sp.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-slate-500">{sp.label}</span>
                      <span
                        className="font-bold text-xs px-3 py-1 rounded-full"
                        style={{
                          background: "#dcfce7",
                          color: "#16a34a",
                          border: "1px solid #bbf7d0",
                        }}
                      >
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}