import React from "react";
import "./LiveList.css";
import PropTypes from "prop-types";

/* 
  Компонент "Эфир"
  иконка, название и описание
*/

export default function LiveList({ liveList }) {
  return liveList.map((item) => (
    <div className="live" key={item.title}>
      <img src="http://dummyimage.com/20x20" className="live_img" alt="..." />
      <a href={item.link} className="live_link">
        <span className="live_title">{item.title}</span>
      </a>
      <span className="live_description">{item.description}</span>
    </div>
  ));
}

LiveList.propTypes = {
  liveList: PropTypes.array,
};

LiveList.defaultProps = {
  liveList: [],
};