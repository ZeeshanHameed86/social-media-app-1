import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPosts } from "../actions/userActions";
import Loader from "./Loader";
import { useAlert } from "react-alert";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error: likeError, message } = useSelector((state) => state.like);
  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

  useEffect(() => {
    dispatch(getFollowingPosts());
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, likeError, dispatch]);

  return loading ? (
    <Loader />
  ) : posts && posts.length > 0 ? (
    posts.map((post) => {
      return <Post post={post} />;
    })
  ) : (
    <h1>No posts yet</h1>
  );
};

export default Posts;
