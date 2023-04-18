import React, { useEffect, useMemo, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Card, SquareCard } from "../components/Card.js";
import "../global.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSeries, setSelectedSeries } from "../redux/ducks/seriesSlice.js";
import EpisodePreview from "../utils/EpisodePreview.js";

// Catherine Haena Kim

export default function MainScreen() {
  const dispatch = useDispatch();

  const { seriesList, selectedSeries } = useSelector((state) => state.series);

  const [mode, setMode] = useState(false);
  const [stopCarousel, setStopCarousel] = useState(false);

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch]);

  useEffect(() => {
    setStopCarousel(!!selectedSeries?.view);
  }, [selectedSeries]);

  function setViewCard(episodes) {
    dispatch(setSelectedSeries({ episodes, view: true }));
  }

  const renderSlider = useMemo(() => {
    return (
      <Carousel
        //   centerMode
        showStatus={false}
        showArrows={false}
        autoPlay={!stopCarousel}
        infiniteLoop
        stopOnHover
        swipeable
        showThumbs={false}
      >
        {!!seriesList?.length &&
          Object?.values(seriesList).map((data, index) => (
            <Card {...data} key={index} onPress={setViewCard} />
          ))}
      </Carousel>
    );
  }, [seriesList, stopCarousel]);

  const renderList = useMemo(() => {
    return (
      <div className="list-wrap">
        {!!seriesList?.length &&
          Object?.values(seriesList).map((data, index) => (
            <SquareCard {...data} key={index} />
          ))}
      </div>
    );
  }, [seriesList]);

  return (
    <>
    <EpisodePreview {...selectedSeries}/>
      <div className="main-screen-wrapper">
        <div className="title-wrapper">
          <p className="title">Series Collection</p>
        </div>
        <button onClick={() => setMode((e) => !e)} className="fab">
          Mode
        </button>
        {mode ? renderList : renderSlider}
      </div>
    </>
  );
}
