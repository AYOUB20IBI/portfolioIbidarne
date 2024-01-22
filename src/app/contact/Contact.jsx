import { Typewriter } from 'react-simple-typewriter';
import contactBg from '../../assets/images/contact-bg.jpg'

import './Contact.css'
import { useEffect, useState } from 'react';
import LoadingPage from './../loadingPage/LoadingPage';
function Contact() {
  const [isLoading, setIsLoading] = useState(Boolean(true));
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[])

  useEffect(()=>{
    document.title='IBIDARNE | Contact'
  },[])
  return (
    <>
    {isLoading ? (
        <LoadingPage />
      ) : (
      <section className="ftco-section">
        <div className="container">
          <div className="title_section_contact">
            <h1>Contact <span>Us</span></h1>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text">
                        <p><span>Address:</span> 
                          <span className='type_writer_span'><Typewriter words={['casablanca']} loop={true} typeSpeed={90} deleteSpeed={70}/></span>
                          <span> |</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p><span>Phone:</span> <a href="tel://1234567920">
                          <span className='type_writer_span'><Typewriter words={['+212 612 345 670']} loop={true} typeSpeed={90} deleteSpeed={70}/></span>
                          <span> |</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p><span>Email:</span> <a href="mailto:info@yoursite.com">
                          <span className='type_writer_span'><Typewriter words={['ayoub@gmail.com']} loop={true} typeSpeed={90} deleteSpeed={70}/></span>
                          <span> |</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text">
                        <p><span>Website</span> <a href="#">
                          <span className='type_writer_span'><Typewriter words={['ibi27a.com']} loop={true} typeSpeed={90} deleteSpeed={70}/></span>
                          <span> |</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4" style={{fontSize: '2.1rem',color:' #f4f4f5'}}>Contact Us</h3>
                      <div id="form-message-warning" className="mb-4"></div> 
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlFor="name">Full Name</label>
                              <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                            </div>
                          </div>
                          <div className="col-md-6"> 
                            <div className="form-group">
                              <label className="label" htmlFor="email">Email Address</label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">Subject</label>
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#">Message</label>
                              <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              {/* <input type="submit" value="Send Message" className="btn btn-primary"/>
                              <div className="submitting"></div> */}
                                <button className="button">
                                  <span className="button_lg">
                                    <span className="button_sl"></span>
                                    <span className="button_text">Send Message</span>
                                  </span>
                                </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-5 img" style={{backgroundImage: `url(${contactBg})`}}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  )
}

export default Contact;