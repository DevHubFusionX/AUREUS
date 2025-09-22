import { motion } from 'framer-motion'
import { useState } from 'react'
import { TrendingUp, TrendingDown, BarChart3, Calendar, Filter } from 'lucide-react'
import AppLayout from '../layout/AppLayout'

export default function Analytics() {
  const [timeframe, setTimeframe] = useState('7d')
  const [activeChart, setActiveChart] = useState('earnings')

  const data = {
    overview: [
      { label: 'Total Earnings', value: '1,247.89 AUREUS', change: '+12.4%', trend: 'up' },
      { label: 'Mining Efficiency', value: '98.7%', change: '+2.1%', trend: 'up' },
      { label: 'Active Time', value: '167.2 hrs', change: '-0.8%', trend: 'down' },
      { label: 'Pool Rank', value: '#47', change: '+3 positions', trend: 'up' }
    ],
    earnings: [
      { day: 'Mon', amount: 15.2 },
      { day: 'Tue', amount: 18.7 },
      { day: 'Wed', amount: 22.1 },
      { day: 'Thu', amount: 19.8 },
      { day: 'Fri', amount: 25.3 },
      { day: 'Sat', amount: 21.9 },
      { day: 'Sun', amount: 17.4 }
    ]
  }

  return (
    <AppLayout>
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          
          <div className="flex items-center space-x-4">
            <select 
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.overview.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${
                  item.trend === 'up' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                }`}>
                  {item.trend === 'up' ? (
                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  item.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {item.change}
                </span>
              </div>
              
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <motion.div
            className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Mining Performance</h2>
              
              <div className="flex space-x-2">
                {['earnings', 'hashrate', 'efficiency'].map((chart) => (
                  <button
                    key={chart}
                    onClick={() => setActiveChart(chart)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium capitalize transition-colors ${
                      activeChart === chart
                        ? 'bg-[#D4AF37] text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {chart}
                  </button>
                ))}
              </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="h-64 flex items-end justify-between space-x-2">
              {data.earnings.map((item, index) => (
                <motion.div
                  key={item.day}
                  className="flex-1 bg-[#D4AF37]/20 rounded-t-lg flex flex-col justify-end items-center relative"
                  style={{ height: `${(item.amount / 25.3) * 100}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.amount / 25.3) * 100}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-full bg-[#D4AF37] rounded-t-lg"
                    style={{ height: '100%' }}
                    whileHover={{ backgroundColor: '#B8941F' }}
                  />
                  <div className="absolute -bottom-6 text-xs text-gray-600 dark:text-gray-300 font-medium">
                    {item.day}
                  </div>
                  <div className="absolute -top-8 text-xs text-gray-900 dark:text-white font-semibold bg-white dark:bg-gray-700 px-2 py-1 rounded shadow-sm">
                    {item.amount}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Pool Performance */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pool Performance</h3>
              
              <div className="space-y-4">
                {[
                  { pool: 'Professional', percentage: 65, earnings: '847.3' },
                  { pool: 'Starter', percentage: 25, earnings: '200.1' },
                  { pool: 'Institutional', percentage: 10, earnings: '200.5' }
                ].map((pool, index) => (
                  <div key={pool.pool}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-300">{pool.pool} Pool</span>
                      <span className="font-medium text-gray-900 dark:text-white">{pool.earnings} AUREUS</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div 
                        className="bg-[#D4AF37] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${pool.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Info */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Market Info</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">AUREUS Price</span>
                  <span className="font-semibold text-gray-900 dark:text-white">$2.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">24h Change</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">+5.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Network Hash</span>
                  <span className="font-semibold text-gray-900 dark:text-white">847.3 TH/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Difficulty</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Medium</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <motion.button
                  className="w-full flex items-center justify-center space-x-2 bg-[#D4AF37] hover:bg-[#B8941F] text-white py-2 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Export Report</span>
                </motion.button>
                
                <motion.button
                  className="w-full flex items-center justify-center space-x-2 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white py-2 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Report</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  )
}