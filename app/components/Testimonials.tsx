'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'কামরুল ইসলাম',
      role: 'সাতক্ষীরা',
      text: 'টাউনশিপ অনলাইন সেবার মাধ্যমে আমি খুব সহজেই জরুরি অ্যাম্বুলেন্স সেবা পেয়েছি। এটি একটি অসাধারণ উদ্যোগ যা আমাদের জীবনকে সহজ করে দিয়েছে।',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
      id: 2,
      name: 'নাজমা বেগম',
      role: 'শ্যামনগর',
      text: 'আমার এলাকায় ইউনিয়ন পরিষদের সেবা নেওয়া এখন অনেক সহজ হয়েছে। ঘরে বসেই সব কাজ করতে পারছি। সময় ও অর্থ দুটোই সাশ্রয় হচ্ছে।',
      image: 'https://randomuser.me/api/portraits/women/41.jpg',
    },
    {
      id: 3,
      name: 'রফিকুল ইসলাম',
      role: 'কলারোয়া',
      text: 'জরুরি প্রয়োজনে ডাক্তার খুঁজে পাওয়া এখন অনেক সহজ হয়েছে। এই অ্যাপটি আমাদের জীবন সহজ করে দিয়েছে। সবাইকে ব্যবহার করার পরামর্শ দিব।',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      id: 4,
      name: 'সালমা আক্তার',
      role: 'তালা',
      text: 'অনলাইন ফর্ম পূরণ সেবাটি অসাধারণ। আগে আমাকে অনেক দূর যেতে হত, এখন ঘরে বসেই সব কাজ হয়ে যাচ্ছে। টাউনশিপ অনলাইন সেবাকে অসংখ্য ধন্যবাদ।',
      image: 'https://randomuser.me/api/portraits/women/42.jpg',
    },
    {
      id: 5,
      name: 'আবদুল্লাহ আল মামুন',
      role: 'দেবহাটা',
      text: 'মোবাইল ব্যাংকিং সেবাটি খুবই নিরাপদ এবং দ্রুত। আমি নিয়মিত এই সেবা ব্যবহার করি এবং কখনো কোন সমস্যা হয়নি। সেবার মান অত্যন্ত ভালো।',
      image: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            আমাদের গ্রাহকদের মতামত
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            আমাদের সেবা সম্পর্কে গ্রাহকদের অভিজ্ঞতা জানুন। আমরা সর্বদা আপনাদের সেবায় নিয়োজিত।
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-5 z-0"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Testimonial Image */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                    {isMounted && (
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-blue-600 font-medium text-center mb-4">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
                
                {/* Testimonial Text */}
                <div className="w-full md:w-2/3">
                  <svg
                    className="w-12 h-12 text-blue-100 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-20">
              <button
                onClick={prevTestimonial}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentTestimonial(index);
                }}
                className={`w-12 h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-blue-600 w-16' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 