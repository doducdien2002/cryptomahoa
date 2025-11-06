import React from 'react';
import { MessageCircle } from 'lucide-react';

const Zalo = () => {
  const handleClick = (e) => {
    e.preventDefault(); // Ngăn hành vi mặc định

    const zaloUrl = 'zalo://join/rsbqdm035'; // Deep link Zalo (ưu tiên mở app)
    const fallbackUrl = 'https://zalo.me/g/rsbqdm035'; // Web nếu không có app

    // Kiểm tra nếu đang ở TikTok in-app browser
    const isTikTok = /TikTok/i.test(navigator.userAgent) || 
                     window.location.href.includes('tiktok.com') ||
                     document.referrer.includes('tiktok.com');

    if (isTikTok) {
      // TikTok chặn deep link → Dùng trick: mở popup hoặc redirect gián tiếp
      const popup = window.open('', '_blank');
      if (popup) {
        popup.location.href = zaloUrl;
        setTimeout(() => {
          popup.location.href = fallbackUrl; // Fallback nếu không mở được app
        }, 1000);
      } else {
        // Nếu popup bị chặn → mở fallback
        window.location.href = fallbackUrl;
      }
    } else {
      // Ngoài TikTok → thử mở app trước
      window.location.href = zaloUrl;
      // Fallback sau 1.5s nếu không mở được app
      setTimeout(() => {
        if (document.hasFocus()) {
          window.location.href = fallbackUrl;
        }
      }, 1500);
    }

    console.log("Đang mở nhóm Zalo...");
  };

  return (
    <a
      href="#"
      className="flex items-center justify-center gap-4 p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      <div className="text-left text-white">
        Zalo Hỗ Trợ
        <span className="block text-sm opacity-90 mt-1">ẤN ĐỂ THAM GIA</span>
      </div>
    </a>
  );
};

export default Zalo;