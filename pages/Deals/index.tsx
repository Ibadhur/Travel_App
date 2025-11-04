import React from "react";

import Accommodation from "../../src/components/Deals/Accommodation";
import Adventurous from "../../src/components/Deals/Adventurous";
import Calendar from "../../src/components/Deals/calendar";

import Hero from "../../src/components/Deals/Hero";
import Hilights from "../../src/components/Deals/Hilights";
import Itinerary from "../../src/components/Deals/Itinerary";
import Overview from "../../src/components/Deals/Overview";
// import Popup from "../../src/components/Deals/popup";
import Layout from "../../src/components/Layout";

const index = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Overview />
        <Calendar />
        <Hilights />
        <Itinerary />
        <Accommodation />  
        <Adventurous />     
      </Layout>
    </>
  );
};

export default index;
