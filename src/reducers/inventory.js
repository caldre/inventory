export const inventoryReducer = (inventory = [], action) => {
  switch (action.type) {
    case "SPAWN_ITEM":
      return [...inventory, action.payload];
    case "START_DRAG_ITEM":
      return inventory.filter((item) => item.id !== action.payload.id);
    case "DROP_ITEM":
      return [...inventory, action.payload];
    default:
      return inventory;
  }
};

export const equipmentReducer = (
  equipment = {
    head: {
      id: "100",
      name: "Helmet",
      category: "head",
      description: "This is a fine helmet FROM REDUX",
      image: "helmet",
      stats: {
        HP: 10,
        Attack: 0,
        Defence: 5,
      },
    },
    leftArm: null,
    chest: null,
    rightArm: null,
    leftLeg: null,
    rightLeg: null,
  },
  action
) => {
  return equipment;
};
