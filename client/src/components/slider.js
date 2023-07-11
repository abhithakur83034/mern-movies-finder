import React from 'react';
import {Carousel,Container} from 'react-bootstrap';


const Slider =(props)=>{
    let {SlideData} = props
    console.log('slider',SlideData)
    return(
      
     <Container fluid>
         <Carousel>
      {SlideData?.length !== 0 && SlideData?.map((item, index)=>{
          return(
              <Carousel.Item key={index}>
              <img
              className="d-block w-100"
              src={`http://localhost:5500/img/${item?.image}`}
              alt=" slide"
              height="500"
              width="100%"
              />
              <Carousel.Caption>
             <h3>{item.title} </h3>              
              <p>{item.actors}</p>
              </Carousel.Caption>
          </Carousel.Item>
          )
        })}  
        </Carousel>
     </Container>
        
    )
}

export default Slider;