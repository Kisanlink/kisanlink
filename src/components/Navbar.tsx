import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container-custom py-1">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="Kisanlink" 
              className="h-16 w-auto"
            />
            <div className="text-xl font-bold text-green-600 ml-2">Kisanlink</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-green-600 font-semibold text-sm transition-all duration-300 hover:scale-105">
              Home
            </a>
            <a href="#services" className="text-gray-800 hover:text-green-600 font-semibold text-sm transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#about" className="text-gray-800 hover:text-green-600 font-semibold text-sm transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#features" className="text-gray-800 hover:text-green-600 font-semibold text-sm transition-all duration-300 hover:scale-105">
              Features
            </a>
            <a href="#training" className="text-gray-800 hover:text-green-600 font-semibold text-sm transition-all duration-300 hover:scale-105">
              Training
            </a>
            <a href="#gallery" className="text-gray-800 hover:text-green-600 font-semibold text-sm transition-all duration-300 hover:scale-105">
              Gallery
            </a>
            <a href="#contact" className="text-gray-800 hover:text-green-600 font-semibold text-sm transition-all duration-300 hover:scale-105">
              Contact
            </a>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-slideDown">
          <div className="px-2 pt-1 pb-2 space-y-0 bg-white border-t border-gray-200">
            <a href="#home" className="block px-3 py-2 text-gray-800 hover:text-green-600 font-semibold text-sm transition-colors duration-300">
              Home
            </a>
            <a href="#services" className="block px-3 py-2 text-gray-800 hover:text-green-600 font-semibold text-sm transition-colors duration-300">
              Services
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-green-600 font-semibold text-sm transition-colors duration-300">
              About
            </a>
            <a href="#features" className="block px-3 py-2 text-gray-800 hover:text-green-600 font-semibold text-sm transition-colors duration-300">
              Features
            </a>
            <a href="#training" className="block px-3 py-2 text-gray-800 hover:text-green-600 font-semibold text-sm transition-colors duration-300">
              Training
            </a>
            <a href="#gallery" className="block px-3 py-2 text-gray-800 hover:text-green-600 font-semibold text-sm transition-colors duration-300">
              Gallery
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 hover:text-green-600 font-semibold text-sm transition-colors duration-300">
              Contact
            </a>
            <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 