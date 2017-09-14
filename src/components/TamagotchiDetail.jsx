import React from "react";
import PropTypes from "prop-types";

function TamagotchiDetail(props) {
  return(
    <div>
    <h3>Tamagotchi name: {props.name}</h3>
    <h3>Tamagotchi Life: {props.life}</h3>
    <h3>Time Since Birth: {props.timeSinceBirth}</h3>
    </div>
  )
}

TamagotchiDetail.propTypes = {
  name: PropTypes.string,
  life: PropTypes.number,
  timeSinceBirth: PropTypes.string
}


export default TamagotchiDetail;
