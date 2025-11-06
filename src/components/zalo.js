import React from 'react';
import { MessageCircle } from 'lucide-react'; // Import biểu tượng MessageCircle

const Zalo = () => {
  const handleClick = () => {
    // Thực hiện hành động trước khi mở liên kết
    console.log("Đang mở nhóm Zalo...");
  };

  return (
    <a
      href="https://zalo.me/g/rsbqdm035"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-4 p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
      onClick={handleClick} // Gọi hàm handleClick khi nhấn vào nút
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
