import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Wallet, Shield, Zap } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()

  const handleWalletConnect = (walletType) => {
    // Simulate wallet connection
    navigate('/dashboard')
  }

  const wallets = [
    { name: 'MetaMask', desc: 'Most popular Web3 wallet', logo: '🦊', users: '30M+' },
    { name: 'WalletConnect', desc: 'Mobile & desktop wallets', logo: '🔗', users: '15M+' },
    { name: 'Coinbase Wallet', desc: 'Coinbase ecosystem', logo: '💙', users: '10M+' },
    { name: 'Trust Wallet', desc: 'Mobile-first wallet', logo: '🛡️', users: '5M+' }
  ]

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Column - Visual */}
      <div className="flex-1 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center p-8">
        <motion.div
          className="text-center text-white max-w-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Wallet className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
          <p className="text-lg opacity-90 mb-8">
            Connect your wallet to access your mining dashboard and track earnings
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="font-bold text-2xl">847.3</div>
              <div>TH/s Network</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="font-bold text-2xl">99.9%</div>
              <div>Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Wallet Connection */}
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
            <p className="text-gray-600">Choose your wallet to sign in</p>
          </motion.div>

          {/* Wallet Options */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {wallets.map((wallet, index) => (
              <motion.button
                key={wallet.name}
                onClick={() => handleWalletConnect(wallet.name)}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
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
          </motion.div>

          {/* Security Notice */}
          <motion.div
            className="mt-8 p-4 bg-gray-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-medium text-gray-900">Secure Connection</span>
            </div>
            <p className="text-sm text-gray-600">
              We never store your private keys. Your wallet remains in your control.
            </p>
          </motion.div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New to AUREUS? 
              <button 
                onClick={() => navigate('/signup')}
                className="text-[#D4AF37] hover:underline ml-1"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}