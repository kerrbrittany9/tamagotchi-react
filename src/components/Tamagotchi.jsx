import React from "react";
import PropTypes from  "prop-types";
import TamagotchiControlTop from "./TamagotchiControlTop";
import TamagotchiList from "./TamagotchiList";

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: [],
    };

    this.addNewCreatureToTamagotchi = this.addNewCreatureToTamagotchi.bind(this);
    this.updateTamagatchiLife = this.updateTamagatchiLife.bind(this);
  }

  realTime() {
    this.timeSinceBirth = setInterval(() =>
    this.updateTamagatchiLife(),
    5000
  );
  }

  addNewCreatureToTamagotchi(newTamagotchi) {
    let newMasterTamagotchi = this.state.masterTamagotchi.slice();
    newMasterTamagotchi.push(newTamagotchi);
    this.setState({masterTamagotchi: newMasterTamagotchi});
    console.log(this.state.masterTamagotchi);
  }

  updateTamagatchiLife() {
    let newMasterTamagotchi = this.state.masterTamagotchi.slice();
    newMasterTamagotchi.forEach((creature) =>
    creature.setTimeSinceBirth()
  );
    this.setState({masterTamagotchi: newMasterTamagotchi})
  }


  render() {
    return (
      <div>
        <TamagotchiControlTop addNewCreatureToTamagotchi= {this.addNewCreatureToTamagotchi}/>
        <TamagotchiList
        creatures={this.state.masterTamagotchi}/>
      </div>
    )
  }

  };


Tamagotchi.propTypes = {
  addNewCreatureToTamagotchi: PropTypes.func,
}

export default Tamagotchi;
