import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-2 shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/images/logo2.png" alt="Ruthvik Rentals" className="h-16 md:h-24 w-32 md:w-48" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-12">
              <Link to="/" className="text-orange-500 font-medium text-lg xl:text-xl">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 text-lg xl:text-xl">About Us</Link>
              <Link to="/rentals" className="text-gray-700 hover:text-orange-500 text-lg xl:text-xl">Rentals</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-orange-500 text-lg xl:text-xl">Testimonials</Link>
            </div>
          </div>

          {/* Desktop Action Buttons - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/quote" 
              className="bg-gray-800 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-md hover:bg-gray-700 transition-colors duration-300 text-base xl:text-lg font-medium"
            >
              Get Quote
            </Link>
            <Link 
              to="/contact" 
              className="bg-orange-500 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 text-base xl:text-lg font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Shown below navbar when menu is open */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t mt-2">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-orange-500 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/rentals" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Rentals
            </Link>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <div className="mt-4 space-y-2">
              <Link 
                to="/quote" 
                className="block w-full px-4 py-2 text-center text-white bg-gray-800 rounded-md hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
              <Link 
                to="/contact" 
                className="block w-full px-4 py-2 text-center text-white bg-orange-500 rounded-md hover:bg-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;