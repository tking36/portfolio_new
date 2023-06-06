import React from 'react';
import About from '../components/About';
import Hexagons from '../components/Hexagons';
import Projects  from '../components/Projects';
import Email from '../components/Email';
import Navigation from '../components/Navigation';

const Home = () => {

  return (
    <>

        <section className='section-1' >
            <Hexagons />
            <div className='home-cont'>
                <h1>Hello I am Taylor</h1>
                <h2>Full Stack Web Developer</h2>
                <button className='button-54' role='button'>Button 54</button>
            </div>
        </section>
        
        <section className='section-2' >
        <Navigation />
            <About />
        </section>
        <section className='section-3' >
            <Projects />
        </section>
        <section className='section-4' >
            <Email />
        </section>
    </>
  );
};

export default Home;



{/* <section className='section-1' >
    <h1 className='title' >Home</h1>
  </section>

  <section className='section-2' >
    <h1 className='title' >Section 2</h1>
  </section>

  <section >
    <h1 className='title' >Section 3</h1>
  </section> */}