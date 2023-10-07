import React from "react";
import Link from "next/link";

export default function (props) {
  return (
    <div className="col-md-4">
      <article className="post">
        <img src={`assets/images/post/${props.id}.jpg`} alt="" />
        <h4>
          <Link href={"/blog/" + props.id}>{props.title}</Link>
        </h4>
        <p>{props.excerpt}</p>
        <Link href={props.url} className="btn btn-round">
          read more
        </Link>
      </article>
    </div>
  );
}
