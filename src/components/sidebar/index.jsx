import { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip, Zoom } from "@mui/material";

const Sidebar = () => {
  const anchor = "left";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const toggleDrawer = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setIsTooltipOpen(false);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTooltip = () => {
    if (isTooltipOpen) {
      setIsTooltipOpen(!isTooltipOpen);
    }
  };

  const renderHamburgerMenu = () => {
    return (
      <Tooltip
        arrow
        open={isTooltipOpen}
        placement="right-start"
        TransitionComponent={Zoom}
        title={
          <>
            <Grid container>
              <Grid item xs={11} className="options-title">
                <Typography>WebGL Playground</Typography>
              </Grid>
              <Grid item xs={1} className="options-close">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ p: 0 }}
                  onClick={toggleTooltip}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
            <div>Click on menu icon to open settings.</div>
            <div>Try out different options by changing draw settings.</div>
          </>
        }
      >
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
      </Tooltip>
    );
  };

  return (
    <>
      {renderHamburgerMenu()}
      <Drawer
        open={isDrawerOpen}
        anchor={anchor}
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            padding: 2,
          },
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
          <Box>
            <FormControl fullWidth>
              <InputLabel
                id="draw-type-select-label"
                variant="standard"
                className="select-label"
              >
                Draw Type
              </InputLabel>
              <Select
                variant="standard"
                labelId="draw-type-select-label"
                className="select"
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value="2D">2D</MenuItem>
                <MenuItem value="3D">3D</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
