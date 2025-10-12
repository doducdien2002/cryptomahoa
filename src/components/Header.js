// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅ thêm
import logo from '../assets/logo.png';
export default function Header({ onOpenContact = () => {} }) {
  const navigate = useNavigate();              // ⬅ khởi tạo navigate
  const linkBase =
    "px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition";

  // ⬅ hàm đi tới trang chủ rồi cuộn xuống #news
  const goNews = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollTo: "news" } });
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-blue-600/95 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
      <a
  href={`${process.env.PUBLIC_URL}/`}
  className="text-2xl font-extrabold tracking-wide text-white hover:opacity-90 transition flex items-center"
  style={{ lineHeight: '0' }} 
>
  <img
    src={logo}
    alt="Logo"
    className="mr-2 h-16 max-h-full object-contain" 
  />
  MAOFAST
</a>

        {/* Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href={`${process.env.PUBLIC_URL}/`} className={linkBase}>
            Trang Chủ
          </a>

          <a href={`${process.env.PUBLIC_URL}#/services`} className={linkBase}>
            Sàn Giao Dịch
          </a>

          {/* Tin Tức → về trang chủ và cuộn tới #news */}
          <a href={`${process.env.PUBLIC_URL}/`} onClick={goNews} className={linkBase}>
            Tin Tức
          </a>

          {/* Liên hệ (mở modal) */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/20 transition"
          >
            Liên hệ
          </button>
        </nav>

        {/* Nút menu mobile */}
        <div className="md:hidden">
          <button className="text-white/90 hover:text-white transition" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
