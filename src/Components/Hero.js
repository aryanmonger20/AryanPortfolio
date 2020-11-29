import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../App.css';
import abt from '../images/abt.png'
import codr from '../images/codr.jpg'
import prg from '../images/prg.jpg'
import Fade from 'react-reveal/Fade';



function Hero(props){
    return(
        <Jumbotron fluid className="jumbotron fluid " >
             <Container fluid ={true}>
            
                 <Row className="justify-content-centre py-4  mb-3 mt-3 pl-3 " >
                    
                     <div className='col-6 text-centre'>
                     <Fade left big>
                     {props.text && <h3 className ="display-3 font-weight-normal pl-4 mt-1 text-c text-muted">{props.text}</h3>}
                     </Fade>
                     <br/>

                     <br/>
                     
                     <Fade left big>
                     {props.title && <h1 className ="display-3 font-weight-bold ml-1 mt-3 text-info text-c " >{props.title}</h1>}
                     </Fade>
                     </div>
                    
                     
                     
                     

                     
                   
                     <Col>
                     {/* <img src={abt} width="70%"   fluid/> */}
                     </Col>
                 
                     <Row>
                     
                     
                     <Col md= {8} sm={12} className=" justify-content-centre py-5  ]">
                     {/* <img src="https://img.icons8.com/bubbles/600/000000/purposeful-man.png" width="100%"   fluid/> */}
                     <Fade right>
                     <p><img src={prg} width="90%" className ="rounded-circle"  fluid/></p>
                     </Fade>
                     </Col>
                     
                     </Row>
                     
                    
                    
                 </Row>
    
             </Container>
        </Jumbotron>
    )
}
export default Hero