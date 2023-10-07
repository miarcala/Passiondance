"use client";
import { Fragment, useEffect, useState } from "react";
import Comment from "@/components/Comment";
import Loader from "@/components/Loader";
import CommentForm from "./CommentForm";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("/api/comments");
      const data = await response.json();

      setComments(data);
    };

    fetchComments();
  }, []);

  if (!comments.length) return <Loader />;

  return (
    <>
      {comments && (
        <div className="comments">
          <h4 className="comment-title">comments</h4>
          <ul>
            {comments.map((cmnt) => (
              <Fragment key={cmnt.id}>
                {cmnt.postId === +postId && (
                  <li>
                    <Comment
                      id={cmnt.id}
                      username={cmnt.username}
                      message={cmnt.message}
                    />
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      )}

      <CommentForm postId={postId} />
    </>
  );
}
