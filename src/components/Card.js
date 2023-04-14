import React from "react";
import "./styles/Card.scss";

export default function Card(data) {
  const {
    id,
    name,
    network,
    image_thumbnail_path,
    rating,
    status,
    description,
    pictures,
  } = data;
  return (
    <div key={id} className="card">
      {/* <div><img src={pictures[0]} alt={name} className="bg"/></div> */}
      <div className="card-container">
        <div className={`card-tag ${status=='Running' && 'runnning'}`}>
          <p>{status}</p>
        </div>
        <div className="card-image-wrapper">
          <img src={image_thumbnail_path} alt={name} className="card-image" />
        </div>
        <div className="card-data-wrapper">
          <p className="card-name">{name}</p>
          <p className="card-rating">{rating}</p>
          <p className="card-status">{status}</p>
          <p className="card-desc">{description}</p>
          <p className="card-network">{network}</p>
        </div>
      </div>
    </div>
  );
}
