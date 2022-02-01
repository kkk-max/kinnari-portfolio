import { combineReducers } from "redux";
import addReducer from "./reducers/addProject";
import deleteReducer from "./reducers/deleteProject";
import editReducer from "./reducers/editProject";
import listingReducer from "./reducers/listingProjects";

const rootReducer = combineReducers({
  //   accessToken: accessTokenReducer,
  listingData: listingReducer,
  addData: addReducer,
  editData: editReducer,
  deleteData: deleteReducer,
});

export default rootReducer;
