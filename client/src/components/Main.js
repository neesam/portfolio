import React from 'react';
import {Tabs, Tab, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Main = (props) => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(30, 50px)', gridAutoRows: 'minmax(100px, auto)',
        background: 'rgb(255,251,162)',
        background: 'linear-gradient(111deg, rgba(255,251,162,1) 0%, rgba(246,173,255,1) 100%)', paddingBottom: '3em'}}>
          <div style={{gridColumn: '3', gridRowStart: '3', gridRowEnd: '4', display: 'flex', gap: '5rem'}}>
            <div style={{gridColumn: '3', gridRowStart: '3', gridRowEnd: '4', width: '50vw'}}>
                <h1 style={{color: 'white', textShadow: '5px 5px 5px black', fontFamily: 'Patua One', fontSize: '90px', lineHeight: '2rem', width: '50rem'}}>Hi, I'm Andy.</h1>
                <p style={{fontFamily: 'Patua One', fontSize: '25px', textAlign: 'left', color: 'navy', textShadow: '1px 1px 1px gray', paddingTop: '3rem', width: '35rem'}}>I'm interested in crafting scalable, user-driven applications using Python and React.</p>
            </div>
            <img style={{borderRadius: '50px', height: '50vh',marginBottom: '-10rem', position: 'relative', bottom: '5rem', boxShadow: '40px 20px 40px beige'}} src="https://avatars.githubusercontent.com/u/78002840?v=4"></img>
          </div>

            <div style={{gridRow: '5', gridColumn: '3', fontFamily: 'Patua One'}}>
            



        <div>
            <h3 style={{gridRow: '4', gridColumn: '2', fontSize: '45px', color: 'white', textShadow: '2px 2px 2px black', marginBottom: '2rem'}}>Projects</h3>  
            <div>
                <div style={{background:'rgb(238,174,202)', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)', display: 'flex', gap: '6rem', width: 'fit-content', padding: '2rem', borderRadius: '1rem', boxShadow: '2px 2px 4px 2px gray'}}>
                    <div>
                        <h4 style={{width: '20rem', position: 'relative', fontSize: '30px', color: 'white', textShadow: '1px 1px 1px gray'}}><a href="www.broken-record.net" style={{color: 'white', textDecoration: 'none'}}>broken record</a></h4>
                        <p style={{width: '25rem', color: '#FFFCCC', textShadow: '1px 1px 1px gray', marginTop:'3rem'}}>A website where users can rate music from a database of over 20,000 albums. Functionality includes rating, messaging other users, and setting your status.
                        </p>
                        <p style={{width: '25rem', color: '#FFFCCC', textShadow: '1px 1px 1px gray', marginTop:'2rem'}}>
                          Functionalities used: <span style={{textShadow: '1px 1px 1px 1px black'}}>Flask, JavaScript/jQuery, HTML/CSS</span>
                        </p>
                    </div>
                    <img style={{height: '200px', borderRadius: '10px'}} src="https://www.reviewgeek.com/p/uploads/2021/03/9e0707c1.png?width=1200"></img>
                </div>
            </div>
        
        </div>
        <div style={{display: 'flex', gap: '10rem'}}>
          <div>
        <h3 style={{gridRow: '4', gridColumn: '2', fontSize: '45px', color: 'white', textShadow: '2px 2px 2px black', lineHeight: '.5rem', marginTop: '5rem'}}>Skills</h3>
            <div style={{marginTop: '4rem', background: 'white', width: '30vw', padding: '3rem', borderRadius: '3rem', boxShadow: '5px 5px 5px 5px gray'}}>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>Python</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app | um | um | um</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>React</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>JavaScript/HTML/CSS</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>MySQL</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>Flask</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>AWS</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>Mongoose/MongoDB</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>Socket.io</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h4>Java</h4>
                {/* <ul>
                  <li style={{width: '80vw'}}>Created a flask app</li>
                </ul> */}
              </div>
              </div>
            </div>

            <div>
              <h3 style={{fontSize: '45px', color: 'white', textShadow: '2px 2px 2px black', marginTop: '3rem', width: '12rem'}}>
                About me
              </h3>
              <div style={{marginTop: '3rem', background: 'white', width: '45vw', padding: '3rem', borderRadius: '3rem', boxShadow: '5px 5px 5px 5px gray'}}>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                <h3>
                  Experience
                </h3>
                <p style={{marginTop: '2rem'}}>
                  I've been coding for about three years as of this point. I see myself as a creative person who is interested in learning; coding scratches that itch for me.
                </p>
                <p>
                  Originally from the DC area, I graduated from Virginia Commonwealth University in the Spring of 2020. I'm a recent alumnus of the Coding Dojo bootcamp, earning my belts an orange and red belt in Python and MERN, respectively.
                </p>
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
              <h3>
                  Outside of coding
                </h3>
                <p style={{marginTop: '2rem'}}>
                  The past two years I've spent helping local businesses increase their visibility online through search engine optimization. I spend my days revising content and implementing strategies for a wide range of businesses - plumbers, therapists - you name it.
                </p>
                <p>
                  In my free time, I get a ton out of making and listening to music, reading, and enjoying my new environment of sunny San Diego.
                </p>
              </div>
              <div style={{margin:'1rem 1rem 2rem 0rem'}}>
                
              </div>
             </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Main;