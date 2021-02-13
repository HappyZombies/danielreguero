import { createStore, combineReducers } from "redux";

const defaultLinkState = {
  link: "/",
};

const link = (state = defaultLinkState, action) => {
  console.log(action);
  if (action.type === "UPDATE_LINK") {
    return { link: action.payload.link };
  }
  return state;
};

export default createStore(combineReducers({ link }));
