import React, { useEffect } from "react";
import { stories, feeds } from "../data";
import profilePic from "../assets/profile-1.jpg";
import { useDispatch } from "react-redux";
import { getFollowingPosts } from "../actions/userActions";

const MiddleBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowingPosts());
  }, []);

  return (
    <div className="middle">
      <div className="stories">
        {stories.map((item) => {
          return (
            <div className="story">
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
        {feeds.map((item, index) => {
          return (
            <div className="feed" key={index}>
              <div className="head">
                <div className="user">
                  <div className="profile-photo">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info">
                    <h3>{item.name}</h3>
                    <small>{item.time}</small>
                  </div>
                </div>
                <span className="edit">{item.icon}</span>
              </div>
              <div className="photo">
                <img src={item.postPic} alt="" />
              </div>
              <div className="action-buttons">
                <div className="interaction-buttons">
                  <span>{item.actionBtn1}</span>
                  <span>{item.actionBtn2}</span>
                  <span>{item.actionBtn3}</span>
                </div>
                <div className="bookmark">
                  <span>{item.bookmarkIcon}</span>
                </div>
              </div>
              <div className="liked-by">
                <span>
                  <img src={item.likedBy1} alt="" />
                </span>
                <span>
                  <img src={item.likedBy2} alt="" />
                </span>
                <span>
                  <img src={item.likedBy3} alt="" />
                </span>
                <p>
                  Liked by <b>{item.likedByName}</b> and{" "}
                  <b>{item.LikedByOthers}</b>
                </p>
              </div>
              <div className="caption">
                <p>
                  <b>{item.name}</b> Lorem ipsum dolor sit quisquam eius.{" "}
                  <span className="hash-tag">{item.hashTag}</span>
                </p>
              </div>
              <div className="comments text-muted">{item.ViewComments}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiddleBar;
