import React, { useEffect } from "react";
import { connect } from "react-redux";
import { rePositionX, rePositionY } from "../actions";

const HandleKeyPress = (props) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        props.rePositionX(props.positionX + 1, "player");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        props.rePositionX(props.positionX - 1, "player");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        props.rePositionY(props.positionY - 1, "player");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        props.rePositionY(props.positionY + 1, "player");
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return <React.Fragment></React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    positionY: state.playerReducer.positionY,
    positionX: state.playerReducer.positionX,
  };
};

export default connect(mapStateToProps, { rePositionX, rePositionY })(
  HandleKeyPress
);
