import React from 'react';
import { Button } from 'react-bootstrap';
// import MyResume from '../../assets/resume/SangeethaResume.pdf'
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

                                            
export default function Resume() {
return(
    <div>
       
       
        Please click  to download my 
        <BrowserRouter>
        <Link to="../../assets/resume/SangeethaResume.pdf" target="_blank" download>Resume</Link>
        </BrowserRouter>
        <ul>
            Front-end proficiencies
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>

        <ul>
            Back-end proficiencies
            <li>APIs</li>
            <li>MySQL,Sequelize</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB,Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
    </div>
)

}
