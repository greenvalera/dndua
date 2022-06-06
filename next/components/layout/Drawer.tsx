import React, {FC} from "react";
import {
  Drawer as MuiDrawer,
  Toolbar,
} from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "./sidebar/Menu";

const drawerWidth = 240;

const DrawerComp: FC = () => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        {Menu()}
      </Box>
    </MuiDrawer>
  );
};

export default DrawerComp;