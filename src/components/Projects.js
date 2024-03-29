import React, { useState, useEffect } from 'react';

const Projects = () => {
  const projectData = [
    {
      imgSrc: 'https://i.imgur.com/563bF15.png',
      title: 'Music Library',
      details: 'React JS / Express',
      info: 'This is a React app that uses JavaScript and JSX for storing and displaying your favorite music, including properties such as song name, artist, album, genre and year.',
      demo: 'https://my-music-library321.herokuapp.com/',
      front: 'https://github.com/tking36/front-end',
      back: 'https://github.com/tking36/back-end',
    },
    {
      imgSrc: 'https://i.imgur.com/93Tav5R.png',
      title: 'Podcast Library',
      details: 'Express JS / MongoDB',
      info: 'This is an app made with Express and MongoDB for storing and displaying your favorite podcasts.',
      front: ' https://github.com/tking36/podcast',
    },
    {
      imgSrc: 'https://i.imgur.com/LAoUMDs.png',
      title: 'Space Invaders',
      details: 'React Typescript',
      info: 'This is a React app that uses Typescript and TSX. Choose your own adventure game. Travel space and defeat enemies to gather recourses for Earth.',
      demo: 'https://space-invaders.herokuapp.com/',
      front: ' https://github.com/tking36/adventure_front_end'
    },
    {
      imgSrc: 'https://i.imgur.com/JJttsuI.png',
      title: 'ShopKing',
      details: 'React JS / Django',
      info: 'This is an Ecommerce React app made with Django, Postgres, AWS, Redux, and JWT. Demo Currently Unavailable due to AWS costs.',
      // demo: 'https://king-shop.herokuapp.com/',
      front: ' https://github.com/tking36/ecommerce',
    },
  ];

  
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [twoRows, setTwoRows] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add('modal-open'); // Add the 'modal-open' class to the body element
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('modal-open'); // Remove the 'modal-open' class from the body element
  };

  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-top, .slide-in-bottom');
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight * 0.7;
  
      if (elementPosition < windowHeight) {
        element.classList.add('active');
      } 
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);



  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 500);
      };
  
      handleResize(); // Call the handler initially
  
      // Add event listener to handle window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
        const handleRow = () => {
            setTwoRows(window.innerWidth <= 1694 && window.innerWidth >= 1274);
        };
        handleRow();
        window.addEventListener('resize', handleRow);
        return () => {
            window.removeEventListener('resize', handleRow);
        }
    }, []);

  return (
    <>
      
      <h1 className='projects slide-in-right'>PROJECTS</h1>
      <div className="project-line slide-in-left"></div>
      <div className='project-cont slide-in-left'>
        {projectData.map((project, index) => (
          <div className={twoRows ? 'project twoRow' : 'project'} 
          onClick={isMobile ? () => openModal(project) : null} key={index}> 
            <img src={project.imgSrc} className='project-img' alt={`Project ${index + 1}`} />
            {!isMobile ?
            <>
            <div className='project-info' >
                <h2 className='project-title' >{project.title}</h2>
                <h3 className='project-lang'>{project.details}</h3>
            </div>
            <button className='project-btn' onClick={() => openModal(project)}>
              Learn More
            </button>
            </>
          : null }
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <img className='modal-img' src={selectedProject.imgSrc} alt={selectedProject.title} />
            <h2 className='modal-title' >{selectedProject.title}</h2>
            {isMobile ? <h3 className='project-lang'>{selectedProject.details}</h3> : null}
            <hr />
            <p>{selectedProject.info}</p>
            <div className='modal-links'>
                {selectedProject.demo && (
                    <a href={selectedProject.demo} target='_blank' rel='noreferrer'>
                    <button className='modal-btn'>Demo</button>
                    </a>
                )}
                {selectedProject.front && (
                    <a href={selectedProject.front} target='_blank' rel='noreferrer'>
                    <button className='modal-btn'>Front End</button>
                    </a>
                )}
                {selectedProject.back && (
                    <a href={selectedProject.back} target='_blank' rel='noreferrer'>
                    <button className='modal-btn'>Back End</button>
                    </a>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
