
import './About.css';
import Education from './Education';
import Skills from './Skills';
import AboutFirst from './AboutFirst';
import { useEffect, useState } from 'react';
import LoadingPage from '../loadingPage/LoadingPage';

function About() {
  const styleTi={
    fontSize: '2rem',
    fontWeight: '700',
    color: '#fff',
    marginTop: '20px',
  }
  const [isLoading, setIsLoading] = useState(Boolean(true));
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[])

  useEffect(()=>{
    document.title='IBIDARNE | About Me'
  },[])
  return (
    <>
    {isLoading ? (
        <LoadingPage />
      ) : (
      <section className="about">
        <div className="container">
          <div className="title_section_about">
            <h1>ABOUT <span>ME</span></h1>
          </div>
          <AboutFirst/>
          <Skills/>
          <div className="row">
            <div className="col-12">
              <h3 style={styleTi} className="text-center text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">EXPERIENCE & EDUCATION</h3>
            </div>
            <Education/>
          </div>
        </div>
      </section>
      )}
    </>
  )
}

export default About;