import React, {FC} from 'react';
import {AppBar as MuiAppBar, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";

const AppBar: FC = () => {
  return (
    <MuiAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
          DND UA
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;