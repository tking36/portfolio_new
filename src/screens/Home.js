import React from 'react';
import About from '../components/About';
import Hexagons from '../components/Hexagons';
import Projects  from '../components/Projects';
import Email from '../components/Email';
import Navigation from '../components/Navigation';

const Home = () => {

  return (
    <>

        <section id='section-1' className='section-1' >
            <Hexagons />
            <div className='home-cont'>
                <h1>Hello I am Taylor</h1>
                <h2>Full Stack Web Developer</h2>
                <button className='button-54' role='button'> <a className='home-link' href='#section-2' >Button 54</a>  </button>
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

