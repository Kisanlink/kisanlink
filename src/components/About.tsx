

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Kisanlink, we are passionate about leveraging technology to empower farmers and revolutionize agriculture. 
                With a deep understanding of the challenges faced by farmers and a commitment to innovation, we strive to 
                create solutions that make farming more efficient, sustainable, and profitable.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary-600 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  Connect farmers with the latest advancements in agritech, providing tools and knowledge to thrive in today's agricultural landscape.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-600 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every farmer is empowered with cutting-edge agritech solutions for a sustainable, prosperous agricultural ecosystem.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-700">Innovation</h4>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700">Inclusion</h4>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700">Integrity</h4>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700">Impact</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/farmer1.png" 
                  alt="Farmer using technology" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="/farm.png" 
                  alt="Farm field" 
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="/farmer2.png" 
                  alt="Farmer with mobile" 
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="/Farm1.png" 
                  alt="Agricultural technology" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Team Section */}


        {/* Technology Showcase */}
        <div className="mt-20 bg-gradient-to-r from-green-100 to-green-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Technology Stack
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We leverage cutting-edge technology to deliver innovative solutions that 
                transform traditional farming practices into modern, efficient operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">AI & Machine Learning</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">IoT & Sensor Technology</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Drone & Precision Agriculture</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/heliot.jpg" 
                alt="Technology Stack" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              Join Our Mission
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Passionate about revolutionizing agriculture? We're always looking for talented individuals 
              who share our vision of empowering farmers through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@kisanlink.in" 
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Resume
              </a>
              <a 
                href="#" 
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Become a Kisansathi
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-lg text-gray-600">
              Transforming agriculture one farmer at a time
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <div className="text-gray-600">Farmers Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">₹500M+</div>
              <div className="text-gray-600">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 