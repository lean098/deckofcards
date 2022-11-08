import React, { useState, useEffect, Fragment } from "react";

import {
  Container,
  Grid,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

import { useLocation } from "react-router-dom";

import { shuffle } from "lodash";

import api from "../../services/api";

import Header from "../../components/Header";

import useStyles from "./styles";

interface DeckInterface {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
}

const Dashboard: React.FC = () => {
  const location = useLocation();
  const classes = useStyles();

  const [cards, setCards] = useState<DeckInterface[]>([]);
  const [times, setTImes] = useState(0);

  async function getDeckId() {
    const { status, data } = await api.get(`/deck/new/shuffle/?deck_count=1`);

    if (status === 200) {
      return data.deck_id as string;
    }

    return "";
  }

  async function getData(deckId: string, count: number) {
    const { status, data } = await api.get(
      `/deck/${deckId}/draw/?count=${count}`
    );

    if (status === 200) {
      return data.cards as DeckInterface[];
    }

    return [];
  }

  useEffect(() => {
    getDeckId().then((deckId) =>
      getData(deckId, 5).then((cards) => setCards(() => cards.slice(0, 5)))
    );
  }, []);

  const handleNewCard = (count: number) => {
    setTImes((time) => (time += 1));
    getDeckId().then((deckId) =>
      getData(deckId, count).then((card) =>
        setCards((cards) => [...cards, card[0]])
      )
    );
  };

  const handleShuffleCards = () => {
    setCards((cards) => shuffle(cards));
  };

  return (
    <Fragment>
      <Header userName={location.state.userName} />

      {!cards && (
        <Grid container justifyContent="center" alignItems="center">
          <Typography>Aguarde...</Typography>
        </Grid>
      )}

      <Container>
        <ImageList className={classes.imageList}>
          {Array.isArray(cards) &&
            cards.map((card) => (
              <ImageListItem key={card.code}>
                <img
                  src={card.image}
                  srcSet={card.image}
                  alt={card.code}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={card.code}
                  className={classes.itemBar}
                  subtitle={
                    <Grid container justifyContent="space-between">
                      <span>{card.suit}</span>
                      <span>{card.value}</span>
                    </Grid>
                  }
                  position="below"
                />
              </ImageListItem>
            ))}
        </ImageList>

        <Grid container justifyContent="space-between" alignItems="center">
          <Button
            disabled={times === 3}
            variant="contained"
            className={classes.button}
            onClick={() => {
              if (times <= 3) {
                handleNewCard(1);
              }
            }}
          >
            Puxar carta
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleShuffleCards}
          >
            Embaralhar cartas
          </Button>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
