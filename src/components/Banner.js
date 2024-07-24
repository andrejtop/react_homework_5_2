import React from "react";
import PropTypes from "prop-types";

/* 
  Компонент "баннер" со ссылкой
*/

export default function Banner({ img, link }) {
  return (
    <div className="banner">
      <a className="banner_link" href={link}>
        <img className="banner_img" src={img} alt="" />
      </a>
    </div>
  );
}

Banner.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
};

Banner.defaultProps = {
  img: "",
  link: "",
};