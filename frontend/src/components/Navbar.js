import React from "react";
import { BsSearch } from "react-icons/bs";
import profile1 from "../assets/profile-1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav>
      <div className="container">
        <h2 className="logo">Zeeshan</h2>
        <div className="search-bar">
          <BsSearch />
          <input
            type="search"
            placeholder="Search for creators, inspirations, and projects"
          />
        </div>
        <div className="create">
          <label className="btn btn-primary" for="#create-post">
            Create
          </label>
          {isAuthenticated ? (
            <div className="profile-photo">
              <img src={profile1} alt="profile" />
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
