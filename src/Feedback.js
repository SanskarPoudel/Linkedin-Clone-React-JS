import React from 'react'
import "./Feedback.css"
export default function feedback({icon,name}) {
  return (
    <div className="feedback">
      
        <img className="post_feedbackIcon" src={icon} alt="" />
      
      <div className="post_feedbackName">{name}</div>
    </div>
  );
}
