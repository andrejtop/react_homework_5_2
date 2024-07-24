import React from "react";
import "./Search.css";

/* 
  Компонент "поиск"
  лого, поле ввода, кнопка 
*/

export default function Search(props) {
  return (
    <section className="search">
      <div className="search_row">
        <img
          className="search_logo"
          src="http://via.placeholder.com/100x50"
          alt="logo"
        />
        <input
          className="search_input"
          type="text"
          placeholder="Текст для поиска"
        />
        <button className="search_button" type="submit">
          Найти!
        </button>
      </div>
      {props.children}
    </section>
  );
}