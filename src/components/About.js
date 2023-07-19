import React, {useState, useEffect} from 'react'
import pdfFile from '../myresume.pdf'
import boot from '../images/boot.png'
import growth from '../images/growth.png'
import idea from '../images/idea.png'
import vision from '../images/vision.png'

const About = () => {

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

      function handleScrollAnimation() {
        const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-top, .slide-in-bottom');
        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight * 0.8;
      
          if (elementPosition < windowHeight) {
            element.classList.add('active');
          } 
        });
      }
      
      window.addEventListener('scroll', handleScrollAnimation);

      const [isModalOpen, setIsModalOpen] = useState(false); // Add this line

      // ...
    
      const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('modal-open'); // Add the 'modal-open' class to the body element
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('modal-open'); // Remove the 'modal-open' class from the body element
      };
      
      

  return (
    <>
    <h1 className='about slide-in-left'>ABOUT</h1>
    <div className='triangle-down' ></div>
            <div className="line slide-in-right"></div>
            <div className='attributes'>
                <div className='att-cont slide-in-right' >
                    <div className='att-pic'>
                        <img src={boot} className='att-image' ></img>
                    </div>
                    <h2 className='att-title'>Hardworking</h2>
                    <h3 className='att-info'>From start to finish, I give it my all.</h3>
                </div>

                <div className='att-cont slide-in-left' >
                    <div className='att-pic'>
                        <img src={growth} className='att-image'></img>
                    </div>
                    <h2 className='att-title'>Self-motivated</h2>
                    <h3 className='att-info'>I take initiative and proactively seek opportunities for growth and development.</h3>
                </div>

                <div className='att-cont slide-in-right' >
                    <div className='att-pic'>
                        <img src={idea} className='att-image'></img>
                    </div>
                    <h2 className='att-title'>Innovative</h2>
                    <h3 className='att-info'>I continuously seek out creative and fresh ideas to improve processes and outcomes.</h3>
                </div>

                <div className='att-cont slide-in-left' >
                    <div className='att-pic'>
                        <img src={vision} className='att-image'></img>
                    </div>
                    <h2 className='att-title'>Dedicated</h2>
                    <h3 className='att-info'>I am fully committed to the task at hand and strive to achieve the best results.</h3>
                </div>
            </div> 

            <div className='about-info' >
                <div className='about-me'>
                    {isMobile ?
                    <>
                    <div className='about-info-sect slide-in-left' >
                        <img src='https://i.imgur.com/Sypy7sg.jpg' className='about-img'></img>
                        <h2>Who am I?</h2>
                    </div>
                        <p className='about-disc'>Whether on a construction site or in the office, I always strive to create new things efficiently and creatively. Mastering the tools of my trade, I seek out the best techniques and apply them to achieve a product worth making.</p>
                        <div className='about-links' >
                            <button className='button-54 resume-button' > <a className='resume-link' title='Resume' href={pdfFile} target='blank' >Resume</a> </button>
                            <button className='button-54 more-about' onClick={openModal}>More About Me</button>
                        </div>
                    </>
                    :
                    <>
                        <img src='https://i.imgur.com/Sypy7sg.jpg' className='about-img slide-in-left'></img>
                        <h2 className='slide-in-left' >Who am I?</h2>
                        <p className='about-disc slide-in-left'>Whether on a construction site or in the office, I always strive to create new things efficiently and creatively. Mastering the tools of my trade, I seek out the best techniques and apply them to achieve a product worth making.</p>
                        <div className='about-links' >
                            <button className='button-54 more-about' onClick={openModal}>More About Me</button>
                            <button className='button-54 resume-button' > <a className='resume-link' title='Resume' href={pdfFile} target='blank' >Resume</a> </button>
                        </div>
                    </>
                    }
                </div>

                <div className='skills slide-in-bottom'>
                    <h2 className='skills-title' >Skills</h2>
                    <div className='skill-cont'>
                    <div className="skill-group">
                    <div className="skill-title">Languages</div>
                        <div className="skill-list">
                            <p className="skill">HTML</p>
                            <p className="skill">CSS</p>
                            <p className="skill">JavaScript</p>
                            <p className="skill">Typescript</p>
                            <p className="skill">Python</p>
                        </div>
                    </div>

                    <div className="skill-group">
                    <div className="skill-title">Libraries</div>
                        <div className="skill-list">
                            <p className="skill">jQuery</p>
                            <p className="skill">EJS</p>
                        </div>
                    </div>

                    <div className="skill-group">
                    <div className="skill-title">Frameworks</div>
                        <div className="skill-list">
                            <p className="skill">BootStrap</p>
                            <p className="skill">React</p>
                            <p className="skill">Django</p>
                            <p className="skill">Express</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {isModalOpen && ( // Render the modal only if isModalOpen is true
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2>More About Me</h2>
              <span className='close' onClick={closeModal}>&times;</span>
            </div>
            <hr></hr>
            <div className='modal-body'>I am a Carpenter based in Woodstock, Georgia. I am interested in becoming a Software Engineer.Carpentry has always been a great passion of mine. I love brainstorming ideas, creating new designs, and executing projects with different techniques and tools.
            Throughout my time researching Software Engineering, I began to see the similarities between these two fields. Although Carpentry deals with physical projects and Software Engineering deals with digital projects, in both fields, I have the opportunity to create something new that has the potential for functionality and to be aesthetically pleasing by using many different techniques and tools.</div>
          </div>
        </div>
      )}



        
    </>
  )
}

export default About