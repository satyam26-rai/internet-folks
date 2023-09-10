import React, { useState } from 'react'
import './Third.css'
import Photo1 from "../../Resources/food-photo-1.png";
import Photo2 from "../../Resources/food-photo-2.png";
import Photo3 from "../../Resources/food-photo-3.png";
import Photo4 from "../../Resources/food-photo-4.png";
import Photo5 from "../../Resources/food-photo-5.png";
import Photo6 from "../../Resources/food-photo-6.png";
import ReadMore from "../../Resources/ReadMore.png"
import ArrowL from'../../Resources/Arrow-L.png';
import ArrowR from'../../Resources/Arrow-R.png';
const Third = () => {
    var x =["My-slide-1","My-slide-2"];
    const [selected,setSelected] =useState(0);
    const  Dlength =x.length;
  
  return (
    <div className='Third'>
      <div class="slideshow-container">
      <div className='Dish-heading'><span>Latest Article</span></div>

        <div className='My-slide-1'>

             

            <div className='Dish-container'>

                <div className='Dish'>
                  <img className='IMG' src={Photo1}/>
                  <div className='food-name'><h3>Grilled Tomatoes at Home</h3>
                  <p>PLorem Ipsum is simply dummy text for the<br/>printing ans typesetting insdustry .Lorem<br/>Ipsum has been industry's standard...</p>
                  </div>
                  <div><img src={ReadMore}/></div>
                  </div>

            <div className='Dish'>
              <img className='IMG' src={Photo2}/>
              <div className='food-name'><h3>Snakes for Travel</h3>
                  <p>PLorem Ipsum is simply dummy text for the<br/>printing ans typesetting insdustry .Lorem<br/>Ipsum has been industry's standard...</p>
                  </div>
                  <div><img src={ReadMore}/></div>
              </div>
            <div className='Dish'>
              <img className='IMG' src={Photo3}/>
              <div className='food-name'><h3>Post workout Recipies</h3>
                  <p>PLorem Ipsum is simply dummy text for the<br/>printing ans typesetting insdustry .Lorem<br/>Ipsum has been industry's standard...</p>
                  </div>
                  <div><img src={ReadMore}/></div>
                  </div>

            </div>
        </div>
   {/* //================================================== */}
          <div className='My-slide-2'>

        <div className='Dish-heading'><span>Latest Article</span></div>

        <div className='Dish-container'>

            <div className='Dish'>
              <img className='IMG' src={Photo4}/>
              <div className='food-name'><h3>How to Grill corn </h3>
              <p>PLorem Ipsum is simply dummy text for the<br/>printing ans typesetting insdustry .Lorem<br/>Ipsum has been industry's standard...</p>
              </div>
              <div><img src={ReadMore}/></div>
              </div>

        <div className='Dish'>
          <img className='IMG' src={Photo5}/>
          <div className='food-name'><h3>Crunchwrap supreme</h3>
              <p>PLorem Ipsum is simply dummy text for the<br/>printing ans typesetting insdustry .Lorem<br/>Ipsum has been industry's standard...</p>
              </div>
              <div><img src={ReadMore}/></div>
          </div>
        <div className='Dish'>
          <img className='IMG' src={Photo6}/>
          <div className='food-name'><h3>Broccoli  cheese  soup</h3>
              <p>PLorem Ipsum is simply dummy text for the<br/>printing ans typesetting insdustry .Lorem<br/>Ipsum has been industry's standard...</p>
              </div>
              <div><img src={ReadMore}/></div>
              </div>

        </div>
        </div>

        <div className='Arrow'>
            <a><img  
            onClick={()=>{
              selected===0
              ? setSelected(Dlength-1)
              :setSelected((prev) => prev-1);
            }}
            src={ArrowL}/></a>
             <a>1/2</a>
             <a><img
             onClick={()=>{
              selected===Dlength-1
              ? setSelected(0)
              :setSelected((prev =>prev+1));
             }} src={ArrowR}/></a>
        </div>

      </div>   
    </div>
  )
}

 

export default Third