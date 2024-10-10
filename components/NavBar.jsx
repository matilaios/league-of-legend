import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';




const NavBar = () => {
    return <>
<Navbar bg="transparent">
<Navbar.Brand>
            <img
              src="icone.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
<Container>
          <Navbar.Brand><Link to={'/'}>Page d'accueil</Link></Navbar.Brand>
          <Nav className="me-auto">
           
            <Navbar.Brand> <Link to={'/champions'}>Champions</Link></Navbar.Brand>

          </Nav>
        </Container>
      </Navbar>
     
      
</>
}
 
export default NavBar;