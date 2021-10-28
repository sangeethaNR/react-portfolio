import { useState } from 'react';
import React from 'react';
import petfinder_img from "../../assets/images/petFinder.png"
import weatherDashboard_img from "../../assets/images/weatherDashboard.png"
import local4u2u_img from "../../assets/images/local4u2u.png"
import quiz_img from "../../assets/images/Screenshot.png"
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import Dialog from '@material-ui/core/Dialog';
// import Button from '@material-ui/core/Button';
// import UncontrolledLottie from '../UncontrolledLottie';

export default function Project() {
  
  // useState for petFinder to open modal 
    const [showPetFinder, setShowPetFinder] = useState(false);

    const handleClose_PetFinder = () => setShowPetFinder(false);
    const handleShow_PetFinder = () => setShowPetFinder(true);
    const petFinderStyle ={
        cursor: 'pointer',
        width: '40%',
        height: '280px',
    };

    const [showWeatherDashboard, setShowWeatherDashboard] = useState(false);

    const handleClose_WeatherDashboard = () => setShowWeatherDashboard(false);
    const handleShow_WeatherDashboard = () => setShowWeatherDashboard(true);
  

    const [showQuiz, setShowQuiz] = useState(false);

    const handleClose_Quiz = () => setShowQuiz(false);
    const handleShow_Quiz = () => setShowQuiz(true);
   
    
    const [showLocal, setShowLocal] = useState(false);

    const handleClose_Local = () => setShowLocal(false);
    const handleShow_Local= () => setShowLocal(true);
  return (
     
  <section id="work" class="row">
<div class="card_column">
    <figure class="code_card">
        <h2 class="card_header"> Work </h2>
        <div class="vertical_line2"></div>
        <div class="card_body row_div">
            <div class="column_class">

              <Button variant="primary"  id="petfinder_id" onClick={handleShow_PetFinder}><img style ={petFinderStyle} class="project_img" src={petfinder_img}
                        alt="petfinder_landingPage" />   </Button>

<Modal show={showPetFinder} onHide={handleClose_PetFinder}>
        <Modal.Header closeButton>
          <Modal.Title>Pet Finder</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
      
          <Button variant="secondary" onClick={event =>  window.location.href='https://github.com/sangeethaNR/petfinder'} >
            Github
          </Button>
          <Button variant="secondary"  onClick={event =>  window.location.href='https://sangeethanr.github.io/petfinder/'}>
            Project
          </Button>
        </Modal.Body>
      
       
      </Modal>
            </div>
            <div class="column_class">
         <Button variant="primary"  id="weatherDashboard_id" onClick={handleShow_WeatherDashboard}>
                    <img style ={petFinderStyle} class="project_img" src={weatherDashboard_img}
                        alt="weatherDashboard_landingPage" /> </Button>
                        <Modal show={showWeatherDashboard} onHide={handleClose_WeatherDashboard}>
        <Modal.Header closeButton>
          <Modal.Title>Weather Dashboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
      
          <Button variant="secondary" onClick={event =>  window.location.href='https://github.com/sangeethaNR/weatherDashboard'} >
            Github
          </Button>
          <Button variant="secondary"  onClick={event =>  window.location.href='https://sangeethanr.github.io/weatherDashboard/'}>
            Project
          </Button>
        </Modal.Body>
      
       
      </Modal>
            </div>
            <div class="column_class">
             <Button variant="primary" id="quiz_id" onClick={handleShow_Quiz}>
                    <img class="project_img" style ={petFinderStyle} src={quiz_img} alt="quiz_landingPage"
                       /></Button>
                            <Modal show={showQuiz} onHide={handleClose_Quiz}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
      
          <Button variant="secondary" onClick={event =>  window.location.href='https://github.com/sangeethaNR/quiz'} >
            Github
          </Button>
          <Button variant="secondary"  onClick={event =>  window.location.href='https://sangeethanr.github.io/Quiz/'}>
            Project
          </Button>
        </Modal.Body>
      
       
      </Modal>
            </div>
            <div class="column_class">
               <Button variant="primary" id="local4u2u_id" onClick={handleShow_Local}>
                    <img class="project_img"style ={petFinderStyle} src={local4u2u_img} alt="local4u2u_landingPage"
                       /></Button>
                       <Modal show={showLocal} onHide={handleClose_Local}>
   <Modal.Header closeButton>
     <Modal.Title>Quiz</Modal.Title>
   </Modal.Header>
   <Modal.Body>  
 
     <Button variant="secondary" onClick={event =>  window.location.href='https://github.com/sangeethaNR/Local4U2U'} >
       Github
     </Button>
     <Button variant="secondary"  onClick={event =>  window.location.href='https://obscure-reef-30952.herokuapp.com/'}>
       Project
     </Button>
   </Modal.Body>
 
  
 </Modal>
            </div>

        </div>
    </figure>
    </div>
    </section>

);
}
