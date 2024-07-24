import React from "react";
import "./Weather.css";
import PropTypes from "prop-types";

/* 
  Компонент "погода"
  картинка с типом погоды и основная температура в течении дня
*/

export default function Weather({ forecast }) {
  return (
    <div className="weather">
      <img src={forecast.icon} className="weather_img" alt="..." />
      <div className="weather__temp">{forecast.temp_morning}°</div>
      <div className="weather__forecast">
        <span>Днём {forecast.temp_afternoon},</span>
        <span>вечером {forecast.temp_evening}</span>
      </div>
    </div>
  );
}

Weather.propTypes = {
  forecast: PropTypes.object,
};

Weather.defaultProps = {
  forecast: {},
};