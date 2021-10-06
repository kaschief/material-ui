import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import { Favorite } from "@material-ui/icons";
import {
  Container,
  ButtonGroup,
  Button,
  Paper,
  Grid,
  Checkbox,
  TextField,
} from "@material-ui/core";

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
      <Container maxWidth="md">
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

          <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6}>
              <Paper style={{ height: 75, width: "100%" }}></Paper>
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: 50 }}></Paper>
            </Grid>
            <Grid item xs>
              <Paper style={{ height: 75, width: 50 }}></Paper>
            </Grid>
          </Grid>

          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </Container>
    </div>
  );
}

export default App;
