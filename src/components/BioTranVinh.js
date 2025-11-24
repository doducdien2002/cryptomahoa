import { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  MessageCircle,
  Send,
  Globe,
  Youtube,
  Instagram,
  Trophy,
  Zap,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';

const exchanges = [
  {
    name: 'ATX',
    reward: 'Tặng 1.000.000đ',
    img: 'https://cashback.exchange/image/exchanges/atx.png',
    link: 'https://atxs.io/r/21749987',
    hot: true,
  },
  {
    name: 'BingX',
    reward: 'Bonus tới 500$',
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/BingX-logo-100x100.png',
    link: 'https://bingx.com/invite/KSFN28VY/',
    hot: true,
  },
  {
    name: 'OKX',
    reward: 'Đua top thưởng khủng',
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/okx-logo-400x400.png',
    link: 'https://www.okx.com/join/VIDHOANPHI',
    hot: true,
  },
  {
    name: 'MEXC',
    reward: 'Tặng 25$ tân binh',
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/mexc-logo-100x100.png',
    link: 'https://www.mexc.com/vi-VN/acquisition/custom-sign-up?shareCode=mexc-VID',
    hot: true,
  },
  {
    name: 'Bybit',
    reward: 'Hoàn phí cao nhất',
    img: 'https://hoanphi.net/wp-content/uploads/2025/08/Bybit-logo-2-401x400.png',
    link: 'https://www.bybit.com',
    hot: true,
  },
    {
    name: 'Bitunix',
    reward: 'Ưu đãi nạp tiền tới 500$',
    img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/67304ce5-101c-4405-85e6-f9fde8774dbc/c4ca09fd7478b8af8fb0fcee7593d63d.png',
    link: 'https://www.bitunix.com/activity/newbie-camp?vipCode=VIDHOANPHI',
    hot: true,
  },
];

const registrations = [
  { username: 'a1234567', exchange: 'ATX' },
  { username: 'b9876543', exchange: 'BingX' },
  { username: 'c4567890', exchange: 'OKX' },
  { username: 'd1122334', exchange: 'Bybit' },
  { username: 'e5566778', exchange: 'MEXC' },
  { username: 'f9988776', exchange: 'ATX' },
  { username: 'g5544332', exchange: 'BingX' },
];

const Dienblog = () => {
  const [theme, setTheme] = useState('dark');
  const [tickerItems, setTickerItems] = useState([]);
  const [showZaloPopup, setShowZaloPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setTheme(saved || 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  useEffect(() => {
    const initial = registrations.map((r, i) => ({
      ...r,
      id: i,
      masked: r.username[0] + '***' + r.username.slice(-4),
    }));
    setTickerItems([...initial, ...initial]);

    const interval = setInterval(() => {
      const r = registrations[Math.floor(Math.random() * registrations.length)];
      setTickerItems((prev) => [
        {
          ...r,
          id: Date.now(),
          masked: r.username[0] + '***' + r.username.slice(-4),
        },
        ...prev.slice(0, 29),
      ]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const copyZalo = () => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText('0964668846');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;900&display=swap');
        * {
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #0f0f1a;
          color: white;
        }

        .glass {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .ticker {
          animation: scroll 45s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .exchange-card {
          transition: all 0.35s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }
        .exchange-card:hover {
          transform: translateY(-10px) scale(1.03);
          border-color: #f59e0b;
          box-shadow: 0 20px 40px rgba(245, 158, 11, 0.25);
        }
        .hot-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #ef4444;
          color: white;
          font-size: 9px;
          font-weight: 900;
          padding: 4px 9px;
          border-radius: 999px;
          box-shadow: 0 0 15px rgba(239, 68, 68, 0.8);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
      `}</style>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-pink-600/10 to-emerald-600/20" />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-2xl glass bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl hover:scale-110 transition"
        >
          {theme === 'dark' ? (
            <Sun className="w-6 h-6 text-amber-400" />
          ) : (
            <Moon className="w-6 h-6 text-slate-700" />
          )}
        </button>

        {/* Hero */}
        <header className="relative pt-32 pb-20 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              VID HOÀN PHÍ
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Đăng ký sàn nhận thưởng tới{' '}
              <span className="text-amber-400 font-bold">500$+</span> • Hoàn phí cao nhất
            </p>
            <div className="mt-10 inline-flex items-center gap-4 bg-white/10 glass px-8 py-5 rounded-2xl border border-white/20">
              <Trophy className="w-9 h-9 text-amber-400" />
              <span className="text-3xl font-bold">12.847+</span>
              <span className="text-gray-400">người đã nhận thưởng</span>
            </div>
          </div>
        </header>

        {/* Live Ticker */}
        <div className="bg-black/40 glass border-y border-white/10 py-4 overflow-hidden">
          <div className="flex ticker gap-16 text-sm">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div key={i} className="flex items-center gap-3 whitespace-nowrap">
                <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="font-bold text-amber-300">{item.masked}</span>
                <span className="text-gray-400">vừa đăng ký</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full font-bold text-xs">
                  {item.exchange}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TRUNG TÂM HỖ TRỢ - ZALO / TELEGRAM (NHÓM) */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="glass bg-white/5 border border-white/10 rounded-3xl px-6 py-7 md:px-10 md:py-9 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10">
              {/* Text bên trái */}
              <div className="text-center md:text-left space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest">
                    Support VIP 1-1
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Cần hỗ trợ cài sàn, nhận thưởng, hoàn phí?
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Đội ngũ <span className="font-semibold text-amber-300">VID HOÀN PHÍ</span> hỗ trợ trực tiếp,
                  kiểm tra thưởng, tối ưu hoàn phí cho bạn từ A–Z.
                </p>
                <ul className="mt-2 space-y-1 text-xs md:text-sm text-gray-400">
  <li className="flex items-start gap-2">
    <span className="mt-0.5 text-amber-400">•</span>
    <span>Hướng dẫn đăng ký &amp; KYC đúng chuẩn để không mất thưởng</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 text-amber-400">•</span>
    <span>Setup hoàn phí, tracking thưởng từng sàn</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 text-amber-400">•</span>
    <span>Hỏi gì đáp nấy – ưu tiên khách trong nhóm Zalo / Telegram</span>
  </li>
</ul>

              </div>

              {/* Nút nhóm bên phải */}
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowZaloPopup(true)}
                  className="group flex items-center justify-between gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-2xl font-bold shadow-xl hover:shadow-emerald-500/60 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span>Zalo VIP 24/7</span>
                      <span className="text-xs font-normal text-emerald-100/90">
                        Hỗ trợ nhanh – kiểm tra thưởng trực tiếp
                      </span>
                    </div>
                  </div>
                  <span className="ml-2 px-2.5 py-0.5 bg-yellow-400 text-black text-xs rounded-full font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                    LIVE
                  </span>
                </button>

                <a
                  href="https://t.me/vidhoanphi68"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-4 rounded-2xl font-bold shadow-xl hover:shadow-purple-500/60 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span>Telegram PRO</span>
                      <span className="text-xs font-normal text-blue-100/90">
                        Cập nhật kèo, ưu đãi &amp; event sớm nhất
                      </span>
                    </div>
                  </div>
                  <span className="ml-2 px-2.5 py-0.5 bg-pink-500 text-white text-xs rounded-full font-semibold">
                    MIỄN PHÍ
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sàn giao dịch */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
            Chọn sàn — Nhận thưởng ngay
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {exchanges.map((ex) => (
              <a
                key={ex.name}
                href={ex.link}
                target="_blank"
                rel="noreferrer"
                className="exchange-card group relative bg-white/5 glass rounded-3xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all"
              >
                {ex.hot && <div className="hot-badge">Hoàn 50%</div>}
                <img
                  src={ex.img}
                  alt={ex.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl shadow-2xl"
                />
                <h3 className="font-bold text-lg text-white mb-1">{ex.name}</h3>
                <p className="text-amber-400 text-sm font-bold">{ex.reward}</p>
                <ArrowRight className="w-6 h-6 mx-auto mt-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-2 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Popup Zalo */}
        {showZaloPopup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-xl"
            onClick={() => setShowZaloPopup(false)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-3xl p-10 max-w-md w-full shadow-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Tham gia Zalo VIP ngay!
              </h3>

              <a
                href="https://zalo.me/g/rsbqdm035"
                target="_blank"
                rel="noreferrer"
                className="w-full mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xl py-5 rounded-2xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl"
              >
                <MessageCircle className="w-8 h-8" />
                Tham gia nhóm Zalo
              </a>

              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  Hoặc quét mã QR
                </p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://zalo.me/g/rsbqdm035"
                  alt="QR Zalo"
                  className="mx-auto rounded-2xl shadow-2xl"
                />
              </div>

              <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-2xl text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Liên hệ trực tiếp:
                </p>
                <div className="flex items-center justify-center gap-4">
                  <span className="font-bold text-xl text-emerald-700">
                    0964.66.88.46
                  </span>
                  <button
                    onClick={copyZalo}
                    className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition hover:scale-110"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-emerald-600 font-bold mt-3 text-sm">
                    Đã copy số Zalo!
                  </p>
                )}
              </div>

              <button
                onClick={() => setShowZaloPopup(false)}
                className="mt-8 w-full py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="py-12 text-center border-t border-white/10">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://vidhoanphi.com"
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center hover:scale-110 transition"
            >
              <Instagram className="w-7 h-7 text-white" />
            </a>
            <a
              href="https://vidhoanphi.com"
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center hover:scale-110 transition"
            >
              <Youtube className="w-7 h-7 text-white" />
            </a>
            <a
              href="https://vidhoanphi.com"
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center hover:scale-110 transition"
            >
              <Globe className="w-7 h-7 text-white" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 <strong className="text-white">VID HOÀN PHÍ</strong> — Phát Tài Phát Lộc!
          </p>
        </footer>
      </div>
    </>
  );
};

export default Dienblog;
