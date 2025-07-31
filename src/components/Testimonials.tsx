import { Link } from 'react-router-dom';
import Footer from './Footer';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "NISCHAL G",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4.0,
      text: "We took a small car for 3 days. Everything worked out wonderfully. The car was brought to us at the hotel, everything was explained properly. Telephone number exchanged so that we can be contacted straight away if there are any problems. So we were very satisfied."
    },
    {
      id: 2,
      name: "AMRUTA RAO",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5.0,
      text: "Professional and very helpful VEHICLE rental. Fantastic airport car delivery and collection service. Well maintained car. Highly recommended!"
    },
    {
      id: 3,
      name: "GURURAJA RAO",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5.0,
      text: "No problems at all. The VEHICLE was in top condition. Gladly again and driver was very helpful."
    },
    {
      id: 4,
      name: "NAVEEN RAO",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5.0,
      text: "Thank you so much for sharing this. Ruthvik rentals is one of the leading company for rental Cabs in Bangalore includes a wide range of vehicle models, carefully selected to meet the exacting needs of large corporate houses & customer on leisure."
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#1E1E1E] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Testimonials</h1>
          <div className="flex items-center justify-center text-sm">
            <Link to="/" className="text-orange-500 hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <span>Testimonials</span>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`p-6 rounded-lg ${
                testimonial.id % 2 === 1 ? 'bg-teal-600 text-white' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className={`font-semibold ${
                    testimonial.id % 2 === 1 ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    {renderStars(testimonial.rating)}
                    <span className={`ml-2 text-sm ${
                      testimonial.id % 2 === 1 ? 'text-white' : 'text-gray-600'
                    }`}>
                      ({testimonial.rating.toFixed(1)})
                    </span>
                  </div>
                </div>
              </div>
              <blockquote>
                <p className={`text-sm ${
                  testimonial.id % 2 === 1 ? 'text-white' : 'text-gray-600'
                }`}>
                  "{testimonial.text}"
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Testimonials;