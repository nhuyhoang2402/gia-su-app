export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🎓 Trung Tâm Gia Sư Hoàng</h1>

      <p>Chuyên cung cấp gia sư uy tín tại nhà và online</p>

      <hr />

      <h2>📚 Dịch vụ</h2>
      <ul>
        <li>Gia sư Toán - Lý - Hoá</li>
        <li>Gia sư Tiếng Anh</li>
        <li>Ôn thi THPT</li>
      </ul>

      <h2>📞 Đăng ký học thử</h2>
      <form action="https://formspree.io/f/xnjojzbo" method="POST">
        <input name="name" placeholder="Tên của bạn" required /><br /><br />

        <input name="phone" placeholder="Số điện thoại" required /><br /><br />

        <button type="submit">Gửi đăng ký</button>
      </form>
    </main>
  );
}