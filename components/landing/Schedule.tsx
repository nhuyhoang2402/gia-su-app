"use client";

import { useEffect, useRef } from "react";

const schedules = [
  {
    ca: "Sáng",
    ngay: "Thứ 2 – Thứ 6",
    gio: "07:30 – 09:00",
    doiTuong: "Tiểu học (lớp 1–5)",
    status: "open",
  },
  {
    ca: "Chiều sớm",
    ngay: "Thứ 2 – Thứ 6",
    gio: "14:00 – 15:30",
    doiTuong: "Tiểu học & THCS",
    status: "open",
  },
  {
    ca: "Chiều",
    ngay: "Thứ 2 – Thứ 6",
    gio: "16:00 – 17:30",
    doiTuong: "THCS (lớp 6–9)",
    status: "active",
  },
  {
    ca: "Tối",
    ngay: "Thứ 2 – Thứ 6",
    gio: "18:30 – 20:00",
    doiTuong: "THPT & luyện thi ĐH",
    status: "almost",
  },
  {
    ca: "Cuối tuần",
    ngay: "Thứ 7 – Chủ nhật",
    gio: "08:00 – 11:00",
    doiTuong: "Tất cả cấp học",
    status: "priority",
  },
];

const statusConfig: Record<string, { label: string; bg: string; color: string }> = {
  open:     { label: "Còn chỗ",   bg: "#dcfce7", color: "#16a34a" },
  active:   { label: "Đang mở",   bg: "#dbeafe", color: "#1d4ed8" },
  almost:   { label: "Gần đầy",   bg: "#ffedd5", color: "#c2410c" },
  priority: { label: "Ưu tiên",   bg: "#ede9fe", color: "#7c3aed" },
};

export default function Schedule() {
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
    <section id="schedule" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            Lịch học
          </p>
          <h2
            className="font-playfair text-slate-900 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
          >
            Thời khóa biểu{" "}
            <em style={{ color: "#3b82f6", fontStyle: "normal" }}>linh hoạt</em>
          </h2>
          <div
            className="mt-3 rounded-full"
            style={{ width: 48, height: 3, background: "#f59e0b" }}
          />
          <p className="text-slate-500 text-sm mt-3">
            Nhiều ca học trong tuần để phù hợp với lịch trình của từng gia đình.
          </p>
        </div>

        {/* Table */}
        <div
          ref={(el) => { refs.current[1] = el; }}
          className="reveal rounded-2xl overflow-hidden shadow-sm"
          style={{ border: "1px solid #e2e8f0" }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-4 gap-3 px-7 py-4 text-white text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #0a1628, #1a3a6e)",
            }}
          >
            <span>Ca học</span>
            <span>Thời gian</span>
            <span>Đối tượng</span>
            <span>Trạng thái</span>
          </div>

          {/* Rows */}
          {schedules.map((s, i) => {
            const st = statusConfig[s.status];
            return (
              <div
                key={s.ca}
                className="grid grid-cols-4 gap-3 px-7 py-4 text-sm items-center transition-colors hover:bg-slate-50"
                style={{
                  borderBottom: i < schedules.length - 1 ? "1px solid #f1f5f9" : "none",
                }}
              >
                <div>
                  <div className="font-semibold text-slate-800">{s.ca}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{s.ngay}</div>
                </div>
                <div className="text-slate-600">{s.gio}</div>
                <div className="text-slate-600">{s.doiTuong}</div>
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: st.bg, color: st.color }}
                  >
                    {st.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-400 text-xs mt-4">
          ⏰ Lịch cụ thể sẽ được thỏa thuận sau khi đăng ký — chúng tôi luôn cố gắng sắp xếp phù hợp nhất.
        </p>
      </div>
    </section>
  );
}