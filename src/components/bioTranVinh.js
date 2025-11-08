import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, MessageCircle, Send, Globe, UserCheck, Youtube, Instagram, Star, Zap } from 'lucide-react';

// === DỮ LIỆU ===
const exchanges = [
  { 
    name: 'ATX', 
    reward: 'Tặng 1M2 người mới', 
    fee: ' Phí, Trade Lãi Rút Về Tài Khoản', 
    img: 'https://cashback.exchange/image/exchanges/atx.png', 
    link: 'https://atxs.io/r/21749987',
    hot: true
  },
  { 
    name: 'MEXC', 
    reward: 'Tặng 25$ người mới', 
    fee: '50%', 
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/mexc-logo-100x100.png', 
    link: 'https://www.mexc.com/vi-VN/acquisition/custom-sign-up?shareCode=mexc-VID',
    hot: false 
  },
  { 
    name: 'BingX', 
    reward: 'Bonus 500$ nạp tiền', 
    fee: '50%', 
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/BingX-logo-100x100.png', 
    link: 'https://bingx.com/invite/KSFN28VY/',
    hot: true 
  },
  { 
    name: 'OKX', 
    reward: 'Đua top giao dịch', 
    fee: '50%', 
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/okx-logo-400x400.png', 
    link: 'https://www.okx.com/join/VIDHOANPHI',
    hot: false 
  },
  { 
    name: 'Bybit', 
    reward: 'Hoàn phí giao dịch', 
    fee: '50%', 
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/Bybit-logo-2-401x400.png', 
    link: '#',
    hot: false 
  },
];

const registrations = [
  { username: "a1234567", exchange: "ATX" },
  { username: "b9876543", exchange: "BingX" },
  { username: "c4567890", exchange: "OKX" },
  { username: "d1122334", exchange: "Bybit" },
  { username: "e5566778", exchange: "MEXC" },
  { username: "f9988776", exchange: "ATX" },
  { username: "g5544332", exchange: "BingX" },
];

// === LINK ZALO (THAY LINK CỦA BẠN VÀO ĐÂY) ===
const ZALO_LINK = "https://zalo.me/g/abc123"; // ← THAY BẰNG LINK NHÓM ZALO CỦA BẠN

