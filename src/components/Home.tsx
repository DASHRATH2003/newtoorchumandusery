import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

interface Bus {
  type: string;
  name: string;
  image: string;
  location: string;
  price: string;
}

interface Fact {
  icon: React.ReactNode;
  count: string;
  label: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBusIndex, setCurrentBusIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Bus');
  const [isPaused, setIsPaused] = useState(false);

  const vehicleCategories = ['Bus', 'Cars', 'Mini Bus', 'Van'];

  const carImages = [
    {
      url: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
      title: "Toyota Innova Crysta"
    },
    {
      url: "https://www.volvobuses.com/content/dam/volvo-buses/markets/india/1860x1050-volvo-9600.jpg",
      title: "Volvo Bus"
    },
    {
      url: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Aura/gallery/pc/auragallerypc_1.jpg",
      title: "Hyundai Aura"
    },
    {
      url: "https://www.progressivetourtravels.com/images/tempo-india-banner.jpg",
      title: "Tempo Traveller"
    },
    {
      url: "https://mbtours.in/assets/img/vehicle/img-9.jpg",
      title: "Mini Bus"
    },
    {
      url: "https://5.imimg.com/data5/SELLER/Default/2023/6/315633413/XO/UT/SU/28947164/toyota-etios-car-rental-service-500x500.jpg",
      title: "Toyota Etios"
    },
    {
      url: "https://www.chennaitourstravelss.com/images/car/detail/40seater-ac-volvo.webp",
      title: "AC Bus"
    }
  ];

  

