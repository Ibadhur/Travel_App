import type { NextPage } from "next";
import Deals from "../src/components/Deals";
import Hero from "../src/components/Hero";
import Destinations from "../src/components/Destinations";
import Testimonial from "../src/components/Testimonial";
import Newsletter from "../src/components/Newsletter";
import Layout from "../src/components/Layout";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>

      <Layout>
        <Hero />

        <Deals />
        <Destinations />
        <Testimonial />

        <Newsletter />
      </Layout>
    </>
  );
};

export default Home;
