
import React from 'react';
import petfinder_img from "../../assets/images/petFinder.png"
import weatherDashboard_img from "../../assets/images/weatherDashboard.png"
import local4u2u_img from "../../assets/images/local4u2u.png"
import quiz_img from "../../assets/images/Screenshot.png"
// import UncontrolledLottie from '../UncontrolledLottie';

export default function Project() {
    const petFinderStyle ={
        cursor: 'pointer',
        width: '40%',
        height: '280px',
    };
  return (
     
  <section id="work" class="row">
<div class="card_column">
    <figure class="code_card">
        <h2 class="card_header"> Work </h2>
        <div class="vertical_line2"></div>
        <div class="card_body row_div">
            <div class="column_class">

                <a href="#" id="petfinder_id"><img style ={petFinderStyle} class="project_img" src={petfinder_img}
                        alt="petfinder_landingPage" /></a>

            </div>
            <div class="column_class">
                <a href="#" id="weatherDashboard_id">
                    <img style ={petFinderStyle} class="project_img" src={weatherDashboard_img}
                        alt="weatherDashboard_landingPage" /></a>
            </div>
            <div class="column_class">
                <a href="#" id="quiz_id">
                    <img class="project_img" style ={petFinderStyle} src={quiz_img} alt="quiz_landingPage"
                       /></a>
            </div>
            <div class="column_class">
                <a href="#" id="local4u2u_id">
                    <img class="project_img"style ={petFinderStyle} src={local4u2u_img} alt="local4u2u_landingPage"
                       /></a>
            </div>

        </div>
    </figure>
    </div>
    </section>

);
}
