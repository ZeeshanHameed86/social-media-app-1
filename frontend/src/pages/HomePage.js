import React from "react";
import {
  Navbar,
  LeftBar,
  MiddleBar,
  RightBar,
  CustomizeTheme,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <LeftBar />
          <MiddleBar />
          <RightBar />
          <CustomizeTheme />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
