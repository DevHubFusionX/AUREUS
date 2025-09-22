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
    <div className="min-h-screen bg-white flex">
      {/* Left Column - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">AUREUS</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Connect Wallet</h1>
            <p className="text-gray-600">Start mining by connecting your Web3 wallet</p>
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
                    className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{wallet.logo}</div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 group-hover:text-[#D4AF37]">{wallet.name}</div>
                        <div className="text-sm text-gray-600">{wallet.desc}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {wallet.users}
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-medium text-gray-900">Why Connect a Wallet?</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Receive AUREUS token rewards directly</li>
                  <li>• Secure, decentralized authentication</li>
                  <li>• Full control of your assets</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
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
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Wallet Connected!</h2>
              <p className="text-gray-600 mb-6">
                {selectedWallet} successfully connected <br />
                <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">0x742d...8D4C</span>
              </p>

              <div className="bg-[#D4AF37]/10 p-4 rounded-lg mb-6">
                <Zap className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Your wallet is now ready to receive AUREUS tokens from mining rewards.
                </p>
              </div>

              <motion.button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Start Mining
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Right Column - Visual */}
      <div className="flex-1 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center p-8">
        <motion.div
          className="text-center text-white max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Wallet className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Start Mining AUREUS</h2>
          <p className="text-lg opacity-90 mb-8">
            Connect your wallet and start earning tokens with our advanced mining infrastructure
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="font-bold text-2xl">15%</div>
              <div>Average APY</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="font-bold text-2xl">24/7</div>
              <div>Operations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}