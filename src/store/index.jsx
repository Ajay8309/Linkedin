import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThunkMiddleware } from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [...getDefaultMiddleware(), ThunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;
