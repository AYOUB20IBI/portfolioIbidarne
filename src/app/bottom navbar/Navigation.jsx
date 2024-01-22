import { useEffect } from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
function Navigation() {
    useEffect(()=>{
        const list = document.querySelectorAll(".list");

        function activeLink() {
            list.forEach((item) => {
                item.classList.remove("active");
            })
            this.classList.add("active")
        }

        list.forEach((item) => item.addEventListener("click", activeLink))
    },[])
  return (
    <>
    <div className='nav_bottom'>
    <div className="navigation ">
        <ul>
            <li className="list active">
                <Link to="/">
                    <span className="icon"><i className="fa-solid fa-house"></i></span>
                    <span className="text">Home</span>
                </Link>
            </li>
            <li className="list">
                <Link to="/portfolio">
                    <span className="icon"><i className="fa-solid fa-briefcase"></i></span>
                    <span className="text">Projects</span>
                </Link>
            </li>
            <li className="list">
                <Link to="/contact">
                    <span className="icon"><i className="fa-solid fa-envelope-open"></i></span>
                    <span className="text">Contact</span>
                </Link>
            </li>
            <li className="list">
                <Link to="/blog">
                    <span className="icon"><i className="fa-solid fa-comments"></i></span>
                    <span className="text">Blog</span>
                </Link>
            </li>
            <li className="list">
                <Link to="/about">
                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                    <span className="text">About</span>
                </Link>
            </li>
            <div className="indicator"></div>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navigation;