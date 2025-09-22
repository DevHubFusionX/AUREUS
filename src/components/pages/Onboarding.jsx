import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Wallet, Shield, CheckCircle } from 'lucide-react'

export default function Onboarding() {
  const [step, setStep] = useState('signup') // 'signup', 'wallet', 'verify'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    setStep('wallet')
  }

  const handleWalletConnect = (walletType) => {
    setStep('verify')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900">AUREUS</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Start Mining Today</h1>
          <p className="text-gray-600">Join thousands of miners earning AUREUS tokens</p>
        </motion.div>

        {/* Signup Form */}
        {step === 'signup' && (
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Create a strong password"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create Account
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account? 
                <a href="#" className="text-[#D4AF37] hover:underline ml-1">Sign In</a>
              </p>
            </div>
          </motion.div>
        )}

        {/* Wallet Connection */}
        {step === 'wallet' && (
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6">
              <Wallet className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Connect Your Wallet</h2>
              <p className="text-gray-600">Choose your preferred wallet to start mining</p>
            </div>

            <div className="space-y-4">
              {[
                { name: 'MetaMask', desc: 'Most popular wallet', logo: '🦊' },
                { name: 'WalletConnect', desc: 'Mobile & desktop wallets', logo: '🔗' },
                { name: 'Coinbase Wallet', desc: 'Coinbase users', logo: '💙' }
              ].map((wallet) => (
                <motion.button
                  key={wallet.name}
                  onClick={() => handleWalletConnect(wallet.name)}
                  className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{wallet.logo}</span>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{wallet.name}</div>
                      <div className="text-sm text-gray-600">{wallet.desc}</div>
                    </div>
                  </div>
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={() => setStep('signup')}
                className="text-gray-600 hover:text-[#D4AF37] text-sm"
              >
                ← Back to signup
              </button>
            </div>
          </motion.div>
        )}

        {/* Email Verification */}
        {step === 'verify' && (
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Check Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a verification link to <br />
              <span className="font-semibold">{formData.email}</span>
            </p>

            <div className="bg-[#D4AF37]/10 p-4 rounded-lg mb-6">
              <Shield className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Email verification ensures account security and compliance with mining regulations.
              </p>
            </div>

            <motion.button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue to Dashboard
            </motion.button>

            <p className="text-sm text-gray-600 mt-4">
              Didn't receive it? Check your spam folder or 
              <a href="#" className="text-[#D4AF37] hover:underline ml-1">contact support</a>
            </p>
          </motion.div>
        )}

        {/* Security Notice */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-gray-600">
            🔒 Your data is encrypted and secure. We never store your private keys.
          </p>
        </motion.div>
      </div>
    </div>
  )
}