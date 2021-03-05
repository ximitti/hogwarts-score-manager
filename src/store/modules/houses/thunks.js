// actions
import { houseAdd, houseSub } from "./actions";

//-----------------------------------------------
export const houseAddThunk = (house, score) => (dispatch, getStore) => {
  const { housesList } = getStore();

  const newList = housesList.map((element) => {
    return element.name === house
      ? { ...element, score: element.score + +score }
      : element;
  });

  newList.sort((a, b) => b.score - a.score);

  dispatch(houseAdd(newList));
};

export const houseSubThunk = (house, score) => (dispatch, getStore) => {
  const { housesList } = getStore();

  const newList = housesList.map((element) => {
    return element.name === house
      ? { ...element, score: element.score - +score }
      : element;
  });

  newList.sort((a, b) => b.score - a.score);

  dispatch(houseSub(newList));
};
