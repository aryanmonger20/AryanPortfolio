import React from "react"
import Hero from "../Components/Hero"
import Flexbox from 'flexbox-react'
import Carousel from '../Components/Carousel'
import Fade from 'react-reveal/Fade';

function HomePage(props){
    return(
      <Fade left cascade>
        <div>

            
       <Hero title ={props.title} subTitle ={props.subTitle} text ={props.text}/>
    
      <div className="bggradient text-centre">
       
      <h1 className='container-fluid justify-content-center text-center pt-5 pb-3'>
     
     🅼🆈 🅿🆁🅾🅵🅸🅻🅴🆂 
     </h1>
      
      <Flexbox flexDirection="column" minHeight="100vh">
 
      <Carousel/>
  <Flexbox element="header" height="60px">

  <h1 className="pad">🆃🅷🅰🅽🅺🆂 🅵🅾🆁 🅲🅾🅼🅸🅽🅶</h1>

  </Flexbox>
  
    <ul>
    <p></p> 
      
    
    </ul>
    </Flexbox>
      </div>
      </div>
     </Fade>

    );

}
export default HomePage