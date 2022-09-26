import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentOnPost, deleteCommentOnPost } from "../actions/postActions";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const CommentModal = ({ id, commentId, toggleComment }) => {
  const dispatch = useDispatch();
  const [commentValue, setCommentValue] = useState("");

  const addCommentHandler = (e) => {
    e.preventDefault();
    dispatch(addCommentOnPost(id, commentValue));
  };

  const deleteCommentHandler = () => {
    dispatch(deleteCommentOnPost(id, commentId));
  };

  return (
    <motion.div
      initial={{
        scale: 0,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        scale: 1,
        transition: { type: "spring", bounce: 0.3, duration: 0.5 },
      }}
      className="comment-modal"
    >
      <AiFillCloseCircle
        className="close-modal"
        onClick={() => toggleComment()}
      />
      <form onSubmit={addCommentHandler}>
        <input
          type="text"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          placeholder="Comment Here..."
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      {/* {comments.length > 0 ? comments.map(comment => (<div className="comment-user">
      <Link to={`/user/${userId}`}>
        <img src={avatar} alt="" />
        <h3>{name}</h3>
      </Link>
      <p>{comment}</p>
      <button>
        Delete Icon
      </button>
      </div>)): <h1>No comments yet</h1>} */}
    </motion.div>
  );
};

export default CommentModal;
