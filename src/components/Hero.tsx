

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-400 rounded-full opacity-15 animate-bounce delay-500"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fadeInUp">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Rural India with
                <span className="text-green-600 block animate-slideInRight">Transparent, Tech‑Driven Agriculture</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed animate-fadeInUp delay-300">
                Kisanlink connects farmers, FPOs, and agri‑enterprises through transparent systems, quality inputs,
                assured markets, and digital traceability — from seed to supply.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp delay-500">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse">
                Explore Solutions
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-green-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Join the Network
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 lg:pt-8 animate-fadeInUp delay-700">
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600">Farmers Connected</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Districts Covered</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">₹500M+</div>
                <div className="text-sm text-gray-600">Value Generated</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Images */}
          <div className="relative animate-fadeInLeft">
            <div className="relative z-10">
              <img 
                src="/kisan.png" 
                alt="KisanLink App Interface" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-green-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Smart Card Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-green-100 to-green-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 animate-fadeInUp delay-1000">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                Smart Membership Card
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8">
                Experience the future of agricultural technology with our innovative smart card system. 
                Get access to exclusive benefits, transparent transactions, and comprehensive crop data.
              </p>
              <div className="space-y-4">
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">PVC matte finish with QR code</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Unique identification number</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">24/7 helpline support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/front.jpg" 
                alt="Smart Membership Card" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 animate-fadeInUp delay-1200">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">
                Transforming Agriculture with Technology
              </h3>
              <p className="text-base sm:text-lg mb-6 lg:mb-8 opacity-90">
                Join thousands of farmers who have already embraced digital agriculture 
                and are experiencing increased productivity and better market access.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-green-600 font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started Today
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/banner.png" 
                alt="KisanLink Banner" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fadeInUp delay-1400">
          <div className="text-center p-6 sm:p-8 bg-white rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-green-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce shadow-xl border-2 border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10"></div>
              <img 
                src="/ic1.png" 
                alt="Smart Farming" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 drop-shadow-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'block';
                  }
                }}
              />
              <svg className="fallback-icon w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10 hidden" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Smart Farming</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">AI-powered crop recommendations and precision agriculture solutions</p>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-green-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce delay-300 shadow-xl border-2 border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10"></div>
              <img 
                src="/ic2.png" 
                alt="Market Access" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 drop-shadow-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'block';
                  }
                }}
              />
              <svg className="fallback-icon w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10 hidden" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Market Access</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Direct market connections and fair price discovery for farmers</p>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-green-300 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce delay-500 shadow-xl border-2 border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10"></div>
              <img 
                src="/ic3.png" 
                alt="Financial Services" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 drop-shadow-lg"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'block';
                  }
                }}
              />
              <svg className="fallback-icon w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10 hidden" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Financial Services</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Easy access to credit, insurance, and digital payment solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 