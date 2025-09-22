import { motion } from 'framer-motion'
import { useState } from 'react'
import { User, Shield, Bell, Zap, Moon, Sun, Globe, Key, Smartphone } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import AppLayout from '../layout/AppLayout'

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile')
  const { isDark, toggleTheme } = useTheme()
  const [notifications, setNotifications] = useState({
    mining: true,
    rewards: true,
    security: true,
    marketing: false
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'mining', label: 'Mining', icon: Zap },
    { id: 'preferences', label: 'Preferences', icon: Globe }
  ]

  return (
    <AppLayout>
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Settings</h1>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#D4AF37] text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
              
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Wallet Profile</h2>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                        🦊
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">MetaMask Wallet</div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-mono break-all">0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-2">Wallet Information</h3>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Network:</span>
                          <span className="text-gray-900 dark:text-white">Ethereum Mainnet</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Connected:</span>
                          <span className="text-green-600 dark:text-green-400">Active</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Last Activity:</span>
                          <span className="text-gray-900 dark:text-white">2 minutes ago</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors">
                      Disconnect Wallet
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-green-600" />
                        <div>
                          <div className="font-semibold text-green-800 dark:text-green-400">Account Secured</div>
                          <div className="text-sm text-green-600 dark:text-green-500">2FA enabled, strong password</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
                        <div className="flex items-center space-x-3">
                          <Key className="w-5 h-5 text-[#D4AF37]" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Change Password</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Last changed 30 days ago</div>
                          </div>
                        </div>
                        <button className="text-[#D4AF37] hover:text-[#B8941F] font-medium">
                          Update
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-[#D4AF37]" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</div>
                            <div className="text-sm text-green-600 dark:text-green-400">Enabled via SMS</div>
                          </div>
                        </div>
                        <button className="text-[#D4AF37] hover:text-[#B8941F] font-medium">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notification Settings</h2>
                  
                  <div className="space-y-6">
                    {[
                      { key: 'mining', label: 'Mining Updates', desc: 'Pool changes, efficiency alerts' },
                      { key: 'rewards', label: 'Reward Notifications', desc: 'New earnings, payouts' },
                      { key: 'security', label: 'Security Alerts', desc: 'Login attempts, account changes' },
                      { key: 'marketing', label: 'Marketing Updates', desc: 'News, promotions, features' }
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">{item.label}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications[item.key]}
                            onChange={(e) => setNotifications({...notifications, [item.key]: e.target.checked})}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#D4AF37]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4AF37]"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Mining Tab */}
              {activeTab === 'mining' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mining Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Auto-Switch Pools</label>
                      <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
                        <option>Enabled - Switch to most profitable</option>
                        <option>Disabled - Stay in current pool</option>
                        <option>Custom - Set conditions</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Mining Intensity</label>
                      <div className="flex items-center space-x-4">
                        <input type="range" min="1" max="100" defaultValue="75" className="flex-1" />
                        <span className="text-[#D4AF37] font-semibold">75%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Payout Threshold</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          defaultValue="10"
                          className="w-32 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                        />
                        <span className="text-gray-600 dark:text-gray-300">AUREUS</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">General Preferences</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
                      <div className="flex items-center space-x-3">
                        {isDark ? <Moon className="w-5 h-5 text-[#D4AF37]" /> : <Sun className="w-5 h-5 text-[#D4AF37]" />}
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Dark Mode</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">Switch to dark theme</div>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isDark}
                          onChange={toggleTheme}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#D4AF37]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4AF37]"></div>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Language</label>
                      <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Timezone</label>
                      <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC-8 (Pacific Time)</option>
                        <option>UTC+0 (GMT)</option>
                        <option>UTC+1 (Central European)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}