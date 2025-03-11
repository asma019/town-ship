'use client';
import Link from 'next/link';

const VolunteerButton = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            স্বেচ্ছাসেবক হিসেবে যোগ দিন
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            আমাদের সাথে স্বেচ্ছাসেবক হিসেবে যোগ দিয়ে সমাজের উন্নয়নে অবদান রাখুন। আপনার সময় এবং দক্ষতা দিয়ে অন্যদের সাহায্য করুন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/volunteers" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              <span>স্বেচ্ছাসেবকদের তালিকা দেখুন</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/volunteers#apply" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              <span>আবেদন করুন</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerButton; 