import React from "react";
import PropTypes from "prop-types";

class TamagotchiDies extends React.Component {


  constructor(props) {
    super(props);
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
  }

  componentDidUpdate() {
    console.log("hi");

  }

  render() {
    return (
      <div>
        <p>Life Force: {this.state.life}</p>
      </div>
    )
  }
}




TamagotchiDies.propTypes = {
  componentDidMount: PropTypes.func,
  life: PropTypes.number,
  reduceLife: PropTypes.func
}

export default TamagotchiDies;
