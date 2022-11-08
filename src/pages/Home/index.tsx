import React, { useState } from "react";

import { Grid, Container, TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import SendIcon from "@mui/icons-material/Send";

import useStyles from "./styles";

const Home: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const handleUserName = (name: string) => setUserName(name);

  const handleClick = () =>
    navigate("dashboard", {
      state: {
        userName,
      },
    });

  return (
    <Container maxWidth="sm">
      <Grid container alignItems="center" className={classes.content}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Digite seu nome"
              value={userName}
              onChange={(e) => handleUserName(e.target.value)}
            />
          </Grid>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            className={classes.buttonContainer}
          >
            <Button
              disabled={!userName}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleClick}
            >
              ver cartas
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
