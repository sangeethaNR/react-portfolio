import { useState } from 'react';
import React from 'react';
import daycare_img from "../../assets/images/dayCare.png"
import petfinder_img from "../../assets/images/petFinder.png"
import weatherDashboard_img from "../../assets/images/weatherDashboard.png"
import local4u2u_img from "../../assets/images/local4u2u.png"
import techBlog_img from "../../assets/images/techBlog.png"
import quiz_img from "../../assets/images/Screenshot.png"
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';




export default function Project() {

  // useState for petFinder to open modal 
  const [showPetFinder, setShowPetFinder] = useState(false);

  const handleClose_PetFinder = () => setShowPetFinder(false);
  const handleShow_PetFinder = () => setShowPetFinder(true);
  const imageStyle = {

    cursor: 'pointer',
     width: '100%',
    height: '280px',
    marginTop: '20px',
    marginLeft:'-100px',
    paddingLeft:'100px'
  };
const projectBtn ={
  marginLeft :'10px'
}

const [showDayCare, setshowDayCare] = useState(false);

const handleClose_DayCare = () => setshowDayCare(false);
const handleShow_DayCare= () => setshowDayCare(true);

  const [showWeatherDashboard, setShowWeatherDashboard] = useState(false);

  const handleClose_WeatherDashboard = () => setShowWeatherDashboard(false);
  const handleShow_WeatherDashboard = () => setShowWeatherDashboard(true);


  const [showQuiz, setShowQuiz] = useState(false);

  const handleClose_Quiz = () => setShowQuiz(false);
  const handleShow_Quiz = () => setShowQuiz(true);


  const [showLocal, setShowLocal] = useState(false);

  const handleClose_Local = () => setShowLocal(false);
  const handleShow_Local = () => setShowLocal(true);

  const [showTechBlog, setshowTechBlog] = useState(false);

  const handleClose_techblog = () => setshowTechBlog(false);
  const handleShow_techBlog = () => setshowTechBlog(true);


  return (
    <div>

      <Container>

        {/* <h2 class="card_header"> Work </h2> */}
      <Row>
        <Col>
        
        <img id="daycare_id" onClick={handleShow_DayCare} style={imageStyle} class="project_img" src={daycare_img}
              alt="daycare_landingPage" />
        </Col>
        <Modal show={showDayCare} onHide={handleClose_DayCare}>
            <Modal.Header closeButton>
              <Modal.Title>Blossom Babies</Modal.Title>
            </Modal.Header>
            <Modal.Body>
<div>
  <div>
  Developed single-page application to maintain information and logs about students using React.  </div>
 <b> Technology Stack </b>: React,Node.js,Express.js,Mongoose ODM,GraphQL,Heroku.<br/>
 For Demo,<br/>
  Use <br/>
 <b> Admin Portal (credentials) </b><br/>
Email :    admin@dev.com <br/>
Password: password01 <br/>
<b>Teacher Portal (credentials) </b><br/>
Email: gio@email.com <br/>
Password : password123
</div>
<br/>
<center>
              <Button variant="secondary" onClick={event => window.location.href = 'https://github.com/sangeethaNR/DevDayCare'} >
                Github
              </Button>
              <Button variant="secondary" onClick={event => window.location.href = 'https://devdaycare.herokuapp.com/'} style={projectBtn}>
                Project
              </Button>
              </center>
            </Modal.Body>


          </Modal>
          <Col>
            <img id="weatherDashboard_id" onClick={handleShow_WeatherDashboard} style={imageStyle} class="project_img" src={weatherDashboard_img}
              alt="weatherDashboard_landingPage" />  </Col>
          <Modal show={showWeatherDashboard} onHide={handleClose_WeatherDashboard}>
            <Modal.Header closeButton>
              <Modal.Title>Weather Dashboard</Modal.Title>
            </Modal.Header>
            <Modal.Body>
<div>
  <div>
Developed a weather dashboard app to retrieve weather data for cities.
</div>
<b>Technology Stack :</b> HTML,CSS,Javascript,JQuery,Bootstrap
</div>
<br/>
<center>
              <Button variant="secondary" onClick={event => window.location.href = 'https://github.com/sangeethaNR/weatherDashboard'} >
                Github
              </Button>
              <Button variant="secondary" onClick={event => window.location.href = 'https://sangeethanr.github.io/weatherDashboard/'} style={projectBtn}>
                Project
              </Button>
              </center>
            </Modal.Body>


          </Modal>

      </Row>

        <Row>
          <Col>

            <img id="petfinder_id" onClick={handleShow_PetFinder} style={imageStyle} class="project_img" src={petfinder_img}
              alt="petfinder_landingPage" />
            {/* </Button>  */}
          </Col>

          <Modal show={showPetFinder} onHide={handleClose_PetFinder}>
            <Modal.Header closeButton>
              <Modal.Title>Pet Finder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
<div>
  <div>
  Developed this app to make pet finding simple and easy.
  </div>
 <b> Technology Stack </b>: HTML,CSS,JQuery
</div>
<br/>
<center>
              <Button variant="secondary" onClick={event => window.location.href = 'https://github.com/sangeethaNR/petfinder'} >
                Github
              </Button>
              <Button variant="secondary" onClick={event => window.location.href = 'https://sangeethanr.github.io/petfinder/'} style={projectBtn}>
                Project
              </Button>
              </center>
            </Modal.Body>


          </Modal>

          <Col>
            <img class="project_img" style={imageStyle} src={local4u2u_img} alt="local4u2u_landingPage" id="local4u2u_id" onClick={handleShow_Local}
            /> </Col>
          <Modal show={showLocal} onHide={handleClose_Local}>
            <Modal.Header closeButton>
              <Modal.Title>Local4U2U</Modal.Title>
            </Modal.Header>
            <Modal.Body>
<div>
  <div>
  Developed an app which lets local farmers sell their goods online thereby expanding their customer base.

  </div>
  <b>Technology Stack : </b>HTML,JavaScript,CSS,Node.js,Express.js,JQuery,Sequelize,
  SweetAlert,Bcrypt,MYSQL2,Heroku
</div>
           <center>   <Button variant="secondary" onClick={event => window.location.href = 'https://github.com/sangeethaNR/Local4U2U'} >
                Github
              </Button>
               
              <Button variant="secondary" onClick={event => window.location.href = 'https://obscure-reef-30952.herokuapp.com/'} style={projectBtn}>
                Project
              </Button>
              </center>
            </Modal.Body>


          </Modal>
        </Row>
        <Row>
          <Col>

            <img id="quiz_id" onClick={handleShow_Quiz} class="project_img" style={imageStyle} src={quiz_img} alt="quiz_landingPage"
            /> </Col>
          <Modal show={showQuiz} onHide={handleClose_Quiz}>
            <Modal.Header closeButton>
              <Modal.Title>Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          <div> <div> Developed a timed coding quiz with multiple-choice questions. </div>
<b>Technology Stack : </b>HTML,JavaScript,CSS
</div>
<br/>
          <center>    <Button variant="secondary" onClick={event => window.location.href = 'https://github.com/sangeethaNR/quiz'} >
                Github
              </Button>
              <Button variant="secondary" onClick={event => window.location.href = 'https://sangeethanr.github.io/Quiz/'} style={projectBtn}>
                Project
              </Button>
              </center>
            </Modal.Body>


          </Modal>

        
      
          <Col>
            <img class="project_img" style={{
  cursor: 'pointer',
  width: '86%',
  height: '280px',
  marginTop: '10px',
marginLeft:'-10px'}}
     src={techBlog_img} alt="techblog_landingPage" id="techBlog_id" onClick={handleShow_techBlog}
            /> </Col>
          <Modal show={showTechBlog} onHide={handleClose_techblog}>
            <Modal.Header closeButton>
              <Modal.Title>Tech Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
<div>
  <div>
  This is a blogging site where developers publish blog ,comment on other bloggers
  </div>
  <b>Technology Stack :</b>JavaScript,Node.js,Express.js,Sequelize,MYSQL
      JAWSDB,Heroku
</div>
<center>
              <Button variant="secondary" onClick={event => window.location.href = 'https://github.com/sangeethaNR/Tech-Blog'} >
                Github
              </Button>
              <Button variant="secondary" onClick={event => window.location.href = 'https://secure-scrubland-44183.herokuapp.com/'} style={projectBtn}>
                Project
              </Button>
              </center>
            </Modal.Body>


          </Modal>
        </Row>
      </Container>
    </div>
  );
}

