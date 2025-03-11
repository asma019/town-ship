import VolunteersList from '../components/VolunteersList';
import VolunteerForm from '../components/VolunteerForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'স্বেচ্ছাসেবক | টাউনশিপ অনলাইন সেবা',
  description: 'টাউনশিপ অনলাইন সেবার স্বেচ্ছাসেবকদের তালিকা এবং আবেদন ফর্ম',
};

export default function VolunteersPage() {
  return (
    <main>
      <Header />
      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">আমাদের স্বেচ্ছাসেবকগণ</h1>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            আমাদের স্বেচ্ছাসেবকগণ সমাজের বিভিন্ন ক্ষেত্রে সেবা প্রদান করে থাকেন। তাদের সাহায্যে আমরা সমাজের উন্নয়নে অবদান রাখতে পারছি।
          </p>
        </div>
      </div>
      <VolunteersList />
      <VolunteerForm />
      <Footer />
    </main>
  );
} 