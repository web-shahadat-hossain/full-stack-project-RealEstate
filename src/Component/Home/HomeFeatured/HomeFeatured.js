import React, { useEffect, useState } from "react";
import Feature from "../../Shear/Feature/Feature";
import "./HomeFeatured.css";

const HomeFeatured = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("Featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  return (
    <div className="featured-container py-3">
      <div className="container">
        <h2>
          <span>Featured</span> Properties
        </h2>
        <div className="row row-cols-md-2 row-cols-lg-3 g-4 featured ">
          {featured.map((feature) => (
            <Feature feature={feature} key={feature._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
