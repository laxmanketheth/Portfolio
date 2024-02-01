import React from 'react'
import './education.scss'
import Wrapper from '../wrapper/Wrapper';
import { education } from '../../data/constants';

const Education = () => {
  return (
    <div id='education'>
      <h1>Education</h1>
      <p>My education has been a journey of self-discovery and growth. My educational details are as follows. </p>
      <Wrapper>

        <div className="education-container">
          <div className='education-Subcontainer'>
            {
              education.map((item) => {
                return (

                  <div className="col-sm-8 education-card" key={item.id}>
                    <div className='header-container'>
                      <img className='img' src={item.image} alt="" />
                      <div className="heading-items-container">
                        <h2>{item.institution}</h2>
                        <h3 className='para1'>{item.Qualification}</h3>
                        <p className='para2'>{item.date}</p>
                      </div>
                    </div>

                    <div className="description">
                      <p>{item.description}</p>
                    </div>

                  </div>


                )
              })
            }
          </div>
        </div>

      </Wrapper>
    </div>
  )
}

export default Education;
