import React from "react";
import goodDeedLogo from "./images/good-deed-app-logo.jpg";
// import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="flex flex-row pb-2 mt-4 text-xs sm:px-8 sm:text-3xl sm:font-bold sm:tracking-wider">
        <img
          src={goodDeedLogo}
          alt="Good deeds logo"
          className=" ml-6 h-16 sm:mx-7 sm:h-20 lg:h-24"
        />
        <h1 className=" text-xl sm:text-4xl font-bold mx-3 mt-4 text-white">Volunteer Booking App</h1>
      </div>
      {/* <Navbar /> */}
    </header>
  );
}

export default Header;
