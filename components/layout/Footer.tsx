import Link from "next/link";

const footerLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Môn học", href: "#subjects" },
  { label: "Lịch học", href: "#schedule" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white/50 border-t border-blue-900/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">

          <div>
            <div className="font-playfair text-xl font-bold text-white mb-2">
              ⭐ Gia Sư <span className="text-amber-400">Hải Anh</span>
            </div>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Trung tâm gia sư tại Bắc Ninh — đồng hành cùng học sinh từ Tiểu học đến THPT.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-sky-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-sm text-white/50 flex flex-col gap-1.5">
            <a href="tel:0912345678" className="hover:text-white transition-colors">
              📞 0912 345 678
            </a>

            <a
              href="https://zalo.me/0912345678"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              💬 Zalo: 0912 345 678
            </a>

            <span>📍 Bắc Ninh</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="text-amber-400">Gia Sư Hải Anh</strong>. All rights reserved.
          </p>
          <p>Được xây dựng với ❤️ tại Bắc Ninh</p>
        </div>
      </div>
    </footer>
  );
}