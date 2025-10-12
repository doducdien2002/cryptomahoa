// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import "./App.css";

const Home = () => (
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

export default function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header onOpenContact={() => setOpenContact(true)} />
          {/* <div className="h-5 md:h-13" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
        <Contact open={openContact} onClose={() => setOpenContact(false)} />
      </div>
    </Router>
  );
}
