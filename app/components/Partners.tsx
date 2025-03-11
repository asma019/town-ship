'use client';

const Partners = () => {
  const partners = [
    {
      name: 'সাতক্ষীরা জেলা প্রশাসন',
    },
    {
      name: 'সাতক্ষীরা পুলিশ',
    },
    {
      name: 'ফায়ার সার্ভিস',
    },
    {
      name: 'সিভিল সার্জন অফিস',
    },
    {
      name: 'শিক্ষা বোর্ড',
    },
    {
      name: 'বার এসোসিয়েশন',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          আমাদের পার্টনারস
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">{partner.name.charAt(0)}</span>
              </div>
              <h3 className="text-center text-gray-700 font-medium">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 