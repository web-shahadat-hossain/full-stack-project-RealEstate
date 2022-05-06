import React, { useEffect, useState } from "react";
import Service from "../../Shear/Service/Service";
import "./HomeServices.css";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-5 services-container">
      <div className="container">
        <h2>
          Our <span>Services</span>{" "}
        </h2>
        <div className="row-cols-md-2 row-cols-lg-3 g-4 row">
          {services.map((service) => (
            <Service service={service} key={service._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
