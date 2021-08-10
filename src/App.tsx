import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "routes/index";
import "assets/scss/styles.scss";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
