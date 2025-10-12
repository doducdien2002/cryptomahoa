import React from "react";
import { useParams, Link } from "react-router-dom";
import "./NewsPage.css";
import newsImg from '../assets/anhtintuc.png';
import newsATX from '../assets/atx.png';
// Danh sách bài viết
const newsList = [
  {
    id: 1,
    title: "HOÀN 50% PHÍ GIAO DỊCH SÀN BINGX",
    description:
      "Sàn BingX mang đến chương trình hoàn 50% phí giao dịch cực hấp dẫn, giúp trader tiết kiệm tối đa chi phí.",
    imgSrc:newsImg,
    content: `
      <h2>🎯 Giới thiệu chương trình</h2>
      <p><strong>BingX</strong> là sàn giao dịch hàng đầu châu Á, triển khai chiến dịch <em>“Hoàn 50% phí giao dịch”</em> dành cho toàn bộ người dùng mới và cũ.</p>

      <div style="text-align:center; margin: 16px 0;">
      </div>

      <h2>💡 Cách tham gia</h2>
      <ol>
        <li>Đăng ký tài khoản BingX qua mã giới thiệu DUCDIEN8386</li>
        <li>Hoàn tất KYC để kích hoạt hoàn phí.</li>
        <li>Giao dịch và nhận hoàn phí tự động.</li>
      </ol>

      <h2>📊 Ưu điểm</h2>
      <ul>
        <li>Hoàn tới 50% phí giao dịch.</li>
        <li>Không giới hạn số lần hoàn.</li>
        <li>Phí hoàn nhanh và minh bạch.</li>
      </ul>

      <blockquote style="border-left:4px solid #3b82f6; background:#eff6ff; padding:12px; border-radius:8px; font-style:italic;">
        “Một bước đi chiến lược giúp BingX trở thành lựa chọn hàng đầu của trader khu vực châu Á.”
      </blockquote>

      <h2>📞 Liên hệ hỗ trợ</h2>
      <p>Liên hệ đội ngũ <strong>DUCDIENHOANPHI </strong> để nhận mã hoàn phí và được hướng dẫn chi tiết.</p>
    `,
  },
  {
    id: 2,
    title: "HOÀN PHÍ GIAO DỊCH LÀ GÌ?",
    description:
      "Hướng dẫn chi tiết về hoàn phí giao dịch trên các sàn crypto và cách nhận ưu đãi.",
    imgSrc:
      "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien2-20250501170052-d4azq.png",
    content: `
      <h2>🚀 Hoàn phí giao dịch là gì?</h2>
      <p> <b>“Hoàn phí giao dịch”</b> trong crypto — hay còn gọi là rebate / fee rebate / trading fee cashback— là chương trình mà hoàn lại phí mà người dùng đã trả khi giao dịch (spot, futures, margin, v.v.)</p>
      <h2>✅ Lợi ích</h2>
      <p>Giảm chi phí giao dịch thực tế → giữ lại nhiều lợi nhuận hơn.</p>
      <p>Không giới hạn thời gian hoặc số lượng giao dịch.</p>
      <p>Hệ thống cập nhật và theo dõi minh bạch 24/7.</p>

      <h2>🔐Tại sao cần hoàn phí giao dịch (KYC)</h2>
      <p>Giúp bạn tối ưu lợi nhuận.</p>
      <p>Giảm chi phí giao dịch</p>
      <p>Hoàn thành nhanh chóng</p>

      <blockquote style="border-left:4px solid #16a34a; background:#f0fdf4; padding:12px; border-radius:8px; font-style:italic;">
        “Chỉ mất 5 phút để tạo tài khoản và nhận ưu đãi hoàn phí.”
      </blockquote>

      <h2>✅ Hoàn tất</h2>
      <p>Bạn có thể bắt đầu giao dịch và nhận hoàn phí tự động ngay sau khi xác minh thành công.</p>
    `,
  },
  {
    id: 3,
    title: "TOP CÁC SÀN HỖ TRỢ HOÀN PHÍ GIAO DỊCH 2025",
    description:
      "Tổng hợp các sàn giao dịch hỗ trợ hoàn phí tốt nhất năm 2025 giúp bạn tối ưu lợi nhuận khi trade.",
    imgSrc:
      "https://w.ladicdn.com/s700x550/67dbe0216346bb0012ce3b79/sukien3-20250501173033-wwcal.png",
    content: `
      <h2>🏆 1. Mexc</h2>
      <p>Hoàn 50% phí cho người dùng mới. Giao diện thân thiện, hỗ trợ nhiều cặp giao dịch.</p>
      <p>Nhiều cặp giao dịch không mất phí,đòn bẩy x150 .</p> 
      <h2>💰 2. Binance</h2>
      <p>Hoàn 25% phí khi sử dụng BNB, phù hợp với trader chuyên nghiệp.</p>
      <h2>🚀 3. Bingx</h2>
      <p>Thường xuyên có các chiến dịch hoàn phí và thưởng giao dịch hấp dẫn.</p>

      <blockquote style="border-left:4px solid #f97316; background:#fff7ed; padding:12px; border-radius:8px; font-style:italic;">
        “Lựa chọn sàn phù hợp giúp bạn tiết kiệm hàng triệu đồng phí giao dịch mỗi tháng.”
      </blockquote>
    `,
  },
  {
    id: 4,
    title: "CẤP VỐN 1M2 TÀI KHOẢN MỚI",
    description:
      "ATX là sàn giao dịch tại Việt Nam ,giao dịch mượt mà dễ tiếp cận cho người mới.",
    imgSrc: newsATX,
    content: `
      <h2>📌 Giới thiệu Atx</h2>
      <p><strong>ATX</strong> là sàn giao dịch tại Việt Nam ,giao dịch mượt mà dễ tiếp cận cho người mới..</p>
      <p>Đăng ký tài khoản qua mã giới thiệu <strong>25514969</strong> để nhận ưu đãi hấp dẫn.</p>
      Link đăng ký : <a href="https://attlas.io/r/25514969" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">https://www.atx.com/register?inviteCode=DUCDIEN8386</a>
      <div style="text-align:center; margin: 16px 0;">
      </div>
      <h2>💵 Cấp Voucher trải nghiệm</h2>
      <ul>
        <li>Lãi rút về tài khoản</li>
        <li>Ưu đãi thêm khi người mới tham gia đăng ký</li>
      </ul>

      <div style="text-align:center; margin:20px 0;">
      
      </div>

      <h2>📈 Ưu điểm</h2>
      <ul>
        <li>Phí thấp, tốc độ giao dịch nhanh.</li>
        <li>Đa dạng coin và sản phẩm.</li>
        <li>Bảo mật hàng đầu.</li>
      </ul>

      <blockquote style="border-left:4px solid #eab308; background:#fefce8; padding:12px; border-radius:8px; font-style:italic;">
        “ATX phù hợp cho cả người mới lẫn trader chuyên nghiệp.”
      </blockquote>

      <h2>📞 Hỗ trợ</h2>
      <p>Liên hệ <strong>DUCDIENHOANPHI</strong> để nhận hướng dẫn chi tiết về chương trình hoàn phí.</p>
    `,
  },
];

