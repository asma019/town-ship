import Image from 'next/image';

const AboutTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'আলভী',
      position: 'প্রতিষ্ঠাতা এবং সিইও',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'আব্দুল করিম টাউনশিপ অনলাইন সেবার প্রতিষ্ঠাতা এবং সিইও। তিনি ১০+ বছরের আইটি অভিজ্ঞতা নিয়ে ২০১৮ সালে এই প্রতিষ্ঠান শুরু করেন।',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 2,
      name: 'ফাতেমা বেগম',
      position: 'অপারেশন ম্যানেজার',
      photo: 'https://randomuser.me/api/portraits/women/32.jpg',
      bio: 'ফাতেমা বেগম টাউনশিপ অনলাইন সেবার অপারেশন ম্যানেজার। তিনি ৫+ বছরের ম্যানেজমেন্ট অভিজ্ঞতা নিয়ে ২০১৯ সালে টিমে যোগ দেন।',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 3,
      name: 'মোহাম্মদ রহিম',
      position: 'টেকনিক্যাল লিড',
      photo: 'https://randomuser.me/api/portraits/men/33.jpg',
      bio: 'মোহাম্মদ রহিম টাউনশিপ অনলাইন সেবার টেকনিক্যাল লিড। তিনি ৭+ বছরের সফটওয়্যার ডেভেলপমেন্ট অভিজ্ঞতা নিয়ে ২০১৯ সালে টিমে যোগ দেন।',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 4,
      name: 'নাজমা খাতুন',
      position: 'মার্কেটিং ম্যানেজার',
      photo: 'https://randomuser.me/api/portraits/women/33.jpg',
      bio: 'নাজমা খাতুন টাউনশিপ অনলাইন সেবার মার্কেটিং ম্যানেজার। তিনি ৬+ বছরের ডিজিটাল মার্কেটিং অভিজ্ঞতা নিয়ে ২০২০ সালে টিমে যোগ দেন।',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 5,
      name: 'কামাল হোসেন',
      position: 'কাস্টমার সাপোর্ট লিড',
      photo: 'https://randomuser.me/api/portraits/men/34.jpg',
      bio: 'কামাল হোসেন টাউনশিপ অনলাইন সেবার কাস্টমার সাপোর্ট লিড। তিনি ৪+ বছরের কাস্টমার সাপোর্ট অভিজ্ঞতা নিয়ে ২০২০ সালে টিমে যোগ দেন।',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 6,
      name: 'সালমা আক্তার',
      position: 'ফিনান্স ম্যানেজার',
      photo: 'https://randomuser.me/api/portraits/women/34.jpg',
      bio: 'সালমা আক্তার টাউনশিপ অনলাইন সেবার ফিনান্স ম্যানেজার। তিনি ৮+ বছরের ফিনান্স ম্যানেজমেন্ট অভিজ্ঞতা নিয়ে ২০২১ সালে টিমে যোগ দেন।',
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              আমাদের টিম
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              আমাদের দক্ষ ও অভিজ্ঞ টিম সদস্যরা সর্বদা আপনাদের সেবা প্রদানের জন্য প্রস্তুত। তাদের সম্পর্কে আরও জানুন।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name} এর ফেসবুক প্রোফাইল`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      aria-label={`${member.name} এর টুইটার প্রোফাইল`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-700 transition-colors"
                      aria-label={`${member.name} এর লিংকডইন প্রোফাইল`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">আমাদের টিমে যোগ দিন</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              আমরা সর্বদা উদ্যোগী ও দক্ষ লোকদের খুঁজছি যারা আমাদের মিশনে অবদান রাখতে চান। আমাদের সাথে কাজ করতে আগ্রহী হলে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              যোগাযোগ করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam; 