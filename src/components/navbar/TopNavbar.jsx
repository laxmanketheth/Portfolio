import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './topNavbar.scss';
import { Bio } from '../../data/constants';

const TopNavbar = () => {

  return (
    <Navbar expand="lg" className="navbar" >
      <Container className='navContainer' >
        <Navbar.Brand href="#info" className='logoContainer'>
          <BusinessCenterIcon className='logo' />
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navToggle custom-toggle'/>

        <Navbar.Collapse id="basic-navbar-nav" className='navCollapse'>
          <Nav className="ms-auto navTabs">
            <Nav.Link href="#skills" className='navitems'>Skills</Nav.Link>
            <Nav.Link href="#internship" className='navitems'>Internship</Nav.Link>
            <Nav.Link href="#projects" className='navitems'>Projects</Nav.Link>
            <Nav.Link href="#education" className='navitems'>Education</Nav.Link>
            <Nav.Link href="#contact" className='navitems'>Contact</Nav.Link>
          </Nav>
          
          <div className='btnContainer'>
            <a className='btn' href= {Bio.githubProfile} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>

  );
}

export default TopNavbar;