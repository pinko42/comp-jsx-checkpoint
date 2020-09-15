import React from "react";
import "./App.css";
import Pic from "./profile/ProfilePhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";

function Main() {
  return (
    <div className="App">
      <div>hey</div>
      <Pic />
      <FullName />
      <Address />
    </div>
  );
}

export default Main;
