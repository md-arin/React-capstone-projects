import React from 'react'
import './ProfileCard.css'

function ProfileCard({name,age,location,photoUrl}) {

  return (
    <div className='card-body '>
    <div className='upper-section'>
    <img src={photoUrl} alt="" />
    </div>
  
     
    
    <div className='mid-section'>
        <p> <b>{name}</b>  {age}</p> 
        <p>{location}</p>
        
    </div>
    <hr />
    <div className='low-section'>
        
        <div>
            <b>80K</b>
            <p>Followers</p>
        </div>
        <div>
            <b>803K</b>
            <p>Likes</p>
        </div>
        <div>
            <b>1.4K</b>
            <p>Photos</p>            
        </div>
    </div>
  </div>
  )
}

export default ProfileCard