// action types 
import {STUDENTS_GET} from "./actionTypes"

//-------------------------------------------------
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case STUDENTS_GET:
      const {studentsList} = action

      console.log("studentsList: ", studentsList)
      return studentsList;

    default:
      console.log("state inicial dos alunos :", state)
      return state;
  }
};

export default studentsReducer;
