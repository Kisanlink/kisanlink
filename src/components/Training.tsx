import { useState } from 'react'

const Training = () => {
  const [activeTab, setActiveTab] = useState('academy')

  const trainingPrograms = [
    {
      id: 'academy',
      title: 'KisanLink Academy',
      description: 'Comprehensive training programs for modern agriculture',
      image: '/academy.png',
      features: [
        'Sustainable farming practices',
        'Precision agriculture techniques',
        'Digital farming tools',
        'Market access strategies',
        'Financial management',
        'Certification programs'
      ]
    },
    {
      id: 'certification',
      title: 'Certification Programs',
      description: 'Professional certifications to enhance your agricultural expertise',
      image: '/certi.png',
      features: [
        'Soil testing certification',
        'Drone operation training',
        'Digital agriculture certification',
        'Organic farming practices',
        'Quality management systems',
        'Industry-recognized credentials'
      ]
    },
    {
      id: 'skills',
      title: 'Skill Development',
      description: 'Hands-on training for practical agricultural skills',
      image: '/train.png',
      features: [
        'Crop management techniques',
        'Technology integration',
        'Equipment operation',
        'Data analysis skills',
        'Problem-solving methods',
        'Innovation in agriculture'
      ]
    }
  ]

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Training & Certification
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering farmers and agricultural professionals with comprehensive 
            training programs and industry-recognized certifications.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp delay-300">
          {trainingPrograms.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeTab === program.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-green-200'
              }`}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="animate-fadeInUp delay-500">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className={`${
                activeTab === program.id ? 'block' : 'hidden'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                      Enroll Now
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-lg border-2 border-green-600 transition-all duration-300 hover:scale-105 shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="relative z-10">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Training Info */}
        <div className="mt-20 bg-gradient-to-r from-green-100 to-green-50 rounded-3xl p-8 lg:p-12 animate-fadeInUp delay-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Training Programs?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h4>
                    <p className="text-gray-600">Learn from industry experts with years of practical experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Flexible Learning</h4>
                    <p className="text-gray-600">Online and offline options to fit your schedule</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Certification</h4>
                    <p className="text-gray-600">Industry-recognized certificates upon completion</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/certi.png"
                alt="Training Certification"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Training 