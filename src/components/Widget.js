import React from "react";

export default function Widget(props) {
  return (
    <div className="widget">
      <h3 className="widget-title">
        <a href={props.link}>{props.title}</a>
      </h3>
      {props.children}
    </div>
  );
}