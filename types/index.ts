// ═══════════════════════════════════
// TYPES — Gia Sư Hải Anh
// ═══════════════════════════════════

// --- USER & AUTH ---
export type UserRole = "admin" | "student" | "parent";

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  role: UserRole;
  avatar?: string;
  created_at: string;
}

// --- HỌC SINH ---
export interface Student {
  id: string;
  name: string;
  grade: number;          // Lớp: 1 → 12
  school?: string;        // Trường đang học
  parent_name?: string;
  parent_phone: string;
  user_id?: string;       // Liên kết tài khoản
  notes?: string;
  created_at: string;
}

// --- GIÁO VIÊN ---
export interface Teacher {
  id: string;
  name: string;
  subjects: string[];     // ["Toán", "Lý"]
  phone: string;
  bio?: string;
  avatar?: string;
  is_active: boolean;
}

// --- LỚP HỌC ---
export interface ClassSession {
  id: string;
  name: string;           // "Toán THCS chiều"
  subject: string;        // "Toán"
  level: string;          // "Tiểu học" | "THCS" | "THPT"
  teacher_id: string;
  teacher?: Teacher;
  room?: string;
  max_students: number;
  current_students: number;
  fee_per_month: number;
}

// --- LỊCH HỌC ---
export interface Schedule {
  id: string;
  class_id: string;
  class?: ClassSession;
  day_of_week: number;    // 1=T2, 2=T3, ..., 0=CN
  start_time: string;     // "07:30"
  end_time: string;       // "09:00"
  status: "active" | "cancelled";
}

// --- ĐĂNG KÝ ---
export interface Registration {
  id: string;
  parent_name: string;
  phone: string;
  student_name: string;
  grade: string;
  subject: string;
  preferred_time?: string;
  notes?: string;
  status: "new" | "processing" | "confirmed" | "rejected";
  created_at: string;
}

// --- KẾT QUẢ / ĐIỂM ---
export interface Result {
  id: string;
  student_id: string;
  subject: string;
  test_name: string;      // "Kiểm tra 15 phút", "Thi giữa kỳ"
  score: number;          // 0–10
  max_score: number;      // Thường là 10
  date: string;
  teacher_comment?: string;
}

// --- NHẬN XÉT THÁNG ---
export interface MonthlyComment {
  id: string;
  student_id: string;
  teacher_id: string;
  teacher?: Teacher;
  month: string;          // "2026-03"
  content: string;
  created_at: string;
}

// --- HỌC PHÍ ---
export interface Fee {
  id: string;
  student_id: string;
  student?: Student;
  month: string;          // "2026-03"
  amount: number;
  is_paid: boolean;
  paid_at?: string;
  notes?: string;
}

// --- BLOG ---
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  thumbnail?: string;
  category: "tips" | "news" | "achievement";
  author_id: string;
  is_published: boolean;
  published_at?: string;
  created_at: string;
}

// --- THÔNG BÁO ---
export interface Notification {
  id: string;
  title: string;
  content: string;
  target: "all" | "students" | "parents";
  is_read?: boolean;
  created_at: string;
}

// --- ENROLLMENT (Học sinh ↔ Lớp) ---
export interface Enrollment {
  id: string;
  student_id: string;
  class_id: string;
  enrolled_at: string;
  status: "active" | "inactive";
}