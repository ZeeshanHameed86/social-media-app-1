import { configureStore } from "@reduxjs/toolkit";
import { likeReducer } from "./reducers/postReducer";
import {
  allUsersReducer,
  postFollowingReducer,
  userReducer,
} from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postFollowingReducer,
    allUsers: allUsersReducer,
    like: likeReducer,
  },
});

export default store;
