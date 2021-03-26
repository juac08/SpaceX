import "./App.css";
import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://space-x-junaid.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <h1 style={{ textAlign: "center", margin: "auto" }}>Space-X</h1>
          <Route exact path="/">
            <Launches />
          </Route>
          <Route exact path="/launch/:flight_number" component={Launch} />

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
