"use client";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xnjojzbo";

const perks = [
  "2 buổi học thử hoàn toàn miễn phí, không ràng buộc",
  "Được tư vấn lộ trình học phù hợp với từng em",
  "Giảm 20% học phí tháng đầu khi đăng ký chính thức",
  "Giới thiệu bạn bè → tặng thêm 1 buổi học miễn phí",
  "Báo cáo tiến độ hằng tháng gửi qua Zalo",
];

export default function RegisterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="register"
      className="section-pad relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #1a3a6e 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 5% 95%, rgba(245,158,11,0.14) 0%, transparent 45%), radial-gradient(circle at 95% 5%, rgba(59,130,246,0.18) 0%, transparent 45%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT — Info */}
          <div>
            <h2
              className="font-playfair text-white leading-tight mb-4"
              style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)" }}
            >
              Đăng ký{" "}
              <em style={{ color: "#f59e0b", fontStyle: "normal" }}>
                học thử miễn phí
              </em>{" "}
              ngay hôm nay!
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.95rem" }}
            >
              Điền thông tin bên cạnh — chúng tôi sẽ liên hệ lại trong vòng
              24 giờ để sắp xếp lịch học thử phù hợp nhất cho con bạn.
            </p>

            <div className="flex flex-col gap-3">
              {perks.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span style={{ color: "#f59e0b", fontSize: "1.1rem", marginTop: 1, flexShrink: 0 }}>
                    ✓
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-playfair text-slate-800 text-xl mb-6">
              📝 Điền thông tin đăng ký
            </h3>

            {/* Success state */}
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">
                  Đăng ký thành công!
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ lại
                  trong vòng <strong>24 giờ</strong> qua SĐT hoặc Zalo.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-blue-500 hover:underline"
                >
                  Đăng ký thêm →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phu_huynh" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Tên phụ huynh <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phu_huynh"
                      type="text"
                      name="phu_huynh"
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-all"
                      style={{
                        border: "1.5px solid #e2e8f0",
                        fontSize: "0.88rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                  <div>
                    <label htmlFor="so_dien_thoai" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="so_dien_thoai"
                      type="tel"
                      name="so_dien_thoai"
                      placeholder="0912 345 678"
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-all"
                      style={{
                        border: "1.5px solid #e2e8f0",
                        fontSize: "0.88rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hoc_sinh" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Tên học sinh <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="hoc_sinh"
                      type="text"
                      name="hoc_sinh"
                      placeholder="Nguyễn Văn B"
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-all"
                      style={{
                        border: "1.5px solid #e2e8f0",
                        fontSize: "0.88rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                  <div>
                    <label htmlFor="lop" className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Học lớp <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="lop"
                      name="lop"
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-all bg-white"
                      style={{
                        border: "1.5px solid #e2e8f0",
                        fontSize: "0.88rem",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    >
                      <option value="">-- Chọn lớp --</option>
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map((l) => (
                        <option key={l} value={`Lớp ${l}`}>Lớp {l}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Môn học */}
                <div>
                  <label htmlFor="mon" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Môn học <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="mon"
                    name="mon"
                    required
                    className="w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-all bg-white"
                    style={{
                      border: "1.5px solid #e2e8f0",
                      fontSize: "0.88rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  >
                    <option value="">-- Chọn môn --</option>
                    {["Toán", "Vật Lý", "Hóa Học", "Ngữ Văn", "Tiếng Anh", "Nhiều môn (ghi rõ bên dưới)"].map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Ca học */}
                <div>
                  <label htmlFor="ca_hoc" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Ca học mong muốn
                  </label>
                  <select
                    id="ca_hoc"
                    name="ca_hoc"
                    className="w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-all bg-white"
                    style={{
                      border: "1.5px solid #e2e8f0",
                      fontSize: "0.88rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  >
                    <option value="">-- Chọn ca --</option>
                    {[
                      "Sáng (07:30 – 09:00)",
                      "Chiều sớm (14:00 – 15:30)",
                      "Chiều (16:00 – 17:30)",
                      "Tối (18:30 – 20:00)",
                      "Cuối tuần (Thứ 7 – CN)",
                      "Linh hoạt – thỏa thuận sau",
                    ].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Ghi chú */}
                <div>
                  <label htmlFor="ghi_chu" className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Ghi chú thêm
                  </label>
                  <textarea
                    id="ghi_chu"
                    name="ghi_chu"
                    rows={3}
                    placeholder="Tình hình học lực của con, yêu cầu đặc biệt..."
                    className="w-full px-3 py-2.5 text-sm rounded-lg outline-none transition-all resize-none"
                    style={{
                      border: "1.5px solid #e2e8f0",
                      fontSize: "0.88rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-500 text-xs text-center">
                    ❌ Có lỗi xảy ra. Vui lòng gọi trực tiếp: 0912 345 678
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    background: status === "loading" ? "#94a3b8" : "#3b82f6",
                    color: "white",
                  }}
                >
                  {status === "loading" ? "⏳ Đang gửi..." : "🎓 Gửi đăng ký học thử"}
                </button>

                <p className="text-center text-slate-400 text-xs">
                  🔒 Thông tin bảo mật hoàn toàn. Chúng tôi liên hệ lại trong 24h.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}