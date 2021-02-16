import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Candidates from "./components/Candidates/Candidates.js";
import FormCandidate from "./components/FormCandidate/FormCandidate.js";
import candidates from "./images/election-2020.png";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Voting App
        </Typography>
        <img
          className={classes.image}
          src={candidates}
          alt="candidates"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Candidates />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormCandidate />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
