import React from "react";
import { connect } from "react-redux";
import { createMob, createPlayer, changeView } from "../actions";
import { spawnItem } from "../actions/inventory";

const Creator = (props) => {
  const mockUpData = [
    {
      id: "1",
      name: "Helmet",
      category: "head",
      description: "This is a fine helmet",
      image: "helmet2",
      stats: {
        HP: 10,
        Attack: 0,
        Defence: 5,
      },
    },
    {
      id: "2",
      name: "Sword",
      category: "left-hand",
      description: "This is a fine sword",
      image: "sword",
      stats: {
        HP: 0,
        Attack: 20,
        Defence: 5,
      },
    },
    {
      id: "3",
      name: "Shield",
      category: "right-hand",
      description: "This is a fine shield",
      image: "shield",
      stats: {
        HP: 0,
        Attack: 0,
        Defence: 9,
      },
    },
    {
      id: "4",
      name: "Chainmail",
      category: "chest",
      description: "This is a fine chainmail",
      image: "chest",
      stats: {
        HP: 20,
        Attack: 0,
        Defence: 7,
      },
    },
    {
      id: "5",
      name: "Running boot",
      category: "left-leg",
      description: "This is a fine left leg boot",
      image: "left-leg",
      stats: {
        HP: 0,
        Attack: 0,
        Defence: 3,
      },
    },
    {
      id: "6",
      name: "Armored boot",
      category: "right-leg",
      description: "This is a fine right leg boot",
      image: "right-leg",
      stats: {
        HP: 1,
        Attack: 0,
        Defence: 2,
      },
    },
  ];

  mockUpData.map((item) => {
    props.spawnItem(item);
  });

  const newmob = {
    name: "mölli",
    damage: 4,
    health: 10,
    positionX: 3,
    positionY: 1,
  };

  const newmob2 = {
    name: "lisko",
    damage: 4,
    health: 10,
    positionX: 1,
    positionY: 3,
  };

  const player = {
    name: "MATTI",
    damage: 1,
    health: 100,
    positionX: 2,
    positionY: 3,
  };

  const newView = {
    inventory: true,
    playArea: false,
  };

  props.createMob(newmob);
  props.createMob(newmob2);
  props.createPlayer(player);
  props.changeView(newView);

  return null;
};

export default connect(null, {
  createMob,
  createPlayer,
  spawnItem,
  changeView,
})(Creator);
