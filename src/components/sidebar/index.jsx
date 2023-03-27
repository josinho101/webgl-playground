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
import { drawTypes, threeDShapes, twoDShapes } from "../../constants";

const Sidebar = () => {
  const anchor = "left";
  const marginTop = 4;
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
          <Box sx={{ marginTop: (theme) => theme.spacing(marginTop) }}>
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
                className="select"
                value={drawType}
                onChange={handleDrawTypeChange}
                labelId="draw-type-select-label"
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <MenuItem value={drawTypes.twoDimensional}>
                  {drawTypes.twoDimensional}
                </MenuItem>
                <MenuItem value={drawTypes.threeDimensional}>
                  {drawTypes.threeDimensional}
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ marginTop: (theme) => theme.spacing(marginTop) }}
              fullWidth
            >
              <InputLabel
                id="draw-type-select-shapes"
                variant="standard"
                className="select-label"
              >
                Shape
              </InputLabel>
              <Select
                value={shape}
                variant="standard"
                className="select"
                onChange={handleShapeChange}
                labelId="draw-type-select-shapes"
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                {Object.keys(shapes).map((item) => {
                  return (
                    <MenuItem key={item} value={shapes[item]}>
                      {shapes[item]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
