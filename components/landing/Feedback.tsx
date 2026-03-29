"use client";

import { useEffect, useRef } from "react";

const feedbacks = [
  {
    stars: 5,
    text: "Con tôi học ở đây được 2 tháng, điểm Toán từ 5 lên 8. Giáo viên rất kiên nhẫn và giải thích dễ hiểu. Tôi rất hài lòng với sự tiến bộ của con.",
    name: "Chị Lan Anh",
    role: "Phụ huynh học sinh lớp 8",
    initial: "L",
    color: "from-blue-500 to-blue-400",
  },
  {
    stars: 5,
    text: "Lớp học nhỏ nên thầy cô chú ý con nhiều hơn. Cháu bây giờ tự tin hẳn khi học Tiếng Anh, không còn sợ phát biểu nữa. Cảm ơn trung tâm!",
    name: "Anh Hùng",
    role: "Phụ huynh học sinh lớp 10",
    initial: "H",
    color: "from-violet-500 to-violet-400",
  },
  {
    stars: 5,
    text: "Học phí hợp lý, đội ngũ thân thiện và chuyên nghiệp. Điều tôi thích nhất là được cập nhật tình hình học tập của con hằng tuần qua Zalo.",
    name: "Chị Minh Thu",
    role: "Phụ huynh học sinh lớp 5",
    initial: "M",
    color: "from-pink-500 to-pink-400",
  },
];

export default function Feedback() {
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
    <section id="feedback" className="section-pad" style={{ background: "#f0f4fb" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            Phụ huynh nói gì
          </p>
          <h2
            className="font-playfair text-slate-900 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
          >
            Niềm tin từ{" "}
            <em style={{ color: "#3b82f6", fontStyle: "normal" }}>phụ huynh</em>
          </h2>
          <div
            className="mt-3 rounded-full"
            style={{ width: 48, height: 3, background: "#f59e0b" }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((f, i) => (
            <div
              key={f.name}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal bg-white rounded-2xl p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <div
                className="absolute font-playfair pointer-events-none select-none"
                style={{
                  top: 10, left: 20,
                  fontSize: "5rem", lineHeight: 1,
                  color: "#3b82f6", opacity: 0.07,
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="text-amber-400 text-sm mb-3 tracking-wider">
                {"★".repeat(f.stars)}
              </div>

              {/* Text */}
              <p className="text-slate-600 italic leading-relaxed text-sm mb-5">
                {f.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${f.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {f.initial}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{f.name}</div>
                  <div className="text-slate-400 text-xs">{f.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}