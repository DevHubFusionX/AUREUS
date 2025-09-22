import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wallet, Shield, CheckCircle, Zap } from 'lucide-react'

export default function SignUp() {
  const [step, setStep] = useState('wallet')
  const [selectedWallet, setSelectedWallet] = useState('')
  const navigate = useNavigate()

  const handleWalletConnect = (walletType) => {
    setSelectedWallet(walletType)
    setStep('verify')
  }

  const wallets = [
    { name: 'MetaMask', desc: 'Most popular Web3 wallet', logo: '🦊', users: '30M+' },
    { name: 'WalletConnect', desc: 'Mobile & desktop wallets', logo: '🔗', users: '15M+' },
    { name: 'Coinbase Wallet', desc: 'Coinbase ecosystem', logo: '💙', users: '10M+' },
    { name: 'Trust Wallet', desc: 'Mobile-first wallet', logo: '🛡️', users: '5M+' }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Column - Form */}
      <div className="lg:flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
        <div className="max-w-md w-full">
          {/* Header */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">AUREUS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Connect Wallet</h1>
            <p className="text-sm sm:text-base text-gray-600">Start mining by connecting your Web3 wallet</p>
          </motion.div>

          {/* Wallet Connection */}
          {step === 'wallet' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                {wallets.map((wallet, index) => (
                  <motion.button
                    key={wallet.name}
                    onClick={() => handleWalletConnect(wallet.name)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="text-2xl sm:text-3xl">{wallet.logo}</div>
                      <div className="text-left">
                        <div className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#D4AF37]">{wallet.name}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{wallet.desc}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {wallet.users}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  <span className="text-sm sm:text-base font-medium text-gray-900">Why Connect a Wallet?</span>
                </div>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <li>• Receive AUREUS token rewards directly</li>
                  <li>• Secure, decentralized authentication</li>
                  <li>• Full control of your assets</li>
                </ul>
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-gray-600">
                  Already have a wallet connected? 
                  <button 
                    onClick={() => navigate('/login')}
                    className="text-[#D4AF37] hover:underline ml-1"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </motion.div>
          )}

          {/* Wallet Verification */}
          {step === 'verify' && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Wallet Connected!</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {selectedWallet} successfully connected <br />
                <span className="font-mono text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded break-all">0x742d...8D4C</span>
              </p>

              <div className="bg-[#D4AF37]/10 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-gray-600">
                  Your wallet is now ready to receive AUREUS tokens from mining rewards.
                </p>
              </div>

              <motion.button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Start Mining
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Right Column - Visual */}
      <div className="lg:flex-1 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[200px] lg:min-h-screen order-1 lg:order-2">
        <motion.div
          className="text-center text-white max-w-md w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8">
            <Wallet className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">Start Mining AUREUS</h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-4 sm:mb-6 lg:mb-8">
            Connect your wallet and start earning tokens with our advanced mining infrastructure
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm">
            <div className="bg-white/10 p-2 sm:p-3 lg:p-4 rounded-lg">
              <div className="font-bold text-lg sm:text-xl lg:text-2xl">15%</div>
              <div>Average APY</div>
            </div>
            <div className="bg-white/10 p-2 sm:p-3 lg:p-4 rounded-lg">
              <div className="font-bold text-lg sm:text-xl lg:text-2xl">24/7</div>
              <div>Operations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}