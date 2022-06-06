import React, {FC, Fragment} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Button, Typography, Toolbar, useTheme} from "@mui/material";

const AuthBlock: FC = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    const user = useSelector((state: RootState) => state.auth.user);
    const theme = useTheme();

    const ProfileSubmenu = () => {
      return (
        <Toolbar
          sx={{backgroundColor: theme.palette.primary.main}}
        >
          <Typography color={"white"}>
            {user.email}
          </Typography>
        </Toolbar>

      )
    }

    const LoginBlock = () => (
      <Fragment>
        <Button sx={{ marginLeft: "auto" }} variant="contained">
          Login
        </Button>
        <Button sx={{ marginLeft: "10px" }} variant="contained">
          SignUp
        </Button>
      </Fragment>
    );

    return (
        <div
            className={"menu"}
        >
            {isAuth
                ? <ProfileSubmenu />
                : <LoginBlock />
            }
        </div>
    );
}

export default AuthBlock;