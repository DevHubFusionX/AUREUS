import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Pause, Wallet, TrendingUp, Zap } from 'lucide-react'
import AppLayout from '../layout/AppLayout'

export default function Dashboard() {
  const [isMining, setIsMining] = useState(false)
  const [miningPool, setMiningPool] = useState('Professional')

  const stats = {
    balance: '127.45',
    earned: '12.34',
    hashRate: '45.2',
    uptime: '99.8'
  }

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h1>
          <p className="text-gray-600 dark:text-gray-300">Wallet: 0x742d...8D4C • Mining operation running smoothly</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'AUREUS Balance', value: stats.balance, icon: Wallet, color: 'text-[#D4AF37]' },
            { label: 'Today Earned', value: stats.earned, icon: TrendingUp, color: 'text-green-500' },
            { label: 'Hash Rate (TH/s)', value: stats.hashRate, icon: Zap, color: 'text-blue-500' },
            { label: 'Uptime %', value: stats.uptime, icon: Play, color: 'text-purple-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">24h</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mining Control */}
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Mining Control</h2>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Current Pool</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{miningPool} Pool</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isMining ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}>
                {isMining ? 'Mining Active' : 'Mining Stopped'}
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <motion.button
                onClick={() => setIsMining(!isMining)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  isMining 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-[#D4AF37] hover:bg-[#B8941F] text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isMining ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isMining ? 'Stop Mining' : 'Start Mining'}</span>
              </motion.button>
              
              <select 
                value={miningPool}
                onChange={(e) => setMiningPool(e.target.value)}
                className="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              >
                <option>Starter Pool</option>
                <option>Professional Pool</option>
                <option>Institutional Pool</option>
              </select>
            </div>

            {/* Mining Progress */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-300">Mining Progress</span>
                <span className="font-medium text-gray-900 dark:text-white">67%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <motion.div 
                  className="bg-[#D4AF37] h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "67%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">Next reward in ~2.3 hours</div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {[
                { type: 'Mining Reward', amount: '+2.45 AUREUS', time: '2 hours ago', color: 'text-green-500' },
                { type: 'Pool Switch', amount: 'Professional', time: '1 day ago', color: 'text-blue-500' },
                { type: 'Mining Reward', amount: '+1.89 AUREUS', time: '1 day ago', color: 'text-green-500' },
                { type: 'Withdrawal', amount: '-50.0 AUREUS', time: '3 days ago', color: 'text-red-500' }
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{activity.type}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{activity.time}</div>
                  </div>
                  <div className={`font-semibold ${activity.color}`}>
                    {activity.amount}
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              className="w-full mt-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white py-2 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              View All Activity
            </motion.button>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  )
}