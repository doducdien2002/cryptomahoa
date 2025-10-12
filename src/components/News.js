import React from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import newsImg from '../assets/anhtintuc.png';
import newsATX from '../assets/atx.png';
// Import css của Swiper
import "swiper/css";
import "swiper/css/pagination";

const newsList = [
  {
    id: 1,
    title: "HOÀN 50% PHÍ GIAO DỊCH SÀN BINGX ",
    description: "Chỉ cần 1 bước đơn giản, bạn có thể nhận lại 50% phí giao dịch.",
    imgSrc: newsImg,
  },
      
  {
    id: 2,
    title: "HOÀN PHÍ GIAO DỊCH ",
    description:
      "Đăng ký qua link của chúng tôi để nhận lại phí giao dịch nhanh chóng trong 24h.",
    imgSrc:
      "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien2-20250501170052-d4azq.png",
  },
  {
    id: 3,
    title: "TỔNG HỢP CÁC SÀN HỖ TRỢ HOÀN PHÍ",
    description: "Danh sách các sàn đang hỗ trợ hoàn phí giao dịch.",
    imgSrc:
      "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien3-20250501173033-wwcal.png",
  },
  {
    id: 4,
    title: "CẤP VỐN 1M2 VOUCHER ATX",
    description: "Hỗ trợ voucher trải nghiệm tại Atx",
    imgSrc:
      newsATX,
  },
  
];

const News = () => (
  <section id="news" className="py-16 text-primary animate-slideIn">
    <h2 className="text-2xl text-center mb-3 text-accent uppercase tracking-wide">
      TIN TỨC
    </h2>
    <h2 className="text-4xl font-bold text-center mb-12">
      CÁC BÀI VIẾT MỚI NHẤT
    </h2>

    <div className="max-w-6xl mx-auto px-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // 👈 pagination sẽ render ở div ngoài
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {newsList.map((item) => (
          <SwiperSlide key={item.id}>
            <NewsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination riêng bên ngoài Swiper */}
      <div className="custom-pagination mt-10 flex justify-center"></div>
    </div>

    {/* CSS pagination custom */}
    <style jsx>{`
      .custom-pagination .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #d1d5db; /* xám nhạt */
        opacity: 1;
        margin: 0 6px;
      }
      .custom-pagination .swiper-pagination-bullet-active {
        background: #2563eb; /* xanh dương */
        width: 22px; /* dài hơn khi active */
        border-radius: 8px; /* bo tròn thành thanh ngang */
        transition: all 0.3s ease;
      }
    `}</style>
  </section>
);

export default News;
