import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { TrendingUp, Cpu, Zap, Users } from 'lucide-react'

export default function MiningStats() {
  const navigate = useNavigate()
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Live <span className="text-[#D4AF37]">Mining Statistics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time performance metrics from our mining infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Cards */}
          <div className="space-y-6">
            <motion.div
              className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-8 rounded-2xl border border-[#D4AF37]/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Total Hash Rate</h3>
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">847.3 TH/s</div>
              <div className="text-sm text-gray-600">Network Power • +12.4% this week</div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Cpu className="w-6 h-6 text-[#D4AF37] mb-3" />
                <div className="text-xl font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-600">Active Miners</div>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Users className="w-6 h-6 text-[#D4AF37] mb-3" />
                <div className="text-xl font-bold text-gray-900">15,420</div>
                <div className="text-sm text-gray-600">Total Users</div>
              </motion.div>
            </div>

            <motion.div
              className="bg-gray-50 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-sm font-medium text-gray-600">Last Block: 2 minutes ago</span>
              </div>
              <div className="text-xs text-gray-600">
                Mining efficiency optimized with AI-powered algorithms
              </div>
            </motion.div>
          </div>

          {/* Mining Performance */}
          <motion.div
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Mining Pool Distribution</h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Professional Pool</span>
                  <span className="font-medium text-gray-900">547.3 TH/s (65%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-[#D4AF37] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Starter Pool</span>
                  <span className="font-medium text-gray-900">200.0 TH/s (25%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-[#B8941F] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "25%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Institutional Pool</span>
                  <span className="font-medium text-gray-900">100.0 TH/s (10%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-[#9A7B1A] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "10%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => navigate('/dashboard')}
              className="w-full mt-6 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white py-3 rounded-xl font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Live Dashboard
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}