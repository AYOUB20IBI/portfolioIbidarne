
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar() {
    // const styleLink ={
    //     color:'#f4f4f5',
    //     fontWeight: '500'
    // }
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
                Portfolio
            </a>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-github"></i></Link>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-behance"></i></Link>
            <Link  className='btn btn-info m-1' style={styleBtnIcon}><i className="fa-brands fa-telegram"></i></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar;