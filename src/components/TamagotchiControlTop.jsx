import React from "react";
import PropTypes from "prop-types";
import CreateTamagotchi from "./CreateTamagotchi";

class TamagotchiControlTop extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm() {
    this.setState({formVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formVisibleOnPage: false});
  }

  render(){
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <CreateTamagotchi addNewCreatureToTamagotchi={this.props.addNewCreatureToTamagotchi}
      hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <button onClick={this.showForm.bind(this)}>New Tamagotchi</button>;
    }
    return (
      <div>
        {formAreaContent}
      </div>

    );
  }

}
  TamagotchiControlTop.propTypes = {
    addNewCreatureToTamagotchi: PropTypes.func,
  }


export default TamagotchiControlTop;
