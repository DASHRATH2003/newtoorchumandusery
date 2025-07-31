import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { vehicles, Vehicle } from '../data/vehicleData';

const Rentals = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Using vehicles data from vehicleData.ts

  // Extract unique categories from vehicles data
  const categories = [...new Set(vehicles.map(vehicle => vehicle.category))];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const locationMatch = !selectedLocation || vehicle.location === selectedLocation;
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(vehicle.category);
    return locationMatch && categoryMatch;
  });

  const handleRentNow = (vehicleId: number) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#1E1E1E] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Rentals</h1>
          <div className="flex items-center justify-center text-sm">
            <Link to="/" className="text-orange-500 hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <span>Rentals</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4">
            {/* Location Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Location</h3>
              <select 
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>

            {/* Vehicle Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Vehicle Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="form-checkbox h-4 w-4 text-orange-500"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Price</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    className="form-radio h-4 w-4 text-orange-500"
                  />
                  <span className="ml-2 text-gray-700">Call for Price</span>
                </label>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-orange-500"
                    />
                    <div className="flex items-center ml-2">
                      {[...Array(rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded">
              Filter Results
            </button>
          </div>

          {/* Vehicle Grid */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Showing {filteredVehicles.length} Results</p>
              <div className="flex items-center space-x-4">
                <select className="p-2 border border-gray-300 rounded">
                  <option>Low to High</option>
                  <option>High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredVehicles.map(vehicle => (
                <div key={vehicle.id} className="bg-white border rounded-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm">
                      {vehicle.category}
                    </span>
                    <button className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{vehicle.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {vehicle.location}
                      </div>
                      <span className="text-red-500">{vehicle.price}</span>
                    </div>
                    <button 
                      onClick={() => handleRentNow(vehicle.id)}
                      className="w-full bg-[#1E1E1E] text-white py-2 rounded flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="bg-orange-500 text-white w-8 h-8 rounded flex items-center justify-center">1</button>
              <button className="bg-gray-200 text-gray-700 w-8 h-8 rounded flex items-center justify-center">2</button>
              <button className="bg-gray-200 text-gray-700 px-4 h-8 rounded flex items-center justify-center">Next</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rentals;