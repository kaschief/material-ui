import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import React, { useState } from "react";

import { Favorite } from "@material-ui/icons";
import { ButtonGroup } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const CheckBoxExample = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color="primary"
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          variant="filled"
          color="secondary"
          type="date"
          label="the time"></TextField>
        <CheckBoxExample />
        <ButtonGroup>
          <Button
            startIcon={<Favorite />}
            variant="contained"
            size="large"
            color="secondary">
            Hello World
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
