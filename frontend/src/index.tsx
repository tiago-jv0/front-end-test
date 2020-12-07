import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import UserProvider from "./contexts/UserContext";
import AlertProvider from "./contexts/AlertContext";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache({resultCaching: false}),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <AlertProvider>
          <Router>
            <App />
          </Router>
        </AlertProvider>
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
