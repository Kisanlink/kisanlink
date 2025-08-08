import { useState, useEffect } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const galleryImages = [
    // Core Platform & Technology
        // { src: "/hero.png", alt: "KisanLink Platform Interface", category: "Platform" },
        // { src: "/banner.png", alt: "KisanLink Brand Banner", category: "Platform" },
        // { src: "/output.png", alt: "Analytics Dashboard", category: "Analytics" },
        // { src: "/output1.png", alt: "Data Analytics", category: "Analytics" },
        // { src: "/output2.png", alt: "Performance Metrics", category: "Analytics" },
    
    // Farmers & Agriculture
    { src: "/farmer1.png", alt: "Admin managment of farmers" },
    { src: "/farmer2.png", alt: "Farmer profile information" },
    { src: "/Farm2.png", alt: "Farm information" },
    
    // Technology & Services

    { src: "/drone.jpg", alt: "Drone technology in agriculture" },
    { src: "/dig.png", alt: "Digicrop a virtual assistant" },

    
    // Products & Store

    { src: "/product1.png", alt: "Product showcase" },
    { src: "/product2.png", alt: "Product catalog" },


    
    // Experience Center
    { src: "/exp.jpg", alt: "Experience center" },

    
    // Smart Card & Membership
    { src: "/3.jpg", alt: "Smart Membership Card" },

    
    // Security & Operations

    { src: "/billing1.png", alt: "Billing system" },
    { src: "/billing2.png", alt: "Payment processing" },
    { src: "/payment1.png", alt:" Invoice" },

    { src: "/Inventory.png", alt: "Inventory management" },

    
    // Academy & Training
    { src: "/academy.png", alt: "Kisanlink Academy" },
    { src: "/train.png", alt: "Training program" },
    { src: "/certi.png", alt: "Licence Certificate" },
    
    // Partners & Brands
    { src: "/amriti.png", alt: "Amrti brand products" },

    
    // Services
    { src: "/soil.png", alt: "Soil testing services" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 2000) // 2 seconds

    return () => clearInterval(interval)
  }, [currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage) return // Don't handle keyboard when modal is open
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
          event.preventDefault()
          nextSlide()
          break
        case 'Escape':
          setSelectedImage(null)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white relative">
      {/* Background Cover Image */}

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Our Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our comprehensive collection showcasing KisanLink's 
            impact on agriculture and technology integration.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto animate-fadeInUp delay-300">
          {/* Main Image */}
          <div 
            className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={galleryImages[currentSlide]?.src}
              alt={galleryImages[currentSlide]?.alt}
              className="w-full h-64 sm:h-96 md:h-[500px] object-cover transition-all duration-500 select-none"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 lg:p-6">
              <h3 className="text-white text-lg lg:text-xl font-semibold">
                {galleryImages[currentSlide]?.alt}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hidden md:block"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={() => setSelectedImage(galleryImages[currentSlide]?.src || null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>

                               {/* Mobile Navigation Dots */}
                   <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
                     {galleryImages.map((_, index) => (
                       <button
                         key={index}
                         onClick={() => goToSlide(index)}
                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
                           currentSlide === index ? 'bg-white' : 'bg-white/50'
                         }`}
                       />
                     ))}
                   </div>
                 </div>

                                   {/* Thumbnail Navigation */}
                  <div className="mt-4 lg:mt-6 flex justify-center">
                    <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full scrollbar-hide">
                      {galleryImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                            currentSlide === index 
                              ? 'border-green-600 shadow-lg' 
                              : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="text-center mt-4 lg:mt-6 text-gray-600">
                    <p className="text-base lg:text-lg">
                      <span className="font-semibold text-green-600">{currentSlide + 1}</span> of <span className="font-semibold text-green-600">{galleryImages.length}</span> images
                    </p>
                  </div>
        </div>

        {/* Navigation Info */}
        <div className="text-center mt-6 lg:mt-8 text-xs sm:text-sm text-gray-500 animate-fadeInUp delay-700 px-4">
          <p className="hidden md:block">Use arrow keys or click arrows to navigate • Click image to view fullscreen</p>
          <p className="md:hidden">Swipe to navigate • Tap image to view fullscreen</p>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery 