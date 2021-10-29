import React from 'react';
import { ImLinkedin } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Footer = () => {
    const iconSpacing = {
    padding:'10px' ,
       
      };
    return (
        <div>
            <footer className="w-100 mt-auto bg-secondary p-4">
                <div className="container text-center mb-5">


                    <a href="https://github.com/sangeethaNR" style={iconSpacing}><IoLogoGithub color={"black"} size={25} /></a>
                   
                    <a href="https://linkedin.com/in/sangeetha-nageshwara-rao-164a0120"><ImLinkedin color={"black"} size={25} /></a>



                </div>

            </footer>
        </div>

    );
};

export default Footer;