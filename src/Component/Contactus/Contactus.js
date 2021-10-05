// contactus part 
import React from 'react';
// contactus css import section 
import './Contactus.css'
const Contactus = () => {
    return (
        <div className="conatac-body">
            <h1>Join us and stay tuned!</h1> 
            <div className="contactus" >
            
                <div >
                    <textarea className="textarea" type="text" placeholder="Name"/>
                </div>
                 <div ><textarea className="textarea" type="text" placeholder="Email"/></div>
                <div ><textarea className="textarea" type="text" placeholder="class"/></div>
            
            </div>
            <textarea className="textareas" type="text" placeholder="Message"/>
        </div>
    );
};

export default Contactus;