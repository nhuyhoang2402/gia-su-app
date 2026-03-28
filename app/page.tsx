export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <header className="bg-blue-600 text-white p-5 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold">🎓 Trung Tâm Gia Sư Hoàng</h1>
        <p>Uy tín - Chất lượng - Hiệu quả</p>
      </header>

      {/* Services */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold text-lg">📚 Toán - Lý - Hoá</h2>
          <p>Luyện thi, củng cố kiến thức</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold text-lg">🌍 Tiếng Anh</h2>
          <p>Giao tiếp & luyện thi IELTS</p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-bold text-lg">🎯 Ôn thi THPT</h2>
          <p>Cam kết đầu ra</p>
        </div>
      </section>

      {/* Form */}
      <section className="mt-8 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">📞 Đăng ký học thử</h2>

        <form
          action="https://formspree.io/f/xnjojzbo"
          method="POST"
          className="space-y-3"
        >
          <input
            name="name"
            placeholder="Tên của bạn"
            className="w-full p-2 border rounded"
            required
          />

          <input
            name="phone"
            placeholder="Số điện thoại"
            className="w-full p-2 border rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Nhu cầu học..."
            className="w-full p-2 border rounded"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Gửi đăng ký
          </button>
        </form>
      </section>

    </main>
  );
}