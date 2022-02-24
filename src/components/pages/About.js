import React from 'react';
import Layout from './name';
import UncontrolledLottie from '../UncontrolledLottie';
import { Container,Row,Col } from 'react-bootstrap';
export default function About() {
  return (
    <div>
     
    
      <Container>  
      <Row>
            <Col >
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </h1> */}

              <h1 className="heading-name">
              Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>  I'm  </h1>
              <Layout />
             

           
            </Col>

          </Row>
        <Row>
          <Col>  <p id="summaryP" className="summary-dark">
          3 years  of experience  as Full stack developer in analysis, design and development of client/server, web based .NET application in Visual Studio .Net IDE.
          <br/> 
          Recently, earned a certificate in full stack development from the University of California,San Diego(UCSD), with newly developed skills in JavaScript, CSS, React.js,MondoDB,Node.js,Express.js. and 
          responsive web design in an effort to get my career back on track after a break.  
          <br/>Previously designed and developed client/server, web based .NET applications. 
          Extensive knowledge on technologies like MySQL, C#, ADO.NET, ASP.NET, HTML, CSS,JavaScript.
         Passionate about creating software with new dimensions and 
          futuristic features to make a positive contribution to the growth of the company. Eager to learn new products and stay updated with current trends.
       
          
      </p>
      </Col>
      <Col>
      <div className="lotties">
          <UncontrolledLottie />
         
        </div>
        </Col>
        </Row>
        </Container>

    </div>
  );
}
