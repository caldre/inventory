export const startDrag = (event) => {
  console.log("ACTION: Start dragging");
  return {
    type: "START_DRAG_ITEM",
    paylod: event,
  };
};

export const drag = (event) => {
  console.log("ACTION: Continue dragging");
  return {
    type: "DRAG_ITEM",
    paylod: event,
  };
};

export const drop = (item, slot) => {
  console.log("ACTION: Drop item");
  return {
    type: "DROP_DRAG_ITEM",
    paylod: item,
    slot,
  };
};

export const spawnItem = (item) => {
  const { id, name, category, description, image, stats } = item;
  return {
    type: "SPAWN_ITEM",
    payload: { id, name, category, description, image, stats },
  };
};

export const equipItem = (item) => {
  const { name, bonus, type, id } = item;
  return {
    type: "EQUIP_ITEM",
    payload: {
      id,
      name,
      bonus,
      type,
    },
  };
};
