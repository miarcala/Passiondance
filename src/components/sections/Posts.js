"use client";

import { useEffect, useState } from "react";
import Post from "@/components/Post";
import Loader from "@/components/Loader";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  if (!posts.length)
    return (
      <div className="row">
        <div className="col-12">
          <Loader />
        </div>
      </div>
    );

  const renderPosts = posts.map((post) => {
    return (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        excerpt={post.excerpt}
        body={post.body}
        url={"/blog/" + post.id}
      />
    );
  });

  return (
    // Posts section start
    <div className="row">{renderPosts}</div>
    // Posts section end
  );
}
