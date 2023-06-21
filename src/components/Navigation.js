import React, { useState, useEffect } from 'react';

const Navigation = () => {

  const [section, setSection] = useState('section-1');

  const handleClick = (num) => {
    setTimeout(() => {
    setSection(num);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('section-1');
      const section2 = document.getElementById('section-2');
      const section3 = document.getElementById('section-3');
      const section4 = document.getElementById('section-4');

      const windowHeight = window.innerHeight;
      const offset = windowHeight * 0.5; // Offset to determine the active section

      if (
        section1.getBoundingClientRect().top <= offset &&
        section1.getBoundingClientRect().bottom > offset
      ) {
        setSection('section-1');
      } else if (
        section2.getBoundingClientRect().top <= offset &&
        section2.getBoundingClientRect().bottom > offset
      ) {
        setSection('section-2');
      } else if (
        section3.getBoundingClientRect().top <= offset &&
        section3.getBoundingClientRect().bottom > offset
      ) {
        setSection('section-3');
      } else if (
        section4.getBoundingClientRect().top <= offset &&
        section4.getBoundingClientRect().bottom > offset
      ) {
        setSection('section-4');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='nav-links'>
        <a
          href='#section-2'
          onClick={() => handleClick('section-2')}
          className={section === 'section-2' ? 'nav-link-active' : 'nav-link'}
        >
          About
        </a>
        <a
          href='#section-3'
          onClick={() => handleClick('section-3')}
          className={section === 'section-3' ? 'nav-link-active' : 'nav-link'}
        >
          Projects
        </a>
        <a
          href='#section-4'
          onClick={() => handleClick('section-4')}
          className={section === 'section-4' ? 'nav-link-active' : 'nav-link'}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navigation;
