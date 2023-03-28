import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, IconButton } from "@mui/material";
import { Box, Drawer, Grid, Tooltip, Zoom } from "@mui/material";

import SelectWithLabel from "../selectwithlabel";
import { drawTypes, threeDShapes, twoDShapes } from "../../constants";

const Sidebar = () => {
  const anchor = "left";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const [drawType, setDrawType] = useState(drawTypes.threeDimensional);
  const [shape, setShape] = useState(threeDShapes.cube);

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

  const handleDrawTypeChange = (event) => {
    const value = event.target.value;
    setDrawType(value);
    const shape =
      value === drawTypes.threeDimensional
        ? threeDShapes.cube
        : twoDShapes.square;
    setShape(shape);
  };

  const handleShapeChange = (event) => {
    setShape(event.target.value);
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

  const shapes =
    drawType === drawTypes.twoDimensional ? twoDShapes : threeDShapes;

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
              <Typography
                variant="subtitle1"
                className="options-title-text"
                sx={{
                  textDecorationLine: "underline",
                  textDecorationStyle: "wavy",
                  textDecorationColor: "#f00",
                }}
              >
                Draw Options
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              className="options-close"
              sx={{ textAlign: "right" }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{
                  padding: 0,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Box>
            <SelectWithLabel
              id="draw-type-select"
              label="Draw Type"
              value={drawType}
              items={drawTypes}
              onChange={handleDrawTypeChange}
            />
            <SelectWithLabel
              id="shapes-select"
              label="Shape"
              value={shape}
              items={shapes}
              onChange={handleShapeChange}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
