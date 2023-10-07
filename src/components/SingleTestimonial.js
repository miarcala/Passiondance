import React from "react";

export default function SingleTestimonial(props) {
  return (
    <div className="single-tst">
      <img src="assets/images/quote.png" alt="" />
      <p>{props.body}</p>
      <div className="client-info">
        <img src="assets/images/client-1.png" alt="" className="thumb" />
        <p>
          {props.name}, <span>{props.designation}</span>
        </p>
      </div>
    </div>
  );
}
