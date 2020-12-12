import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./index.scss";
import App from "./App";

const cache = new InMemoryCache();
const token = process.env.REACT_APP_FAUNA_SECRET;

const link = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
