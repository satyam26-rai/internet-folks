import React from 'react'
 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';
import Logo from "../../Resources/Logo.png"
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-1'>
            <img src={Logo}/>
        </div>
        <div className='Footer-2'>
             <h3>Contact Us</h3>
             <span>Lorem ipsum Pvt Ltd.5/1,Magalton<br/>Road,Phartosh Gate near YTM<br/>Market,xyz-907878<br/><br/>example2002@gmail.com<br/><br/> (904)-656-5656</span>
        </div>
        <div className='Footer-3'>
            <h3> More</h3>
            <ul className='footer-list'>
            <li>About us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
            </ul> 
                    </div>
        <div className='Footer-4'>
            <h3> Social Links</h3>
             <div className='icons'>
             <div><InstagramIcon/></div>
             <div><TwitterIcon/></div>
             <div>< FacebookIcon /></div>
              
            
             </div>
        </div>
    </div>
  )
}
 

export default Footer