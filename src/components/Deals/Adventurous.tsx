import { Box, Container, Grid, Typography, CardContent } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
const Adventurous = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        pb: 3,
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Chonburi",
            color: "#1B0B7D",

            p: 2,

            fontSize: { md: "1.7rem", xs: "1rem", sm: "1.5rem" },
          }}
        >
          Adventurous
        </Typography>
        {/* <Grid item md={6} xs={12} sm={12}> */}
        <Box>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <AdventurousCard
                src={"/images/sea.jpg"}
                title={"Deep Sea Fishing in SriLanka"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdventurousCard
                src={"/images/MountainClimbing.jpg"}
                title={" Mountain Climbing in SriLanka"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdventurousCard
                src={"/images/Snorkeling.jpg"}
                title={"Snorkeling in Maldives"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdventurousCard
                src={"/images/Parasailing.jpg"}
                title={"Parasailing in Maldives"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdventurousCard
                src={"/images/Water-sport.jpg"}
                title={" Water Sports Combo In Maldives"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdventurousCard
                src={"/images/whaleWatching.jpg"}
                title={"Whale watching in SriLanka"}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        {/* </Grid> */}
      </Container>
    </Box>
  );
};

export default Adventurous;

const AdventurousCard: React.FC<{ src: string; title: string }> = ({
  src,
  title,
}) => {
  return (
    <Box sx={{ boxShadow: 5, borderRadius: 2, m: "1rem" }}>
      <Image className="img" src={src} alt="header" height="215" width="335" />
      <CardContent sx={{ py: "0.5rem" }}>
        <Typography
          variant="body2"
          className="text"
          sx={{
            fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Box>
  );
};
