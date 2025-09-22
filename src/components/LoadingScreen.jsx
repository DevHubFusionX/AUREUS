import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Zap, Server, Shield, Coins } from 'lucide-react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  
  const steps = [
    { icon: Server, text: 'Connecting to mining pools...' },
    { icon: Shield, text: 'Securing wallet connection...' },
    { icon: Zap, text: 'Optimizing hash algorithms...' },
    { icon: Coins, text: 'Loading AUREUS dashboard...' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2
        if (newProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        
        const stepIndex = Math.floor((newProgress / 100) * steps.length)
        setCurrentStep(Math.min(stepIndex, steps.length - 1))
        
        return newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = steps[currentStep].icon

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B8941F] to-[#8B7355] flex items-center justify-center z-50">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div
        className="text-center text-white relative z-10 max-w-md mx-auto px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Logo */}
        <motion.div
          className="w-24 h-24 sm:w-28 sm:h-28 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/30"
          animate={{ 
            rotate: [0, 360],
            boxShadow: [
              '0 0 20px rgba(255,255,255,0.3)',
              '0 0 40px rgba(255,255,255,0.5)',
              '0 0 20px rgba(255,255,255,0.3)'
            ]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            boxShadow: { duration: 2, repeat: Infinity }
          }}
        >
          <Zap className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-wider">
            AUREUS
          </h1>
          <p className="text-lg sm:text-xl opacity-90 mb-8 font-light">
            Crypto Mining Platform
          </p>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Current Step */}
          <div className="flex items-center justify-center mb-4">
            <motion.div
              key={currentStep}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CurrentIcon className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">{steps[currentStep].text}</span>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-2 overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="text-sm opacity-75">
            {progress}% Complete
          </div>
        </motion.div>

        {/* Mining Stats Preview */}
        <motion.div
          className="grid grid-cols-2 gap-4 text-xs opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="font-bold text-lg">1.2 TH/s</div>
            <div>Network Power</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="font-bold text-lg">99.9%</div>
            <div>Uptime</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}