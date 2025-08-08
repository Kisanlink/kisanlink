

const Services = () => {
  const fpoServices = [
    {
      title: "Digital Store Management",
      description: "Comprehensive digital store solutions with inventory management, sales tracking, and customer analytics.",
      icon: "/store.png"
    },
    {
      title: "Payment Solutions",
      description: "Secure digital payment systems with multiple payment options and transaction transparency.",
      icon: "/payment1.png"
    },
    {
      title: "Inventory Management",
      description: "Advanced inventory tracking with real-time updates, stock alerts, and automated reordering.",
      icon: "/Inventory.png"
    },
    {
      title: "Billing & Accounting",
      description: "Automated billing systems with detailed financial reports and tax management.",
      icon: "/billing1.png"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption and regulatory compliance features.",
      icon: "/security1.png"
    },
    {
      title: "Operations Dashboard",
      description: "Real-time operations monitoring with performance metrics and decision support tools.",
      icon: "/ops.png"
    }
  ]

  const farmerServices = [
    {
      title: "Quality Products",
      description: "Access to premium agricultural products including seeds, fertilizers, and equipment with guaranteed quality and competitive pricing.",
      icon: "/product.png"
    },
    {
      title: "Digital Services",
      description: "Comprehensive digital solutions including soil testing, crop monitoring, and market access through our mobile platform.",
      icon: "/dig.png"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to modernize agriculture and empower 
            both FPOs and individual farmers with technology-driven tools.
          </p>
        </div>

        {/* For FPOs Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fadeInUp delay-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              For FPOs
            </h3>
            <p className="text-lg text-gray-600">
              Empowering Farmer Producer Organizations with comprehensive digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fpoServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-green-100 transform hover:scale-105 animate-fadeInUp" style={{animationDelay: `${index * 200}ms`}}>
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6 hover:bg-green-200 transition-colors duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* For Farmers Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fadeInUp delay-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              For Farmers
            </h3>
            <p className="text-lg text-gray-600">
              Direct access to quality products and services for individual farmers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {farmerServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-white rounded-2xl shadow-lg p-10 transform hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${(index + 1) * 300}ms`}}>
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Showcase Section */}
        <div className="mt-20 bg-gradient-to-r from-green-100 to-green-50 rounded-3xl p-8 lg:p-12 animate-fadeInUp delay-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Technology Integration
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Leverage cutting-edge technology including drones, IoT devices, and AI-powered 
                analytics to optimize your farming operations and maximize profitability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Drone technology for precision agriculture</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">IoT sensors for real-time monitoring</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">AI-powered crop recommendations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/drone.jpg" 
                alt="Drone Technology" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 bg-gradient-to-r from-green-100 to-green-50 rounded-3xl p-8 lg:p-12 animate-fadeInUp delay-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Analytics & Insights
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Leverage data-driven insights to optimize your farming operations, 
                predict market trends, and maximize profitability with our advanced 
                analytics platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Real-time crop monitoring</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Weather-based recommendations</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Market price predictions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/output.png" 
                alt="Analytics Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 