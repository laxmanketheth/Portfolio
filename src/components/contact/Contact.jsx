import React from 'react'
import './contact.scss'
import Wrapper from '../wrapper/Wrapper';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <div className='parent-container' id='contact'>
            <Wrapper>
                <h1 className='contact'>Contact</h1>
                <div className="contact-container">
                    <p>Laxman Singh Ketheth</p>
                    <div className='contact-details'>

                        <div>
                            <a className='icon linkedin'
                                href="https://www.linkedin.com/in/laxman-singh-ketheth-35a2bb2b2/"
                                target="_blank"
                            >
                                <LinkedInIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/laxman-singh-ketheth-35a2bb2b2/" target="_blank">
                                <span className='text'>linkedIn</span>
                            </a>
                        </div>
                        <div>
                            <span className='icon'><CallIcon /></span>
                            <span className='text'>+852-64656261</span>
                        </div>
                        <div>
                            <span className='icon'><EmailIcon /></span>
                            <span className='text'>laxmanKetheth76@gmail.com</span>
                        </div>

                    </div>


                </div>
            </Wrapper>

        </div>
    )
}

export default Contact
