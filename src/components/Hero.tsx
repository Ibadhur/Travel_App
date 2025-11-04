import * as React from "react";
import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Unstable_Grid2";
import { Paper, Typography, TextField, Input, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import header from "../../public/images/bg1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${header.src})`,
        // bgcolor: "red",
        pt: "10px",

        height: "600px",
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
            color: "#0a052e",

            fontFamily: "Chonburi",
            fontSize: { md: "3.5rem", xs: "2.2rem", sm: "3rem" },

            py: { md: "30px", sm: "20px", xs: "10px" },

            mt: { md: "100px", sm: "80px", xs: "50px" },
          }}
        >
          Let the journey begin
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Open Sans",

            mb: "60px",
            mx: 1,
            fontSize: { md: "1.rem", xs: "0.8rem", sm: "1rem" },
            alignItems: "center",
          }}
        >
          From iconic attractions to amazing
          <br /> experiences, what will you book next?
        </Typography>

        <Box
          sx={{
            width: "calc(100% - 0rem)",

            p: 2,

            ml: 0,
            bgcolor: "white",

            boxSizing: "border-box",
            boxShadow: 5,
            borderRadius: 5,
          }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              width: "100%",
            }}
          >
            <Grid container spacing={{ xs: 2, ms: 4 }}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue="Leaving from "
                  size="small"
                  sx={{
                    bgcolor: "white",

                    width: "100%",
                  }}
                  inputProps={{ style: { fontSize: 10 } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue="Going to"
                  size="small"
                  sx={{ bgcolor: "white", width: "100%" }}
                  inputProps={{ style: { fontSize: 10 } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue="Departing"
                  size="small"
                  sx={{ bgcolor: "white", width: "100%" }}
                  inputProps={{ style: { fontSize: 10 } }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue="Returning"
                  size="small"
                  sx={{
                    bgcolor: "white",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  inputProps={{ style: { fontSize: 10 } }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "Black",
                    bgcolor: "#e6ea18",
                    fontFamily: "Open Sans",
                    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
