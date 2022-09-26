import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import profile from "../assets/profile-15.jpg";
import profile2 from "../assets/profile-18.jpg";
import { messages, friendRequests } from "../data";

const RightBar = () => {
  return (
    <div className="right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <FiEdit className="icon" />
        </div>
        <div className="search-bar">
          <BsSearch className="icon" />
          <input
            type="search"
            placeholder="Search messages"
            id="message-search"
          />
        </div>
        <div className="category">
          <h6 className="active">Primary</h6>
          <h6>General</h6>
          <h6 className="message-requests">Requests(7)</h6>
        </div>
        {messages.map((item, index) => {
          return (
            <div className="message" key={index}>
              <div className="profile-photo">
                <img src={item.image} alt="" />
                {item.active && <div className="active"></div>}
              </div>
              <div className="message-body">
                <h5>{item.name}</h5>
                <p className={item.class && item.class}>{item.message}</p>
              </div>
            </div>
          );
        })}
        <div className="friend-requests">
          <h4>Requests</h4>
          {friendRequests.map((item, index) => {
            return (
              <div className="request" key={index}>
                <div className="info">
                  <div className="profile-photo">
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <h5>{item.name}</h5>
                    <p className="test-muted">{item.status}</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn">Decline</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
