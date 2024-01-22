import './LoadingPage.css'
import { useRef } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/Animation/infinity-loop.json'
function LoadingPage() {
  const lottieRef = useRef();
  const styleloading ={
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',
    width: '100%',
    objectFit: 'cover',
    position: 'fixed',
    zIndex: '100'

  }
  return (
    <>
    <div className="loader-container" style={styleloading}>
    <Lottie
      lottieRef={lottieRef}
      className=""
      onLoadedImages={() => {
      lottieRef.current.setSpeed(0.5);
      }}
      animationData={loadingAnimation}
    />
    </div>
    </>
  )
}

export default LoadingPage;
