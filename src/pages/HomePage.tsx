import React from 'react'

import NavBar from '../components/Layouts/NavBar'
import HeroSection from '../components/Layouts/HeroSection'
function HomePage() {
  return (
    <div className='container max-w-6xl mx-auto'>
        <NavBar />
        <HeroSection />
    </div>
  )
}

export default HomePage