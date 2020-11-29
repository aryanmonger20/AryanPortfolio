import React from "react"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from "react-bootstrap/esm/Container";
import webquiz from '../images/webquiz.jpg'
import smiley from '../images/smiley.png'
import bday from '../images/bday.jpg'
import Button from 'react-bootstrap/Button'

function ProjectPage(props){
    return(
       <div>
       <Container fluid>
       
        <h1 className="display-1 text-center bg-cover m-5 p-md-5">My Projects</h1>
        <CardDeck >
  <Card  >
    <Card.Img variant="top"  src={webquiz}/>
    <Card.Body>
      <Card.Title>WebQuiz</Card.Title>
      <Card.Text>
       An online quiz App made using React.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://aryanmonger20.github.io/WebQuiz/"variant="info">Demo</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={bday} />
    <Card.Body>
      <Card.Title>Bday Animation for wishing friends</Card.Title>
      <Card.Text>
      A Happy Birthday animation design in CSS3, HTML5,Jquery.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://aryanmonger20.github.io/HAPPY-BDAY-/"variant="info">Demo</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={smiley} />
    <Card.Body>
      <Card.Title>Smiley </Card.Title>
      <Card.Text>
     A Smiley Aniamation using HTML and CSS.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://jovial-gates-688bdb.netlify.app/"variant="info">Demo</Button>
    </Card.Footer>
  </Card>
</CardDeck>
</Container>
       </div> 
       
    
    );

}
export default ProjectPage