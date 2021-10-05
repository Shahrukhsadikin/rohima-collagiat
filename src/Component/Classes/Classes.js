// Allservice section 
import React, {  useEffect, useState } from 'react';
import Prodact from '../Prodact/Prodact';
// class css import section 
import './Classes.css'

const Classes = () => {
    const [product,setProduct] = useState([]);
    
    
    useEffect(()=>{
        // second fake api
        fetch('./product.JSON')
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
  
    return (       
            <div className="card-body">
                 <h1>Our srevice</h1>
                <div className="card">
                    {
                        product.map(product=><Prodact key={product.name} product={product} />)
                    }
                </div>
            </div>
    );
};

export default Classes;

