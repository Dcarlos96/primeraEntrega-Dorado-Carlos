import CartWigdet from "./CartWidget"
import '../assets/css/NavBar.css'
import { Container, Nav, Navbar, NavDropdown, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
//     <nav className="nav-bar">
//         <a className="anchor-nav" href="">
//             <img src={'/logo-vs.webp'} alt="logo de la pagina" className="logo-futbol" />

//         </a>
//         <a className="anchor-nav" href="">Camisetas</a>
//         <a className="anchor-nav" href="">Ofertas</a>
//         <a className="anchor-nav" href="">Contactanos</a>
//         <CartWigdet/>
//     </nav>
//   )
// }  
 <Navbar expand="lg" className="navbar-custom" >
      <Container>
  <img src={'/logo-vs.webp'} alt="logo de la pagina" className="logo-futbol" />
    
        <Navbar.Brand as={NavLink} to='/'>Mundo Futbol</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/Ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/Camisetas y Musculosas'>Camisetas/Musculosas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/Shorts y Joggins'>
                Shorts/Joggins
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/camperas'> Camperas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      <CartWigdet/>
      </Container>
    </Navbar>
  );
}
export default NavBar