
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vision from './components/Vision'
import CoreValues from './components/CoreValues'
import Ecosystem from './components/Ecosystem'
import Impact from './components/Impact'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features'
import Training from './components/Training'

import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <CoreValues />
        <Ecosystem />
        <Impact />
        <Services />
        <About />
        <Features />
        <Training />

        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
