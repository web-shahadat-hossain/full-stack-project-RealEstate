import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { img, description, title } = service;
  return (
    <div>
      <div className="box">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="services-btn">learn more</button>
      </div>
    </div>
  );
};

export default Service;
