
import Hero from '../app/hero/Hero';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar() {
    const styleLink ={
        color:'#f4f4f5',
        fontWeight: '500'
    }
    const styleBtnIcon={
        color:'#fff',
        fontWeight: '500',
        background: '#454549',
        border: 'none'
    }

    const styleName={
        color:' #fff',
        fontWeight: 'bold',
        fontSize: '1.5rem'
    }
  return (
    <>
    <nav className={`navbar navbar-expand-lg fixed-top ${style.navbar_back}`}>
        <div className="container">
            <a className="navbar-brand me-auto" href="#" style={styleName}>
                Hotel
            </a>
            
            <div className="offcanvas offcanvas-end" style={{background: '#27272a'}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={styleName}>
                        Portfolio
                    </h5>
                    <button type="button" className={`${style.btn_close}`} data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className={`nav-link ${style.active} mx-lg-2 ${style.nav_link}`} style={styleLink} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mx-lg-2 ${style.nav_link}`} style={styleLink} href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mx-lg-2 ${style.nav_link}`} style={styleLink} href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mx-lg-2 ${style.nav_link}`} style={styleLink} href="#">Rooms</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mx-lg-2 ${style.nav_link}`} style={styleLink} href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-github"></i></Link>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-behance"></i></Link>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-telegram"></i></Link>
            <button className={`${style.btn_toggel}`}  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    </nav>
    {/* <Hero/> */}
    </>
  )
}

export default Navbar;