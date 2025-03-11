import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export const metadata: Metadata = {
  title: 'যোগাযোগ | টাউনশিপ অনলাইন সেবা',
  description: 'টাউনশিপ অনলাইন সেবার সাথে যোগাযোগ করুন। আমাদের ঠিকানা, ফোন নম্বর, ইমেইল এবং যোগাযোগ ফর্ম।',
};

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                আমাদের সাথে যোগাযোগ করুন
              </h1>
              <p className="text-xl text-blue-100">
                আপনার যেকোনো প্রশ্ন বা মতামত জানাতে আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনাকে সাহায্য করতে প্রস্তুত।
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
        
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                আমাদের অফিস লোকেশন
              </h2>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29437.89313995!2d89.0697394!3d22.7010311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff551f1faa6c1d%3A0x4a52bd7b94a82825!2sSatkhira!5e0!3m2!1sen!2sbd!4v1655555555555!5m2!1sen!2sbd" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="টাউনশিপ অনলাইন সেবা অফিস লোকেশন"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 