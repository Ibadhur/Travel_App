import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import header from "../../../public/images/Maldives.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${header.src})`,

          pt: "10px",

          height: { xs: "300px", sm: "400px", md: "450px" },
          width: "100%",

          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100% 100%",
          objectFit: "cover",
        }}
      >
        <Container>
          <Typography
            sx={{
              color: "black",

              fontFamily: "Chonburi",
              fontSize: { md: "3.3rem", xs: "1.5rem", sm: "2.5rem" },

              py: { md: "30px", sm: "20px", xs: "20px" },

              mt: { md: "80px", sm: "70px", xs: "50px" },
            }}
          >
            Sri Lanka & Maldives
          </Typography>

          <Grid xs={12} sm={6} md={6} container spacing={2}>
            <Typography
              className="textOverview"
              variant="body2"
              sx={{
                fontFamily: "Open Sans",
                color: "black",

                pl: 3,
                fontSize: { md: "1.rem", xs: "0.8rem", sm: "1rem" },
                alignItems: "center",
              }}
            >
              Discover exotic Sri Lanka: Kandy, Galle & more Relax in a 4-star
              all-inclusive MaldivesEach place, and each smile in Sri Lanka has
              a story to tell. We have so much to share with you, so come along
              to our island in paradise! resort
            </Typography>
          </Grid>

          <Box sx={{ dispaly: "flex " }}>
            <Typography
              sx={{
                fontFamily: "Open Sans",
                color: "black",
                my: 2,
                fontSize: { md: "1.rem", xs: "0.8rem", sm: "1rem" },
                alignItems: "center",
              }}
            >
              {" "}
              <CalendarMonthIcon
                sx={{
                  mx: 1,
                  // by: 1,

                  fontSize: { md: "1.2rem", xs: "0.9rem", sm: "1rem" },
                }}
              />
              Dates: 1st feb - 4th feb
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
