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
      <p><b>Mã giới thiệu:</b> REFUNDPK</p>
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
      <p><b>Mã giới thiệu:</b> refundpk8</p>
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
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> refundpk8</p>
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
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> refundpk8</p>
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
    BYBIT: `
      <h2>BYBIT</h2>
      <p><strong>Hoàn phí 50%</strong></p>
      <p><b>Mã giới thiệu:</b> refundpk8</p>
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
      <p><b>Mã giới thiệu:</b> refundpk8</p>
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
      <p><b>Mã giới thiệu:</b> refundpk8</p>
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
      <p><b>Mã giới thiệu:</b> refundpk8</p>
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
      code: "DUCDIEN8386",
      imgSrc: "https://w.ladicdn.com/s500x500/67dbe0216346bb0012ce3b79/bingx-20250426193224-ombgf.png",
    },
    {
      title: "BITGET",
      cashback: "50",
      code: "DUCDIEN8386",
      imgSrc: "https://www.bitget.com/favicon.ico",
    },
    {
      title: "BINANCE",
      cashback: "40",
      code: "DUCDIEN8386",
      imgSrc: "https://w.ladicdn.com/s450x450/67dbe0216346bb0012ce3b79/binance-20250427064738-n26nc.png",
    },
    {
      title: "OKX",
      cashback: "40",
      code: "DUCDIEN8386",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/c973b6f4a4b92721f64c11f7aa87d18f.png",
    },
    {
      title: "BYBIT",
      cashback: "40",
      code: "DUCDIEN8386",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/9920f86cbed47f1368ae93dbf38c7917.png",
    },
    {
      title: "BITUNIX",
      cashback: "40",
      code: "DUCDIEN8386",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/c4ca09fd7478b8af8fb0fcee7593d63d.png",
    },
    {
      title: "MEXC",
      cashback: "40",
      code: "DUCDIEN8386",
      imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/ab59a24e551de4d38fbbb5bb557601d6.png",
    },
     {
      title: "EXNESS",
      cashback: "100",
      code: "DUCDIEN8386",
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
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 backdrop-blur-md rounded-3xl p-10 border-gray-200">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-yellow-500 uppercase tracking-widest">
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

        {/* Grid Layout for 3 columns and 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {filteredItems.slice(0, showMore ? filteredItems.length : 6).map((item, i) => (
            <div key={i} className="h-full flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-yellow-300/50 hover:-translate-y-2 transition-all duration-300 p-6 text-center group">
              <div className="relative h-28 flex items-center justify-center mb-4 bg-white/80 rounded-xl overflow-hidden shadow-inner">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Hoàn {item.cashback}%
                </span>
              </div>

              <h4 className="text-xl font-extrabold text-gray-800 mb-3 tracking-wide">
                {item.title}
              </h4>

              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition w-full mb-4">
                🚀 Đăng ký ngay
              </button>

              <div className="mt-2 text-sm text-gray-600">
                <p>Hoàn {item.cashback}% phí giao dịch</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span>Mã:</span>
                  <span className="font-bold text-gray-900">{item.code}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(item.code);
                    }}
                    className="p-1 bg-gray-200 hover:bg-yellow-300 rounded-md transition"
                  >
                    <Copy size={16} className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Nút hướng dẫn */}
              <button
                onClick={() => setSelectedSan(item.title)}
                className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-300 text-black font-semibold rounded-lg shadow hover:shadow-xl hover:scale-105 transition w-full"
              >
                🎥 Xem hướng dẫn
              </button>
            </div>
          ))}
        </div>

        {/* Xem thêm Button */}
        {filteredItems.length > 6 && (
          <div className="text-center mb-6">
            <button 
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
        <div className="popup-container">
          <div className="popup">
            {/* Header */}
            <div className="popup-header">
              <h2>{selectedSan}</h2>
              <button className="close-btn" onClick={() => setSelectedSan(null)}>
                <X size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="popup-content" dangerouslySetInnerHTML={{ __html: huongDanData[selectedSan] }} />

            {/* Footer */}
            <div className="popup-footer">
              <button className="btn" onClick={() => setSelectedSan(null)}>
                🎥Hướng Dẫn
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;