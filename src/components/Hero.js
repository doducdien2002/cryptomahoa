import React from 'react';
import ANHIMG from '../ANHIMG.jpg';

const Hero = () => (
  
  <div className="section hero bg-gradient-to-r from-blue-600 to-blue-400">
    {/* thông báo */}
    {/* <div className="bg-yellow-300/95 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="overflow-hidden py-2">
          <div className="marquee-track font-semibold">
            🚀 HOÀN 40–60% PHÍ GIAO DỊCH • ⏰ Ghi có T+1 • 🔥 Quỹ ưu đãi có hạn • 💬 Liên hệ Zalo: 0965 427 145 • 
            🚀 HOÀN 40–60% PHÍ GIAO DỊCH • ⏰ Ghi có T+1 • 🔥 Quỹ ưu đãi có hạn • 💬 Liên hệ Zalo: 0965 427 145 • 
            🚀 HOÀN 40–60% PHÍ GIAO DỊCH • ⏰ Ghi có T+1 • 🔥 Quỹ ưu đãi có hạn • 💬 Liên hệ Zalo: 0965 427 145
          </div>
        </div>
      </div>
    </div> */}

    <section className="relative text-gray-900 py-20 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6">
      {/* Left */}
      <div className="md:w-1/2 text-left animate-fadeInLeft">
        <span className="uppercase text-sm tracking-wider bg-white text-blue-600 px-3 py-1 rounded-full font-semibold">
          Website - Crypto - Forex
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mt-5 leading-tight">
          Hoàn phí <span className="text-black-400">Giao dịch Crypto,Forex</span>
        </h1>
        <p className="text-lg mt-6 text-gray-600">
          Chúng tôi luôn nỗ lực hỗ trợ người dùng hoàn phí giao dịch trên các sàn giao dịch tiền điện tử.
          Bạn sẽ nhận được <span className="text-black-400 font-semibold">40-60% phí</span> 
          chỉ trong vòng 24 giờ, kèm theo rút tiền nhanh chóng.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-bounceIn">
          <a href="tel:+84965427145" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition transform">
            📞 Hotline: 0965 427 145
          </a>
          <a href="https://zalo.me/0965427145" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition transform">
            💬 Tư vấn Zalo
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0 animate-fadeInRight">
        <div className="p-1 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin-slow">
          <img src="https://tse3.mm.bing.net/th/id/OIP.s6Q43c6hfBySHW2j3K9PTAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Người dùng" className="rounded-full w-64 h-64 object-cover hover:scale-110 transition transform" />
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
