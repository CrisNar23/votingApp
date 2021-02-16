import React from "react";
import Candidate from "./Candidate/Candidate.js";

import useStyles from "./styles";

const Candidates = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Candidates</h1>
      <Candidate />
      <Candidate />
    </>
  );
};

export default Candidates;
