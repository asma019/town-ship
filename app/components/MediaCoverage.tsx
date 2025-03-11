'use client';

const MediaCoverage = () => {
  const mediaChannels = [
    {
      name: 'Channel i',
      date: '১০ মার্চ ২০২৪',
    },
    {
      name: 'Somoy TV',
      date: '০৫ মার্চ ২০২৪',
    },
    {
      name: 'NTV',
      date: '২৮ ফেব্রুয়ারি ২০২৪',
    },
    {
      name: 'Jamuna TV',
      date: '২০ ফেব্রুয়ারি ২০২৪',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          মিডিয়া কভারেজ
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {mediaChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-gray-600">{channel.name}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {channel.name}
              </h3>
              <p className="text-gray-600">{channel.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage; 