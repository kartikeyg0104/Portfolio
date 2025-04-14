import React from 'react'
import "./Programs.css"
import program_1 from "../../assets/Crud.png"
import program_2 from "../../assets/Cloth.png"
import program_3 from "../../assets/Edu.png"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"
const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <a href="https://github.com/kartikeyg0104/crud1.git">CRUD</a>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <a href="">CLOTHARIA</a>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <a href="https://edusity-seven-eosin.vercel.app/">EDUSITY</a>
            </div>
        </div>

    </div>
  )
}

export default Programs