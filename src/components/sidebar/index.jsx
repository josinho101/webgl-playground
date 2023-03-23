import { useState } from "react";

import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, Grid, IconButton, Typography } from "@mui/material";

const Sidebar = () => {
  const anchor = "left";
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isOpen}
        anchor={anchor}
        papercl
        PaperProps={{
          className: "drawer-paper",
        }}
        onClose={toggleDrawer}
      >
        <Box>
          <Grid container>
            <Grid item xs={6} className="options-title">
              <Typography variant="subtitle1" className="options-title-text">
                Draw Options
              </Typography>
            </Grid>
            <Grid item xs={6} className="options-close">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
