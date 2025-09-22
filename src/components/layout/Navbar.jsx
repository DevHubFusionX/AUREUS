import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Pickaxe, BarChart3, Building2, BookOpen, Wallet, MessageCircle, Twitter, Github } from 'lucide-react'

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-6xl"
    >
      <motion.div 
        className="bg-white backdrop-blur-md rounded-full px-12 py-4 shadow-lg border border-gray-100 min-w-fit"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between space-x-12">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </motion.div>
            <span className="text-lg font-semibold text-gray-900 whitespace-nowrap">AUREUS</span>
          </motion.div>
          
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Platform', icon: Home },
              { name: 'Mining Pools', icon: Pickaxe },
              { name: 'Analytics', icon: BarChart3 },
              { name: 'Enterprise', icon: Building2 }
            ].map((item) => (
              <motion.a 
                key={item.name}
                href="#" 
                className="flex items-center space-x-2 text-gray-600 hover:text-[#D4AF37] font-medium text-sm whitespace-nowrap px-2 py-1 rounded-lg hover:bg-[#D4AF37]/5 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button 
              onClick={() => navigate('/onboarding')}
              className="text-gray-600 hover:text-gray-900 font-medium text-sm whitespace-nowrap px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Connect Wallet
            </motion.button>
            <motion.button 
              onClick={() => navigate('/onboarding')}
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-2 rounded-lg font-semibold text-sm whitespace-nowrap shadow-sm"
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Start Mining
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex flex-col space-y-1 p-2"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-5 h-0.5 bg-gray-600"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
            <div className="w-5 h-0.5 bg-gray-600"></div>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
    
    {/* Premium Sidebar */}
    <AnimatePresence>
      {sidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-white backdrop-blur-md shadow-2xl z-50 border-l border-gray-100"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">AUREUS</span>
                  </div>
                  <motion.button
                    onClick={() => setSidebarOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    ×
                  </motion.button>
                </div>
                
                {/* Quick Stats */}
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hash Rate</span>
                    <span className="font-semibold text-[#D4AF37]">847.3 TH/s</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-gray-600">Active Miners</span>
                    <span className="font-semibold text-gray-900">2,847</span>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex-1 p-6 space-y-2">
                {[
                  { name: 'Platform', icon: Home },
                  { name: 'Mining Pools', icon: Pickaxe },
                  { name: 'Analytics', icon: BarChart3 },
                  { name: 'Enterprise', icon: Building2 },
                  { name: 'Resources', icon: BookOpen }
                ].map((item) => (
                  <motion.a
                    key={item.name}
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-[#D4AF37] transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Bottom Actions */}
              <div className="p-6 border-t border-gray-100 space-y-3">
                <motion.button 
                  onClick={() => { navigate('/onboarding'); setSidebarOpen(false); }}
                  className="w-full flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 font-medium py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <Wallet className="w-4 h-4" />
                  <span>Connect Wallet</span>
                </motion.button>
                <motion.button 
                  onClick={() => { navigate('/onboarding'); setSidebarOpen(false); }}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Start Mining
                </motion.button>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4">
                  {[MessageCircle, Twitter, Github].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  )
}