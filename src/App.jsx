import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import LandingPage from './components/pages/LandingPage'
import Login from './components/pages/onboarding/Login'
import SignUp from './components/pages/onboarding/SignUp'
import Dashboard from './components/pages/Dashboard'
import Wallet from './components/pages/Wallet'
import Analytics from './components/pages/Analytics'
import Settings from './components/pages/Settings'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onboarding" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
