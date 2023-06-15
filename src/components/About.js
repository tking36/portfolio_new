import React from 'react'

const About = () => {
  return (
    <>
    <h1 className='about'>ABOUT</h1>
            <div className="line"></div>
            <div className='attributes'>
                <div className='att-cont' >
                    <div className='att-pic'></div>
                    <h2>Front End</h2>
                    <h3>blahh blaahh blaaahh</h3>
                </div>

                <div className='att-cont' >
                    <div className='att-pic'></div>
                    <h2>Back End</h2>
                    <h3>blahh blaahh blaaahh</h3>
                </div>

                <div className='att-cont' >
                    <div className='att-pic'></div>
                    <h2>Other</h2>
                    <h3>blahh blaahh blaaahh</h3>
                </div>

                <div className='att-cont' >
                    <div className='att-pic'></div>
                    <h2>Other</h2>
                    <h3>blahh blaahh blaaahh</h3>
                </div>
            </div> 

            <div className='about-info' >
                <div className='about-me' >
                    <img src='https://i.imgur.com/Sypy7sg.jpg' className='about-img'></img>
                    <h2>Who am I?</h2>
                    <p>Whether on a construction site or in the office, I always strive to create new things efficiently and creatively. Mastering the tools of my trade, I seek out the best techniques and apply them to achieve a product worth making.</p>
                </div>

                <div className='skills'>
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
    </>
  )
}

export default About