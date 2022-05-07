import React from "react";
import "./Feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faCamera,
  faEnvelope,
  faExpand,
  faFilm,
  faHeart,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Feature = ({ feature }) => {
  const { img, location, price, title } = feature;

  return (
    <div className="box-container">
      <div className="box">
        <div class="image-container">
          <img src={img} alt="" />
          <div class="info">
            <h3>3 days ago</h3>
            <h3>for rent</h3>
          </div>
          <div class="icons">
            <a href="/" class="fas fa-film">
              <h3>
                <FontAwesomeIcon icon={faFilm} /> 2
              </h3>
            </a>
            <a href="/" class="fas fa-camera">
              <h3>
                <FontAwesomeIcon icon={faCamera} /> 7
              </h3>
            </a>
          </div>
        </div>
        <div class="content">
          <div class="price">
            <h3>${price}/Mo</h3>
            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button class="fas fa-envelope">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button class="fas fa-phone">
              <FontAwesomeIcon icon={faPhone} />
            </button>
          </div>
          <div class="location">
            <h3>{title}</h3>
            <p>{location}</p>
          </div>
          <div class="details">
            <h4>
              <FontAwesomeIcon
                style={{ color: "#333", paddingLeft: "15px" }}
                icon={faExpand}
              />
              3500
            </h4>
            <h4>
              <FontAwesomeIcon icon={faBed} /> 3 beds
            </h4>
            <h4>
              <FontAwesomeIcon icon={faBath} /> 2 baths
            </h4>
          </div>
          <div class="buttons">
            <button class="buttons-container">request info</button>
            <button class="buttons-container">view details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
