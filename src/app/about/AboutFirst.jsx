import CountUp from 'react-countup';
import './AboutFirst.css'
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import DownloadCV from './DownloadCV';
import SocialMedia from './SocialMedia';
function AboutFirst() {
    const [counteron,setCounterOn]=useState(false)
  return (
    <>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <section id="bsb-fact-pro-1-observer" style={{marginBottom: '20px'}}>
                <div className="container">
                    <div className="row gy-3 gy-md-5 gy-lg-0 align-items-center">
                        <div className="col-12 col-lg-5">
                            <h3 className=" text-light mb-2 mb-xl-3 text-uppercase" style={{
                                fontWeight: '700',
                                fontSize: '1.5rem',
                                opacity: '0.8',
                            }}>A Little Description About Me</h3>
                            <p className="mb-4 text-light mb-xl-5">
                                I am a Full-Stack developer based in Casablanca, Morocco, 
                                currently working as a Full Stack intern. I am deeply 
                                passionate about enhancing my coding skills and developing 
                                websites. I specialize in building WebApps and websites using 
                                the MERN Stack. I am dedicated to self-improvement and constantly 
                                work on enhancing my skills. Building Full-Stack clones is a 
                                particular area of interest for me.
                            </p>
                            <DownloadCV/>
                            <SocialMedia/>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="row justify-content-xl-end">
                                <div className="col-12 col-xl-11">
                                    <div className="row gy-3 gy-md-4">
                                        <div className="col-12 col-sm-6">
                                            <div className="counter">
                                                <div className="counter-icon">
                                                    <i className="fa fa-globe"></i>
                                                </div>
                                                <span className="counter-value">
                                                    {counteron &&
                                                        <CountUp start={0} end={100} duration={3} delay={0}/>
                                                    }
                                                    +
                                                </span>
                                                <h3>Web Designing</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="counter blue">
                                                <div className="counter-icon">
                                                    <i className="fa fa-rocket"></i>
                                                </div>
                                                <span className="counter-value">
                                                    {counteron &&
                                                        <CountUp start={0} end={99} duration={3} delay={0}/>
                                                    }
                                                    +
                                                </span>
                                                <h3>Web Development</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="counter">
                                                <div className="counter-icon">
                                                    <i className="fa fa-globe"></i>
                                                </div>
                                                <span className="counter-value">
                                                    {counteron &&
                                                        <CountUp start={0} end={99} duration={3} delay={0}/>
                                                    }
                                                    +
                                                </span>
                                                <h3>COMPLETED PROJECTS</h3>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="counter blue">
                                                <div className="counter-icon">
                                                    <i className="fa fa-rocket"></i>
                                                </div>
                                                <span className="counter-value">
                                                    {counteron &&
                                                        <CountUp start={0} end={100} duration={3} delay={0}/>
                                                    }
                                                    +
                                                </span>
                                                <h3>Web Development</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    </>
  )
}

export default AboutFirst;