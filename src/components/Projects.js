import React, { useState } from 'react';

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
      info: 'This is a React app that uses Typscript and TSX. Choose your own adventure game. Travel space and defeat enemies to gather recourses for Earth.',
      demo: 'https://space-invaders.herokuapp.com/',
      front: ' https://github.com/tking36/adventure_front_end'
    },
    {
      imgSrc: 'https://i.imgur.com/JJttsuI.png',
      title: 'ShopKing',
      details: 'React JS / Django',
      info: 'This is an Ecommerce React app made with Django, Postgres, AWS, Redux, and JWT.',
      demo: 'https://king-shop.herokuapp.com/',
      front: ' https://github.com/tking36/ecommerce',
    },
  ];

  
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  console.log(selectedProject);

  return (
    <>
      <h1 className='projects'>PROJECTS</h1>
      <div className='project-cont'>
        {projectData.map((project, index) => (
          <div className='project' key={index}>
            <img src={project.imgSrc} className='project-img' alt={`Project ${index + 1}`} />
            <div className='project-info' >
                <h2 className='project-title' >{project.title}</h2>
                <h3 className='project-lang'>{project.details}</h3>
            </div>
            <button className='project-btn' onClick={() => openModal(project)}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <img className='modal-img' src={selectedProject.imgSrc} alt={selectedProject.title} />
            <h2 className='modal-title' >{selectedProject.title}</h2>
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
