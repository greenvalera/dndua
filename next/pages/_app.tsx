import {
  ApolloProvider,
} from "@apollo/client";
import AuthZone from "../components/layout/AuthZone";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import client from "../graphql/client";

const theme = createTheme();

export default function App({Component, pageProps}) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AuthZone>
            <Component {...pageProps}/>
          </AuthZone>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}