import React, { useEffect, useMemo } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Card from "../components/Card.js";
import "../global.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../redux/ducks/seriesSlice.js";

export default function MainScreen() {
  const dispatch = useDispatch();

  const seriesData = useSelector((state) => state.series);

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch]);

  const renderList = useMemo(() => {
    return (
      !!seriesData?.length &&
      Object?.values(seriesData).map((data,index) => <Card {...data} key={index}/>)
    );
  }, [seriesData]);

  return (
    <div className="main-screen-wrapper">
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
        {!!seriesData?.length && renderList}
      </Carousel>
    </div>
  );
}
