import React from 'react'
 import "./First.css";
import Logo from "../../Resources/Logo.png";
import Main from "../../Resources/main.png";
import vector from "../../Resources/Vector.png";
import GetIN from "../../Resources/GetIN.png";
const First =() => {
  return (
    <div className='First'>
        <div className='left-h'>
        <img  className="Logo"  src={Logo}/>

        <div className='First-main-text'>  <span>Discover the<br/><span className='change-color'>Best</span> food <br/>and drinks</span></div>
       
            <p>Naturally made Healthcare Products for the<br/>better care & support of your body</p>

            <button className='btn-button'>Explore Now!</button>
            
        </div>
        <div className='right-h'>

        
             
            <div className='right-back'>
                 <img className='GetIN-photo'src={GetIN}/>
                <img  className="vector-image"  src={vector}/>
                 <img className='Main-photo' src ={Main}/>
            </div>

              
        </div>
        
    </div>
  )
}

 

export default First