const BioTranVinh = () => {
  const [theme, setTheme] = useState('dark');
  const [tickerItems, setTickerItems] = useState([]);
  const [showZaloPopup, setShowZaloPopup] = useState(false); // POPUP ZALO
  const tickerRef = useRef(null);
  const particlesRef = useRef(null);

  // === THEME ===
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setTheme(saved || 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // === PARTICLES ===
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 70; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 15}s`;
      p.style.animationDuration = `${Math.random() * 10 + 10}s`;
      p.style.opacity = Math.random() * 0.7 + 0.3;
      container.appendChild(p);
    }
  }, []);

  // === TICKER ===
  useEffect(() => {
    const initial = registrations.map((r, index) => ({
      ...r,
      id: `${r.username}-${r.exchange}-${index}`,
      masked: r.username[0] + '***' + r.username.slice(-4)
    }));
    setTickerItems([...initial, ...initial]);

    const interval = setInterval(() => {
      const r = registrations[Math.floor(Math.random() * registrations.length)];
      const newItem = { 
        ...r,  
        id: `${r.username}-${r.exchange}-${Date.now()}`, 
        masked: r.username[0] + '***' + r.username.slice(-4) 
      };
      setTickerItems(prev => {
        const updated = [newItem, ...prev];
        return updated.length > 30 ? updated.slice(0, 30) : updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        :root {
          --bg: #0f172a;
          --card: #1e293b;
          --text: #e2e8f0;
          --accent: #f59e0b;
          --accent-hover: #d97706;
          --green: #10b981;
          --border: #334155;
          --ticker-bg: rgba(15, 23, 42, 0.95);
          --ticker-item-bg: rgba(30, 41, 59, 0.9);
          --hot: #ef4444;
          --star: #fbbf24;
        }
        [data-theme="light"] {
          --bg: #f8fafc;
          --card: #ffffff;
          --text: #1e293b;
          --accent: #ea580c;
          --accent-hover: #c2410c;
          --green: #16a34a;
          --border: #e2e8f0;
          --ticker-bg: rgba(248, 250, 252, 0.95);
          --ticker-item-bg: rgba(255, 255, 255, 0.9);
          --hot: #dc2626;
          --star: #f59e0b;
        }

        .particle {
          position: absolute;
          width: 4px; height: 4px;
          background: var(--star);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--star);
          animation: float 15s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        }

        .animate-scroll-left { animation: scroll-left 20s linear infinite; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--accent);
          color: white;
          border-radius: 14px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 6px 16px rgba(245,158,11,0.25);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          min-height: 56px;
        }
        .btn:hover {
          background: var(--accent-hover);
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 24px rgba(217,119,6,0.35);
        }
        .btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: 0.6s;
        }
        .btn:hover::before { left: 100%; }

        /* HOT RIBBON */
        .hot-badge {
          position: absolute;
          top: -5px;
          right: -12px;
          background: var(--hot);
          color: white;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 6px 16px;
          border-radius: 0 14px 0 14px;
          transform: rotate(45deg);
          transform-origin: center;
          box-shadow: 
            0 0 16px rgba(239, 68, 68, 0.8),
            0 0 0 3px white,
            0 0 0 4px var(--hot);
          animation: ribbon-pulse 1.8s infinite;
          z-index: 20;
          white-space: nowrap;
          pointer-events: none;
        }
        @keyframes ribbon-pulse {
          0%, 100% { transform: rotate(45deg) scale(1); }
          50% { transform: rotate(45deg) scale(1.1); }
        }

        .stats-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16,185,129,0.2);
          color: var(--green);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid rgba(16,185,129,0.4);
        }

        /* POPUP ANIMATION */
        @keyframes popup {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .btn { 
            padding: 10px 12px;
            font-size: 0.85rem;
            gap: 8px;
            min-height: 50px;
          }
          .hot-badge { 
            top: -10px; 
            right: -10px; 
            font-size: 0.6rem; 
            padding: 4px 12px;
            box-shadow: 
              0 0 12px rgba(239, 68, 68, 0.7),
              0 0 0 2px white,
              0 0 0 3px var(--hot);
          }
        }
      `}</style>

      <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--bg)', color: 'var(--text)' }}>

        {/* NÚT SÁNG/TỐI */}
        <button
          onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" style={{ color: 'var(--accent)' }} /> : <Moon className="w-5 h-5" style={{ color: 'var(--accent)' }} />}
        </button>

        {/* PARTICLES */}
        <div ref={particlesRef} className={`fixed inset-0 pointer-events-none z-0 ${theme === 'light' ? 'opacity-30' : ''} transition-opacity`} />

        {/* HEADER */}
        <header className="py-16 text-center border-b" style={{ background: theme === 'dark' ? 'linear-gradient(135deg, #1e293b, #0f172a)' : 'linear-gradient(135deg, #fef3c7, #fde68a)', borderColor: 'var(--border)' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            VID Hoàn Phí
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>
            Đồng hành cùng bạn trên hành trình đầu tư Crypto an toàn & hiệu quả tại{' '}
            <a href="https://vidhoanphi.com" target="_blank" style={{ color: 'var(--accent)', fontWeight: 600 }} className="underline">
              vidhoanphi.com
            </a>
          </p>
          <div className="mt-4">
            <span className="stats-badge">
              <Star className="w-4 h-4 fill-current" />
              Hơn 12.847 người đã nhận thưởng
            </span>
          </div>
        </header>

        {/* CARD CHÍNH */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 py-12">
          <div className="rounded-3xl p-6 md:p-10 shadow-2xl border relative overflow-hidden"
               style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>

            {/* TICKER */}
            <div className="absolute top-0 left-0 w-full overflow-hidden py-2 border-b"
                 style={{ background: 'var(--ticker-bg)', backdropFilter: 'blur(10px)', borderColor: 'var(--border)' }}>
              <div ref={tickerRef} className="flex animate-scroll-left whitespace-nowrap">
                {tickerItems.map(item => (
                  <div key={item.id} className="inline-flex items-center gap-2 px-5 py-1.5 rounded-lg border shadow-sm mx-6 flex-shrink-0 text-sm"
                       style={{ background: 'var(--ticker-item-bg)', borderColor: 'rgba(16,185,129,0.3)', color: 'var(--green)' }}>
                    <Zap className="w-4 h-4 animate-pulse" style={{ color: 'var(--accent)' }} />
                    <span className="font-bold">{item.masked}</span>
                    <span>đã đăng ký</span>
                    <span className="font-semibold" style={{ color: 'var(--accent)' }}>{item.exchange}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Chỉ <span style={{ color: 'var(--accent)' }}>3 phút</span> – Nhận ngay <span style={{ color: '#10b981' }}>500$ thưởng!</span>
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-base" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                Hỗ trợ đăng ký sàn uy tín • Nhận thưởng cao • Tài liệu miễn phí
              </p>

              {/* CỘNG ĐỒNG VIP */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-10">

                {/* ZALO VIP - POPUP */}
                <div className="relative flex-1 min-w-[280px]">
                  <button
                    onClick={() => setShowZaloPopup(true)}
                    className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full text-left flex items-center gap-4"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                    <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center backdrop-blur-sm">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold flex items-center gap-2">
                        Zalo VIP
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-400 text-black animate-pulse">
                          <Star className="w-3 h-3 fill-current mr-1" /> LIVE
                        </span>
                      </div>
                      <p className="text-sm opacity-90">Cộng đồng 24/7 • Hỗ trợ 1:1</p>
                    </div>
                  </button>

                  {/* POPUP ZALO */}
                  {showZaloPopup && (
                    <div 
                      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                      onClick={() => setShowZaloPopup(false)}
                    >
                      <div 
                        className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'popup 0.3s ease-out' }}
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-emerald-600 mb-2">Tham gia Zalo VIP</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Chọn 1 trong 2 cách dưới đây</p>
                        </div>

                        {/* NÚT JOIN */}
                        <a
                          href="https://zalo.me/g/rsbqdm035"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full mb-6 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg"
                        >
                          <MessageCircle className="w-6 h-6" />
                          Tham gia nhóm Zalo ngay
                        </a>

                        {/* QR CODE */}
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Hoặc quét mã QR</p>
                          <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                            <img 
                              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://zalo.me/g/rsbqdm035"
                              alt="QR Zalo VIP" 
                              className="w-48 h-48"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-3">Quét để tham gia nhóm !</p>
                           {/* SỐ ZALO + BIỂU TƯỢNG COPY */}
<div className="mt-4 text-center">
  <p className="text-xs text-gray-500 mb-2">Hoặc liên hệ trực tiếp:</p>
  <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 rounded-full border border-emerald-500/30">
    <MessageCircle className="w-5 h-5 text-emerald-600" />
    <span className="font-bold text-emerald-700">Zalo: 0964.66.88.46</span>
    <button
      onClick={() => {
        navigator.clipboard.writeText('0964668846');
        const btn = document.getElementById('copy-zalo-icon');
        const icon = btn.querySelector('svg');
        const text = btn.querySelector('span');
        icon.classList.add('hidden');
        text.classList.remove('hidden');
        btn.classList.add('copied');
        setTimeout(() => {
          icon.classList.remove('hidden');
          text.classList.add('hidden');
          btn.classList.remove('copied');
        }, 2000);
      }}
      id="copy-zalo-icon"
      className="ml-2 p-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-all duration-300 hover:scale-110"
      title="Copy số Zalo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      <span className="hidden text-xs font-bold">Đã copy!</span>
    </button>
  </div>
</div>
                        </div>

                        {/* NÚT ĐÓNG */}
                        <button
                          onClick={() => setShowZaloPopup(false)}
                          className="mt-6 w-full py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 font-medium"
                        >
                          Đóng
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* TELEGRAM PRO */}
                <a 
                  href="https://t.me/vidhoanphi68" 
                  target="_blank" 
                  className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[280px]"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/25 flex items-center justify-center backdrop-blur-sm">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold flex items-center gap-2">
                        Telegram PRO
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-pink-500 text-white">
                          <Zap className="w-3 h-3 mr-1" /> Miễn phí
                        </span>
                      </div>
                      <p className="text-sm opacity-90">Tài liệu Trade • Signal • A-Z</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs font-medium">
                    <Globe className="w-4 h-4" />
                    <span>Nhận ngay bộ tài liệu 2025</span>
                  </div>
                </a>
              </div>

              {/* NÚT SÀN GIAO DỊCH */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
                {exchanges.map((ex, i) => (
                  <a 
                    key={i} 
                    href={ex.link} 
                    target="_blank" 
                    className="btn group relative overflow-visible"
                  >
                    {ex.hot && <div className="hot-badge">HOT</div>}
                    <img src={ex.img} alt={ex.name} className="w-7 h-7 rounded-md" />
                    <div className="text-left text-white text-sm">
                      {ex.name} - {ex.reward}
                      <span className="block opacity-80">Hoàn {ex.fee}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* SOCIAL */}
              <div className="flex justify-center gap-4">
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all hover:-translate-y-1 hover:scale-110"
                   style={{ background: 'linear-gradient(45deg, #f09433, #e6683c)', color: 'white' }}>
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all hover:-translate-y-1 hover:scale-110"
                   style={{ background: 'linear-gradient(45deg, #ff0000, #cc0000)', color: 'white' }}>
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://vidhoanphi.com" className="w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all hover:-translate-y-1 hover:scale-110"
                   style={{ background: 'linear-gradient(45deg, #10b981, #059669)', color: 'white' }}>
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center py-6 border-t mt-16" style={{ background: theme === 'dark' ? '#0f172a' : '#f1f5f9', color: theme === 'dark' ? '#64748b' : '#475569', borderColor: 'var(--border)' }}>
          <p className="text-sm">
            © 2025 <strong style={{ color: theme === 'dark' ? 'white' : '#1e293b' }}>VID HOÀN PHÍ</strong> – <span style={{ color: 'var(--accent)' }}>Phát Tài Phát Lộc!</span>
          </p>
        </footer>
      </div>
    </>
  );
};

export default BioTranVinh;