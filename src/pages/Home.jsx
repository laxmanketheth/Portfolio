
import HorizontalLine from '../components/horizontalLine/HorizontalLine'
import Contact from '../components/contact/Contact'
import Education from '../components/education/Education'
import Info from '../components/info/Info'
import TopNavbar from '../components/navbar/TopNavbar'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import Internship from '../components/internship/Internship'

const Home = () => {
    return (

        <div>
            <TopNavbar/>
            <Info/>
            <HorizontalLine/>
            <Skills/>
            <HorizontalLine/>
            <Internship/>
            <HorizontalLine/>
            <Projects/>
            <HorizontalLine/>
            <Education />
            <Contact />
        </div>
    )
}

export default Home;
