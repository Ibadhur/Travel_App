import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import header from "../../../public/images/Maldives.jpg";
const Itinerary = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box
      sx={{
        bgcolor: "white",
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
          Itinerary
        </Typography>
        <Grid container xs={12} md={12} spacing={2} direction={"row"}>
          <Grid
            container
            xs={12}
            sm={4}
            md={4}
            sx={{
              pl: { md: 4, xs: 4 },
              // py: 1,
              // backgroundAttachment: "fixed",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${header.src})`,
                borderRadius: 5,
                mx: { xs: 2, sm: 0, md: 0 },

                height: { xs: "200px", sm: "250px", md: "250px" },
                width: "100%",

                backgroundRepeat: "no-repeat",
                // backgroundAttachment: "fixed",
                backgroundSize: "100% 100%",
                objectFit: "cover",
              }}
            ></Box>
          </Grid>
          {/* <Grid sx={{ pl: { xs: "2rem" } }} /> */}
          <Grid
            container
            xs={12}
            sm={8}
            md={8}
            sx={{ pl: { xs: "2rem" }, mx: { xs: 2, sm: 0, md: 0 } }}
          >
            <Accordion
              className="accordian"
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    width: "33%",
                    flexShrink: 0,
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Day1
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Australia - Negombo (Colombo), Sri Lanka
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Today fly from either Sydney, Melbourne, Brisbane, Perth,
                  Adelaide or *Auckland. Please note: Due to flight scheduling
                  some flights may depart on day 2 and arrive on day 2. Meals
                  included: In-Flight
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordian"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    width: "33%",
                    flexShrink: 0,
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Day2
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Negombo Free Day
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordian"
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  sx={{
                    width: "33%",
                    flexShrink: 0,
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Day3
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Negombo - Kandalama/Sigiriya (approx. 140km day)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordian"
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography
                  sx={{
                    width: "33%",
                    flexShrink: 0,
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Day4
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Arrive in Australia
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: { md: "0.9rem", xs: "0.8rem", sm: "0.8rem" },
                  }}
                >
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/* <Divider orientation="vertical" flexItem></Divider> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Itinerary;
