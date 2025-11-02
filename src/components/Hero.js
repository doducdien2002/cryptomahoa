import React from "react";
import { Link } from 'react-router-dom';

const ILLUSTRATION_URL =
  "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=a6f6d6b2c8e6d8a2b6f1a4f1f4f3e2a0";

const CryptoCandlesSmall = ({ size = 240, speed = 2.0, label = "CRYPTO · FX" }) => {
  const w = size, h = size, candleW = Math.max(6, Math.round(size / 30));
  return (
    <div style={{ width: w, height: h }} className="relative" aria-hidden>
      <style>{`
        :root{--spd:${speed}s}
        @keyframes up{0%,100%{transform:translateY(8px)}50%{transform:translateY(-4px)}}
        @keyframes down{0%,100%{transform:translateY(-8px)}50%{transform:translateY(4px)}}
        .candle{transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease}
        .candle:hover{transform:scale(1.1) !important; filter: brightness(1.2) drop-shadow(0 4px 8px rgba(0,0,0,0.1))}
        .spark{stroke-dasharray:1000;stroke-dashoffset:1000;animation:draw calc(var(--spd) * 0.9) ease-in-out forwards}
        @keyframes draw{to{stroke-dashoffset:0}}
        @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(2deg)}}
        @keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
        @media (prefers-reduced-motion: reduce){.candle,.spark, .float{animation:none!important; transition:none}}
      `}</style>

      <div className="absolute inset-0 rounded-xl opacity-80" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(16,185,129,0.05))", boxShadow: "inset 0 0 20px rgba(255,255,255,0.2)" }} />

      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="relative z-10 overflow-visible">
        <defs>
          <linearGradient id="gG" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#d1fae5"/><stop offset="1" stopColor="#10b981"/></linearGradient>
          <linearGradient id="gR" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#fff0f2"/><stop offset="1" stopColor="#ef4444"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>

        {[0.12,0.22,0.32,0.42,0.52,0.62,0.72,0.82].map((xP,i)=>{
          const x = Math.round(w*xP);
          const top = Math.round(h*(0.28 + (i%3)*0.04));
          const bot = Math.round(h*(0.52 + ((i+1)%3)*0.03));
          const bodyH = Math.max(8, bot-top);
          const isUp = i%2===0;
          const fill = isUp? "url(#gG)" : "url(#gR)";
          const anim = isUp? "up":"down";
          const dur = `${(speed * (0.9 + (i % 3)*0.08)).toFixed(2)}s`;
          const delay = `${(i*0.06).toFixed(2)}s`;
          return (
            <g key={i} className="candle" style={{ transformOrigin:`${x}px ${top+bodyH/2}px`, animation: `${anim} ${dur} ease-in-out ${delay} infinite`, filter: "url(#glow)" }}>
              <line x1={x} x2={x} y1={top - 8} y2={bot + 8} stroke={isUp? "#34d399":"#fb7185"} strokeWidth={Math.max(1,Math.round(candleW/3))} strokeLinecap="round" opacity="0.9" />
              <rect x={x - Math.round(candleW/2)} y={top} width={candleW} height={bodyH} rx={3} fill={fill} />
              <rect x={x - Math.round(candleW/2)} y={top} width={candleW} height={bodyH} rx={3} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </g>
          );
        })}

        <g transform={`translate(${w*0.06},${h*0.06})`} className="spark">
          <path d="M0,100 Q50,80 100,120 T200,90 T300,110" fill="none" stroke="url(#gG)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </g>
      </svg>

      <div className="absolute top-2 left-2 text-xs font-medium text-slate-600 opacity-0 animate-pulse" style={{ animation: "pulse 2s ease-in-out infinite, fadeIn 1s forwards" }}>
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-4 pb-0">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fadeIn">
            <div className="inline-block bg-yellow-300 text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-md transform transition hover:scale-105">
              CRYPTO • FOREX • HOÀN PHÍ
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Hoàn Phí Giao Dịch <span className="text-yellow-500 drop-shadow-md">Nhanh</span> & <span className="text-emerald-500 drop-shadow-md">An toàn</span>
            </h1>

            <p className="text-lg text-slate-700 max-w-2xl leading-relaxed">
              Chúng tôi xử lý hoàn phí nhanh chóng trên các sàn Crypto ,Forex. Các bạn sẽ nhận được 40-60% phí giao dịch của mình vào mỗi tháng kèm nhiều ưu đãi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-bold shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="text-xl group-hover:animate-bounce">🚀</span>
                <span>Đăng ký & Nhận Hoàn</span>
                <span className="ml-2 w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              </Link>

              <Link
                to="/news/2"
                className="inline-flex items-center gap-3 bg-white border border-slate-200 text-slate-800 px-5 py-3 rounded-full shadow hover:shadow-lg transform transition hover:scale-105"
              >
                <span>ℹ️</span> Tìm hiểu thêm về hoàn phí
              </Link>
            </div>
 <div className="mt-12">
            <div className="flex flex-wrap items-center gap-10 mt-12">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center animate-pulse">✓</div>
                <span className="text-sm font-medium">Hợp tác nhiều sàn lớn</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center animate-pulse">✓</div>
                <span className="text-sm font-medium">Hoàn Nhanh Chóng 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center animate-pulse">✓</div>
                <span className="text-sm font-medium">98k người hài lòng</span>
              </div>
            </div>
          </div>
</div>
          <div className="lg:col-span-5 flex items-center justify-end gap-6 relative">
            <div className="flex-shrink-0 mr-2 float" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20" style={{ width: 280 }}>
                <CryptoCandlesSmall size={240} speed={2.5} />
              </div>
            </div>

            <div className="hidden lg:block relative float" style={{ animation: "float 8s ease-in-out infinite 2s", width: 220, perspective: "1000px" }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition hover:rotate-3d" style={{ width: 220, height: 320 }}>
                <img src={ILLUSTRATION_URL} alt="Illustration" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -top-3 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-bounce">
                Hoàn 40–60%
              </div>

              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-slate-800 text-xs px-3 py-1 rounded-md shadow-lg">
                Đã có: <strong className="text-emerald-600">8,423</strong> người
              </div>
            </div>

           {/* ==== MOBILE: 2 ẢNH DỌC ĐẸP LUNG LINH ==== */}
<div className="lg:hidden mt-8 space-y-8 px-4">
  
  {/* CARD 1: NẾN TO + TIÊU ĐỀ */}
  <div className="float" style={{ animation: "float 6s ease-in-out infinite" }}>
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/40">
      <CryptoCandlesSmall size={300} speed={2.3} />
      <p className="text-center mt-5 text-lg font-bold text-emerald-600">
        Biểu đồ Live 24/7
      </p>
    </div>
  </div>

  {/* CARD 2: ẢNH + BADGE + SỐ LIỆU */}
  <div className="float" style={{ animation: "float 7s ease-in-out infinite 1.5s" }}>
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <img 
        src={ILLUSTRATION_URL} 
        alt="Hoàn phí nhanh" 
        className="w-full h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      
      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
        Hoàn 40–60%
      </div>

      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-3xl font-bold">8,423</p>
        <p className="text-sm opacity-90">người đã nhận tiền</p>
      </div>
    </div>
  </div>

</div>
{/* ==== XONG! ==== */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