  const allVehicles = [
    // Buses
    {
      id: 1,
      name: 'Bus 49 Seater',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/LV/SG/LU/11542059/34-seater-tata-transport-bus-500x500.png',
      category: 'Bus',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    {
      id: 2,
      name: 'Bus 33 Seater',
      image: 'https://www.volvobuses.com/content/dam/volvo-buses/markets/india/1860x1050-volvo-9600.jpg',
      category: 'Bus',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    {
      id: 3,
      name: 'AC Bus 45 Seater',
      image: 'https://ik.imagekit.io/wx5dqb8qkk/vehicle/vehicle-1715843479996.jpg?tr=w-500,h-333',
      category: 'Bus',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    // Mini Buses
    {
      id: 4,
      name: 'Minibus 21 Seater',
      image: 'https://www.delhitempotraveller.com/assets/images/18-seater-mini-bus.jpg',
      category: 'Mini Bus',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    {
      id: 5,
      name: 'Mini Bus 15 Seater',
      image: 'https://5.imimg.com/data5/XU/UQ/EP/SELLER-2036047/15-seater-luxury-mini-bus.jpg',
      category: 'Mini Bus',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    // Cars
    {
      id: 6,
      name: 'Innova Crysta 7+1',
      image: 'https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg',
      category: 'Cars',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    {
      id: 7,
      name: 'Toyota Etios',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/315633413/XO/UT/SU/28947164/toyota-etios-car-rental-service-500x500.jpg',
      category: 'Cars',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    {
      id: 8,
      name: 'Hyundai Aura',
      image: 'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Aura/gallery/pc/auragallerypc_1.jpg',
      category: 'Cars',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    {
      id: 9,
      name: 'Maruti Swift Dzire',
      image: 'https://i.pinimg.com/736x/0e/0d/a2/0e0da2818b70f0eed5f478bd4a893b13.jpg',
      category: 'Cars',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    },
    // Vans
    {
      id: 10,
      name: 'Tempo Traveller 12 + 1',
      image: 'https://rkvtravels.com/rkv-images-1/tempo-traveller-12-seater-rental-chennai.png',
      category: 'Van',
      location: 'Bangalore',
      price: 'Call for Price',
      perDay: '/ Day'
    }
  ];

  const busData: Bus[] = [
    {
      type: 'Bus',
      name: 'Bus 49 Seater',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/LV/SG/LU/11542059/34-seater-tata-transport-bus-500x500.png',
      location: 'Bangalore',
      price: 'Call for Price'
    },
    {
      type: 'Bus',
      name: 'Bus 33 Seater',
      image: 'https://www.volvobuses.com/content/dam/volvo-buses/markets/india/1860x1050-volvo-9600.jpg',
      location: 'Bangalore',
      price: 'Call for Price'
    },
    {
      type: 'Mini Bus',
      name: 'Minibus 21 Seater',
      image: 'https://www.delhitempotraveller.com/assets/images/18-seater-mini-bus.jpg',
      location: 'Bangalore',
      price: 'Call for Price'
    },
    {
      type: 'Mini Bus',
      name: 'Tempo Traveller 12 + 1',
      image: 'https://rkvtravels.com/rkv-images-1/tempo-traveller-12-seater-rental-chennai.png',
      location: 'Bangalore',
      price: 'Call for Price'
    },
    {
      type: 'Bus',
      name: 'AC Bus 45 Seater',
      image: 'https://ik.imagekit.io/wx5dqb8qkk/vehicle/vehicle-1715843479996.jpg?tr=w-500,h-333',
      location: 'Bangalore',
      price: 'Call for Price'
    },
    {
      type: 'Mini Bus',
      name: 'Mini Bus 15 Seater',
      image: 'https://mbtours.in/assets/img/vehicle/img-9.jpg',
      location: 'Bangalore',
      price: 'Call for Price'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "NISCHAL G",
      rating: 4.0,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "We took a small car for 3 days. Everything worked out wonderfully. The car was brought to us at the hotel, everything was explained properly. Telephone number exchanged so that we can be contacted straight away if there are any problems. So we were very satisfied."
    },
    {
      id: 2,
      name: "AMRUTA RAO",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Professional and very helpful VEHICLE rental. Fantastic airport car delivery and collection service. Well maintained car. Highly recommended!"
    },
    {
      id: 3,
      name: "GURURAJA RAO",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "No problems at all. The VEHICLE was in top condition. Gladly again and driver was very helpful."
    },
    {
      id: 4,
      name: "NAVEEN RAO",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "Thank you so much for sharing this. Ruthvik rentals is one of the leading company for rental Cabs in Bangalore includes a wide range of vehicle models, carefully selected to meet the exacting needs of large corporate houses & customer on leisure."
    }
  ];

  const faqData = [
    {
      question: "What is about rental car deals?",
      answer: "We are here to provide you cars, buses, mini buses and vans for rents for any sort of requirements."
    },
    {
      question: "In which areas do you operate?",
      answer: "We are operating in Karnataka, and we happy to serve in all major cities of Karnataka"
    },
    {
      question: "Are the Vehicles quality tested ?",
      answer: "Before we hand over the vehicles to our clients we ensure that all the vehicles are quality tested so that you can enjoy your journey."
    },
    {
      question: "Is the driver also given with vehicle ?",
      answer: "All our cabs and buses are operated with experienced and professional driver. To ensure a safety and comfortable journey."
    }
  ];

  // Auto scroll images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Auto scroll bus images with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentBusIndex((prev) => (prev + 1) % busData.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(timer);
    }
  }, [isPaused, busData.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Filter vehicles based on active category
  const filteredVehicles = allVehicles.filter(vehicle => vehicle.category === activeCategory);

  const facts: Fact[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 11l2-4h10l2 4M3 14v-3h18v3M5 18v-4h14v4M7 18h10M6 6h12"/>
        </svg>
      ),
      count: "0+",
      label: "Happy Customers"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      count: "0+",
      label: "Count of Cars"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
      count: "0+",
      label: "Car Rents"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      count: "0+",
      label: "Total Kilometer"
    }
  ];

  const handleViewAllVehicles = () => {
    navigate('/rentals');
  };

  return (
    <>
      <div className="relative w-full min-h-screen bg-gray-100 overflow-hidden">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
              {/* Trusted Badge */}
              <div className="inline-flex items-center space-x-2 hover:transform hover:scale-105 transition-all duration-300">
                <span className="text-orange-500 text-xl md:text-2xl animate-bounce">👍</span>
                <span className="text-sm md:text-lg">Your Reliable Partner for Vehicle Rentals in Bengaluru</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-1">
                <h1 className="text-3xl md:text-[56px] font-black text-gray-900 animate-slide-in-left leading-tight">
                  Choose the Perfect
                </h1>
                <div className="text-2xl md:text-[48px] font-bold text-orange-500 animate-slide-in-right">
                  Vehicle for Your
                  <br />
                  Journey
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-lg text-gray-600 animate-fade-in">
                Shree Chamundeshwari Holidays is committed to providing you with the best rental cars at highly affordable prices
              </p>

              {/* View All Vehicles Button */}
              <button 
                onClick={handleViewAllVehicles}
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg animate-bounce-in text-base"
              >
                View All Vehicles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-slide-right" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Right Content - Car Images Carousel */}
            <div className="w-full md:w-1/2 relative mt-8 md:mt-0 animate-fade-in-up">
              <div className="relative z-10 h-[250px] md:h-[400px] overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="relative h-full">
                  {carImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                        index === currentImage 
                          ? 'translate-x-0 opacity-100' 
                          : index < currentImage 
                            ? '-translate-x-full opacity-0' 
                            : 'translate-x-full opacity-0'
                      }`}
                    >
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {carImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImage ? 'w-8 bg-orange-500' : 'w-2 bg-white'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                  onClick={() => setCurrentImage((prev) => (prev - 1 + carImages.length) % carImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => setCurrentImage((prev) => (prev + 1) % carImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="mt-8 md:mt-12 mx-4">
          <div className="bg-white rounded-lg shadow-2xl p-4 md:p-6 transform hover:shadow-3xl transition-all duration-300 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Pickup Location</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500">
                  <option>Select Location</option>
                  <option>Bangalore</option>
                  <option>Mysore</option>
                  <option>Mangalore</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Vehicle Type</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500">
                  <option>Select Type</option>
                  <option>Bus</option>
                  <option>Car</option>
                  <option>Mini Bus</option>
                  <option>Van</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Pickup Date</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Return Date</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105">
                Search Vehicles
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
       

        {/* How It Works Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">How It Works</h2>
            <p className="text-gray-600">Rent a Car Easily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Steps with hover animations */}
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
                <div className="absolute inset-2 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Browse the Cars</h3>
              <p className="text-gray-600">
              Explore our full range of car listings. Review the details and choose the one that best fits your needs.            </p>
            </div>

            {/* Step 2 */}
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-up delay-100">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
                <div className="absolute inset-2 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Rent the Car</h3>
              <p className="text-gray-600">
              Click the 'Rent Now' button to start the process of renting the car of your choice.            </p>
            </div>

            {/* Step 3 */}
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-right delay-200">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Enjoy your Ride</h3>
              <p className="text-gray-600">
              Once your payment is successfully completed, enjoy the ride with your loved ones.            </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container mx-auto px-4 py-16 bg-gray-50">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore The Vehicles For Rent</h2>
            <p className="text-gray-600">Choose from a wide selection of vehicles tailored to your needs.</p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {vehicleCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-lg transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48">
                  <span className="absolute top-4 left-4 bg-white text-sm px-3 py-1 rounded z-10">{vehicle.category}</span>
                  <img 
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full z-10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{vehicle.name}</h3>
                  <div className="flex items-center mt-2 space-x-1 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{vehicle.location}</span>
                    <span className="text-red-500 font-semibold ml-auto">₹{vehicle.price}</span>
                    <span className="text-gray-500">{vehicle.perDay}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                    className="w-full mt-4 bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Rent Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facts By The Numbers Section */}
        <div className="relative bg-[#1E1E1E] py-20">
          {/* Background Pattern - Right */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
            <div className="w-full h-full">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-12 h-[1px] bg-white rotate-45"
                  style={{ 
                    transform: `translateY(${i * 12}px) translateX(${i * 12}px) rotate(45deg)` 
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white">Facts By The Numbers</h2>
              <div className="relative inline-block mt-2">
                <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
              </div>
              <p className="text-gray-400 mt-4">Let the numbers speak for themselves</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facts.map((fact, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 flex items-center"
                >
                  <div className="bg-[#1E1E1E] p-3 rounded-lg mr-4">
                    <div className="text-white">
                      {fact.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {fact.count}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {fact.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Car Rental deals Section */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Recommended Car Rental deals</h2>
            <div className="relative inline-block">
              <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
            </div>
            <p className="text-gray-600 mt-6 text-sm md:text-base max-w-2xl mx-auto px-4">
              Find the best car rental deals tailored to your needs — whether it's for daily commutes or weekend getaways, we've got you covered at unbeatable prices.
            </p>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button 
              onClick={() => setCurrentBusIndex((prev) => (prev - 1 + busData.length) % busData.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 -translate-x-2 md:-translate-x-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Rental Cards */}
            <div 
              className="overflow-hidden px-2 md:px-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentBusIndex * (100/3)}%)` }}
              >
                {busData.map((bus, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-2 md:px-4">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-500">
                      <div className="relative h-[200px] md:h-[300px]">
                        <div className="absolute top-4 left-4 bg-white text-sm px-3 py-1 rounded-full shadow-md z-10">
                          {bus.type}
                        </div>
                        <img 
                          src={bus.image}
                          alt={bus.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <button className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full z-10 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">{bus.name}</h3>
                        <div className="flex items-center mt-2 space-x-1 text-sm md:text-base">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-600">{bus.location}</span>
                          <span className="text-red-500 font-semibold ml-auto">{bus.price}</span>
                        </div>
                        <button 
                          onClick={() => navigate(`/vehicle/${bus.type === 'Bus' ? 1 : bus.type === 'Mini Bus' ? 2 : bus.type === 'Van' ? 3 : 6}`)}
                          className="w-full mt-4 bg-gray-900 text-white py-2 md:py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => setCurrentBusIndex((prev) => (prev + 1) % busData.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 translate-x-2 md:translate-x-5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {busData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBusIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentBusIndex ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
            </div>
            <p className="text-gray-600 mt-6">Why our customers trust us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards with hover effects */}
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <div className="bg-[#1E1E1E] rounded-lg p-6 mb-6 inline-block hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy & Fast Booking</h3>
              <p className="text-gray-600">
              Renting a car with us is quick and easy. Just a few clicks, and you can book your preferred vehicle from our fleet.            </p>
            </div>

            {/* 24*7 Availability */}
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-up delay-100">
              <div className="bg-[#1E1E1E] rounded-lg p-6 mb-6 inline-block hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24*7 Availability</h3>
              <p className="text-gray-600">
              We're always here to help with any questions you may have. Our team is dedicated to ensuring you have a smooth and seamless experience. </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="text-center transform hover:scale-105 transition-all duration-300 animate-slide-in-right delay-200">
              <div className="bg-[#1E1E1E] rounded-lg p-6 mb-6 inline-block hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">
              We ensure every car in our fleet is thoroughly inspected and cleaned, so you enjoy a hassle-free experience with no unwanted surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative bg-[#1E1E1E] py-12 md:py-16 overflow-hidden">
          {/* Orange Diagonal Line */}
          <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-500 transform skew-x-12 -translate-x-16"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What people say about us?</h2>
              <div className="relative inline-block mt-2">
                <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
              </div>
              <p className="text-gray-400 mt-4 text-sm md:text-base">Words of appreciation from customers</p>
            </div>

            {/* Testimonials Slider */}
            <div className="relative max-w-5xl mx-auto">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={`p-6 md:p-8 rounded-lg transform transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-teal-600' : 'bg-white'
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className={`w-16 h-16 rounded-full border-2 ${
                              index % 2 === 0 ? 'border-white' : 'border-teal-600'
                            }`}
                          />
                        </div>
                        <div>
                          <h4 className={`text-lg font-semibold ${
                            index % 2 === 0 ? 'text-white' : 'text-gray-900'
                          }`}>{testimonial.name}</h4>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                                } fill-current`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className={`ml-2 text-sm ${
                              index % 2 === 0 ? 'text-white' : 'text-gray-600'
                            }`}>({testimonial.rating.toFixed(1)})</span>
                          </div>
                        </div>
                      </div>
                      <p className={`text-sm md:text-base italic ${
                        index % 2 === 0 ? 'text-white/90' : 'text-gray-600'
                      }`}>"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex 
                        ? 'w-8 bg-orange-500' 
                        : 'w-2 bg-gray-400 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Got Questions? We've Got Answers!</h2>
            <div className="relative inline-block mt-2">
              <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
            </div>
            <p className="text-gray-600 mt-6">
            Have questions? We've got answers!<br />
            Check out our FAQs about services, pricing, and booking.<br />
            Need more help? Just reach out!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="mb-4 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-orange-500 transform transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-40 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Button with animation */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-bounce z-50 flex items-center space-x-3"
        >
          <span className="text-lg font-medium">How can I help you?</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current animate-pulse">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>

        {/* Add animations */}
        <style>
          {`
            @keyframes slide-in-left {
              from { transform: translateX(-100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slide-in-right {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slide-in-up {
              from { transform: translateY(100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes bounce-in {
              0% { transform: scale(0.3); opacity: 0; }
              50% { transform: scale(1.05); opacity: 0.8; }
              70% { transform: scale(0.9); opacity: 0.9; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-slide-in-left {
              animation: slide-in-left 0.6s ease-out;
            }
            .animate-slide-in-right {
              animation: slide-in-right 0.6s ease-out;
            }
            .animate-slide-in-up {
              animation: slide-in-up 0.6s ease-out;
            }
            .animate-fade-in {
              animation: fade-in 0.6s ease-out;
            }
            .animate-bounce-in {
              animation: bounce-in 0.8s cubic-bezier(.17,.67,.83,.67);
            }
          `}
        </style>
        <Footer />
      </div>
    </>
  );
};
export default Home;