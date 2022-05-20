import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AuthZone from "./components/layout/AuthZone";
import {privateRoutes} from "./router/routes";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
                  <AuthZone>
                      <Switch>
                          {privateRoutes.map(route =>
                              <Route
                                  key={route.path}
                                  path={route.path}
                                  component={route.component}
                                  exact={route.exact}
                              />
                          )}
                          <Redirect to={{pathname: '/'}}/>
                      </Switch>
                  </AuthZone>
          </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
