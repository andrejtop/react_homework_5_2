import React from "react";
import "./Services.css";
import PropTypes from "prop-types";

/* 
  Компонент со ссылками на разделы сайта
*/

export default function Services({ services }) {
  return (
    <section className="services">
      {services.map((item) => (
        <div className="services_item" key={item.title}>
          <a className="services_link" href={item.link}>
            {item.title}
          </a>
        </div>
      ))}
    </section>
  );
}

Services.propTypes = {
  services: PropTypes.array,
};

Services.defaultProps = {
  services: [],
};