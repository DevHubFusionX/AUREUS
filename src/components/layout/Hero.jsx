import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#D4AF37]">500M+ Tokens Mined Daily</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mine Tokens.
            <motion.span 
              className="block bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Earn AUREUS.
            </motion.span>
          </motion.h1>
          
          {/* Value Proposition */}
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed font-light"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advanced <span className="font-semibold text-[#D4AF37]">token mining infrastructure</span> with 
            enterprise-grade security and guaranteed rewards for every participant.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              onClick={() => navigate('/onboarding')}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Mining Now
            </motion.button>
            <motion.button 
              onClick={() => navigate('/analytics')}
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Mining Stats
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column - Stats Dashboard */}
        <motion.div
          className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Live Mining Dashboard</h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-[#D4AF37]">847.3</div>
                <div className="text-xs text-gray-600">TH/s Hash Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <div className="text-xs text-gray-600">Active Miners</div>
              </div>
            </div>
            
            <div className="bg-[#D4AF37]/10 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Mining Efficiency</span>
                <span className="text-sm font-semibold text-[#D4AF37]">98.7%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-[#D4AF37] h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "98.7%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-lg font-bold text-gray-900">99.9%</div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Operations</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">15%</div>
                <div className="text-xs text-gray-600">Avg APY</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}