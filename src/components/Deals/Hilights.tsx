import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 6;
};
const Hilights = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-07"));
  return (
    <Box
      sx={{
        bgcolor: "#D6E8F9",
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
          Highlights
        </Typography>
        <Grid container xs={12} sm={12} md={12} spacing={4}>
          <Grid container xs={12} sm={12} md={12}>
            <Box
              sx={{
                p: 2,
                fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                alignItems: "left",
              }}
            >
            
                <ul>
                  <li>Uncover the highlights of Sri Lanka on tour</li>
                  <li>
                    Journey among the lush tea plantations of Nuwara Eliya
                  </li>
                  <li>
                    Delve into Sri Lanka’s rich heritage at a Ceylon tea factory
                  </li>
                  <li>
                    Unwind with a day at leisure in beach side town of Negombo
                  </li>
                  <li>
                    Enjoy a day at leisure in the Kandalama/Sigiriya area home
                    of the ancient rock fortress
                  </li>
                  <li>
                    Marvel at the cave art of Dambulla Rock Cave Temple on a
                    guided tour
                  </li>
                  <li>
                    Spend the night in spiritual Kandy, home of the Temple of
                    the Sacred Tooth Relic
                  </li>
                  <li>
                    Enjoy free time and a guided tour in the Dutch colonial city
                    of Galle
                  </li>
                  <li>Visit Galle Fort, also known as the ‘Dutch Fort’</li>
                  <li>Experience the stunning beauty of the Maldives</li>
                  <li>
                    Relax with 4 nights at leisure at the luxury Adaaran Club
                    Rannalhi
                  </li>
                  <li>
                    Indulge with an all inclusive meals and alcoholic drinks
                    plan
                  </li>
                  <li>
                    Take advantage of a complimentary $50 USD per person credit
                    for Spa treatments in the Maldives
                  </li>
                  <li>Enjoy a 10% discount on Excursions in the Maldives</li>
                </ul>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hilights;
