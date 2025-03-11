'use client';
import { useState } from 'react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    bloodGroup: '',
    division: '',
    district: '',
    upazila: '',
    reason: '',
    occupation: '',
    interests: ['রক্তদান', 'সামাজিক সেবা'],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Prepare data for email
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.upazila}, ${formData.district}, ${formData.division}`,
        occupation: formData.occupation || 'উল্লেখ করা হয়নি',
        interests: ['রক্তদান', 'সামাজিক সেবা'],
        message: formData.reason,
        bloodGroup: formData.bloodGroup,
      };

      // Send email using API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'volunteer',
          data: emailData
        }),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          bloodGroup: '',
          division: '',
          district: '',
          upazila: '',
          reason: '',
          occupation: '',
          interests: ['রক্তদান', 'সামাজিক সেবা'],
          message: '',
        });
        
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'ইমেইল পাঠানো যায়নি। দয়া করে পরে আবার চেষ্টা করুন।');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('সিস্টেম ত্রুটি। দয়া করে পরে আবার চেষ্টা করুন।');
      console.error('Volunteer form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="apply" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            স্বেচ্ছাসেবক হিসেবে আবেদন করুন
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="mb-6 text-center">
              <p className="text-gray-700 mb-4">
                আমাদের সাথে স্বেচ্ছাসেবক হিসেবে যোগ দিয়ে সমাজের উন্নয়নে অবদান রাখুন। নিচের ফর্মটি পূরণ করে আবেদন করুন।
              </p>
              <div className="bg-red-50 p-4 rounded-lg inline-block">
                <p className="text-red-600 font-semibold text-lg">
                  জরুরি রক্তের প্রয়োজনে কল করুন: +৮৮০১৭০০৯৬২৫৩৭
                </p>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                <p className="font-medium">আপনার আবেদন সফলভাবে জমা হয়েছে!</p>
                <p className="text-sm mt-1">আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <p className="font-medium">দুঃখিত, আবেদন জমা দেওয়া যায়নি।</p>
                <p className="text-sm mt-1">{errorMessage || 'অনুগ্রহ করে আবার চেষ্টা করুন অথবা সরাসরি আমাদের সাথে যোগাযোগ করুন।'}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="আপনার পূর্ণ নাম"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="০১XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    ইমেইল <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="bloodGroup" className="block text-gray-700 font-medium mb-2">
                    রক্তের গ্রুপ <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="bloodGroup"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="division" className="block text-gray-700 font-medium mb-2">
                    বিভাগ <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="division"
                    name="division"
                    value={formData.division}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">বিভাগ নির্বাচন করুন</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="ঢাকা">ঢাকা</option>
                    <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                    <option value="রাজশাহী">রাজশাহী</option>
                    <option value="সিলেট">সিলেট</option>
                    <option value="বরিশাল">বরিশাল</option>
                    <option value="রংপুর">রংপুর</option>
                    <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="district" className="block text-gray-700 font-medium mb-2">
                    জেলা <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">জেলা নির্বাচন করুন</option>
                    <option value="সাতক্ষীরা">সাতক্ষীরা</option>
                    <option value="খুলনা">খুলনা</option>
                    <option value="বাগেরহাট">বাগেরহাট</option>
                    <option value="যশোর">যশোর</option>
                    <option value="ঝিনাইদহ">ঝিনাইদহ</option>
                    <option value="কুষ্টিয়া">কুষ্টিয়া</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="upazila" className="block text-gray-700 font-medium mb-2">
                    উপজেলা <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="upazila"
                    name="upazila"
                    value={formData.upazila}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">উপজেলা নির্বাচন করুন</option>
                    <option value="সাতক্ষীরা সদর">সাতক্ষীরা সদর</option>
                    <option value="কালীগঞ্জ">কালীগঞ্জ</option>
                    <option value="তালা">তালা</option>
                    <option value="শ্যামনগর">শ্যামনগর</option>
                    <option value="আশাশুনি">আশাশুনি</option>
                    <option value="দেবহাটা">দেবহাটা</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                  বিস্তারিত ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="গ্রাম/মহল্লা, রোড নং, বাড়ি নং ইত্যাদি"
                />
              </div>

              <div>
                <label htmlFor="occupation" className="block text-gray-700 font-medium mb-2">
                  পেশা
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="আপনার বর্তমান পেশা"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-gray-700 font-medium mb-2">
                  স্বেচ্ছাসেবক হতে চাওয়ার কারণ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="আপনি কেন স্বেচ্ছাসেবক হতে চান তা বিস্তারিত লিখুন"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-colors ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'আবেদন পাঠানো হচ্ছে...' : 'আবেদন জমা দিন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm; 