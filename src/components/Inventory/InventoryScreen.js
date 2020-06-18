import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import Slot from "./Slot";

const InventoryScreen = (props) => {
  const renderInventoryItems = props.inventoryList.map((item) => (
    <Slot>
      <Item item={item} />
    </Slot>
  ));

  return (
    <ul className="stash-container">
      {renderInventoryItems}
      <Slot />
      <Slot />
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    inventoryList: state.inventoryReducer,
  };
};

export default connect(mapStateToProps)(InventoryScreen);
