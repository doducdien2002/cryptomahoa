import React from 'react';
const Footer = () => (
  <div className="section footer">
    <div className="content">
   <footer className="bg-900 text-gray-300 py-10 px-6 animate-slideIn">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
    
    {/* Cột 1 */}
    <div>
      <h3 className="text-xl font-bold text-white mb-3">VID HOÀN PHÍ</h3>
      <p className="text-gray-400">🎓 Tặng khóa học miễn phí</p>
      <p className="text-gray-400">🎁 Tặng Voucher Free</p>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:text-blue-400 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-pink-500 transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-sky-400 transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="hover:text-red-500 transition">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>

    {/* Cột 2 */}
    <div>
      <h3 className="text-xl font-bold text-white mb-3">CHÚNG TÔI</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white transition">Dịch vụ</a></li>
        <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
        <li><a href="#" className="hover:text-white transition">Tin tức</a></li>
      </ul>
    </div>

    {/* Cột 3 */}
    <div>
      <h3 className="text-xl font-bold text-white mb-3">LIÊN HỆ</h3>
      <p className="text-gray-400">📍 Việt Nam</p>
      <p className="text-gray-400">📧 vidhoanphi@gmail.com</p>
      <p className="text-gray-400">📞 +84 965427145</p>
      <p className="text-gray-400">🌐 www.vidhoanphi.com</p>
    </div>
  </div>

  {/* Dòng bản quyền */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
    © 2022 MAOFAST. All rights reserved.
  </div>
</footer>

    </div>
  </div>
);
export default Footer