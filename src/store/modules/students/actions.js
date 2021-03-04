// action types
import { STUDENTS_GET } from "./actionTypes";

//--------------------------------------------------
export const studentsGet = (studentsList) => ({
  type: STUDENTS_GET,
  studentsList,
});
