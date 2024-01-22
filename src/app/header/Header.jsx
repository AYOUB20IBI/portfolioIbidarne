import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <>
      
  <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
  
  <header id="header" className="d-flex flex-column justify-content-center">

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><Link to="/" className="nav-link scrollto active"><i className="fa-solid fa-house"></i> <span>Home</span></Link></li>
        <li><Link to="/about" className="nav-link scrollto"><i className="fa-solid fa-user"></i> <span>About</span></Link></li>
        <li><Link to="/portfolio" className="nav-link scrollto"><i className="fa-solid fa-briefcase"></i><span>Projects</span></Link></li>
        <li><Link to="/contact" className="nav-link scrollto"><i className="fa-solid fa-envelope-open"></i><span>Contact</span></Link></li>
        <li><Link to="/blog" className="nav-link scrollto"><i className="fa-solid fa-comments"></i> <span>Blog</span></Link></li>
      </ul>
    </nav>

  </header>
    </>
  )
}

export default Header;