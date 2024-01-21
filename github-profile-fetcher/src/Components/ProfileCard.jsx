import react from 'react';

export default function ProfileCard({
      photo,
      name,
      bio,
      followers,
      following,
      location
  }){
    
    return(
      <div className=' flex'>
        <div>
          <img className=' rounded-3xl w-48' src={photo} alt="" />
        </div>
      
        <div className=' px-4'>
          <p><b>Name: </b> {name}</p>
          <p>{bio}</p>
          <div> <p><b>Followers :</b> {followers}</p>  <b>Following :</b> {following}</div>
          <p>location : {location}</p>
        </div>
      </div>
    )
}