// action types
import { HOUSE_ADD, HOUSE_SUB } from "./actionTypes";

//--------------------------------------------------
export const houseAdd = (houseAddList) => ({
  type: HOUSE_ADD,
  houseAddList,
});

export const houseSub = (houseSubList) => ({
  type: HOUSE_SUB,
  houseSubList,
});
