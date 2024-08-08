
import './projects.scss'
import Wrapper from '../wrapper/Wrapper'
import { projects } from '../../data/constants';

const Projects = () => {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <p>Here are some of the projects that I have worked on </p>
            <Wrapper>
                <div className='projectsContainer'>
                    {
                        projects.map((item) => {
                            return (
                                <div key={item.id} className='projectsCard col-sm-5'>
                                    <div className="projects-subContainer">
                                        <div className='image-container'>
                                            <img className='project-image' src={item.image} alt="" />
                                        </div>
                                        <div className='sub-Container'>
                                            <div className='tags-container'>
                                                {item.tags.map((tag) => {
                                                    return (
                                                        <>
                                                            <span className='individual-tag'
                                                                key={tag.id}>
                                                                <span className='tag-name'>{tag}</span>
                                                            </span>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <div className='title-container'>
                                                <h1 className='project-title'>{item.title}</h1>
                                            </div>

                                            <span className='description'>{item.description}</span>
                                            <div className='buttons-link'>
                                                <a href={item.github} target="_blank" rel="noopener noreferrer" >View Code</a>
                                                <a href={item.webapp} target="_blank" rel="noopener noreferrer">View Live App</a>
                                            </div>
                                        </div>
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

export default Projects;
