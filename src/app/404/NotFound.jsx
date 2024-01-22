import { Link } from 'react-router-dom';
import styleerror from './NotFound.module.css'
import { useEffect } from 'react';
function NotFound() {
  useEffect(()=>{
    document.title='IBIDARNE | 404'
  },[])
  return (
    <>
    <div className={`${styleerror.body_error}`}>
    <div className={`${styleerror.noise}`}></div>
    <div className={`${styleerror.overlay}`}></div>
    <div className={`${styleerror.terminal}`}>
      <h1 style={{color:'#fff'}}>Error <span className={`${styleerror.errorcode}`}>404</span></h1>
      <p className={`${styleerror.output}`}>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
      <p className={`${styleerror.output}`}>Please try to <Link className={`${styleerror.link_error}`} to='/'>go back</Link> or <Link className={`${styleerror.link_error}`} to='/'>return to the homepage</Link>.</p>
      <p className={`${styleerror.output}`}>Good luck.</p>
    </div>
    </div>
    </>
  )
}

export default NotFound;