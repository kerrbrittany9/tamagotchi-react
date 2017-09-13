import React from "react";

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: [],
    };
    this.addNewCreatureToTamagotchi = this.addNewCreatureToTamagotchi.bind(this);
    this.updateCreatureLife = this.updateCreatureLife.bind(this);
  }
}

export default Tamagotchi;
