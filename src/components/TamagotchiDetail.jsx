import React from "react";
import PropTypes from "prop-types";
import TamagotchiDies from "./TamagotchiDies";

function TamagotchiDetail(props) {
  return(
    <div>
      <h3>Tamagotchi name: {props.name}</h3>
      <h3><TamagotchiDies reduceLife= {this.reduceLife}/>
      </h3>
      <h3>Time Since Birth: {props.timeSinceBirth}</h3>
    </div>
  )
}

TamagotchiDetail.propTypes = {
  name: PropTypes.string,
  life: PropTypes.number,
  timeSinceBirth: PropTypes.string,
  reduceLife: PropTypes.func
}


export default TamagotchiDetail;
