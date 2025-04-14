import React from 'react'
import './Campus.css'
import gallery_1 from "../../assets/Frontend.png"
import gallery_2 from "../../assets/Backend.png"
import gallery_3 from "../../assets/Tools.png"
import white_arrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus