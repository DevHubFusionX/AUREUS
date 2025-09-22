import Navbar from '../layout/Navbar'
import Hero from '../layout/Hero'
import HowItWorks from '../layout/HowItWorks'
import MiningStats from '../layout/MiningStats'
import MiningPools from '../layout/MiningPools'
import Testimonials from '../layout/Testimonials'
import Footer from '../layout/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MiningStats />
      <MiningPools />
      <Testimonials />
      <Footer />
    </div>
  )
}