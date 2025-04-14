import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'
import mine from '../../assets/mine.jpeg' // Import the mine.png image

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  }, [])

  // Modified to toggle the no-scroll class on body
  const handleImageClick = () => {
    const newZoomedState = !isZoomed;
    setIsZoomed(newZoomedState);
    
    // Toggle no-scroll class on body
    if (newZoomedState) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  // Cleanup function to remove the class when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      {isZoomed && (
        <div className="zoom-overlay" onClick={handleImageClick}>
          <img src={mine} alt="Profile" className="zoomed-image" />
        </div>
      )}
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className="logo-container">
          <div className="profile-image-circle" onClick={handleImageClick}>
            <img src={mine} alt="Profile" />
          </div>
          <h1 className='logo'>Kartikey Gupta</h1>
        </div>
        <ul>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
          <li><Link to="program" smooth={true} offset={-260} duration={500}>Projects</Link></li>
          <li><Link to="campus" smooth={true} offset={-260} duration={500}>Skills</Link></li>
          <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Experience</Link></li>
          <li><Link className='btn' to="contact" smooth={true} offset={0} duration={500}>Contact us</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar