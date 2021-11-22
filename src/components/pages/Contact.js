import React from 'react';
import { ImLinkedin } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Here we import a helper function that will check if the email is valid

const Contact = () =>{
  const iconSpacing = {
    padding:'20px' ,
       
      };

  return(
    <div className="container text-center mb-5">


    <a href="https://github.com/sangeethaNR" style={iconSpacing}><IoLogoGithub color={"black"} size={55} /></a>
   
    <a href="https://linkedin.com/in/sangeetha-nageshwara-rao-164a0120"><ImLinkedin color={"black"} size={55} /></a>



</div>

  )
}
  



export default Contact


