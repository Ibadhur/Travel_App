import {
  Box,
  Container,
  Grid,
  List,
  Typography,
  ListItem,
  CardContent,
  Paper,
} from "@mui/material";
import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Popup from "./HotelPopup";
const Accommodation = () => {
  return (
    <Box
      sx={{
        bgcolor: "#D6E8F9",
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
          Accommodation
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Box 
              sx={{
                fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                alignItems: "left",
              }}
            >
             
                <ul>
                  <li>Choose from Standard or Premium Accommodation</li>
                  <li>8 nights hotel accommodation on tour in Sri Lanka</li>
                  <li>
                    4 nights at the 4-star Adaaran Club Rannalhi, Maldives
                  </li>
                  <li>8 nights hotel accommodation on tour in Sri Lanka</li>
                  <li>
                    4 nights at the 4-star Adaaran Club Rannalhi, Maldives
                  </li>
                </ul>
             
            </Box>
          </Grid>

          <Grid item md={6} xs={12} sm={12}>
            <Box>
              <Swiper
                slidesPerView={2}
                spaceBetween={0}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <AccommodationCard
                    src={"/images/hotel1.jpg"}
                    title={"The Lucky Elepahant Hotel in Hikkaduwa"}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <AccommodationCard
                    src={"/images/hotel2.jpg"}
                    title={" Zest Metropole Hotel in Fort, Colombo"}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <AccommodationCard
                    src={"/images/hotel3.jpg"}
                    title={"Kandy View Hotel, City Centure, Kandy"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccommodationCard
                    src={"/images/hotel4.jpg"}
                    title={"Queensburry City Hotel, Nuwara Eliya"}
                  />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Accommodation;

export const AccommodationCard: React.FC<{ src: string; title: string }> = ({
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
            fontSize: {
              md: "0.7rem",
              xs: "0.6rem",
              sm: "0.6rem",
            },
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Popup />
      </CardContent>
    </Box>
  );
};
