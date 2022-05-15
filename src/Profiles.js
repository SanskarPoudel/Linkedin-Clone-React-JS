import { Avatar } from '@mui/material'
import React from 'react'
import "./Profiles.css"
export default function Profiles({photo,name,description}) {
  return (
    <div className="profiles">
      <div className="profile_main">
        <Avatar src={photo} />
        <div className="profile_mainName">
          <h2>{name}</h2> <p>{description}</p>
              </div>
              
          </div>
          <button className='button '> + Follow</button>
    </div>
  );
}
