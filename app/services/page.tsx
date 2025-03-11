import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'আমাদের সেবাসমূহ | টাউনশিপ অনলাইন সেবা',
  description: 'টাউনশিপ অনলাইন সেবার বিভিন্ন ডিজিটাল সেবাসমূহ। আমাদের সকল সেবা সম্পর্কে বিস্তারিত জানুন।',
};

const services = [
  {
    id: 1,
    title: 'অনলাইন ফর্ম পূরণ',
    description: 'বিভিন্ন সরকারি ও বেসরকারি ফর্ম অনলাইনে পূরণ করে দেওয়া হয়। যেমন: পাসপোর্ট, ভিসা, জন্ম নিবন্ধন, ভোটার আইডি ইত্যাদি।',
    icon: '/images/form-icon.png',
    price: '৫০ - ৫০০ টাকা',
    features: [
      'দ্রুত সময়ে ফর্ম পূরণ',
      'সঠিক তথ্য নিশ্চিতকরণ',
      'অনলাইন জমা দেওয়া',
      'স্ট্যাটাস ট্র্যাকিং'
    ]
  },
  {
    id: 2,
    title: 'মোবাইল ব্যাংকিং',
    description: 'বিকাশ, নগদ, রকেট, উপায় সহ সকল মোবাইল ব্যাংকিং সেবা। টাকা পাঠানো, বিল পরিশোধ, মোবাইল রিচার্জ ইত্যাদি।',
    icon: '/images/banking-icon.png',
    price: 'সার্ভিস চার্জ + ১০ টাকা',
    features: [
      'নিরাপদ লেনদেন',
      'দ্রুত সার্ভিস',
      'সকল মোবাইল ব্যাংকিং সাপোর্ট',
      'বিল পেমেন্ট সুবিধা'
    ]
  },
  {
    id: 3,
    title: 'ফটোকপি ও প্রিন্টিং',
    description: 'যেকোনো ডকুমেন্ট ফটোকপি, রঙিন প্রিন্ট, স্ক্যান, লেমিনেটিং এবং স্পাইরাল বাইন্ডিং সেবা।',
    icon: '/images/print-icon.png',
    price: '২ - ২০ টাকা (প্রতি পৃষ্ঠা)',
    features: [
      'উচ্চ মানের প্রিন্ট',
      'রঙিন ও সাদাকালো প্রিন্ট',
      'দ্রুত সার্ভিস',
      'বাইন্ডিং সুবিধা'
    ]
  },
  {
    id: 4,
    title: 'ই-টিকেটিং',
    description: 'বাস, ট্রেন, লঞ্চ এবং বিমানের টিকেট অনলাইনে বুকিং করা হয়। সহজে এবং দ্রুত টিকেট সংগ্রহ করুন।',
    icon: '/images/ticket-icon.png',
    price: 'টিকেট মূল্য + ৫০ টাকা',
    features: [
      'সকল পরিবহন টিকেট',
      'সিট নির্বাচন সুবিধা',
      'অনলাইন পেমেন্ট',
      'টিকেট ডেলিভারি'
    ]
  },
  {
    id: 5,
    title: 'কম্পিউটার প্রশিক্ষণ',
    description: 'বেসিক কম্পিউটার, মাইক্রোসফট অফিস, গ্রাফিক ডিজাইন, ওয়েব ডিজাইন ইত্যাদি বিষয়ে প্রশিক্ষণ দেওয়া হয়।',
    icon: '/images/training-icon.png',
    price: '১,০০০ - ১০,০০০ টাকা',
    features: [
      'অভিজ্ঞ প্রশিক্ষক',
      'হাতে-কলমে শিক্ষা',
      'সার্টিফিকেট প্রদান',
      'জব প্লেসমেন্ট সহায়তা'
    ]
  },
  {
    id: 6,
    title: 'ইন্টারনেট সেবা',
    description: 'হাই-স্পিড ইন্টারনেট সেবা, ওয়াইফাই হটস্পট, ইন্টারনেট প্যাকেজ বিক্রয় ইত্যাদি।',
    icon: '/images/internet-icon.png',
    price: '১০ - ১,০০০ টাকা',
    features: [
      'হাই-স্পিড ইন্টারনেট',
      'নিরবিচ্ছিন্ন সংযোগ',
      'টেকনিক্যাল সাপোর্ট',
      'বিভিন্ন প্যাকেজ'
    ]
  },
  {
    id: 7,
    title: 'কৃষি সেবা',
    description: 'কৃষকদের জন্য বিভিন্ন অনলাইন সেবা, কৃষি তথ্য, সার-বীজ সম্পর্কিত তথ্য, কৃষি ঋণ সহায়তা ইত্যাদি।',
    icon: '/images/agriculture-icon.png',
    price: 'বিনামূল্যে - ৫০০ টাকা',
    features: [
      'কৃষি পরামর্শ',
      'আবহাওয়া তথ্য',
      'বাজার দর',
      'কৃষি ঋণ সহায়তা'
    ]
  },
  {
    id: 8,
    title: 'শিক্ষা সেবা',
    description: 'অনলাইন ভর্তি, রেজাল্ট চেক, শিক্ষা প্রতিষ্ঠান সম্পর্কিত তথ্য, স্কলারশিপ সম্পর্কিত তথ্য ইত্যাদি।',
    icon: '/images/education-icon.png',
    price: '১০০ - ১,০০০ টাকা',
    features: [
      'ভর্তি সহায়তা',
      'রেজাল্ট চেকিং',
      'স্কলারশিপ তথ্য',
      'শিক্ষা পরামর্শ'
    ]
  },
];

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                আমাদের সেবাসমূহ
              </h1>
              <p className="text-xl text-blue-100">
                টাউনশিপ অনলাইন সেবা আপনাকে দিচ্ছে বিভিন্ন ধরনের ডিজিটাল সেবা। আপনার প্রয়োজনীয় সেবাটি বেছে নিন।
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-medium">সার্ভিস চার্জ: {service.price}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-2">সুবিধাসমূহ:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    সেবা নিতে যোগাযোগ করুন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                কাস্টম সেবা প্রয়োজন?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                আপনার প্রয়োজন অনুযায়ী আমরা কাস্টম সেবাও প্রদান করি। আপনার প্রয়োজনীয় সেবা সম্পর্কে আমাদের জানান।
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                যোগাযোগ করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 