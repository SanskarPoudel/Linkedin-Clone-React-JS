import React from "react";
import Profiles from "./Profiles";
import "./Widgets.css";
export default function Widgets() {
  return (
    <div className="widgets">
      <div className="add_feed">
        <div className="add_feedTop">
          <h2>Add to your feed</h2>{" "}
          <img
            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/information.png"
            alt=""
          />
        </div>
        <div className="add_feedBottom">
          <Profiles
            photo="https://wallpaperaccess.com/full/6295120.jpg"
            name="Sample Sample"
            description="Hello this is test"
          />
          <Profiles
            photo="https://wallpaperaccess.com/full/2213426.jpg"
            name="Sample Profile"
            description="Hello this is test"
          />
          <Profiles
            photo="https://1.bp.blogspot.com/-arGwhEe2rG0/YTuyVzbS2NI/AAAAAAAAuUU/tKgGGBXs4Ig1kDG63eB8R_CKppQ8HY71QCLcBGAsYHQ/s920/Best-Profile-Pic-For-Boys%2B%25281%2529.png"
            name="Testing  Testing"
            description="Hello this is test"
          />
        </div>
      </div>
    </div>
  );
}
