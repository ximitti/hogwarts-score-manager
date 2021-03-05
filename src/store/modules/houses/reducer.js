// action types
import { HOUSE_ADD, HOUSE_SUB } from "./actionTypes";

// helper
import houses from "../../../helper";

//---------------------------------------------------------------------------
const housesReducer = (state = houses, action) => {
  switch (action.type) {
    case HOUSE_ADD:
      const { houseAddList } = action;

      return houseAddList;
    case HOUSE_SUB:
      const { houseSubList } = action;

      return houseSubList;
    default:
      return state;
  }
};

export default housesReducer;
