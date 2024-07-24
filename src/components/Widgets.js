import React from "react";
import Widget from "./Widget.js";
import Weather from "./Weather/Weather.js";
import Popular from "./Popular/Popular";
import TvList from "./TvList/TvList";
import LiveList from "./LiveList/LiveList";
import "../App.css";
import { forecast, popular, tvList, liveList } from "../data.js";

/* 
  Компонент с дополнительными виджетами (погода, ТВ и тд)
*/

export default function Widgets() {
  return (
    <section className="widgets">
      <Widget title="Погода" link="#">
        <Weather forecast={forecast} />
      </Widget>
      <Widget title="Посещаемое" link="#">
        <Popular popular={popular} />
      </Widget>
      <Widget title="Карта Германии" link="#">
        <div>Расписания</div>
      </Widget>
      <Widget title="Телепрограмма" link="#">
        <TvList tvList={tvList} />
      </Widget>
      <Widget title="Эфир" link="#">
        <LiveList liveList={liveList} />
      </Widget>
    </section>
  );
}