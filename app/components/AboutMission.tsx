const AboutMission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              আমরা প্রযুক্তির মাধ্যমে সাতক্ষীরা জেলার মানুষের জীবনমান উন্নয়নে কাজ করি
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">আমাদের মিশন</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                আমাদের মিশন হল সাতক্ষীরা জেলার সকল মানুষের কাছে ডিজিটাল সেবা সহজলভ্য করা এবং তাদের জীবনযাত্রাকে আরও সহজ ও উন্নত করা।
              </p>
              <p className="text-gray-700 leading-relaxed">
                আমরা চাই যে প্রত্যেক নাগরিক যেন তাদের প্রয়োজনীয় সেবাগুলি অনলাইনে পেতে পারে, যা তাদের সময় ও অর্থ বাঁচাবে এবং জীবনযাত্রার মান উন্নত করবে।
              </p>
            </div>

            {/* Vision */}
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-700">আমাদের ভিশন</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                আমাদের ভিশন হল সাতক্ষীরা জেলাকে বাংলাদেশের সবচেয়ে ডিজিটালাইজড জেলা হিসেবে গড়ে তোলা, যেখানে প্রত্যেক নাগরিক ডিজিটাল সেবার সুবিধা পাবে।
              </p>
              <p className="text-gray-700 leading-relaxed">
                আমরা একটি এমন সমাজ গড়তে চাই যেখানে প্রযুক্তি সকলের জন্য সহজলভ্য হবে এবং সেটি ব্যবহার করে মানুষ তাদের জীবনমান উন্নত করতে পারবে।
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">আমাদের মূল্যবোধ</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">বিশ্বাসযোগ্যতা</h4>
                <p className="text-gray-600">
                  আমরা সর্বদা আমাদের গ্রাহকদের সাথে সততা ও বিশ্বাসযোগ্যতার সাথে কাজ করি
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">উদ্ভাবন</h4>
                <p className="text-gray-600">
                  আমরা সর্বদা নতুন ও উদ্ভাবনী সমাধান খুঁজে বের করার চেষ্টা করি
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">সহযোগিতা</h4>
                <p className="text-gray-600">
                  আমরা সকল স্টেকহোল্ডারদের সাথে সহযোগিতার মাধ্যমে কাজ করি
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">সেবা মনোভাব</h4>
                <p className="text-gray-600">
                  আমরা সর্বদা গ্রাহকদের সেবা করার জন্য প্রতিশ্রুতিবদ্ধ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission; 