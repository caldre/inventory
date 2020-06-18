import React from "react";
import { connect } from "react-redux";

import { changeView } from "../../actions";
import CharacterScreen from "./CharacterScreen";
import InventoryScreen from "./InventoryScreen";

const Inventory = (props) => {
  const handleClick = () => {
    const newView = {
      inventory: false,
      playArea: true,
    };
    props.changeView(newView);
  };

  return (
    <div className="inventory-container">
      <CharacterScreen />
      <InventoryScreen />
      {/* <button onClick={handleClick}>BACK</button> */}
    </div>
  );
};

export default connect(null, { changeView })(Inventory);
