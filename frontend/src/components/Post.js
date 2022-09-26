import React, { useEffect, useState } from "react";
import { FaEllipsisH, FaRegCommentDots, FaRegBookmark } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../actions/postActions";
import defaultImage from "../assets/profile-1.jpg";
import postDefaultImage from "../assets/feed-2.jpg";
import { getFollowingPosts } from "../actions/userActions";
import CommentModal from "./CommentModal";
import { AnimatePresence } from "framer-motion";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [liked, setLiked] = useState(false);
  const [firstLikeName, setFirstLikeName] = useState("");
  const [likedAvatars, setLikedAvatars] = useState([]);
  const [commentToggle, setCommentToggle] = useState(false);

  const handleLike = async () => {
    setLiked(!liked);

    await dispatch(likePost(post._id));

    dispatch(getFollowingPosts());
  };

  const toggleComment = () => {
    setCommentToggle(false);
  };

  useEffect(() => {
    let temp = [];
    post.likes.forEach((item) => {
      temp.push(item.avatar);
      setLikedAvatars(temp);
      if (item._id === user._id) {
        setLiked(true);
      }
    });
    setFirstLikeName(post.likes[0] && post.likes[0].name);
  }, [post.likes, user._id]);

  return (
    <div className="feed" key={post._id}>
      <div className="head">
        <div className="user">
          <div className="profile-photo">
            <img
              src={post.owner.avatar.url ? post.owner.avatar.url : defaultImage}
              alt=""
            />
          </div>
          <div className="info">
            <h3>{post.owner.name}</h3>
            <small>Miami, 2 HOURS AGO</small>
          </div>
        </div>
        <span className="edit">
          <FaEllipsisH />
        </span>
      </div>

      <div className="photo">
        <img src={post.image.url ? post.image.url : postDefaultImage} alt="" />
      </div>
      <div>
        <p>
          <b>{post.caption}</b>
        </p>
      </div>
      <div className="action-buttons">
        <div className="interaction-buttons">
          <span onClick={handleLike}>
            {liked ? (
              <AiFillHeart style={{ color: "red" }} className="icon" />
            ) : (
              <AiOutlineHeart className="icon" />
            )}
          </span>
          <span>
            <FaRegCommentDots
              className="icon"
              onClick={() => setCommentToggle(true)}
              style={{ cursor: "pointer" }}
            />
          </span>
          <span>
            <AiOutlineShareAlt className="icon" />
          </span>
        </div>
        <div className="bookmark">
          <span>
            <FaRegBookmark />
          </span>
        </div>
      </div>
      <div className="liked-by">
        {likedAvatars.map((item) => {
          return (
            <span>
              <img src={item.url ? item.url : defaultImage} alt="" />
            </span>
          );
        })}

        {firstLikeName === undefined ? (
          <p style={{ margin: "0" }}>No likes on this post</p>
        ) : (
          <p>
            Liked by <b>{firstLikeName}</b>{" "}
            {post.likes && post.likes.length > 1 && "and"}{" "}
            <b>
              {post.likes && post.likes.length > 1 && post.likes.length - 1}{" "}
              {post.likes && post.likes.length === 1
                ? ""
                : post.likes.length > 2
                ? "others"
                : "other"}
            </b>
          </p>
        )}
      </div>
      <div className="comments text-muted">
        {post.comments.length} comment/s on this post
      </div>
      {commentToggle && (
        <CommentModal
          id={post._id}
          commentId={post.comments[0] && post.comments[0]._id}
          toggleComment={setCommentToggle}
        />
      )}
      {/* <div className="liked-by">
            <span>
              <img src={item.likedBy1} alt="" />
            </span>
            <span>
              <img src={item.likedBy2} alt="" />
            </span>
            <span>
              <img src={item.likedBy3} alt="" />
            </span>
            <p>{posts.likes}</p>
          </div>
          <div className="caption">
            <p>
              <b>{item.name}</b> Lorem ipsum dolor sit quisquam eius.{" "}
              <span className="hash-tag">{item.hashTag}</span>
            </p>
          </div>
          <div className="comments text-muted">{item.ViewComments}</div> */}
    </div>
  );
};

export default Post;
