import React from 'react';
const Cashback = () => (
  <div className="section cashback">
    <div className="content">
 <section className="py-16 text-primary text-center animate-slideIn">
  {/* Tiêu đề */}
  <h2 className="text-2xl mb-4 text-accent uppercase tracking-widest">CHÚNG TÔI HỖ TRỢ NHƯ THẾ NÀO</h2>
  <h2 className="text-4xl font-bold mb-12">CÁCH ĐĂNG KÝ HOÀN PHÍ</h2>

  {/* Quy trình 4 bước */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {/* Bước 1 */}
    <div className="flex flex-col items-center group">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-3xl shadow-lg group-hover:scale-110 transition">
        🌱
      </div>
      <p className="mt-4 text-secondary font-medium group-hover:text-primary transition">
        Đăng ký tài khoản theo link để Hoàn Phí
      </p>
    </div>

    {/* Bước 2 */}
    <div className="flex flex-col items-center group">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white text-3xl shadow-lg group-hover:scale-110 transition">
        ✨
      </div>
      <p className="mt-4 text-secondary font-medium group-hover:text-primary transition">
        Giao dịch bình thường
      </p>
    </div>

    {/* Bước 3 */}
    <div className="flex flex-col items-center group">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl shadow-lg group-hover:scale-110 transition">
        ⚛️
      </div>
      <p className="mt-4 text-secondary font-medium group-hover:text-primary transition">
        Phí giao dịch sẽ được hoàn định kỳ
      </p>
    </div>

    {/* Bước 4 */}
    <div className="flex flex-col items-center group">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-3xl shadow-lg group-hover:scale-110 transition">
        💰
      </div>
      <p className="mt-4 text-secondary font-medium group-hover:text-primary transition">
        Nhận lại tiền hoàn phí nhanh chóng
      </p>
    </div>
  </div>
</section>

    </div>
  </div>
);
export default Cashback