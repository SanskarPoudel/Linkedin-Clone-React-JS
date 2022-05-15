import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Feed.css";
import InputContainerIcons from "./InputContainerIcons";
import Post from "./Post";
export default function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="inputContainerTop">
          <Avatar
            className="avatar2"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG01R89B27uIA/profile-displayphoto-shrink_800_800/0/1610119919969?e=1657756800&v=beta&t=Xp5ETipfzerdI_Zo4a0Fr4wC5_IMlRFq9eb3UiQbOHk"
          />
          <div className="input">
            <form>
              <input
                className="feed_input"
                type="text"
                placeholder="Start a post"
              />
              <button onClick={sendPost} className="btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="inputContainerBottom">
          <InputContainerIcons
            icons="https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png"
            name="Photo"
          />
          <InputContainerIcons
            icons="https://www.kindpng.com/picc/m/4-43150_youtube-clipart-square-youtube-icon-hd-png-download.png"
            name="Video"
          />
          <InputContainerIcons
            icons="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/06_1-512.png"
            name="Event"
          />
          <InputContainerIcons
            icons="data:image/png;base64,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"
            name="Write article"
          />
        </div>
      </div>
      <div className="posts">
        {posts.map((Post) => (
          <Post />
        ))}
        <Post
          name="Test 1"
          description="hello hello test 123123"
          message="Lorem sions of Lorem Ipsum.

"
          photoUrl="https://media-exp1.licdn.com/dms/image/C4E03AQG01R89B27uIA/profile-displayphoto-shrink_800_800/0/1610119919969?e=1657756800&v=beta&t=Xp5ETipfzerdI_Zo4a0Fr4wC5_IMlRFq9eb3UiQbOHk"
        />
        <Post
          name="Test 2"
          description="test test test"
          message="Hi guys, i am testing."
          photoUrl="https://www.screengeek.net/wp-content/uploads/2018/11/breaking-bad-jesse-pinkman.jpg"
        />
        <Post
          name="Test 3"
          description="12312412412 test"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
          photoUrl="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Breaking_Bad.jpeg?Ifrqi.v01Y0KfAlAyY172HCu8HZTJJvy&size=770:433"
        />
      </div>
    </div>
  );
}
