import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import '../App.css'

function Content(props){
    return (
        <Container className ='jt' fluid= {true}>

            <Row className="justify-content-center">

                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}




export default Content