import React from "react";
import Tamagotchi from "../models/Tamagotchi.js";
import PropTypes from "prop-types";

class CreateTamagotchi extends React.Component {

  constructor(props){
    super(props);
    this.newCreateTamagotchi = this.newCreateTamagotchi.bind(this);
  }

  newCreateTamagotchi(event) {
    event.preventDefault()
    const { _name} = this.refs;
    var newTamagotchi = new Tamagotchi(_name.value);
    this.props.onNewCreateTamagotchi(new Tamagotchi);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.newCreateTamagotchi}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Tamagotchi Name"/>
        </form>
      </div>
    );
  }

  CreateTamagotchi.propTypes = {
    onNewCreateTamagotchi: PropTypes.func
  }
}
export default CreateTamagotchi;
