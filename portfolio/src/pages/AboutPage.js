import React from "react"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import mypic from '../images/mypic.jpeg'

function AboutPage(props){
    return(
        <div >
        <Container fluid ={true}  mt-5 pt-5>
       
<h1 className='abth' >🅐🅑🅞🅤🅣 🅜🅔</h1>
<div class="container mt-5 mb-5">
    <div class="row no-gutters">
        <div class="col-md-4 col-lg-4" >
            <img src={mypic} width ="83%"  ></img>
            </div>
            
        <div class="col-md-8 col-lg-8">
            <div class="d-flex flex-column">
                <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                    <h3 class="display-2">Aryan Gupta</h3><i class="fa fa-facebook"></i><i class="fa fa-google"></i><i class="fa fa-youtube-play"></i><i class="fa fa-dribbble"></i><i class="fa fa-linkedin"></i>
                </div>
                <div class="p-4  bg-black text-white">
                    <h3>Web Developer &amp; Coder</h3>
                </div>
                <div class="d-flex flex-row text-white">
                    <div class="p-4 bg-primary text-center skill-block">
                        <h4>60%</h4>
                        <h6>React</h6>
                    </div>
                    <div class="p-3 bg-success text-center skill-block">
                        <h4>70%</h4>
                        <h6>Javascript</h6>
                    </div>
                    <div class="p-3 bg-warning text-center skill-block">
                        <h4>80%</h4>
                        <h6>HTML & CSS</h6>
                    </div>
                    <div class="p-3 bg-danger text-center skill-block">
                        <h4>75%</h4>
                        <h6>Bootstrap</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>

       {/* <Hero2 title={props.title}/> */}
     
      
       
          <Row>
              <Col >
          <div className="App"><p>Hello, I am Aryan Gupta.
              <br/>
              I am pursuing "Electronics and Communication Enggineering" From "Indian Institute of Information Technology - Surat"
             <br/>
              I love  Coding and keen of learning new things
             <br/>
              Currently I am Learning MERN Stack and doing Competetive Coding.
             <br/>
              My hobbies are Playing Games ,Coding ,Music .
             I am really good at Sports.
              <br/>
              Wanna Crack into MNCs...so wroking on it :)
              <br/>
               I am super active on Social media ,love sharing memes ;)
           
           </p>
           </div> 
           
           </Col>
           </Row>
      
     
      
      
       
           
        </Container>
        </div>
       
       
    );

}
export default AboutPage