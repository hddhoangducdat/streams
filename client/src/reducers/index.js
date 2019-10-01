import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";
import authReducers from "./authReducers";

export default combineReducers({
  auth: authReducers,
  form: formReducer,
  streams: streamReducer
});
