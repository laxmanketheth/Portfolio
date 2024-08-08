import React from 'react';
import './internship.scss'
import Wrapper from '../wrapper/Wrapper'
import { internship } from '../../data/constants'
const Internship = () => {
    return (
        <div id='internship'>
            <h1>Internship</h1>
            <p>3 months Full Stack Web Development Internship</p>
            <Wrapper>
                <div className='internshipContainer'>

                    <div className='internshipCard'>
                        <div className='companyNameContainer'>
                            <img src="images/image.png" className='skill-image ' />
                            <h3>{internship[0].company}</h3>
                        </div>

                        <p>Full Stack Web Developer (Intern)</p>
                        <p className='internDuration'> {internship[0].duration}</p>
                        <p>Completed a 3-month internship at Ftechiz Solutions Pvt Ltd., where I gained valuable real-world coding experience. As part of the development team, I contributed to the codebase and helped my colleagues with various coding tasks.</p>
                        <ul className='techlist'>
                            <li>React Js</li>
                            <li>JavaScript</li>
                            <li>Node Js</li>
                            <li>Express Js</li>
                            <li>Git Hub</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Internship;
