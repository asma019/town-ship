'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const slides = [
    {
      title: 'টাউনশিপ অনলাইন সেবা',
      description: 'আপনার প্রয়োজনীয় সকল সেবা এখন আপনার হাতের মুঠোয়',
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
    },
    {
      title: 'জরুরি সেবা',
      description: 'যেকোনো জরুরি সেবা পেতে আমাদের অ্যাপ ব্যবহার করুন',
      bgColor: 'bg-gradient-to-r from-green-600 to-green-800',
    },
    {
      title: 'ইউনিয়ন পরিষদ সেবা',
      description: 'সকল ইউনিয়ন পরিষদ সেবা এখন অনলাইনে',
      bgColor: 'bg-gradient-to-r from-purple-600 to-purple-800',
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          } ${slide.bgColor}`}
          suppressHydrationWarning
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl animate-fadeIn">
                {slide.description}
              </p>
              {isMounted && (
                <div className="mt-8 flex justify-center space-x-4">
                  <a
                    href="#about"
                    className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    আরও জানুন
                  </a>
                  <a
                    href="#volunteer"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    স্বেচ্ছাসেবক হোন
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 