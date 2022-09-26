import React, { useState } from "react";
import { leftBar, notifications } from "../data";
import profile1 from "../assets/profile-1.jpg";

const LeftBar = () => {
  const [clickedMenuIndex, setClickedMenuIndex] = useState(0);
  const [isNotificationsHovered, setIsNotificationsHovered] = useState(false);
  const [isMessagesHovered, setIsMessagesHovered] = useState(false);

  const menuClicked = (index, id) => {
    setClickedMenuIndex(index);
    id === "notifications" && setIsNotificationsHovered(true);
    id !== "notifications" && setIsNotificationsHovered(false);
    id === "messages-notifications" && setIsMessagesHovered(true);
    id !== "messages-notifications" && setIsMessagesHovered(false);
  };

  return (
    <div className="left">
      <a className="profile">
        <div className="profile-photo">
          <img src={profile1} alt="" />
        </div>
        <div className="handle">
          <h4>Zeeshan Hameed</h4>
          <p className="text-muted">@dayi</p>
        </div>
      </a>
      <div className="sidebar">
        {leftBar.map((item, index) => {
          return (
            <a
              key={index}
              className={`menu-item ${
                index === clickedMenuIndex ? "active" : ""
              }`}
              id={item.id && item.id}
              onClick={() => menuClicked(index, item.id)}
            >
              <span>
                {item.icon}
                {index === 2 ? (
                  <small className={item.class && item.class}>9+</small>
                ) : (
                  index === 3 && (
                    <small className={item.class && item.class}>6</small>
                  )
                )}
              </span>
              <h3>{item.title}</h3>
              {index === 2 && (
                <div
                  className="notifications-popup"
                  style={{
                    display: isNotificationsHovered ? "block" : "none",
                  }}
                >
                  {notifications.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="profile-photo">
                          <img src={item.profilePic} alt="" />
                        </div>
                        <div className="notification-body">
                          <b>{item.name}</b> {item.comment}
                          <small className="text-muted">{item.time}</small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </a>
          );
        })}
        <label for="create-post" className="btn btn-primary">
          Create Post
        </label>
      </div>
    </div>
  );
};

export default LeftBar;
