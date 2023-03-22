import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anchor = "left";

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
      <Drawer open={isOpen} anchor={anchor} onClose={toggleDrawer} />
    </>
  );
};

export default Sidebar;
