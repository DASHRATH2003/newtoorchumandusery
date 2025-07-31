import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { getVehicleById, getSimilarVehicles } from '../data/vehicleData';
import type { Vehicle } from '../data/vehicleData';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [similarVehicles, setSimilarVehicles] = useState<Vehicle[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    pickupLocation: '',
    pickupAddress: '',
    dropLocation: '',
    dropAddress: '',
    pickupDate: '',
    pickupTime: '',
    dropDate: '',
    dropTime: ''
  });
  
  useEffect(() => {
    if (id) {
      const vehicleId = parseInt(id);
      const foundVehicle = getVehicleById(vehicleId);
      if (foundVehicle) {
        setVehicle(foundVehicle);
        setSimilarVehicles(getSimilarVehicles(vehicleId));
      } else {
        // Redirect to rentals page if vehicle not found
        navigate('/rentals');
      }
    }
  }, [id, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      pickupLocation: '',
      pickupAddress: '',
      dropLocation: '',
      dropAddress: '',
      pickupDate: '',
      pickupTime: '',
      dropDate: '',
      dropTime: ''
    });
  };

  // Map feature icons based on icon name
  const getFeatureIcon = (iconName: string): React.ReactNode => {
    switch (iconName) {
      case 'seat':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case 'luggage':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  // Convert vehicle features to Feature type with JSX icons
  const features: Feature[] = vehicle?.features?.map(feature => ({
    icon: getFeatureIcon(feature.icon),
    text: feature.text
  })) || [];

  // Use vehicle price list or empty array if not available
  const priceList = vehicle?.priceList || [];

  return (
    <>
      {/* Header */}
      <div className="bg-[#1E1E1E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">{vehicle?.name || 'Loading...'}</h1>
          <div className="flex items-center text-sm">
            <Link to="/" className="text-orange-500 hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/rentals" className="text-orange-500 hover:text-orange-400">Car Rental</Link>
            <span className="mx-2">/</span>
            <span>{vehicle?.name || 'Loading...'}</span>
          </div>
        </div>
      </div>

      {vehicle ? (
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Vehicle Details */}
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-600">
                    <div className="text-teal-600">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price List */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description of Listing</h2>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-orange-500 text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">HOURS/KMS SLAB</th>
                      <th className="px-4 py-2 text-left">PRICE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {priceList.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-2">{item.hours}</td>
                        <td className="px-4 py-2">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Form</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline"> Your booking request has been sent successfully. We will contact you shortly.</span>
                  <button 
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Book Another Vehicle
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter mobile number"
                    />
                  </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation || "Bangalore"}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-100"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Pickup Address *
                  </label>
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter pickup address"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Drop Location *
                  </label>
                  <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter drop location"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Drop Address *
                  </label>
                  <input
                    type="text"
                    name="dropAddress"
                    value={formData.dropAddress}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter drop address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Pickup Time *
                    </label>
                    <select
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {[...Array(24)].map((_, i) => (
                        <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {i.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Drop Date *
                    </label>
                    <input
                      type="date"
                      name="dropDate"
                      value={formData.dropDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Drop Time *
                    </label>
                    <select
                      name="dropTime"
                      value={formData.dropTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {[...Array(24)].map((_, i) => (
                        <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {i.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Send Booking Request
                </button>
              </form>
              )}
            </div>
          </div>
        </div>

        {/* You May be Interested In Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May be Interested in</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarVehicles.length > 0 ? (
              similarVehicles.map((similarVehicle) => (
                <div key={similarVehicle.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={similarVehicle.image}
                    alt={similarVehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{similarVehicle.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gray-600">{similarVehicle.location}</span>
                      <span className="text-red-500">{similarVehicle.price}</span>
                    </div>
                    <button 
                      onClick={() => navigate(`/vehicle/${similarVehicle.id}`)}
                      className="w-full mt-4 bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors"
                    >
                      Call for Price
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">No similar vehicles found</div>
            )}
          </div>
        </div>
      </div>
      ) : (
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default VehicleDetails;