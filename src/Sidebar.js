import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
export default function Sidebar() {
  
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <Avatar
          className="avatar"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQG01R89B27uIA/profile-displayphoto-shrink_800_800/0/1610119919969?e=1657756800&v=beta&t=Xp5ETipfzerdI_Zo4a0Fr4wC5_IMlRFq9eb3UiQbOHk"
        />
        <h2>Sanskar Paudel</h2>
        <h4>Student at Pokhara University</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p className="sidebar_statText">Connections</p>
          <p className="sidebar_statNumber">4</p>
        </div>
        <div className="sidebar_stat">
          <p className="sidebar_statText">Connect with alumni</p>
          <p className="sidebar_statNumber"></p>
        </div>
      </div>
      <div className="sidebar_premium">
        <p className="premium_text">Access exclusive tools &insights</p>
        <div className="premium_main">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1478/1478930.png"
            alt=""
          />
          <p className="premium_mainText">Try premium for free</p>
        </div>
      </div>
      <div className="myItems">
        <img
          src="https://icon-library.com/images/items-icon/items-icon-17.jpg"
          alt=""
        />
        <p>My items</p>
      </div>

      <div className="sidebar_bottom">
        
        <p>Groups</p>
        <div className="events">
          <p>Events</p>{" "}
          <img
            src=""
            alt=""
          />
        </div>

        <p>Follow Hashtags</p>
      </div>
      <div className="sidebar_discoverMore">
        <p>Discover More</p>
      </div>
    </div>
  );
}
