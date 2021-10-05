// dynamic section 
import React from 'react';
// service css import section 
import './Service.css'
const Service = (props) => {
    const {name,img,price} =props.school;
    return (
       <div>
          <img className="service" src={img} alt="" />
            <h1>{name}</h1>
            <h5>price:{price}</h5>
          <button className="buy">Enroll Now</button>
       </div>
       
    );
};

export default Service;


