import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Zap, Pickaxe, Vault, Coins } from 'lucide-react'

export default function HowItWorks() {
  const navigate = useNavigate()
  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description: "Link your crypto wallet to start mining AUREUS tokens instantly.",
      icon: Zap
    },
    {
      number: "02", 
      title: "Start Mining",
      description: "Our advanced algorithms mine tokens 24/7 using optimized mining rigs.",
      icon: Pickaxe
    },
    {
      number: "03",
      title: "Earn Rewards",
      description: "Accumulate AUREUS tokens with competitive mining rates and bonuses.",
      icon: Vault
    },
    {
      number: "04",
      title: "Claim Tokens",
      description: "Withdraw your mined tokens directly to your wallet or reinvest for compound growth.",
      icon: Coins
    }
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-[#D4AF37]">AUREUS</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to start mining AUREUS tokens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <step.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="text-[#D4AF37] font-bold text-sm mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#D4AF37]/30"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate('/onboarding')}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}