import { Box, Container, Grid, Typography, Stack, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { textAlign } from "@mui/system";
const Footer = () => {
  return (
    <Box bgcolor="#bdd7f9" color="black" sx={{ p: 3, fontFamily: "Open Sans" }}>
      <Container>
        <Box
          sx={{ flexGrow: 1, py: 1 }}
          display="flex"
          justifyContent={"center"}
          alignItems="space-evenly"
        >
          <Grid container sx={{ dispaly: "flex" }}>
            <Grid item xs={6} sm={3}>
              <Stack spacing={1}>
                <TitleLink title={" Customer Support"} main />

                <Stack
                  spacing={0.5}
                  display="flex"
                  justifyContent={"space-evenly"}
                  alignItems="flex-start"
                >
                  <TitleLink title={"Contact us"} />

                  <TitleLink title={"Service"} />

                  <TitleLink title={"Feedback"} />
                </Stack>
                <Box
                  sx={{
                    "& > :not(style)": {
                      mr: 0.5,
                      display: "row",
                      alignItems: "left",
                    },
                    ".MuiSvgIcon-root": {
                      height: { xs: "0.6rem", sm: "1.3rem", md: "1.5rem" },
                      width: { xs: "0.6rem", sm: "1.3rem", md: "1.5rem" },
                    },
                  }}
                >
                  <YouTubeIcon />
                  <FacebookIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                </Box>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Stack spacing={1}>
                <TitleLink title={"Quick Links"} main />

                <Stack
                  spacing={0.5}
                  sx={{
                    fontSize: { md: "0.7rem", xs: "0.7rem", sm: "0.8rem" },
                  }}
                >
                  <TitleLink title={"Hotels"} />

                  <TitleLink title={"Flights"} />

                  <TitleLink title={"Destination"} />

                  <TitleLink title={"Deals"} />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Stack spacing={1}>
                <TitleLink title={"Help Center"} main />

                <Stack spacing={0.5}>
                  <TitleLink title={"FQS"} />

                  <TitleLink title={" Privacy policy"} />

                  <TitleLink title={" Cookie policy"} />

                  <TitleLink title={"Term of use"} />
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              xs={3}
              sm={3}
              display="flex"
              justifyContent={"flex-start"}
              alignItems="center"
            >
              <Stack spacing={1}>
                <TitleLink title={"Get to know"} main />

                <Stack spacing={0.5}>
                  <TitleLink title={"About us"} />

                  <TitleLink title={"Room"} />

                  <TitleLink title={"Privacy"} />

                  <TitleLink title={"Terms of use"} />

                  <TitleLink title={"Blog"} />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

export const TitleLink: React.FC<{ title: string; main?: boolean }> = ({
  title,
  main,
}) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: "0.6rem", sm: "0.8rem", md: "0.9rem" },
        fontWeight: main ? 500 : 400,
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {title}
    </Typography>
  );
};
