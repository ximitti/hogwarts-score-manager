// redux
import { combineReducers, createStore, applyMiddleware } from "redux";

// thunk
import thunk from "redux-thunk";

// reducers
import studentsReducer from "./modules/students/reducer";
import housesReducer from "./modules/houses/reducer";
//--------------------------------------------------------------
const reducers = combineReducers({
  studentsList: studentsReducer,
  housesList: housesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
