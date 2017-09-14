import React from "react";
import Tamagotchi from "../models/Tamagotchi.js";
import PropTypes from "prop-types";

class CreateTamagotchi extends React.Component {

  constructor(props){
    super(props);
    this.prepareTamagotchiCreation = this.prepareTamagotchiCreation.bind(this);
  }

  prepareTamagotchiCreation(event) {
    event.preventDefault()
    const { _name } = this.refs;
    var newTamagotchi = new Tamagotchi(_name.value);
    this.props.addNewCreatureToTamagotchi(newTamagotchi);
    this.props.hideFormAfterSubmission();
    console.log(newTamagotchi.name);
  }

  render(){
    return (
      <div>

        <form onSubmit={this.prepareTamagotchiCreation}>
          <input
            ref="_name"
            type="text"
            id="name"
            placeholder="Tamagotchi Name"/>
          <button type="submit">shimei</button>
          </form>

          </div>
        );
      }
    }

    CreateTamagotchi.propTypes = {
      addNewCreatureToTamagotchi: PropTypes.func,
      hideFormAfterSubmission: PropTypes.func,

    }

    export default CreateTamagotchi;
