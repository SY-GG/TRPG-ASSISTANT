import React from "react";
import mainlogo from "assets/mainlogo.png";
import "styles/index.css";

function MainHeader() {
  return (
    <header>
      <img src={mainlogo} alt="main logo" class="main-logo" />
    </header>
  );
}

export default MainHeader;
