import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Overview = () => {
  return (
    <Box
      sx={{
        bgcolor: "#D6E8F9",
        pt: "2rem",
        pb: 4,
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Chonburi",
            color: "#1B0B7D",
            // my: "60px",
            m: 1,
            pb: 4,

            fontSize: { md: "1.7rem", xs: "1rem", sm: "1.5rem" },
          }}
        >
          Overview
        </Typography>
        <Grid container xs={12} sm={12} md={12} spacing={4}>
          <Grid container xs={12} sm={6} md={8}>
            <Typography
              className="textOverview"
              variant="body2"
              sx={{
                // p: 2,

                pl: "2.5rem",
                fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                alignItems: "center",
              }}
            >
              Colourful cities and timeless ruins, gorgeous beaches and tea
              plantations as far as the eyes can see; Sri Lanka offers an
              irresistible mix of history, culture, and natural beauty. When
              combined with the barefoot luxury and indulgence of the Maldives,
              where minutes seem like hours and hours feel like days, you have
              all the makings of an unforgettable holiday. Isn’t it time you got
              away? Striking the perfect balance of exploration and relaxation,
              this trip will take you to the spiritual mecca of Kandy and on to
              the verdant tea plantations of Nuwara Eliya - plus a whole lot
              more. Enjoy free time to relax on the beach or bite into the
              delicious cuisine of Negombo; visit Dambulla, the largest and
              best-preserved cave temple complex in Sri Lanka; and travel to the
              charming Galle, home to the famous Galle Dutch Fort. Then, slip
              into relaxation mode with four nights at the 4-star Adaaran Club
              Rannalhi in the Maldives, enjoying three meals daily and an
              all-inclusive drinks package. Bliss. This incredible discovery
              package includes return flights on Sri Lankan Airlines, eight
              nights quality hotel accommodation while on tour in Sri Lanka, an
              English speaking tour guide and so much more. Maldives Overwater
              Bungalow and premium accommodation upgrades also available.
            </Typography>
          </Grid>

          <Grid
            container
            xs={12}
            sm={6}
            md={4}
            sx={{ pl: { md: 4, xs: 6.5 }, pt: 1 }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GIimOIZy-RA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Overview;
