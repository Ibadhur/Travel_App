import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Box,
  Button,
  Typography,
  Link,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const PAGES = ["Hotels", "Flights", "Destinations", "Deals"];
const Drawercom = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        arial-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Button>
        <Image src="/images/logo.png" alt="logo" width={60} height={50} />
      </Button>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Grid item xs={5}>
            <Tabs>
              <Tab label="Hotels" />
            </Tabs>
            <Tabs>
              <Tab label="Flights" />
            </Tabs>
            <Tabs>
              <Link href="/Deals" sx={{ textDecoration: "none" }}>
                <Tab label="Deals" />
              </Link>
            </Tabs>
            <Tabs>
              <Tab label="Destinations" />
            </Tabs>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
};

export default Drawercom;