const NewsPage = () => {
  const { id } = useParams();
  const newsItem = newsList.find((item) => item.id.toString() === id);

  if (!newsItem)
    return (
      <div className="max-w-4xl mx-auto mt-24 p-6 text-center text-red-500 text-lg">
        ❌ Bài viết không tồn tại
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto mt-24 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Nội dung chính */}
      <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8 leading-relaxed">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">{newsItem.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Đăng ngày 11/10/2025 • Tác giả:{" "}
          <span className="font-medium text-gray-700">Đức Diện</span>
        </p>
        <img
          src={newsItem.imgSrc}
          alt={newsItem.title}
          className="rounded-xl shadow-md mb-6 w-full object-cover"
        />

   <div
  className="prose max-w-none prose-blue prose-h2:text-xl prose-p:leading-relaxed prose-ul:list-disc prose-ol:list-decimal text-left news-content"
  dangerouslySetInnerHTML={{ __html: newsItem.content }}
/>
        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["#Crypto", "#HoànPhí", "#Blog"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bình luận */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">💬 Bình luận</h2>
          <textarea
            className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-400"
            placeholder="Nhập bình luận của bạn..."
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Gửi bình luận
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Tìm kiếm */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              className="w-full border px-3 py-2 rounded-lg pl-10 focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Tin mới nhất */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">🆕 Tin mới nhất</h3>
          <ul className="space-y-3">
            {newsList.slice(0, 3).map((item) => (
              <li key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <span className="text-sm text-gray-700 font-medium">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tin nổi bật */}
        <div className="p-4 border rounded-xl shadow bg-white">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">🔥 Tin nổi bật</h3>
          <ul className="space-y-3">
            {newsList.slice(-2).map((item) => (
              <li key={item.id}>
                <Link
                  to={`/news/${item.id}`}
                  className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <span className="text-sm text-gray-700 font-medium">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
