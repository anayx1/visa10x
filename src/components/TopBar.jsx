import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-box">
       <marquee className="marque-box" behavior="scroll" direction="left">
        <p className="top-text">
           We are launching smarter tools for visa application preparation!
           <span></span>
        We are launching smarter tools for visa application preparation!
          </p>
        </marquee>
      <p className="cross-icon">✕</p>
    </div>
  );
};

export default TopBar;
