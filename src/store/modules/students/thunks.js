// axios
import axios from "axios";

// api
import API from "../../../services";

// actions
import { studentsGet } from "./actions";

//---------------------------------------------------
export const getStudentsThunk = () => async (dispatch) => {
  try {
    const response = await axios.get(API);

    dispatch(studentsGet(response.data));
  } catch (e) {
    console.log(e);
  }
};
