import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Check, Star, Zap } from 'lucide-react'

export default function MiningPools() {
  const navigate = useNavigate()
  const pools = [
    {
      name: "Starter Pool",
      price: "0.1 ETH",
      period: "minimum",
      apy: "12%",
      popular: false,
      features: [
        "24/7 Token Mining",
        "AUREUS Rewards",
        "Monthly Payouts",
        "Basic Analytics",
        "Community Support"
      ]
    },
    {
      name: "Professional Pool",
      price: "1.0 ETH",
      period: "minimum", 
      apy: "15%",
      popular: true,
      features: [
        "Priority Mining Access",
        "Bonus Multipliers",
        "Weekly Payouts",
        "Advanced Analytics",
        "Priority Support",
        "Staking Rewards"
      ]
    },
    {
      name: "Institutional Pool",
      price: "10.0 ETH",
      period: "minimum",
      apy: "18%",
      popular: false,
      features: [
        "Dedicated Mining Rigs",
        "Maximum Hash Power",
        "Daily Payouts",
        "Real-time Dashboard",
        "Dedicated Manager",
        "Custom Mining Plans",
        "Governance Rights"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-[#D4AF37]">Mining Pool</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect mining pool for your investment goals and risk tolerance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pools.map((pool, index) => (
            <motion.div
              key={pool.name}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 ${
                pool.popular ? 'border-[#D4AF37] scale-105' : 'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {pool.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pool.name}</h3>
                <div className="text-4xl font-bold text-[#D4AF37] mb-1">{pool.price}</div>
                <div className="text-sm text-gray-600 mb-4">{pool.period}</div>
                <div className="inline-flex items-center bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                  <Zap className="w-4 h-4 text-[#D4AF37] mr-1" />
                  <span className="text-[#D4AF37] font-semibold">{pool.apy} APY</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pool.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => navigate('/onboarding')}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  pool.popular
                    ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-white'
                    : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Mining
              </motion.button>
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
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <motion.button
            className="text-[#D4AF37] hover:text-[#B8941F] font-semibold underline"
            whileHover={{ scale: 1.05 }}
          >
            Contact Our Enterprise Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}