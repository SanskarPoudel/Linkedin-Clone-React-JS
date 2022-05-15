import { Avatar } from '@mui/material'
import React from 'react'
import Feedback from './Feedback'
import "./post.css"

export default function Post({name,description,message,photoUrl}) {
  return (
    <>
      <div className="post">
        <div className="post_header">
          <Avatar className="avatar3" src={photoUrl} />
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        <div className="post_buttons">
          <Feedback
            icon="https://www.pikpng.com/pngl/m/28-281410_youtube-like-button-transparent-like-icon-png-clipart.png"
            name="Like"
          />
          <Feedback
            icon="https://cdn-icons-png.flaticon.com/512/1789/1789313.png"
            name="Comment"
          />
          <Feedback
            icon="https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-share-icon-isolated-on-background-png-image_1901867.jpg"
            name="Share"
          />
          <Feedback
            icon="https://static.vecteezy.com/system/resources/previews/005/568/447/non_2x/send-message-icon-in-trendy-blue-eyes-style-isolated-on-soft-blue-background-free-vector.jpg"
            name="Send"
          />
        </div>
      </div>
      
    </>
  );
}
