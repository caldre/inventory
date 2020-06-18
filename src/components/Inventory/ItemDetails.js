import React from "react";

const ItemDetails = (props) => {
  const renderStats = () => {
    return Object.entries(props.stats).map(([key, value]) => (
      <div className="stats">
        {key} : {value}
      </div>
    ));
  };

  return (
    <div
      className="item-description"
      id={`description${props.id}`}
      style={{
        display: props.shown,
        top: `${props.coordinates.yAxis}px`,
        left: `${props.coordinates.xAxis}px`,
      }}
    >
      {props.description}
      <br></br>
      <br></br>
      <br></br>

      {renderStats()}
    </div>
  );
};

export default ItemDetails;
