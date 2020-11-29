import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../App.css';



function Hero2(props){
    return(
        <Jumbotron fluid className="jt fluid " >
             <Container fluid ={true}>
                 <Row className="justify-content-centre py-4 pl-5 ml-lg-5 mb-5">
                     <Col md= {8} sm={12}>
                    
                     {props.text && <h3 className ="display-3 font-weight-normal text-c  text-muted">{props.text}</h3>}
                     <br/>
                     {props.title && <h4 className ="display-1 font-weight pl-5  text-c text-info">
                        <strong><u>{props.title} </u> </strong></h4>}
                     </Col>

                    <Col className=" justify-content-centre  mr-1  px-md-1 ">
                      
                    
                     </Col>
                     <Col className=" justify-content-centre py-5  px-md-1 ">
                     <p></p></Col>
                     
                    
                     
                    
                    
                 </Row>
    
             </Container>
        </Jumbotron>
    )
}
export default Hero2