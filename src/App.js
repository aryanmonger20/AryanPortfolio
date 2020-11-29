import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {FormGroup, FormControl, ControlLabel,NavDropdown } from "react-bootstrap";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';








import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectsPage'
import './App.css';



class App extends React.Component {

constructor(props){
  super(props)
  this.state ={
    title :"Aryan Gupta",
    headerLinks :[
      {title:'Home',path : '/'},
      {title:'About',path : '/about'},
      {title:'Contact',path : '/contact'}
    ],
    home :{
      title : "Full Stack Developer & Coder",
      subTitle :"I am Aryan",
      text :"Hi ,I am Aryan "
    },
    about : {
      title :'About Me'
    }
    ,
    contact : {
     title :'Let\'s Talk'

    },
    project :{
      title:'Have a Look !!'
    }

  }
}


 render()
{  return (
<Router>
  <Container className="p-0" fluid ={true}>
         
  <Navbar class="text-info " sticky="top" collapseOnSelect expand="lg" bg="info" variant="dark" >
  <Navbar.Brand href="#home">
    
    <h2>My Portfolio    </h2>     </Navbar.Brand>
    <img src="https://img.icons8.com/dusk/64/000000/moleskine.png"/>
    
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="Nav_link justify-content-end  ml-auto mr-5 font-weight-normal font-family-sans-serif " variant="pills">
   
    <Nav.Link id ="s-1"size="lg"  font-size="h1" activeKey="/home"  as={Link} href="#home" to="/home">Home</Nav.Link>
      <Nav.Link id ="s-2"size="lg"  activeKey="/about" as={Link} href="#about" to="/about">About</Nav.Link>
      <Nav.Link id ="s-3" size="lg"  activeKey="/project"  as={Link} href="#project"to="/project">Projects</Nav.Link>
      <Nav.Link  id ="s-4" size="lg"  activeKey="/contact"  as={Link} href="#contact" to="/contact">Contact Me</Nav.Link>
      
    </Nav>
    <Nav>
    
     
    </Nav>
    
  </Navbar.Collapse>
  
 
  

 
</Navbar>

<Route path="/AryanPortfolio/" exact render ={()=> <HomePage title ={this.state.home.title} subTitle ={this.state.home.subTitle} text ={this.state.home.text}/>}/>

<Route path="/home" render ={()=> <HomePage title ={this.state.home.title} subTitle ={this.state.home.subTitle} text ={this.state.home.text}/>}/>
<Route path="/about"  render ={()=> <AboutPage title ={this.state.about.title} />}/>
<Route path="/contact"  render ={()=> <ContactPage title ={this.state.contact.title} />}/>
<Route path="/project"  render ={()=> <ProjectPage title ={this.state.project.title} />}/>









<Footer
className="sticky-bottom"
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title:"MyPortfolio",
       
        description: 'Thanks for Coming !!',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by Aryan"
    mountNode
  />
  
  </Container>
</Router>


   
)
}
}
export default App;
