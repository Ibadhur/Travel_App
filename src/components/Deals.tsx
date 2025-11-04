import React from "react";
import {
  Grid,
  CardContent,
  Typography,
  Box,
  Container,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",

}));
const Deals = () => {
  return (
    <Box
      sx={{
        bgcolor: "#bdd7f9",
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

            fontSize: { md: "1.7rem", xs: "1rem", sm: "1.5rem" },
          }}
        >
          Explore Top Deals
        </Typography>

        <Box sx={{ flexGrow: 1, p: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3} sx={{ pt: 20 }}>
              <Link href="/Deals" sx={{ textDecoration: "none" }}>
                <Item sx={{ boxShadow: 5, borderRadius: 3 }}>
                  <DealsCard src={"/images/maldives.jpg"} title={" Sri Lanka"} description={`       Discover exotic Sri Lanka:more Relax in a 4-star
                      all-inclusive Maldives resort`} price={458} days={8}/>
                  
                </Item>
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Item sx={{ boxShadow: 5, borderRadius: 3 }}>
                  <DealsCard src={"/images/india.jpg"} title={" Incredible India"} description={` Dive into India’s colourful culture & history Discover Agra,
                    Jaipur, Delhi & Bharatpur`} price={345} days={6}/>
                
              </Item>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Item sx={{ boxShadow: 5, borderRadius: 3 }}>
                  <DealsCard src={"/images/japan.jpg"} title={"Japan Discovery"} description={`Uncover the natural wonders & rich culture of Japan Visit Mt
                    Fuji, Tokyo, Kyoto, Osaka, Nara & more`} price={456} days={3}/>
                
              </Item>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Item sx={{ boxShadow: 5, borderRadius: 3 }}>
                  <DealsCard src={"/images/uk.jpg"} title={"Taste of UK"} description={` Journey through 6 unforgettable countries in one trip Visit
                    Paris, London, & more`} price={256} days={6}/>
               
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Deals;



export const DealsCard:React.FC<{src:string, title:string, description:string , price:number,  days:number}>= ({src,days, price, description,title}) => {
  return (
   <>
    <Image
                    className="img"
                    src={src}
                    alt="header"
                    height="295"
                    width="345"
                  />
                  <CardContent sx={{ py: "0.5rem", pb: "7px !important" }}>
                    <Typography
                      className="text"
                      sx={{
                        fontSize: { md: "1.2rem", xs: "0.6rem", sm: "0.7rem" },
                        pb: { xs: 0.5, sm: 1, md: 1.5 },
                        fontWeight: "bold",
                      }}
                    >
                     {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="text"
                      sx={{
                        fontSize: { md: "0.7rem", xs: "0.6rem", sm: "0.6rem" },
                      }}
                    >
                      {description}
                    </Typography>

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ py: 1 }}
                    >
                      <Box
                        sx={{
                          fontSize: {
                            md: "0.7rem",
                            xs: "0.6rem",
                            sm: "0.8rem",
                          },
                        }}
                      >
                        {days} Days
                      </Box>
                      <Box
                        sx={{
                          color: "red",
                          fontSize: {
                            md: "0.7rem",
                            xs: "0.5rem",
                            sm: "0.6rem",
                          },
                        }}
                      >
                        from
                        <br />
                        <Typography
                          sx={{
                            fontSize: {
                              md: "0.7rem",
                              xs: "0.7rem",
                              sm: "0.8rem",
                            },
                            lineHeight: {
                              xs: "1rem",
                              sm: "1rem",
                              md: "1.2rem",
                            },
                          }}
                        >
                          ${price}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
   </>
  )
}

