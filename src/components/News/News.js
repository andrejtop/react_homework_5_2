import React from "react";
import "./News.css";
import PropTypes from "prop-types";

/* 
  компоненты "Новости"
  навигация по новостям, список новостей со ссылками
*/

export default function News({ newsTabs, news }) {
  return (
    <section className="news">
      <div className="news_tab">
        {newsTabs.map((item) => (
          <a className="tab_item" href={item.link} key={item.title}>
            {item.title}
          </a>
        ))}
      </div>
      <div>
        <ul className="news_list">
          {news.map((o) => (
            <li className="list_item" key={o.title}>
              <img src={o.img} className="item_img" alt="..." />
              <a className="item_link" href={o.link}>
                {o.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

News.propTypes = {
  news: PropTypes.array,
  newsTabs: PropTypes.array,
};

News.defaultProps = {
  news: [],
  newsTabs: [],
};