import React from "react";
import PropTypes from "prop-types";
import TamagotchiDetail from "./TamagotchiDetail";

function TamagotchiList(props){
  console.log(props.creatures);
  return (
    <div>
      <h3>{props.creatures.map((creature, index) =>
        <TamagotchiDetail
       name= {creature.name}
       timeSinceBirth={creature.timeSinceBirth}
       life={creature.life}
       key={index}/>
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
