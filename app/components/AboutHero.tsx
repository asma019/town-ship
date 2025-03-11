import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              আমাদের সম্পর্কে জানুন
            </h1>
            <div className="h-1 w-20 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-blue-700">টাউনশিপ অনলাইন সেবা</span> হল সাতক্ষীরা জেলার প্রথম ডিজিটাল সেবা প্ল্যাটফর্ম, যা ২০১৮ সালে প্রতিষ্ঠিত হয়েছে। আমরা স্থানীয় জনগণের জন্য বিভিন্ন ধরনের অনলাইন সেবা প্রদান করে থাকি।
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              আমাদের লক্ষ্য হল সাতক্ষীরা জেলার সকল মানুষের কাছে ডিজিটাল সেবা পৌঁছে দেওয়া এবং তাদের জীবনযাত্রাকে আরও সহজ করা। আমরা বিশ্বাস করি যে প্রযুক্তির মাধ্যমে সমাজের উন্নয়ন সম্ভব।
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center w-32">
                <div className="text-3xl font-bold text-blue-600 mb-2">৫+</div>
                <div className="text-gray-700">বছরের অভিজ্ঞতা</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center w-32">
                <div className="text-3xl font-bold text-blue-600 mb-2">১০+</div>
                <div className="text-gray-700">সেবার সংখ্যা</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center w-32">
                <div className="text-3xl font-bold text-blue-600 mb-2">৫০০০+</div>
                <div className="text-gray-700">সন্তুষ্ট গ্রাহক</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center w-32">
                <div className="text-3xl font-bold text-blue-600 mb-2">২০+</div>
                <div className="text-gray-700">টিম সদস্য</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="টাউনশিপ অনলাইন সেবা অফিস"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-30 rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6">
                <div className="text-white text-xl md:text-2xl font-bold">
                  আমাদের অফিস, সাতক্ষীরা
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg p-4 shadow-lg">
              এস্টাবলিশড ২০১৮
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 