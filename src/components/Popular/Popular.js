import React from "react";
import "./Popular.css";
import PropTypes from "prop-types";

/* 
  Компонент "Посещаемое"
  наименование, описание и ссылка
*/

export default function Popular({ popular }) {
  return popular.map((item) => (
    <div className="popular" key={item.title}>
      <a href={item.link} className="popular_link">
        <span className="popular_title">{item.title}</span>
      </a>
      <span className="popular_description">{item.description}</span>
    </div>
  ));
}

Popular.propTypes = {
  popular: PropTypes.array,
};

Popular.defaultProps = {
  popular: [],
};