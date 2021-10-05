// dynamic section 
import React from 'react';
// prodact css import section 
import  './Prodact.css'
const Prodact = (props) => {
    const {name,img,price} =props.product;
    return (
        
        <div className="product-body">
            <img className="service" src={img} alt="" />
                <h3>{name}</h3>
                <h5>Price:{price}</h5>
                <button className="buy">Enroll Now</button>
        </div>
        
    );
};

export default Prodact;
