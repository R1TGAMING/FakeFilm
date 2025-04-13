import React from 'react'

import NavBar from '../components/Layouts/NavBar'
import HeroSection from '../components/Layouts/HeroSection'
function HomePage() {
  return (
    <div className='container max-w-6xl mx-auto'>
        <NavBar />
        <HeroSection />
        <hr className='max-w-40'></hr>
        <br />
        <hr className='max-w-80'></hr>
    </div>
  )
}

export default HomePage