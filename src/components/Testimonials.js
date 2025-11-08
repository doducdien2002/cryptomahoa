import React from 'react';

import TestimonialCard from './TestimonialCard';
import nhansandy from '../assets/nhansandy.png';
import thayongnoi from '../assets/thayongnoi.png';
import thubeo from '../assets/thubeo.png';
const Testimonials = () => (
  <div className="section testimonials">
    <div className="content">
      <section className="py-10 text-primary animate-slideIn">
        <h2 className="text-2xl text-center mb-6 text-accent">PHẦN HỒI KHÁCH HÀNG</h2>
        <h2 className="text-4xl font-bold text-center mb-7">HƠN 1K NGƯỜI DÙNG HÀI LÒNG</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard 
            name="TRẦN VINH"
            quote="Giờ mình biết được hoàn phí giao dịch, đã giúp tôi lấy lại rất nhiều những khoản phí đóng mở lệnh,tôi trân trọng cảm ơn đội ngũ đã giúp tôi"
            date="24/04/2025"
            imgSrc={thayongnoi}
          />
          <TestimonialCard 
            name="NHÀN SANDY"
            quote="Cảm ơn bạn đội ngũ hoàn phí đã hỗ trợ mình hoàn phí giao dịch trên các sàn giao dịch Crypto. Cảm ơn bạn nhiều lắm nhé!"
            date="20/03/2025"
            imgSrc={nhansandy}
          />
          <TestimonialCard 
            name="TIỂU THƯ HỌ PHẠM"
            quote="Tôi được người bạn giới thiệu qua bên bạn và tôi đã nhận được phí giao dịch, rất nhiều nhờ hoàn phí nhé. Share liền Telegram để mọi người cùng biết nha!"
            date="16/02/2025"
            imgSrc={thubeo}
          />
        </div>
     <div className="contact mt-20 flex justify-center items-center gap-3">
  <h1 className="text-base font-semibold whitespace-nowrap">
    Liên hệ với chúng tôi
  </h1>

  <input
    type="email"
    placeholder="Nhập email/Phone của bạn"
    className="border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
  />

  <button
    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg px-6 py-2 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse"
  >
    ĐĂNG KÝ
  </button>
</div>


      </section>
    </div>
  </div>
);
export default Testimonials