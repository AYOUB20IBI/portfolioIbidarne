import { useState } from 'react';
import './Skills.css'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
function Skills() {
    const styleTi={
        fontSize: '2rem',
        fontWeight: '700',
        color: '#fff',
        marginTop: '20px',
    }
    const [counteron,setCounterOn]=useState(false)

    return (
        <>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="row">
            <div className="col-12">
                <h3 style={styleTi} className="text-center text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">My Skills</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                
                                {counteron &&
                                    <CountUp start={0} end={90} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-html5"></i> HTML</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={75} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-css3-alt"></i> CSS</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={60} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-bootstrap"></i> BOOTSTRAP</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={70} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-js"></i> JAVASCRIPT</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={74} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span>JQUERY</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={65} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-php"></i> PHP</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={65} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-solid fa-database"></i> MYSQL</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={80} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-laravel"></i> LARAVEL</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={75} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-react"></i> REACT</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={60} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-git-alt"></i> GIT</span>
                        </div>
                    </div>
                    <div id='section_progresse' className=" col-md-3 col-sm-6 ">
                        <div className="progresZ pink">
                            <span className="progress-left">
                                <span className="progress-bar"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar"></span>
                            </span>
                            <div className="progress-value">
                                {counteron &&
                                    <CountUp start={0} end={60} duration={3} delay={0}/>
                                }
                                %
                            </div>
                        </div>
                        <div className='title_progress'>
                        <span><i className="fa-brands fa-github"></i> GITHUB</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ScrollTrigger>
        </>
    )
}

export default Skills;