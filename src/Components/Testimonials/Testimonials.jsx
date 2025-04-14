import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/Scratch.png'
import user_2 from '../../assets/Nit.png'
import user_3 from '../../assets/SIH.webp'
import user_4 from '../../assets/hack.webp'
import { useRef } from 'react'
const Testimonials = () => {
const slider = useRef()
let tx = 0;

    const slideForward =() => {
        if (tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =() => {
        if (tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
      <img className='next-btn' src={next_icon} alt='' onClick={slideForward}/>
      <img className='back-btn' src={back_icon} alt='' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' />
                <div>
                  <h3>Scratch Game Development Hackathon</h3>
                  <span>Newton School of Technology</span>
                </div>
              </div>
              <p>
  
I have won the first prize in the Scratch Game Development Hackathon organized by Newton School of Technology. The event was a great opportunity to showcase my skills and creativity in game development. I am grateful for the recognition and support from the organizers and participants.
</p>


            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='' />
                <div>
                  <h3>NIT Kurukshetra Mathathon</h3>
                  <span>NIT Kurukshetra</span>
                </div>
              </div>
              <p>
              I have got 16th rank in the NIT Kurukshetra Mathathon. The competition was intense, and I am proud to have performed well among such talented participants. This experience has motivated me to continue improving my skills in mathematics and problem-solving.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='' />
                <div>
                  <h3>Smart India Hackathon</h3>
                  <span>Rishihood University</span>
                </div>
              </div>
              <p>
              We have been in top 25 in the Smart India Hackathon 2023. The hackathon was a fantastic experience, and being among the top 25 teams is a significant achievement. I am grateful for the opportunity to work on innovative solutions and collaborate with talented individuals.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='' />
                <div>
                  <h3>Cyber Hack the Hunt</h3>
                  <span>Newton School of Technology</span>
                </div>
              </div>
              <p>
              I have won the third prize in the Cyber Hack the Hunt organized by Newton School of Technology. The event was a great platform to showcase my skills in cybersecurity and problem-solving. I am thankful for the recognition and support from the organizers and participants.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
