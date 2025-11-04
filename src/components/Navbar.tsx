import React, { useState } from "react";
import Image from "next/image";

import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Link,
} from "@mui/material";

import Drawercom from "./Drawercom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const PAGES = ["Deals","Hotels", "Flights", "Destinations"];
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(isMatch);
  console.log(theme);
  return (
    <Box
      sx={{
        justifyContent: "space-evenly",
        display: "flex",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          background: "#b1d4f4",
          height: { md: "70px", sm: "60px", xs: "50px" },
        }}
      >
        <Toolbar>
          <Container>
            {/* <Button>
              <Image src="/images/logo.png" alt="logo" width={90} height={80} />
            </Button> */}

            {isMatch ? (
              <>
                <Drawercom />
              </>
            ) : (
              <>
                <Link href="/">
                  <Button>
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={80}
                      height={70}
                    />
                  </Button>
                </Link>
                {PAGES.map((pages) => (
                  <Link href={pages==="Deals"?pages:"#"} key={pages}>
                  <Button
                  key={pages}
                    sx={{
                      color: "black",
                      py: "16px",
                      px: "48px",
                      fontFamily: "Open Sans",
                    }}
                  >
                    <Typography textAlign="center"> {pages}</Typography>
                  </Button>
                  </Link>
                ))}
                {/* </Box> */}

                <Button
                  variant="text"
                  sx={{ color: "black", px: "48px", fontFamily: "Open Sans" }}
                >
                  <LocalPhoneIcon sx={{ mr: 2 }} />
                  1300 848 346
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "Black",
                    bgcolor: "#e6ea18",
                    fontFamily: "Open Sans",
                  }}
                >
                  Client Area
                </Button>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
