// houses
import { SLYTHERIN, GRYFFINDOR, RAVENCLAW, HUFFLEPUFF } from "../../../helper";
const houses = [SLYTHERIN, GRYFFINDOR, RAVENCLAW, HUFFLEPUFF];

//---------------------------------------------------------------------------
const housesReducer = (state = houses, action) => {
  switch (action.type) {
    case "@houses/TABLE":
      return;
    default:
      console.log("state inicial das casas :", state)
      return state;
  }

}

export default housesReducer
