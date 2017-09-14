import React from "react";
import PropTypes from "prop-types";


class TamagotchiDies extends React.Component {


  constructor(props) {
    super(props);
    this.addRest = this.addRest.bind(this);
    this.addPlay = this.addPlay.bind(this);
    this.addFood = this.addFood.bind(this);
    this.reduceLife = this.reduceLife.bind(this);
    this.state = {
      life: 100
    };
  }

  componentDidMount() {
    this.life = setInterval(() =>
      this.reduceLife(), 5000 );

  }

  reduceLife() {
    console.log("hello");
    var newLife = this.state.life - 5;
    console.log(newLife);
    this.setState({life: newLife});
    if (newLife <= 0) {
      this.componentWillUnmount();
    }
  }

  componentWillUnmount(){
      clearInterval(this.life);
      alert("sorry your pet has died")
    }

    addFood(event) {
      var newFood = this.state.life + 5;
      console.log("clicked");
      this.setState({life: newFood});
    }

    addRest(event) {
      var newRest = this.state.life + 10;
      this.setState({life: newRest});
    }

    addPlay(event) {
      var newPlay = this.state.life + 3;
      this.setState({life: newPlay});
    }

  render() {
    return (
      <div>
        <p>Life Force: {this.state.life}</p>
        <button onClick={this.addFood}>Feed me!</button>
        <button onClick={this.addRest}>Sleep </button>
        <button onClick={this.addPlay}>Play! </button>
      </div>
    )
  }
}




TamagotchiDies.propTypes = {
  componentDidMount: PropTypes.func,
  life: PropTypes.number,
  reduceLife: PropTypes.func,
  name: PropTypes.string,
  addFood: PropTypes.func
}

export default TamagotchiDies;
