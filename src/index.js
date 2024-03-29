import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apollo";
import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/";

import App from "./App";
import { MunicipalitiesProvider } from "./providers/MunicipalitiesProvider";
import { SnackBar } from "./components/other";
import { ErrorBoundary } from "./ErrorBoundary";
import { MessagesFetcher } from "./utils/MessagesFetcher";
import { theme } from "./theme";
import { initializeSentry } from "./utils/initializeSentry";

initializeSentry();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <MunicipalitiesProvider>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <CssBaseline>
                  <App />
                  <SnackBar />
                  <MessagesFetcher />
                </CssBaseline>
              </ThemeProvider>
            </StyledEngineProvider>
          </MunicipalitiesProvider>
        </ApolloProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
