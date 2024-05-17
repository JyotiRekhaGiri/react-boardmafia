import React from 'react';
import "./App.css";
import { FiSend } from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaTag } from 'react-icons/fa';

const App = () => {
  return (
    <div className='App'>
      <div className="navbar">
        <div className="navbar-left">
          <img src="path-to-your-logo.png" alt="Logo" className="logo" />
        </div>
        <div className="navbar-right">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>

      <div className="nav-center">
        <a className='link' href="#link1">Overview</a>
        <a className='link' href="#link2">Curriculum</a>
        <a className='link' href="#link3">Refund</a>
        <a className='link' href="#link4">Testimonials</a>
      </div>
      <div className='body-one'>

        <div className='top-first'>
          <div className='hat-button'>
            <button>
              <img src={require('./images/Graduation hat.png')} alt='hat' style={{ marginRight: "4px" }} />
              <p>An <b>IIT Delhi</b> Alumni Initiative</p>
            </button>
          </div>

          <div className='text-field'>
            <div className='top-head' >
              <h1>Become an Expert in the field of<span style={{ color: '#992E9D' }}> Data Science with 6 courses</span></h1>
            </div>
            <div>
              <p style={{ margin: '0' }}>A specially crafted Tech Kickstarter, with <b> 5+ extensive online courses.</b></p>
            </div>
            <div className='star-button'>
              <div className='but'>
                <button><img src={require("./images/award_star.png")} alt='1' /> Personal Mentorship</button></div>
              <div className='but'><button><img src={require("./images/award_star.png")} alt='2' />Internship Assistance</button></div>
              <div className='but'><button><img src={require("./images/award_star.png")} alt='3' />Industry Certified Courses</button></div>
            </div>

          </div>
          <div className='butt'>
            <button className='button-ico'>
              Enroll Now <FiSend style={{ color: '#fff', marginLeft: '5px' }} />
            </button>
            <button className='know-more-button'>
              Know More <AiOutlineQuestionCircle style={{ color: '#992E9D', marginLeft: '5px' }} />
            </button>
          </div>
          <div className="grid-container" style={{ marginTop: '10px' }}>
            <div className="grid-item">
              <img src={require('./images/Online learning.png')} alt='' />
              <div className='right-side'>
                <h3>24</h3>
                <p>Courses</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={require('./images/Graduated.png')} alt='' />
              <div className='right-side'>
                <h3>30k+</h3>
                <p>Learners</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={require('./images/Question mark.png')} alt='' />
              <div className='right-side'>
                <h3>100k+</h3>
                <p>Doubts Solved</p>
              </div>
            </div>
            <div className="grid-item">
              <img src={require('./images/Complete.png')} alt='' />
              <div className='right-side'>
                <h3>10k+</h3>
                <p>Student Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className='subjects'>
          <div className='subbut'>
            <button>DATASCIENCE COURSE LEARNING PATH</button>
            <h1><span className='text-linea'>Data Science</span> Course Curriculum</h1>
          </div>

          <div className="responsive-container">
            <div className="text-content">
              <h4>C++</h4>
              <p>Learn C++ for strong programming fundamentals.</p>
            </div>
            <button className="action-button"><img src={require('./images/fi-br-eye.png')} alt='1' />View Curriculum</button>
          </div>
          <div className="responsive-container">
            <div className="text-content">
              <h4>MERN Stack</h4>
              <p>Master the MERN stack for high-demand projects.</p>
            </div>
            <button className="action-button"><img src={require('./images/fi-br-eye.png')} alt='1' />View Curriculum</button>
          </div>
          <div className="responsive-container">
            <div className="text-content">
              <h4>Data Structure & Algorithm</h4>
              <p>Excel in Data Structures and Algorithms for interview success.</p>
            </div>
            <button className="action-button"><img src={require('./images/fi-br-eye.png')} alt='1' />View Curriculum</button>
          </div>
          <div className="responsive-container" style={{ marginBottom: '2rem' }}>
            <div className="text-content">
              <h4>Competitve Programming</h4>
              <p>Excel in Data Structures and Algorithms for interview success.</p>
            </div>
            <button className="action-button"><img src={require('./images/fi-br-eye.png')} alt='1' />View Curriculum</button>
          </div>

        </div>

        <div className="working-process">
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Don't miss out on this <span style={{ color: '#992E9D' }}>limited-time opportunity</span> to learn for <span style={{ color: '#992E9D' }}>Free!</span>
        </h1>
      </div>
      <div className="card3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={require('./images/Frame 1000015525.png')} alt="" />
      </div>
      <div>
        <h2 style={{ color: '#775120', textAlign: 'center' }}>How does it work?</h2>
        <div className="three-cards">
          <div>
          <div>
            <img src={require('./images/steps.png')} alt="Step 1" />
          </div>
          <div className="card">
            <h3>Step 1: Enroll into your favorite course for only ₹1,499</h3>
            <img src={require('./images/image 533.png')} alt="Step 1" />
            <p style={{display: 'flex'}}>Start Learning with Lifetime Course Access.</p>
          </div>
          </div>
          <div>
          <div>
            <img src={require('./images/steps (1).png')} alt="Step 2" />
          </div>
          <div className="card">
            <h3>Step 2: Complete Course & Assignments within 2 Years!</h3>
            <img src={require('./images/Frame 1000015533.png')} alt=''/>
            <p>Finish the course within 2 Years to Qualify for Refund.</p>
          </div>
          </div>
          <div>
          <div>
            <img src={require('./images/steps (2).png')} alt="Step 3" />
          </div>
          <div className="card">
            <h3>Step 3: Receive 100% Refund upon completion</h3>
            <img src={require('./images/Frame 1000015534.png')} alt=''/>
            <p>Upon Course Completion within 2 Years, Get Your ₹1,499 Back.</p>
          </div>
          </div>
        </div>
      </div>
    </div>

        <div className='Logo'>
          <h2>
            Top Companies Hiring <span className='text-linear'>Data Scientist</span>
          </h2>
          <div className="grid-container">
            <div className="grid-item">Logo</div>
            <div className="grid-item">Logo</div>
            <div className="grid-item">Logo</div>
            <div className="grid-item">Logo</div>
            <div className="grid-item">Logo</div>
          </div>

        </div>

        <div className='certifications'>
          <div style={{textAlign: 'center'}}><h1 style={{ color: '#59595b' }}>Unlock <span style={{ color: '#992E9D' }}> Certificates</span> & <span style={{ color: '#992E9D' }}> Internship Opportunities!</span></h1></div>
          <div className="container">
            <div className="box">
              <h4 style={{color: '#992E9D', margin: '0', padding: '0'}}>Get 6 Industry Recognized Certificates!</h4>
              <img src={require('./images/new-certiciate-design.png')} alt="" style={{margin: '0'}} />
              <div className="buttonns" >
                <button className="btnn" style={{alignItems: 'center', display: 'flex'}}><img src={require('./images/award_star1.png')} alt=''/>Official and Verified</button>
                <button className="btnn" style={{alignItems: 'center', display: 'flex'}}><img src={require('./images/award_star1.png')} alt=''/>Enhances Credibility</button>
              </div>
            </div>
            <div className="box">
              <h4 style={{color: '#BB5302'}}>Bag Internship Opportunities!</h4>
              <p style={{color: 'gray'}}>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
              <img src={require('./images/14327653_5474231 1.png')} alt="" />
            </div>
          </div>
        </div>

        <div className='footer-cards'>
          <div className='card1'>
            <div className='footer-left'>
              <h1>Enroll for DataScience Bundle @₹1,499 <p className='cancel'>₹2,600</p></h1>
              <p>Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
              <button>
                <FaTag style={{marginRight: '5px'}}/>
              Enroll Now
              </button>
            </div>
            <div className='footer-right'>
              <div>
              <p>Total number of Courses</p>
              <p><b>6</b></p>
              </div>
              <div>
              <p>Total number of Certificates</p>
              <p><b>6</b></p>
              </div>
              <div>
              <p>Access to Courses</p>
              <p><b>Lifetime</b></p>
              </div>

            </div>
          </div>
          <div className='card2'>
          <div className='footer-left'>
              <h1>Enroll for DataScience Bundle @₹1,499 <p className='cancel'>₹2,600</p></h1>
              <p>Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
              <button>
                <FaTag style={{marginRight: '5px'}}/>
              Enroll Now
              </button>
            </div>
            <div className='footer-right'>
              <div>
              <p>Total number of Courses</p>
              <p><b>6</b></p>
              </div>
              <div>
              <p>Total number of Certificates</p>
              <p><b>6</b></p>
              </div>
              <div>
              <p>Access to Courses</p>
              <p><b>Lifetime</b></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
