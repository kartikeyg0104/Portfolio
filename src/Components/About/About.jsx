import React from 'react'
import './About.css'
import about_img from "../../assets/mine.jpeg"
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT</h3>
            <h2>Behind every smooth website is a savage dev.</h2>
<p>
I’m a first-year engineering student who’s passionate about web development and learning by doing. I started with the basics of HTML and CSS, and now I’m building full-stack apps using the MERN stack.
</p>
<p>
I believe in the power of clean code and user-friendly design. I’m always looking for new challenges and opportunities to grow my skills. Whether it’s a personal project or a collaborative effort, I’m all in.
</p>
<p>
I actively take part in hackathons, build side projects, and keep exploring new tech to grow as a developer. I’m always looking for opportunities to learn, collaborate, and improve my skills.
</p>
<p>
I’m excited about the future of web development and can’t wait to see where this journey takes me. If you’re looking for a passionate and dedicated developer to join your team or collaborate on a project, let’s connect!
</p>
        </div>
    </div>
  )
}

export default About