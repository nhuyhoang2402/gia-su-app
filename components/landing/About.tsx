"use client";

import { useEffect, useRef } from "react";

const values = [
  { icon: "🎯", text: "Dạy đúng trọng tâm — học hiểu — thi tốt" },
  { icon: "💛", text: "Giáo viên tâm huyết, chuyên môn vững" },
  { icon: "👨‍👩‍👧", text: "Phụ huynh được cập nhật thường xuyên" },
  { icon: "📈", text: "Theo dõi tiến bộ từng học sinh mỗi tháng" },
  { icon: "🏠", text: "Không gian học tập sạch sẽ, an toàn" },
];

export default function About() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-pad" style={{ background: "#f0f4fb" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={(el) => { refs.current[0] = el; }} className="reveal mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            Về chúng tôi
          </p>
          <h2
            className="font-playfair text-slate-900 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
          >
            Trung tâm Gia sư{" "}
            <em style={{ color: "#3b82f6", fontStyle: "normal" }}>Hải Anh</em>
          </h2>
          <div
            className="mt-3 rounded-full"
            style={{ width: 48, height: 3, background: "#f59e0b" }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left — Card xanh */}
          <div
            ref={(el) => { refs.current[1] = el; }}
            className="reveal rounded-2xl p-10 text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0a1628, #1a3a6e)",
              transitionDelay: "100ms",
            }}
          >
            {/* Watermark emoji */}
            <div
              className="absolute pointer-events-none select-none"
              style={{
                bottom: -24, right: -10,
                fontSize: "9rem", opacity: 0.06, lineHeight: 1,
              }}
            >
              🎓
            </div>

            <h3 className="font-playfair text-2xl mb-3">✨ Sứ mệnh của chúng tôi</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontSize: "0.93rem" }}>
              Mang đến môi trường học tập an toàn, tích cực và hiệu quả — nơi
              mỗi học sinh đều được quan tâm sát sao và phát triển toàn diện.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {values.map((v) => (
                <div
                  key={v.text}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <span>{v.icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.85)" }}>{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Text */}
          <div
            ref={(el) => { refs.current[2] = el; }}
            className="reveal flex flex-col gap-4"
            style={{ transitionDelay: "200ms" }}
          >
            <p className="leading-relaxed text-slate-500" style={{ fontSize: "0.95rem" }}>
              Trung tâm Gia sư{" "}
              <strong className="text-slate-800">Hải Anh</strong> được thành
              lập với mong muốn tạo ra không gian học tập chất lượng cao ngay
              tại Bắc Ninh — lớp nhỏ, sĩ số thấp, thầy cô chú ý sát sao
              từng em.
            </p>
            <p className="leading-relaxed text-slate-500" style={{ fontSize: "0.95rem" }}>
              Chúng tôi dạy đầy đủ các môn từ{" "}
              <strong className="text-slate-800">Toán, Lý, Hóa</strong> đến{" "}
              <strong className="text-slate-800">Văn, Tiếng Anh</strong> —
              phù hợp cho học sinh từ Tiểu học đến THPT, kể cả luyện thi đại
              học.
            </p>
            <p className="leading-relaxed text-slate-500" style={{ fontSize: "0.95rem" }}>
              Điều làm chúng tôi khác biệt: trung tâm được quản lý bởi gia
              đình có kinh nghiệm, đội ngũ giáo viên trẻ nhiệt huyết và{" "}
              <strong className="text-slate-800">
                minh bạch hoàn toàn về học phí
              </strong>
              
            </p>

            {/* Quote box */}
            <div
              className="rounded-xl p-5 mt-2"
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderLeft: "4px solid #f59e0b",
              }}
            >
              <p className="text-slate-600 italic" style={{ fontSize: "0.92rem" }}>
                💬 "Chúng tôi không chỉ dạy kiến thức — chúng tôi xây dựng
                nền tảng tư duy và thói quen học tập tốt cho các em."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}