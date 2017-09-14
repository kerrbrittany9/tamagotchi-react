import React from "react";
import Tamagotchi from "../models/Tamagotchi.js";


function Header() {
  var sheetStyle = {
    width: 200
  }

  return (
    <div>
      <h1>Tamagotchi Game!</h1>
      <p>Enter a name to create your tamagotchi. Feed, play and give it sleep. Don't let the score dip below 10 or it will die.</p>
      <img style={sheetStyle} src="https://media.giphy.com/media/UrMQUIrD7waHu/200.gif"/>
    </div>
  );
}


export default Header;
