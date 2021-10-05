import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import React from "react";

import { Favorite } from "@material-ui/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<Favorite />}
          variant="contained"
          size="large"
          color="secondary">
          Hello World
        </Button>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
