import React from "react";
import { connect } from "react-redux";
import { drop } from "../../actions/inventory";
import { v4 as uuidv4 } from "uuid";

const Slot = ({
  id = uuidv4(),
  className = null,
  children = null,
  name,
  props,
}) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const DOMcharSlot = document.getElementById(e.target.id);
    const DOMitem = document.getElementById(e.dataTransfer.getData("item"));
    DOMcharSlot.appendChild(DOMitem);

    const charSlotID = e.target.id;
    const itemID = e.dataTransfer.getData("item");

    drop(itemID, charSlotID);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={id}
      className={`slot ${className}`}
      onDrop={handleDrop}
      onDragOver={dragOver}
    >
      {children}
    </div>
  );
};

export default connect(null, { drop })(Slot);
