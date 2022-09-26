import React, { useEffect } from "react";
import { stories, feeds } from "../data";
import profilePic from "../assets/profile-1.jpg";
import Posts from "./Posts";

const MiddleBar = () => {
  return (
    <div className="middle">
      <div className="stories">
        {stories.map((item, index) => {
          return (
            <div className="story" key={index}>
              <div className="profile-photo">
                <img src={item.image} alt="" />
              </div>
              <p className="name">{item.name}</p>
            </div>
          );
        })}
      </div>
      <form className="create-post">
        <div className="profile-photo">
          <img src={profilePic} alt="" />
        </div>
        <input
          type="text"
          placeholder="What's on your mind, Diana?"
          id="create-post"
        />
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
      <div className="feeds">
        <Posts />
      </div>
    </div>
  );
};

export default MiddleBar;
