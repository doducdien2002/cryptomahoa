// App.jsx / App.js
import React, { useState, useEffect } from "react"; // ⬅️ thêm useEffect
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,          // ⬅️ thêm useLocation
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cashback from "./components/Cashback";
import News from "./components/News";
import Testimonials from "./components/Testimonials";
import NewsPage from "./components/NewsPage";
import Contact from "./components/contact";
import { Toaster } from "react-hot-toast";
import ContactWidget from "./components/ContactWidget";
import "./App.css";

// Home có auto-scroll khi nhận state {scrollTo: 'news'}
const Home = () => {
  const location = useLocation(); // ⬅️ dùng được vì đã import

  useEffect(() => {
    if (location.state?.scrollTo === "news") {
      setTimeout(() => {
        document.getElementById("news")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Services />
      <Cashback />
      <section id="news">
        <News />
      </section>
      <Testimonials />
    </>
  );
};

export default function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header onOpenContact={() => setOpenContact(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
        <Footer />
        <ContactWidget />
        <Toaster position="bottom-center" reverseOrder={false} />
        <Contact open={openContact} onClose={() => setOpenContact(false)} />
      </div>
    </Router>
  );
}
