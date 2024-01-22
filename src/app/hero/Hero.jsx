import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';
import './Button.css';
import Lottie from 'lottie-react';
import devAnimation from '../dev.json'
import LoadingPage from '../loadingPage/LoadingPage';
import { Link } from 'react-router-dom';

function Hero() {
  const lottieRef = useRef();
  const [isLoading, setIsLoading] = useState(Boolean(true));
  useEffect(()=>{
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  },[])
  return (
    <>
    {isLoading ? (
      <LoadingPage />
    ) : (
    <>
    <div id="hero" className="d-flex align-items-center justify-content-center">
      <Row className="m-0">
        <Col md={7}>
          <div className="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>IBIDARNE AYOUB</h1>
            <p>
              {`I'm `} <Typewriter words={['Full Stack Developer', 'Front End Developer', 'Back End Developer']} loop={true} />
              <span> |</span>
            </p>
            <p>
              Energetic full-stack developer skilled at writing well-designed code,
              creating responsive websites with a mobile-first approach.
            </p>

            <div>
              <button className="button">
                <span className="button_lg">
                  <span className="button_sl"></span>
                  <Link to='/about' style={{color:'#fff'}}>
                    <span className="button_text"><i className="fa-solid fa-hand-point-right"></i> MORE ABOUT ME</span>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </Col>
        <Col md={5}>
          {/* <div className={`${stylecard.card_Image}`}></div> */}
          <div>
            <Lottie
              lottieRef={lottieRef}
              className=" animation-image"
              onLoadedImages={() => {
                lottieRef.current.setSpeed(0.5);
              }}
              animationData={devAnimation}
            />
          </div>
        </Col>
      </Row>
    </div>
    </>
    )}
    </>
  );
}

export default Hero;
