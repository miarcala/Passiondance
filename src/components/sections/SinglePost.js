"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function SinglePost({ postId }) {
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();

      const post = data.find((item) => item.id === +postId);
      setPost(post);
    };

    fetchPosts();
  }, []);

  if (!post) return <Loader />;

  const { body, meta, title } = post;
  return (
    <>
      <article className="entry-content">
        <img src="/assets/images/post/1.jpg" alt="" />
        <div className="meta-tags">
          <Link href="#" className="post-meta">
            <i className="ti-time" />
            {meta.created}
          </Link>
          <Link href="#" className="post-meta">
            <i className="ti-package" />
            {meta.categories.join(", ")}
          </Link>
          <Link href="#" className="post-meta">
            <i className="ti-tag" />
            {meta.tags.join(", ")}
          </Link>
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    </>
  );
}
