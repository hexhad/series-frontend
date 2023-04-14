import React, { useEffect, useMemo, useState } from "react";
import { db } from "../plugins/firebase.js";
import { collection, getDocs } from "firebase/firestore";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Card from "../components/Card.js";
import "../global.scss";

export default function MainScreen() {
  const [seriesSet, setSeriesSet] = useState();

  async function call() {
    const seriesCollection = collection(db, "series");
    const data = await getDocs(seriesCollection);
    let struct = data.docs.map((d) => ({ ...d.data(), id_fire: d.id }));
    setSeriesSet(struct);
  }

  useEffect(() => {
    call();
  }, []);

  const renderList = useMemo(() => {
    return (
      !!seriesSet?.length &&
      Object?.values(seriesSet).map((data) => <Card {...data} />)
    );
  }, [seriesSet]);

  return (
    <div className="main-screen-wrapper">
      <Carousel 
    //   centerMode
    showStatus={false}
    showArrows={false}
    autoPlay
    infiniteLoop
      >{!!seriesSet?.length && renderList}</Carousel>
    </div>
  );
}
