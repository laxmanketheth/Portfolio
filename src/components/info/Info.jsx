import './info.scss'
import { Bio } from '../../data/constants';
import Wrapper from '../wrapper/Wrapper';
import Typewriter from 'typewriter-effect';


const Info = () => {
    return (
        <Wrapper>

            <div className='info' id='info'>
                <div className="details">
                    <h1> Hi, I am
                        <span> <br /> {Bio.name}</span>
                    </h1>
                    <h2 className='roles'>I am a
                        <span>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h2>
                    <div className='intro'>{Bio.description}</div>

                    {/* <a href="">Check Resume</a> */}
                    <a href="https://www.linkedin.com/in/laxman-singh-ketheth-35a2bb2b2/" target="_blank">LinkedIn Profile</a>

                </div>

                <div className="myImage">
                    <img src="images/IMG_05601.jpeg" alt="my image" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Info;
