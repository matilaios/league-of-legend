import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return <>
<Navbar bg="transparent">
<Navbar.Brand>
            <img
              src="src/assets/lol.jpeg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
<Container>
          <Navbar.Brand><Link to={'/'}>Champions</Link></Navbar.Brand>
          <Nav className="me-auto">
           
            <Navbar.Brand> <Link to={"/item"}>Items</Link></Navbar.Brand>
            <Navbar.Brand> <Link to={"/summoner"}>Summoner</Link></Navbar.Brand>

          </Nav>
        </Container>
      </Navbar>
     
      
</>
}
 
export default NavBar;