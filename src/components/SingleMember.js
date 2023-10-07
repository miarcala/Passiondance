import React from "react";
import MemberSocial from "./MemberSocial";

export default function SingleMember(props) {
  return (
    <div className="single-memb">
      <img src={`/assets/images/team/${props.id}.jpg`} alt={props.name} />
      <div className="memb-details">
        <h6>{props.name}</h6>
        <span>{props.speciality}</span>
        <MemberSocial socialLinks={props.social} />
      </div>
    </div>
  );
}
