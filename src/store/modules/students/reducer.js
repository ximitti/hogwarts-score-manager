// action types
import { STUDENTS_GET } from "./actionTypes";

//-------------------------------------------------
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case STUDENTS_GET:
      const { studentsList } = action;

      return studentsList;

    default:
      return state;
  }
};

export default studentsReducer;
