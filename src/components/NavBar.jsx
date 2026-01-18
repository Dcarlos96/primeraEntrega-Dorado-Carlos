import CartWigdet from "./CartWidget"
import '../assets/css/NavBar.css'
const NavBar = () => {
  return (
    <nav className="nav-bar">
        <a className="anchor-nav" href="">
            <img src={'./public/logo-vs.webp'} alt="logo de la pagina" className="logo-futbol" />

        </a>
        <a className="anchor-nav" href="">Camisetas</a>
        <a className="anchor-nav" href="">Ofertas</a>
        <a className="anchor-nav" href="">Contactanos</a>
        <CartWigdet/>
    </nav>
  )
}  
export default NavBar