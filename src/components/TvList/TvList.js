import React from "react";
import "./TvList.css";
import PropTypes from "prop-types";

/* 
  Компонент "телепрограмма"
  время, название и описание
*/

export default function TvList({ tvList }) {
  return tvList.map((item) => (
    <div className="tv" key={item.title}>
      <span className="tv_time">{item.time}</span>
      <a href={item.link} className="tv_link">
        <span className="tv_title">{item.title}</span>
      </a>
      <span className="tv_description">{item.description}</span>
    </div>
  ));
}

TvList.propTypes = {
  tvList: PropTypes.array,
};

TvList.defaultProps = {
  tvList: [],
};