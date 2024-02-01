import React from 'react'
import Wrapper from '../wrapper/Wrapper'
import './skills.scss'
import { skills } from '../../data/constants';

const Skills = () => {
  return (
    <div id='skills'>
      <h1 className='title'>Skills</h1>
      <p>Here are some of my skills on which I have been working on for the past 7 months.</p>
    
      <Wrapper>
        <div className='container'>
          {
            skills.map((item) => {
              return (

                <div key={item.id} className='skillCard col-sm-5'>
                  <h1>{item.title}</h1>

                  <div className='innerContainer'>
                    {item.skills.map((skill) => {
                      return (
                        <>
                          <span className='individualSkill'
                                key={skill.id}>
                                        
                            <img className='skill-image' src={skill.image} />
                            <span className='skill-name'>{skill.name}</span>

                          </span>

                        </>
                      )
                    })}
                  </div>
                </div>
              )

            })
          }
        </div>

      </Wrapper>
    </div>
  )
}

export default Skills;
