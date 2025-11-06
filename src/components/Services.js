import React, { useState } from "react";
import { Copy, X } from "lucide-react";
import toast from "react-hot-toast";
import './styles.css';

const Services = () => {
  const [search, setSearch] = useState("");
  const [selectedSan, setSelectedSan] = useState(null); // Sàn giao dịch đang mở popup
  const [showMore, setShowMore] = useState(false); // Trạng thái hiển thị thêm

  const huongDanData = {
    BINGX: `
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> KSFN28VY</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    BITGET: `
      <h2>Bitget</h2>
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    BINANCE: `
      <h2>BINANCE</h2>
      <p><strong>Hoàn phí 20%</strong></p>
      <p><b>Mã giới thiệu:</b>VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    OKX: `
      <h2>OKX</h2>
      <p><strong>Hoàn phí 40%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 35% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    BYBIT: `
      <h2>BYBIT</h2>
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    BITUNIX: `
      <h2>BITUNIX</h2>
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    MEXC: `
      <h2>MEXC</h2>
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
    EXNESS: `
      <h2>EXNESS</h2>
      <p><strong>Hoàn phí 100%</strong></p>
      <p><b>Mã giới thiệu:</b> VIDHOANPHI</p>
      <h3 class="highlight-existing-ref-1">1️⃣ Đăng ký tài khoản mới</h3>
      <ol>
        <li>1: Bấm “Đăng ký ngay” hoặc nhập mã giới thiệu thủ công</li>
        <li>2: Đăng ký bằng email hoặc số điện thoại</li>
        <li>3: Xác thực KYC và giao dịch bình thường</li>
      </ol>
     <h3 class="highlight-existing-ref">2️⃣ Đã có tài khoản REF khác</h3>
       <ol>
        <li>1: Đăng ký tài khoản mới bằng email hoặc số điện thoại mới qua mã giới thiệu </li>
        <li>2: Thực hiện xác thực KYC bằng giấy tờ khác loại với loại đã dùng ở tài khoản cũ</li>
        <li>3: Chờ phê duyệt KYC rồi nạp tiền và giao dịch như bình thường</li>
      </ol>
      <h3 class="highlight-existing-ref-1">💰 Cơ chế hoàn phí</h3>
      <ul>
        <li>Hoàn 45% phí hằng ngày</li>
        <li>Hoàn thêm 5% cuối tháng</li>
      </ul>
    `,
  };

  // Data Crypto
  const cryptoItems = [
    {
      title: "BINGX",
      cashback: "50",
      code: "KSFN28VY",
      imgSrc: "https://w.ladicdn.com/s500x500/67dbe0216346bb0012ce3b79/bingx-20250426193224-ombgf.png",
      link: "https://bingx.com/invite/KSFN28VY/", 
    },
    {
      title: "BITGET",
      cashback: "50",
      code: "VIDHOANPHI",
      imgSrc: "https://www.bitget.com/favicon.ico",
    },
    {
      title: "BINANCE",
      cashback: "20",
      code: "VIDHOANPHI",
      imgSrc: "https://w.ladicdn.com/s450x450/67dbe0216346bb0012ce3b79/binance-20250427064738-n26nc.png",
    },
    {
      title: "OKX",
      cashback: "50",
      code: "VIDHOANPHI",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/c973b6f4a4b92721f64c11f7aa87d18f.png",
      link: "https://www.okx.com/join/VIDHOANPHI",
    },
    {
      title: "BYBIT",
      cashback: "50",
      code: "VIDHOANPHI",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/9920f86cbed47f1368ae93dbf38c7917.png",
    },
    {
      title: "BITUNIX",
      cashback: "50",
      code: "VIDHOANPHI",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/c4ca09fd7478b8af8fb0fcee7593d63d.png",
    },
    {
      title: "MEXC",
      cashback: "50",
      code: "mexc-VID",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/ab59a24e551de4d38fbbb5bb557601d6.png",
      link: "https://www.mexc.com/vi-VN/acquisition/custom-sign-up?shareCode=mexc-VID", 
    },
     {
      title: "EXNESS",
      cashback: "100",
      code: "VIDHOANPHI",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/1c7aea78a2e788fc8238dae8717c1997.png",
    },
  ];

  const items = cryptoItems; // Đổi thành "forexItems" nếu cần
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle copy functionality
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success(`✅ Đã copy mã: ${text}`))
      .catch(() => toast.error("❌ Copy lỗi, thử lại!"));
  };

return (
     <section className="py-3 bg-gradient-to-b from-gray-100 to-gray-200 relative"> 
      <div className="max-w-7xl mt--8 mx-auto px-6 backdrop-blur-md rounded-3xl p-10 border-gray-200">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-yellow-500 uppercase tracking-widest">
            SẢN PHẨM
          </h2>
          <h3 className="text-4xl font-extrabold mt-3 text-gray-800 drop-shadow-sm font-sans">
            CÁC SÀN GIAO DỊCH HỖ TRỢ HOÀN PHÍ
          </h3>
        </div>

        {/* Search */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="🔍 Tìm sàn..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        {/* FLEX-WRAP container để tránh khoảng trống mosaic */}
       {/* FLEX-WRAP container: đảm bảo căn giữa */}
<div className="w-full flex justify-center">
  <div className="w-full max-w-6xl">
    <div className="flex flex-wrap justify-center gap-6 mb-10">
      {filteredItems.slice(0, showMore ? filteredItems.length : 6).map((item, i) => (
        <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          
          <div className="m-auto h-full flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-yellow-300/50 hover:-translate-y-2 transition-all duration-300 p-6 text-center group">
            {/* image */}
            
            <div className="relative h-28 md:h-36 lg:h-44 flex items-center justify-center mb-4 bg-white/80 rounded-xl overflow-hidden shadow-inner">
              <img src={item.imgSrc} alt={item.title} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Hoàn {item.cashback}%
              </span>
            </div>

            <h4 className="text-xl font-extrabold text-gray-800 mb-3 tracking-wide">
              {item.title}
            </h4>

           <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition w-full mb-4 text-center"
>
  🚀 Đăng ký ngay
</a>

            <div className="mt-2 text-sm text-gray-600">
              <p>Hoàn {item.cashback}% phí giao dịch</p>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span>Mã:</span>
                <span className="font-bold text-gray-900">{item.code}</span>
                <button type="button" onClick={(e) => { e.stopPropagation(); handleCopy(item.code); }} className="p-1 bg-gray-200 hover:bg-yellow-300 rounded-md transition" aria-label={`Copy mã ${item.code}`}>
                  <Copy size={16} className="text-gray-700" />
                </button>
              </div>
            </div>

            <button type="button" onClick={() => setSelectedSan(item.title)} className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-300 text-black font-semibold rounded-lg shadow hover:shadow-xl hover:scale-105 transition w-full">
              🎥 Xem hướng dẫn
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Xem thêm Button */}
        {filteredItems.length > 6 && (
          <div className="text-center mb-6">
            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="px-4 py-2 text-white bg-yellow-400 rounded-lg shadow hover:shadow-lg transition-all"
            >
              {showMore ? "Ẩn bớt" : " Xem thêm"}
            </button>
          </div>
        )}
      </div>

      {/* Popup overlay */}
    {selectedSan && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
    {/* Hiệu ứng nền nến trade */}
    <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="candle"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${40 + Math.random() * 140}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>

    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col animate-slideUp border border-gray-200 relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/20 text-white font-bold text-base shadow-inner">
            ℹ️
          </div>
          <h2 className="text-xl font-bold tracking-tight drop-shadow">
            {selectedSan}
          </h2>
        </div>
        <button
          className="p-2 rounded-full hover:bg-white/20 transition active:scale-95"
          onClick={() => setSelectedSan(null)}
          aria-label="Đóng"
        >
          <X size={24} />
        </button>
      </div>

      {/* Body */}
      <div className="px-7 py-5 text-[15px] text-gray-800 leading-relaxed overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div
          className="text-left space-y-5 
            [&_p]:text-left [&_p]:text-[15px] [&_p]:text-gray-800 [&_strong]:font-semibold [&_strong]:text-gray-900 
            [&_h1]:text-[18px] [&_h1]:font-bold [&_h1]:text-gray-900 [&_h1]:mb-2 
            [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-800 
            [&_ul]:list-disc [&_ul]:ml-5 [&_li]:leading-relaxed [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
            [&_.highlight]:bg-blue-50 [&_.highlight]:border-l-4 [&_.highlight]:border-blue-400 [&_.highlight]:p-3 [&_.highlight]:rounded-md"
          dangerouslySetInnerHTML={{
            __html:
              huongDanData[selectedSan] ||
              "<p>Không có hướng dẫn</p>",
          }}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-end px-6 py-4 border-t bg-gray-50">
        <button
          type="button"
          className="px-5 py-2.5 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition active:scale-95"
          onClick={() => setSelectedSan(null)}
        >
          Đóng
        </button>
      </div>
    </div>

    {/* CSS nội tuyến */}
    <style>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: translateY(24px) scale(0.95); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }
      @keyframes candleMove {
        0%, 100% { transform: scaleY(0.6); opacity: 0.6; }
        50% { transform: scaleY(1.2); opacity: 1; }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease forwards;
      }
      .animate-slideUp {
        animation: slideUp 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
      }
      .candle {
        position: absolute;
        bottom: 0;
        width: 3px;
        background: linear-gradient(to top, #00ffb7, #0077ff);
        border-radius: 2px;
        animation: candleMove ease-in-out infinite;
      }
      .scrollbar-thin::-webkit-scrollbar { width: 6px; }
      .scrollbar-thin::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #3b82f6, #6366f1);
        border-radius: 9999px;
      }
      .scrollbar-thin::-webkit-scrollbar-track {
        background: transparent;
      }
    `}</style>
  </div>
)}

    </section>
  );
};

export default Services;