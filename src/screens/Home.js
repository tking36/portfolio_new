import React, {useEffect, useState} from 'react';
import About from '../components/About';
import Hexagons from '../components/Hexagons';
import Projects  from '../components/Projects';
import Email from '../components/Email';
import Navigation from '../components/Navigation';

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 580);
        };
    
        handleResize(); // Call the handler initially
    
        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <>

        <section id='section-1' className='section-1' >
            <Hexagons />
            <div className='home-cont'>
                {isMobile ?
                <>
                <h1 className='taylor' >Hello I am Taylor</h1>
                <h2 className='full-stack' >Full Stack</h2>
                <h2 className='web-dev' >Web Developer</h2>
                </>
                :
                <>
                <h1>Hello I am Taylor</h1>
                <h2>Full Stack Web Developer</h2>
                </>
                }
                <button className='button-54' role='button'> <a className='home-link' href='#section-2' >Learn More</a>  </button>
            </div>
        </section>
        
        <div className='info-container' >
        <Navigation />
        <section id='section-2' className='section-2' >
            <About />
        </section>
        <section id='section-3' className='section-3' >
            <Projects />
        </section>
        <section id='section-4' className='section-4' >
            <Email />
        </section>
        </div>
    </>
  );
};

export default Home;

