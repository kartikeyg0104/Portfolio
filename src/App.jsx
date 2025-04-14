import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <div className="container">
        <Title title="PROJECTS"/>
      <Programs/>
      <Title title="SKILLS"/>
      <Campus/>
      <Title title="EXPERIENCES"/>
      <Testimonials/>
      <Title subTitle="Contact Us" title="Get In Touch"/>
      <Contact/>
      <Footer/> 
      </div>
    </div>
  )
}

export default App