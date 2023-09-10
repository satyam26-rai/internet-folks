import React from 'react'
import "./second.css";
import SecPhoto from "../../Resources/about/SecPhoto.png";
import ReadMore from "../../Resources/ReadMore.png" ;
const Second = () => {
  return (
    <div className='Second'>
        
         <div className='second-left-h'>
             <img src={SecPhoto}/>

         </div>

         <div className='second-right-h'>
               <div className='sec-text'><span>About us</span> </div>
               <div className='sec-para'> <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Eligendi non quis exercitationem culpa nesciunt nihil aut<br/> nostrum explicabo reprehenderit optio amet ab <br/>temporibus asperiores quasi cupiditate<br/> nostrum explicabo reprehenderit optio amet ab.  
              </p></div>
              <div>
                <img className='sec-button' src={ReadMore}/>
              </div>

         </div>

         </div>
  )
}
 

export default Second