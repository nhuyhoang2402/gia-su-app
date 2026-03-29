import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Gộp class Tailwind an toàn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format ngày tiếng Việt: "28/03/2026"
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Format tháng tiếng Việt: "Tháng 3, 2026"
export function formatMonth(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("vi-VN", {
    month: "long",
    year: "numeric",
  });
}

// Format học phí: 800000 → "800.000đ"
export function formatPrice(amount: number): string {
  return amount.toLocaleString("vi-VN") + "đ";
}

// Lấy tên thứ trong tuần
export function getDayName(dayIndex: number): string {
  const days = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  return days[dayIndex] ?? "";
}

// Truncate text
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}