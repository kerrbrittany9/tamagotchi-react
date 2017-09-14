import React from "react";
import PropTypes from "prop-types";


function TamagotchiList(props){
  console.log(props.creatures);
  return (
    <div>
      <h3>{props.creatures.map((creature, index) =>
       <p>{creature.name}</p>
      )}
      </h3>
      <hr/>
    </div>
  );
}

TamagotchiList.propTypes = {
  creatures: PropTypes.array,
};

export default TamagotchiList;
