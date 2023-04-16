import React, { useEffect, useMemo, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Card, SquareCard } from "../components/Card.js";
import "../global.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../redux/ducks/seriesSlice.js";

export default function MainScreen() {
  const dispatch = useDispatch();

  const seriesData = useSelector((state) => state.series);

  const [mode, setMode] = useState(false);

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch]);

  const renderSlider = useMemo(() => {
    return (
      <Carousel
        //   centerMode
        showStatus={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        stopOnHover
        swipeable
        showThumbs={false}
      >
        {!!seriesData?.length &&
          Object?.values(seriesData).map((data, index) => (
            <Card {...data} key={index} />
          ))}
      </Carousel>
    );
  }, [seriesData]);

  const renderList = useMemo(() => {
    return (
      <div className="list-wrap">
        {!!seriesData?.length &&
          Object?.values(seriesData).map((data, index) => (
            <SquareCard {...data} key={index} />
          ))}
      </div>
    );
  }, [seriesData]);

  return (
    <div className="main-screen-wrapper">
      <div className="title-wrapper">
        <p className="title">Series Collection</p>
      </div>
      <button onClick={() => setMode((e) => !e)} className="fab">
        Mode
      </button>
      {mode ? renderList : renderSlider}
    </div>
  );
}
