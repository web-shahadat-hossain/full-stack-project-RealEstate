import React from "react";
import Banner from "../Banner/Banner";
import HomeFeatured from "../HomeFeatured/HomeFeatured";
import HomeServices from "../HomeServices/HomeServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeServices />
      <HomeFeatured />
    </div>
  );
};

export default Home;
