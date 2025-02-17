import React from 'react'
import image from './image.jpg'
import './style.css'
function Template() 
{
  return (
    <div className="Container">
      <div className='Header'>
        <div className='Heading'>
          KL University
        </div>
        <div className='Menu'>
          <span>  Home  </span>
          <span>  About  </span>
          <span>  Portfolio  </span>
          <span>  Login  </span>
        </div>
      </div>
      <div className='Body'>
        <div className='Image'>
          <img src={image} alt="No Image"/>
        </div>
        <div className='Description'>
          <p> project name </p>
          <p> domain </p>
          <p> batch </p>
          <p> year </p>
        </div>
      </div>
      <div className='Footer'>
        
        <div className='Socials'>
          <span> <i class="fa fa-bitcoin"></i> </span>
          <span> <i class="fa fa-steam-square" ></i> </span>
          <span> <i class="fa fa-windows"></i> </span>
          <span> <i class="fa fa-fort-awesome"></i> </span>
        </div>
      </div>
    </div>
  )
}
export default Template