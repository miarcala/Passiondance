import { Component, useState } from "react";

export default function CommentForm({ postId }) {
  const [comment, setComment] = useState({
    id: null,
    postId: null,
    username: "",
    message: "",
  });
  const [commentPosted, setCommentPosted] = useState(false);

  const inputChangeHandler = (e) => {
    setComment((prevComment) => {
      return {
        ...prevComment,
        postId,
        id: Math.floor(Math.random() * 100),
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Comment form", comment);
    e.target.reset();
    setCommentPosted(true);
    setComment({
      id: null,
      postId: null,
      username: "",
      message: "",
    });
  };

  let message = "";
  if (commentPosted) {
    message =
      "Your comment has been successfully posted. Reload to see your comment.";
  }
  return (
    <>
      {message}
      <div className="comment-form">
        <h4 className="comment-title">Leave a comment</h4>
        <form onSubmit={onSubmitHandler}>
          <input
            name="username"
            type="text"
            placeholder="Your name"
            onChange={inputChangeHandler}
            required
          />
          <textarea
            name="message"
            placeholder="Write Comments"
            onChange={inputChangeHandler}
            required
          ></textarea>
          <button type="submit" className="btn btn-filled btn-round">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
