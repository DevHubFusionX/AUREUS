import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight, ArrowDownLeft, Copy, ExternalLink, Send, Download, Eye, EyeOff, X, QrCode } from 'lucide-react'
import AppLayout from '../layout/AppLayout'

export default function Wallet() {
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('transactions')
  const [showSendModal, setShowSendModal] = useState(false)
  const [showReceiveModal, setShowReceiveModal] = useState(false)
  const [sendForm, setSendForm] = useState({ address: '', amount: '', memo: '' })

  const walletData = {
    balance: '1,247.89',
    usdValue: '2,495.78',
    address: '0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4',
    transactions: [
      { type: 'received', amount: '+12.45', usd: '+24.90', hash: '0x1a2b3c...', time: '2 hours ago', status: 'confirmed' },
      { type: 'sent', amount: '-50.00', usd: '-100.00', hash: '0x4d5e6f...', time: '1 day ago', status: 'confirmed' },
      { type: 'received', amount: '+8.76', usd: '+17.52', hash: '0x7g8h9i...', time: '2 days ago', status: 'confirmed' },
      { type: 'received', amount: '+15.23', usd: '+30.46', hash: '0xj1k2l3...', time: '3 days ago', status: 'confirmed' }
    ]
  }

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Balance Card */}
        <motion.div
          className="bg-gradient-to-br from-[#D4AF37] to-[#B8941F] p-8 rounded-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start mb-6 space-y-4 sm:space-y-0">
            <div>
              <div className="text-sm opacity-80 mb-2">Total Balance</div>
              <div className="flex items-center space-x-3">
                {showBalance ? (
                  <div className="text-4xl font-bold">{walletData.balance} AUREUS</div>
                ) : (
                  <div className="text-4xl font-bold">••••••</div>
                )}
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-1 hover:bg-white/20 rounded"
                >
                  {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-lg opacity-80">
                ${showBalance ? walletData.usdValue : '••••••'} USD
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm opacity-80 mb-1">Wallet Address</div>
              <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-lg">
                <span className="text-sm font-mono">{walletData.address.slice(0, 10)}...</span>
                <button className="hover:bg-white/20 p-1 rounded">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <motion.button
              onClick={() => setShowSendModal(true)}
              className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Send</span>
            </motion.button>
            
            <motion.button
              onClick={() => setShowReceiveModal(true)}
              className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              <span>Receive</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="border-b border-gray-100 dark:border-gray-700">
            <div className="flex overflow-x-auto">
              {['transactions', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-4 font-medium capitalize transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Transactions Tab */}
          {activeTab === 'transactions' && (
            <motion.div
              className="p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {walletData.transactions.map((tx, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors space-y-3 sm:space-y-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'received' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                      }`}>
                        {tx.type === 'received' ? (
                          <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white capitalize">{tx.type}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center space-x-2">
                          <span>{tx.hash}</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`font-semibold ${
                        tx.type === 'received' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {tx.amount} AUREUS
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{tx.usd} USD</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">{tx.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                className="w-full mt-6 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Load More Transactions
              </motion.button>
            </motion.div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <motion.div
              className="p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: 'Total Earned', value: '847.23 AUREUS', change: '+12.4%', color: 'text-green-500' },
                  { label: 'Average Daily', value: '15.67 AUREUS', change: '+5.2%', color: 'text-blue-500' },
                  { label: 'Mining Efficiency', value: '98.7%', change: '+0.3%', color: 'text-purple-500' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{stat.label}</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                    <div className={`text-sm ${stat.color}`}>{stat.change} this week</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Send Modal */}
      <AnimatePresence>
        {showSendModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send AUREUS</h3>
                <button
                  onClick={() => setShowSendModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Recipient Address</label>
                  <input
                    type="text"
                    placeholder="0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4"
                    value={sendForm.address}
                    onChange={(e) => setSendForm({...sendForm, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Amount</label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="0.00"
                      value={sendForm.amount}
                      onChange={(e) => setSendForm({...sendForm, amount: e.target.value})}
                      className="w-full px-4 py-3 pr-20 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">AUREUS</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Available: 1,247.89 AUREUS</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Memo (Optional)</label>
                  <input
                    type="text"
                    placeholder="Add a note..."
                    value={sendForm.memo}
                    onChange={(e) => setSendForm({...sendForm, memo: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Network Fee:</span>
                    <span className="text-gray-900 dark:text-white">~$2.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Total:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{sendForm.amount || '0'} AUREUS + Fee</span>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setShowSendModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-lg font-semibold transition-colors">
                    Send AUREUS
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Receive Modal */}
      <AnimatePresence>
        {showReceiveModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 w-full max-w-md mx-4 sm:mx-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Receive AUREUS</h3>
                <button
                  onClick={() => setShowReceiveModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="text-center space-y-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto">
                  <QrCode className="w-20 h-20 sm:w-24 sm:h-24 text-gray-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Your AUREUS Address</p>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="font-mono text-sm text-gray-900 dark:text-white break-all mb-3">
                      {walletData.address}
                    </div>
                    <button className="flex items-center space-x-2 text-[#D4AF37] hover:text-[#B8941F] text-sm font-medium mx-auto">
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    ⚠️ Only send AUREUS tokens to this address. Sending other tokens may result in permanent loss.
                  </p>
                </div>

                <button
                  onClick={() => setShowReceiveModal(false)}
                  className="w-full px-4 py-3 bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-lg font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AppLayout>
  )
}