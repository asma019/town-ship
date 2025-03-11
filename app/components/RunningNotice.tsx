'use client';
import { useEffect, useState } from 'react';

const RunningNotice = () => {
  const notices = [
    'সাতক্ষীরা জেলার সকল ইউনিয়ন পরিষদ সেবা এখন অনলাইনে পাওয়া যাচ্ছে',
    'জরুরি রক্তের প্রয়োজনে কল করুন: +৮৮০১৭০০৯৬২৫৩৭',
    'আমাদের অ্যাপ ডাউনলোড করুন গুগল প্লে স্টোর থেকে',
    'যেকোনো জরুরি সেবার জন্য আমাদের সাথে যোগাযোগ করুন',
  ];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % notices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-600 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold mr-4">নোটিশ:</span>
          <div className="overflow-hidden relative flex-1">
            <div
              className="whitespace-nowrap transition-transform duration-1000"
              style={{
                transform: `translateX(-${position * 100}%)`,
              }}
            >
              {notices.map((notice, index) => (
                <span
                  key={index}
                  className="inline-block w-full text-center"
                >
                  {notice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningNotice; 