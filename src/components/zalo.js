import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Zalo = () => {
  useEffect(() => {
    const GROUP_CODE = 'rsbqdm035'; // THAY MÃ NHÓM ZALO CỦA BẠN
    const deepLink = `zalo://join/${GROUP_CODE}`;
    const webLink = `https://zalo.me/g/${GROUP_CODE}`;

    const openZalo = () => {
      let tried = false;

      // 1. iframe ẩn (bypass TikTok iOS)
      const iframe = document.createElement('iframe');
      iframe.src = deepLink;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // 2. window.location (Android + fallback)
      setTimeout(() => {
        if (!tried) {
          tried = true;
          window.location.href = deepLink;
        }
      }, 100);

      // 3. Universal Link Zalo
      setTimeout(() => {
        if (!tried) {
          tried = true;
          window.location.href = `https://chat.zalo.me/?join=${GROUP_CODE}`;
        }
      }, 300);

      // 4. Fallback cuối: mở web nếu không rời trang
      setTimeout(() => {
        if (document.hasFocus?.()) {
          window.location.href = webLink;
        }
      }, 2500);
    };

    // Tự động mở khi vào trang
    openZalo();

    // Nếu người dùng bấm lại
    const handleClick = () => openZalo();

    document.getElementById('joinBtn')?.addEventListener('click', handleClick);
    return () => document.getElementById('joinBtn')?.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 flex flex-col items-center justify-center p-6 text-white">
      {/* Logo + Tiêu đề */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
          Hoàn Phí Crypto
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-cyan-200">
          Nhận Tiền Ngay!
        </p>
      </div>

      {/* Nút tham gia */}
      <button
        id="joinBtn"
        className="flex items-center gap-4 px-8 py-5 bg-white text-blue-600 rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 font-bold text-lg md:text-xl"
      >
        <MessageCircle className="w-10 h-10" />
        <span>THAM GIA NHÓM ZALO NGAY</span>
      </button>

      {/* Hướng dẫn fallback */}
      <p className="mt-8 text-sm opacity-80 text-center max-w-md">
        Nếu không tự động mở Zalo, vui lòng{' '}
        <a
          href="https://zalo.me/g/rsbqdm035"
          className="text-cyan-300 underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          nhấn vào đây
        </a>
      </p>

      {/* Loading overlay */}
      <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 hidden" id="loading">
        <img src="https://i.imgur.com/0b3i5nG.png" alt="Zalo" className="w-20 mb-4" />
        <p className="text-xl">Đang mở Zalo...</p>
      </div>
    </div>
  );
};

export default Zalo;
