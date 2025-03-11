'use client';
import { useState } from 'react';
import Image from 'next/image';

// Mock data for volunteers
const mockVolunteers = [
  {
    id: 1,
    name: 'আব্দুল করিম',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    bloodGroup: 'A+',
    mobile: '01712345678',
    location: 'সাতক্ষীরা সদর, সাতক্ষীরা',
    division: 'খুলনা',
    district: 'সাতক্ষীরা',
    upazila: 'সাতক্ষীরা সদর',
  },
  {
    id: 2,
    name: 'ফাতেমা বেগম',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    bloodGroup: 'O+',
    mobile: '01812345678',
    location: 'কালীগঞ্জ, সাতক্ষীরা',
    division: 'খুলনা',
    district: 'সাতক্ষীরা',
    upazila: 'কালীগঞ্জ',
  },
  {
    id: 3,
    name: 'মোহাম্মদ রহিম',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    bloodGroup: 'B+',
    mobile: '01912345678',
    location: 'শ্যামনগর, সাতক্ষীরা',
    division: 'খুলনা',
    district: 'সাতক্ষীরা',
    upazila: 'শ্যামনগর',
  },
  {
    id: 4,
    name: 'নাজমা খাতুন',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    bloodGroup: 'AB+',
    mobile: '01612345678',
    location: 'তালা, সাতক্ষীরা',
    division: 'খুলনা',
    district: 'সাতক্ষীরা',
    upazila: 'তালা',
  },
  {
    id: 5,
    name: 'কামাল হোসেন',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    bloodGroup: 'A-',
    mobile: '01512345678',
    location: 'খুলনা সদর, খুলনা',
    division: 'খুলনা',
    district: 'খুলনা',
    upazila: 'খুলনা সদর',
  },
  {
    id: 6,
    name: 'সালমা আক্তার',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    bloodGroup: 'O-',
    mobile: '01312345678',
    location: 'ডুমুরিয়া, খুলনা',
    division: 'খুলনা',
    district: 'খুলনা',
    upazila: 'ডুমুরিয়া',
  },
];

// Get unique values for filters
const divisions = [...new Set(mockVolunteers.map(v => v.division))];
const districts = [...new Set(mockVolunteers.map(v => v.district))];
const upazilas = [...new Set(mockVolunteers.map(v => v.upazila))];

const VolunteersList = () => {
  const [filters, setFilters] = useState({
    division: '',
    district: '',
    upazila: '',
    bloodGroup: '',
  });

  // Filter volunteers based on selected filters
  const filteredVolunteers = mockVolunteers.filter(volunteer => {
    return (
      (filters.division === '' || volunteer.division === filters.division) &&
      (filters.district === '' || volunteer.district === filters.district) &&
      (filters.upazila === '' || volunteer.upazila === filters.upazila) &&
      (filters.bloodGroup === '' || volunteer.bloodGroup === filters.bloodGroup)
    );
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Section */}
        <div className="bg-gray-100 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4">স্বেচ্ছাসেবক খুঁজুন</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="division" className="block text-gray-700 mb-2">বিভাগ</label>
              <select
                id="division"
                name="division"
                value={filters.division}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">সব বিভাগ</option>
                {divisions.map(division => (
                  <option key={division} value={division}>{division}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="district" className="block text-gray-700 mb-2">জেলা</label>
              <select
                id="district"
                name="district"
                value={filters.district}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">সব জেলা</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="upazila" className="block text-gray-700 mb-2">উপজেলা</label>
              <select
                id="upazila"
                name="upazila"
                value={filters.upazila}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">সব উপজেলা</option>
                {upazilas.map(upazila => (
                  <option key={upazila} value={upazila}>{upazila}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="bloodGroup" className="block text-gray-700 mb-2">রক্তের গ্রুপ</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={filters.bloodGroup}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">সব রক্তের গ্রুপ</option>
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
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVolunteers.length > 0 ? (
            filteredVolunteers.map(volunteer => (
              <div key={volunteer.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105">
                <div className="relative h-64 w-full">
                  <Image
                    src={volunteer.photo}
                    alt={volunteer.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-gray-200"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                    {volunteer.bloodGroup}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{volunteer.name}</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{volunteer.mobile}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{volunteer.location}</span>
                    </div>
                  </div>
                  <a 
                    href={`tel:${volunteer.mobile}`} 
                    className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    কল করুন
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-gray-600">কোন স্বেচ্ছাসেবক পাওয়া যায়নি। অনুগ্রহ করে ফিল্টার পরিবর্তন করুন।</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VolunteersList; 