import * as React from "react";

import {
  Box,
  Container,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Image from "next/image";
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "left",
  color: "black",
}));

export default function Testimonial() {

  return (
    <Box
      sx={{
        bgcolor: "#bdd7f9",
        px: 2,
        pb: 4,
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Chonburi",
            color: "#1B0B7D",

            p: 2,
            m: 1,
            fontSize: { md: "1.7rem", xs: "0.9rem", sm: "1.5rem" },
          }}
        >
          What Our Clients Says About Us
        </Typography>
        <Box sx={{ flexGrow: 1, p: 1 }}>
          <Grid container spacing={6}>
            <Grid item sm={4} xs={6}>
              <Item sx={{ boxShadow: 1, borderRadius: 3 }}>
                <TestimonialCard name={" Agnes Remi"} src={"/images/avatar.jpg"} description={` Booking a holiday was so easy so simple to do not
                    complicated at al`}/>
                
              </Item>
            </Grid>
            <Grid item sm={4} xs={6}>
              <Item sx={{ boxShadow: 1, borderRadius: 3 }}>
                 <TestimonialCard name={" Atwoods"} src={"/images/avatar2.jpg"} description={`Very friendly and friendly service, good prices. Nice and
                    customer service.`}/>
             
              </Item>
            </Grid>
            <Grid item sm={4} xs={6}>
              <Item sx={{ boxShadow: 1, borderRadius: 3 }}>
                <TestimonialCard name={"Goutry"} src={"/images/avatar1.jpg"} description={` Its very helpful. after I made a booking mistake on length
                    of holiday.`}/>
                
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}




export const TestimonialCard:React.FC<{name:string,src:string,description:string }>= ({name,description, src}) => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <CardContent sx={{ py: "0.5rem" }}>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Avatar
                      src={src}
                      sx={{
                        height: { xs: "25px", sm: "30px", md: "32px" },
                        width: { xs: "25px", sm: "30px", md: "32px" },
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "1rem", xs: "0.5rem", sm: "0.6rem" },
                        pl: { xs: 1, sm: 2, md: 2 },
                      }}
                    >
                      {name}
                    </Typography>
                  </Box>
                  <Rating
                    sx={{
                      fontSize: { md: "1rem", xs: "0.7rem", sm: "0.9rem" },
                      py: { xs: 0.5, sm: 1, md: 1 },
                      display: "flex",
                      justifyContent: "flex-start",
                    }}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Typography
                    variant="body2"
                    className="text"
                    sx={{
                      fontSize: { xs: "0.6rem", sm: "0.6rem", md: "0.7rem" },
                      textAlign: "left",
                    }}
                  >
                 {description}
                  </Typography>
                </CardContent>
  )
}
