import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
  const [counts, setCounts] = useState({
    customers: 0,
    cars: 0,
    rents: 0,
    newCustomers: 0
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation
    const steps = 50; // Number of steps in the animation
    const interval = duration / steps;

    const targetCounts = {
      customers: 500,
      cars: 100,
      rents: 1700,
      newCustomers: 200
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          customers: Math.round(targetCounts.customers * progress),
          cars: Math.round(targetCounts.cars * progress),
          rents: Math.round(targetCounts.rents * progress),
          newCustomers: Math.round(targetCounts.newCustomers * progress)
        });
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Header Banner */}
      <div className="bg-[#1E1E1E] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold text-center">About Us</h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Link to="/" className="text-orange-500 hover:text-orange-600">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">About Us</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="bg-orange-500 absolute -top-4 -left-4 w-24 h-24 rounded-lg opacity-20"></div>
              <div className="bg-orange-500 absolute -bottom-4 -right-4 w-24 h-24 rounded-lg opacity-20"></div>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnMlMjBzaG93cm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" 
                  alt="Luxury Car"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ABOUT SHREE CHAMUNDESHWARI HOLIDAYS </h2>
            <p className="text-gray-600 mb-6 font-serif">
            Shree Chamundeshwari Holidays is one of Bengaluru’s most trusted and experienced travel and vehicle rental service providers. With over a decade of expertise, we offer a wide fleet of well-maintained cars and travel solutions at competitive prices designed to suit every budget and need.

Whether you're planning a weekend escape, a business trip, or a family holiday, our extensive fleet is ready to serve your needs. We offer flexible pickup and drop-off options, ensuring a smooth and convenient travel experience from start to finish.
            </p>
            <p className="text-gray-700 mb-6 font-serif">
            Shree Chamundeshwari Holidays gives you a choice of all big car rental vehicles with your choice of pickup and location, so that you can start enjoying your next journey as you wish. We are here to help you with all your rental needs. We have a large fleet of cars in the future, which will be ready for a small stay towards big cities and car journey.
            </p>
           

            {/* Features List */}
          
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
            <p className="text-gray-600">Rent a Car Easily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Browser the Cars</h3>
              <p className="text-gray-600">Check all the car listings that we offer. Go through all the details and images, and choose the one that suits you best.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Rent the Car</h3>
              <p className="text-gray-600">Click on the 'Rent Now' button and proceed with the process of renting the car of your choice.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Enjoy your Ride</h3>
              <p className="text-gray-600">Once your payment is successfully completed, enjoy the ride with your loved ones.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facts Section */}
      <div className="bg-[#1E1E1E] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Facts By The Numbers</h2>
            <p className="text-gray-400">Let the numbers speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#2A2A2A] rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="bg-[#1E1E1E] p-3 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counts.customers}+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>

            <div className="bg-[#2A2A2A] rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="bg-[#1E1E1E] p-3 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l2-4h10l2 4M3 14v-3h18v3M5 18v-4h14v4M7 18h10M6 6h12" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counts.cars}+</div>
              <div className="text-gray-400 text-sm">Count of Cars</div>
            </div>

            <div className="bg-[#2A2A2A] rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="bg-[#1E1E1E] p-3 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counts.rents}+</div>
              <div className="text-gray-400 text-sm">Car Rents</div>
            </div>

            <div className="bg-[#2A2A2A] rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="bg-[#1E1E1E] p-3 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{counts.newCustomers}+</div>
              <div className="text-gray-400 text-sm">New Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
            <p className="text-gray-600 text-sm">Why our customers trust us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Easy & Fast Booking */}
            <div className="text-center">
              <div className="bg-[#1E1E1E] w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Easy & Fast Booking</h3>
              <p className="text-gray-600 text-sm px-4">
                The process of car rental is very easy and comes with us. Get the best car rent service at the best price from our fleet.
              </p>
            </div>

            {/* 24*7 Availability */}
            <div className="text-center">
              <div className="bg-[#1E1E1E] w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24*7 Availability</h3>
              <p className="text-gray-600 text-sm px-4">
                We are always ready to help you with any of the related queries. Our team is dedicated to give you seamless experience.
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="text-center">
              <div className="bg-[#1E1E1E] w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600 text-sm px-4">
                We ensure that all the cars that we offer have been checked for quality and safety, so you do not have to worry any unwanted surprises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What People say about us Section */}
      <div className="py-16 bg-[#1E1E1E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">What People say about us?</h2>
            <p className="text-gray-400 text-sm">Words of appreciation from our customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/1.jpg" 
                  alt="NISCHAL G" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold">NISCHAL G</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "We took a  Shree Chamundeshwari Holiday car for 3 days. Everything worked out wonderfully. The car was brought to us at the hotel, everything was explained properly. Telephone number exchanged so that we can be contacted straight away if there are any problems. So we were very satisfied."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/1.jpg" 
                  alt="AMRUTA RAO" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold">AMRUTA RAO</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Professional and very helpful  Shree Chamundeshwari Holiday. Fantastic airport car delivery and collection service. Well maintained car. Highly recommended!"
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-8 h-2 bg-orange-500 rounded-full"></button>
            <button className="w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-500"></button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;