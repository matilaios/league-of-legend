import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';




const NavBar = () => {
    return <>
<Navbar bg="dark" data-bs-theme="dark" img src="">
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