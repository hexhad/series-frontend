import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCelebrity } from "../redux/ducks/celebritySlice";

import "./styles/AllCast.scss";
import { useLocation } from "react-router-dom";

export default function AllCast() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { celebrity } = useSelector((state) => state.celebrity);

  useEffect(() => {
    console.log(location?.state?.cast);
    !!location?.state && dispatch(getCelebrity(location.state.cast));
    // !!location?.state && dispatch(getCelebrity(location.state.name));
  }, []);

  // useEffect(() => {
  //   console.log(celebrity);
  //   celebrity?.d?.map(e=>console.log(e));
  // }, [celebrity]);

  const renderCleb = useMemo(() => {
    return celebrity?.d?.map(
      (e,i) =>
        !!e?.i && (
          <div className="cleb-wrapper" key={i}>
            <img src={e?.i?.imageUrl} className="cleb-image" />
            <p className="cleb-name">{e?.l}</p>
          </div>
        )
    );
  }, [celebrity]);

  return (
    <div className="celeb">
      <p className="render-title">Celebrity</p>
      <div className="render-celeb">{renderCleb}</div>
      {!!location.state && <p>{`series : ${location.state.name}`}</p>}
      <p className="render-title">used this for check router</p>
    </div>
  );
}
