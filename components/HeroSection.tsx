"use client";

import React, { useState, useEffect } from "react";
import { ROUTES } from "@/constants";

const phrases = ["Học tự nhiên.", "Nói tự tin.", "Luyện tập hiệu quả."];

const HeroSection: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    
    if (isTyping) {
      if (displayText.length < phrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentPhrase]);

  return (
    <section className="min-h-[80vh] flex items-center py-16 bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="font-extrabold text-slate-700 mb-4 text-4xl md:text-5xl lg:text-[3.5rem] leading-tight">
              Chinh phục tiếng Anh cùng
              <span className="text-teal-600 block">FongFluency</span>
            </h1>
            
            <div className="mb-6 h-[60px] flex items-center">
              <span className="text-2xl text-slate-600 inline-block">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-lg text-slate-500 mb-8 max-w-[600px] leading-relaxed">
              Trải nghiệm phương pháp học tiếng Anh hoàn toàn mới. Bài học tương tác, phản hồi AI và cộng đồng hỗ trợ
              giúp bạn đạt được sự trôi chảy.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <a
                href={ROUTES.REGISTER}
                className="inline-flex items-center justify-center bg-teal-600 text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:bg-teal-700 hover:scale-105 shadow-lg shadow-teal-600/30"
              >
                Bắt đầu ngay
              </a>
              <a
                href={ROUTES.LOGIN}
                className="inline-flex items-center justify-center border-2 border-teal-600 text-teal-600 rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:bg-teal-50 hover:scale-105"
              >
                Đăng nhập
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="/hero_illustration.png"
              alt="Learning"
              className="w-full max-w-[600px] h-auto rounded-3xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
