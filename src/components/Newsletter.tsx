import React from "react";
import { Container, Box } from "@mui/system";
import {
  Typography,
  Grid,
  TextField,
  Button,
  styled,
  Paper,
  CardContent,
} from "@mui/material";
import Image from "next/image";


const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Newsletter = () => {
  return (
    <Box bgcolor="white" sx={{ px: 2, py: 4 }}>
      <Container>
        <Box
          bgcolor={"#B3D5F4"}
          sx={{
            width: "100%",
            textAlign: "center",  
            boxSizing: "border-box",
            boxShadow: 5,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Chonburi",
              color: "#1B0B7D",

              p: 2,

              px: { md: 25, sm: 10, xs: 2 },
              // m: 2,
              fontSize: { md: "1.6rem", xs: "0.7rem", sm: "1.2rem" },
            }}
          >
            Subscribe Newsletter & Get Company News
          </Typography>

          <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={4} direction="row">
              <Grid item xs={12} container spacing={4}>
                <Grid item md={3} sm={3} xs={12}>
                  <Image
                    className="img1"
                    src="/images/uk.jpg"
                    alt="header"
                    height="265"
                    width="345"
                  />
                </Grid>
                <Grid item md={3} sm={3} xs={12}>
                  <Image
                    className="img1"
                    src="/images/maldives.jpg"
                    alt="header"
                    height="265"
                    width="345"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  container
                  direction="row"
                  // sx={{ my: 1 }}
                  spacing={2}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      required
                      id="outlined-required"
                      defaultValue="Enter Your Name "
                      size="small"
                      sx={{
                        bgcolor: "white",

                        width: "100%",
                      }}
                      inputProps={{ style: { fontSize: 10 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      required
                      id="outlined-required"
                      defaultValue="Enter Your Email Address "
                      size="small"
                      sx={{
                        bgcolor: "white",

                        width: "100%",
                      }}
                      inputProps={{ style: { fontSize: 10 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "Black",
                        bgcolor: "#e6ea18",
                        fontFamily: "Open Sans",
                        width: "15px",
                        height: "25px",

                        fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.7rem" },
                      }}
                    >
                      submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
//
export default Newsletter;
