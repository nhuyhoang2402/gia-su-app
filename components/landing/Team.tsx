"use client";

import { useEffect, useRef } from "react";

const teachers = [
  {
    emoji: "👩‍💼",
    name: "Ban Quản lý",
    role: "Quản lý & Định hướng",
    desc: "Gia đình doanh nhân với kinh nghiệm quản lý — đảm bảo trung tâm vận hành minh bạch, uy tín và chuyên nghiệp.",
    color: "from-blue-600 to-blue-400",
  },
  {
    emoji: "👩‍🏫",
    name: "Cô Ly",
    role: "Giáo viên cơ hữu",
    desc: "Chuyên môn vững, tận tâm với từng học sinh. Phụ trách lớp học chính tại trung tâm.",
    color: "from-violet-600 to-violet-400",
  },
  {
    emoji: "👩‍🎓",
    name: "Cô Mai Linh",
    role: "Giáo viên cộng tác",
    desc: "Nhiệt huyết và sáng tạo trong phương pháp giảng dạy, giúp học sinh tiếp thu bài nhanh hơn.",
    color: "from-pink-500 to-pink-400",
  },
  {
    emoji: "👩‍💻",
    name: "Cô Châu",
    role: "Giáo viên cộng tác",
    desc: "Kiên nhẫn, gần gũi — đặc biệt phù hợp với các em còn yếu cần được bồi dưỡng thêm.",
    color: "from-teal-500 to-teal-400",
  },
  {
    emoji: "👨‍💼",
    name: "Anh Hoàng",
    role: "Vận hành & Giảng dạy",
    desc: "Phụ trách vận hành trung tâm, chăm sóc phụ huynh và hỗ trợ giảng dạy trực tiếp.",
    color: "from-amber-500 to-amber-400",
  },
];

export default function Team() {
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
    <section id="team" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="reveal mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
            Đội ngũ giảng dạy
          </p>
          <h2
            className="font-playfair text-slate-900 leading-tight"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)" }}
          >
            Những người{" "}
            <em style={{ color: "#3b82f6", fontStyle: "normal" }}>
              đồng hành
            </em>{" "}
            cùng con bạn
          </h2>
          <div
            className="mt-3 rounded-full"
            style={{ width: 48, height: 3, background: "#f59e0b" }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {teachers.map((t, i) => (
            <div
              key={t.name}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="reveal group rounded-2xl border border-slate-200 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-2xl mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {t.emoji}
              </div>

              <div className="font-bold text-slate-800 text-sm mb-1">
                {t.name}
              </div>
              <div className="text-blue-500 text-xs font-semibold mb-3">
                {t.role}
              </div>
              <div className="text-slate-400 text-xs leading-relaxed">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}