import React from "react";
import News from "./News/News.js";
import Currency from "./Currency/Currency.js";
import Services from "./Services/Services.js";
import Search from "./Search/Search.js";
import Banner from "./Banner.js";
import Widgets from "./Widgets.js";
import { newsTabs, news, сurrency, services, banner } from "../data.js";

export default function Decomposition() {
  return (
    <div className="main">
      <News newsTabs={newsTabs} news={news} />
      <Currency currency={сurrency} />
      <Services services={services} />
      <Search>
        <span className="search_text">
          Найдётся всё. Например, <a href="#">фазы луны сегодня</a>
        </span>
      </Search>
      <Banner img={banner.img} link={banner.link} />
      <Widgets />
    </div>
  );
}