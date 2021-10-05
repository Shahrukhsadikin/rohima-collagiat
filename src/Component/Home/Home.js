import React, {  useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
// home css import section 
import './Home.css';
import img1 from '../../images/IMG_20200127_130215_HDR.jpg';
import img2 from '../../images/IMG_20200221_082059.jpg';
import img3 from '../../images/image3.jpg'


const Home = () => {
    const [school,setSchool] = useState([]);
    const schools =school.slice(0,4);
    
    useEffect(()=>{
      // fake api
        fetch('./subjects.JSON')
        .then(res=>res.json())
        .then(data=>setSchool(data))

    },[])
    
    return (
        
            <div>
                <div>
                  {/* Carosel part */}
                  <Carousel>
                      <Carousel.Item interval={1000}>
                        <img
                          className="d-block w-100"
                          src={img1}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Prize Giving Ceremony</h3>
                          <p>At RCS we award our students for getting good grades</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item interval={500}>
                        <img
                          className="d-block w-100"
                          src={img2}
                          alt="Second slide"
                        />
                        <Carousel.Caption>
                          <h3>21st February Function</h3>
                          <p>Students along with the director of RCS are giving flowers at Shahid Minar </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={img3}
                          alt="Third slide"
                        />
                        <Carousel.Caption>
                          <h3>Students marching towards Shahid MInar</h3>
                          <p>All students of RCS are marching together towards Shahid Minar in order to show respect to our Martyars</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                  </Carousel>
                </div>
                {/* card body part */}
                <div className="home-body">
                    
                    <h1>our service</h1> 
                     
                   
                     <div className="home">
                     {
                         schools.map(school => <Service key={school.name} school={school}/>)
                     }
                     
                     </div>
                 
                 </div> 
            </div>    
        
    );
};

export default Home;