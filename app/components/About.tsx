'use client';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          টাউনশিপ অনলাইন সেবা সম্পর্কে
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              টাউনশিপ অনলাইন সেবা হল একটি ডিজিটাল প্ল্যাটফর্ম যা সাতক্ষীরা জেলার
              বাসিন্দাদের জন্য সকল প্রয়োজনীয় সেবা সহজলভ্য করে তুলেছে।
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              আমাদের অ্যাপের মাধ্যমে আপনি পাচ্ছেন:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>ইউনিয়ন পরিষদ সেবা</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>ডাক্তার ও হাসপাতাল সেবা</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>অ্যাম্বুলেন্স সেবা</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>ফায়ার সার্ভিস</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>শিক্ষা প্রতিষ্ঠান সম্পর্কিত তথ্য</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>ইলেক্ট্রিশিয়ান সেবা</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>পুলিশ স্টেশন সেবা</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>আইনজীবী সেবা</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>উদ্যোক্তা সেবা</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index} 
                className="relative h-48 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center"
              >
                <div className="text-blue-600 font-bold text-center p-4">
                  <div className="text-3xl mb-2">📱</div>
                  <div>অ্যাপ স্ক্রিনশট {index}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 