import React from "react";
import PropTypes from "prop-types";

function TamagotchiList(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <hr/>
    </div>
  );
}

TamagotchiList.propTypes = {
  name: PropTypes.string,
};

export default TamagotchiList;
