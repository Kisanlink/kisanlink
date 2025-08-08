

const Features = () => {
  const platformFeatures = [
    {
      title: "Smart Membership Cards",
      description: "PVC matte finish cards with QR codes and unique identification for transparent transactions.",
      icon: "/3.jpg"
    },
    {
      title: "Digital Store Management",
      description: "Comprehensive inventory management with real-time tracking and automated reordering.",
      icon: "/store.png"
    },
    {
      title: "Payment Solutions",
      description: "Secure digital payment systems with multiple payment options and transaction transparency.",
      icon: "/payment1.png"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data analytics with crop monitoring, weather insights, and market predictions.",
      icon: "/output.png"
    },
    {
      title: "Drone Technology",
      description: "Precision agriculture with drone spraying, monitoring, and automated crop management.",
      icon: "/drone.png"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption and regulatory compliance features.",
      icon: "/security1.png"
    }
  ]

  const partners = [
    { name: "DROGO", category: "Drone Technology" },
    { name: "MARUT Drones", category: "Precision Agriculture" },
    { name: "VYOMIK", category: "Aerial Solutions" },
    { name: "JK University", category: "Research Partner" },
    { name: "Evergreen Energy", category: "Renewable Energy" },
    { name: "Reliance Foundation", category: "Strategic Partner" }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            Platform Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 font-medium">
            Discover the comprehensive suite of tools and features designed to 
            revolutionize your farming operations and maximize your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {platformFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-5 lg:p-6 border border-gray-200 hover:border-green-300 transform hover:scale-105">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-xl border-2 border-green-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10"></div>
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain relative z-10 drop-shadow-lg"
                  onError={(e) => {
                    // Hide the image and show fallback icon
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'block';
                    }
                  }}
                />
                {/* Fallback SVG icon */}
                <svg className="fallback-icon w-8 h-8 lg:w-10 lg:h-10 text-white relative z-10 hidden" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
              Our Key Partners
            </h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Collaborating with industry leaders to deliver the best solutions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 lg:p-6 text-center border border-gray-200 hover:border-green-300 transform hover:scale-105">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H8a1 1 0 01-1-1V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1 lg:mb-2 text-sm lg:text-base">{partner.name}</h4>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Center Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-green-50 to-primary-50 rounded-xl lg:rounded-2xl p-6 lg:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                Experience Center
              </h3>
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">Products & Technologies</h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    Drones, IoT devices, seed sowing machines, sprayers, irrigation parts, animal feed, solar fences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">Services</h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    Drone spraying, tool rentals, skill development workshops, field demos.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">Marketing</h4>
                  <p className="text-sm lg:text-base text-gray-600">
                    Brand promotion space, flyers, videos, and comprehensive marketing support.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/expc.jpg" 
                alt="Experience Center" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Products Section with Amrti */}
        <div className="mt-20 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Products
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Discover our premium agricultural products and partnerships that enhance 
                farming efficiency and sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Premium agricultural products</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Quality assurance and testing</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Sustainable farming solutions</span>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="https://amrti.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Explore Products
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/amriti.png" 
                alt="Amrti Products" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Technology Integration Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Technology Integration
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our platform integrates cutting-edge technologies to provide comprehensive 
                solutions for modern agriculture, from precision farming to market access.
              </p>
              <div className="space-y-4">
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">IoT Sensors & Monitoring</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">AI-Powered Analytics</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Digital Payment Systems</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/digicrop.png" 
                alt="Digital Crop Management" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

                       {/* Call to Action Section */}
               <div className="mt-20 bg-gradient-to-r from-primary-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
                 {/* Background Image */}
                 <div className="absolute inset-0 z-0">
                   <img 
                     src="/img1.jpg" 
                     alt="Background" 
                     className="w-full h-full object-cover opacity-20"
                   />
                 </div>
                 <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                   <div>
                     <h3 className="text-3xl font-bold mb-6">
                       Ready to Transform Your Farming?
                     </h3>
                     <p className="text-lg mb-8 opacity-90">
                       Join thousands of farmers who have already embraced digital agriculture 
                       and are experiencing increased productivity, better market access, and 
                       improved profitability.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4">
                       <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                         Get Started Today
                       </button>
                       <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                         Learn More
                       </button>
                     </div>
                   </div>
                   <div className="relative">
                     <img 
                       src="/2.png" 
                       alt="Digital Recruitment" 
                       className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                     />
                   </div>
                 </div>
               </div>
      </div>
    </section>
  )
}

export default Features 