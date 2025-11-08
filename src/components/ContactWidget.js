import { useState } from "react";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoClose, IoChatbubbleEllipses } from "react-icons/io5";

const ContactWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {open && (
        <div className="bg-gradient-to-b from-yellow-300 to-orange-400 p-4 rounded-3xl shadow-2xl flex flex-col items-center gap-4 animate-bounce-in">
          {/* Zalo */}
          <a
            href="https://zalo.me/g/xfehbq386"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <SiZalo className="text-blue-500 text-2xl" />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/vidhoanphi"
            target="_blank"
            rel="noreferrer"
            className="bg-black p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaTelegramPlane className="text-white text-2xl" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-red-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <FaYoutube className="text-white text-2xl" />
          </a>
        </div>
      )}

      {/* Nút toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-orange-500 p-4 rounded-full shadow-xl hover:bg-orange-600 transition"
      >
        {open ? (
          <IoClose className="text-white text-2xl" />
        ) : (
          <IoChatbubbleEllipses className="text-white text-2xl" />
        )}
      </button>
    </div>
  );
};

export default ContactWidget;
