import React from "react";
import "./Currency.css";
import PropTypes from "prop-types";

/* 
  компонент "Курс валют"
  наименование, значение и дельта
*/

export default function Currency({ currency }) {
  return (
    <section className="currency">
      {currency.map((item) => (
        <div className="currency_item" key={item.title}>
          <a className="currency_link" href={item.link}>
            {item.title}
          </a>
          <span className="currency_value">{item.value.toFixed(2)}</span>
          <span className="currency_delta">{item.delta.toFixed(2)}</span>
        </div>
      ))}
    </section>
  );
}

Currency.propTypes = {
  currency: PropTypes.array,
};

Currency.defaultProps = {
  currency: [],
};