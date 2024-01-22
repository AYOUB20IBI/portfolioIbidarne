import { Link } from "react-router-dom"
import styleSocial from './SocialMedia.module.css'
function SocialMedia() {
  return (
    <>
    <div className={`${styleSocial.divBTN}`}>
        <Link  className={`m-1 ${styleSocial.socialBTN}`} ><i className="fa-brands fa-linkedin-in"></i></Link>
        <Link  className={`m-1 ${styleSocial.socialBTN}`}><i className="fa-brands fa-github"></i></Link>
        <Link  className={`m-1 ${styleSocial.socialBTN}`}><i className="fa-brands fa-behance"></i></Link>
        <Link  className={`m-1 ${styleSocial.socialBTN}`}><i className="fa-brands fa-telegram"></i></Link>
    </div>
    </>
  )
}

export default SocialMedia