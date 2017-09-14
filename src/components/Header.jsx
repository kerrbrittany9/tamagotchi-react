import React from "react";
import Tamagotchi from "../models/Tamagotchi.js";

function Header() {
  return (
    <div>
      <h1>Tamagotchi Game!</h1>
      <p>Enter a name to create your tamagotchi. Feed, play and give it sleep. Don't let the score dip below 10 or it will die.</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Tamagotchi_0124_ubt.jpeg"/>
    </div>
  );
}


export default Header;
