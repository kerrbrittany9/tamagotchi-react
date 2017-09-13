import React from "react";
import CreateTamagotchi from "./CreateTamagotchi";
import PropTypes from  "prop-types";
import TamagotchiList from "./TamagotchiList";

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: [],
      formVisibleOnPage: false
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.addNewCreatureToTamagotchi = this.addNewCreatureToTamagotchi.bind(this)
  }

  showForm() {
    this.setState({formVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formVisibleOnPage: false});
  }

  addNewCreatureToTamagotchi(newTamagotchi) {
    let newMasterTamagotchi = this.state.masterTamagotchi.slice();
    newMasterTamagotchi.push(newTamagotchi);
    console.log(this.state.masterTamagotchi);
    this.setState({masterTamagotchi: newMasterTamagotchi});
  };

  render(){
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <CreateTamagotchi onNewCreateTamagotchi={this.addNewCreatureToTamagotchi}
      hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm.bind(this)}>New Tamagotchi</button>;

    }

    return (
      <div>
        {formAreaContent}
        <TamagotchiList/>
      </div>
    )
  };
}

Tamagotchi.propTypes = {
  onNewCreateTamagotchi: PropTypes.func,
}

export default Tamagotchi;
