import { useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import HowItWorks from './pages/HowItWorks'
import LilyPrompt from './pages/LilyPrompt'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Starter from './pages/Starter';
import Miriam from './pages/teams/Miriam'
import David from './pages/teams/David'
import Obinna from './pages/teams/Obinna'
import Precious from './pages/teams/Precious'
import TermsAndConditions from './pages/TermsAndConditions'
import OtherTeams from './pages/teams/OtherTeams'
// import background from './assets/Background.png'

function App() {

  return (
    <div className="bg-[url('./assets/Background.png')] bg-cover bg-no-repeat">
      <Nav />
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/lily" element={<LilyPrompt />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/policyprivacy" element={<PrivacyPolicy />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        {/* Team Routes */}
        <Route path='/team/precious' element={<Precious />} />
        <Route path='/team/obinna' element={<Obinna />} />
        <Route path='/team/david' element={<David />} />
        <Route path='/team/miriam' element={<Miriam />} />
        <Route path='/team/others' element={<OtherTeams />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
