import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gia Sư Hải Anh – Trung Tâm Gia Sư Bắc Ninh",
  description:
    "Trung tâm gia sư Hải Anh tại Bắc Ninh – dạy Toán, Lý, Hóa, Văn, Anh cho học sinh Tiểu học, THCS, THPT. Đăng ký học thử miễn phí!",
  keywords: "gia sư Bắc Ninh, trung tâm gia sư, học thêm Bắc Ninh, gia sư Hải Anh",
  openGraph: {
    title: "Gia Sư Hải Anh – Trung Tâm Gia Sư Bắc Ninh",
    description: "Đội ngũ giáo viên tâm huyết, lớp học sĩ số nhỏ, học phí hợp lý.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif", overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}