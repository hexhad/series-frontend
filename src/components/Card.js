import React from "react";
import "./styles/Card.scss";
import useWindowDimensions from "../hooks/useWindowDimentions";
import { useNavigate } from "react-router-dom";

export function Card(data) {
  const navigate = useNavigate();
  const {
    // id,
    name,
    network,
    image_thumbnail_path,
    rating,
    status,
    description,
    pictures,
    episodes,
    genres,
    onPress,
    id_fire,
  } = data;

  const ratingComp = (stars) => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  const navigateToCast = () =>{
    if (id_fire === "the-company-you-keep") {
      navigate("/series-frontend/cast",{state:{name,cast:"Catherine Haena Kim"}});
    } else {
      navigate("/series-frontend/cast",{state:{name,cast:"Thomas Cruise Mapother IV"}});
    }
    
  }

  return (
    <div className="card">
      <div className="card-container">
        <div className={`card-tag ${status === "Running" && "runnning"}`}>
          <p>{status}</p>
        </div>
        <div className="card-image-wrapper">
          {image_thumbnail_path.length > 28 ? (
            <img src={image_thumbnail_path} alt={name} className="card-image" />
          ) : (
            <div className="placeholder-wrapper">
              <img
                alt="placeholder"
                src="https://hexhad.github.io/src/itsmine.png"
                className="img-placeholder"
              />
            </div>
          )}
        </div>
        <div className="card-data-wrapper">
          <p className="card-name">{name}</p>
          <p className="card-genres">{formatter.format(genres)}</p>
          <p className="card-rating">{ratingComp(rating / 2)}</p>
          {/* <p className="card-status">{status}</p> */}
          <span className="card-desc">
            {description.replaceAll(/<.*>|<\/.*>/g, "")}
          </span>
          <button
            onClick={() => {
              onPress(episodes);
            }}
          >
            <p className="card-episodes">{`Episodes : ${episodes.length}`}</p>
          </button>
          <p className="card-network">{network}</p>
          <div className="sub-image-set">
            {pictures?.map(
              (img, index) =>
                index < 4 && <img src={img} alt={index} key={index} />
            )}
          </div>
          {/* {id_fire === "the-company-you-keep" && ( */}
            <div>
              <button onClick={navigateToCast}>cast</button>
            </div>
          {/* )} */}
          {/* <div className="card-bottom">
            <div className="red-fancy"></div>
            <div className="blue-fancy"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export function SquareCard(data) {
  const { name, image_thumbnail_path } = data;

  console.log(data);

  const { width } = useWindowDimensions();

  console.log(width);

  return (
    <div className="square">
      {image_thumbnail_path.length > 28 ? (
        <img src={image_thumbnail_path} alt={name} className="square-image" />
      ) : (
        <div className="placeholder-wrapper">
          <img
            alt="placeholder"
            src="https://hexhad.github.io/src/itsmine.png"
            className="img-placeholder"
          />
        </div>
      )}

      <p className="square-title">{name}</p>
    </div>
  );
}
