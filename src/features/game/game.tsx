import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import { Shuffle } from "@material-ui/icons";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import PlayerArea from "../player/player-area";
import { PieceType, resetBoard, toggleResource } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getGameState } from "../../selectors";
import { fetchPeople, Person } from "../people/people";
import { Starship, fetchStarships } from "../starships/starships";
import useFight from "../../hooks/use-fight";
import WinnerBox from "./winner";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    gameHeader: {
      textTransform: "uppercase",
    },
    toggleButton: {
      height: "min-content",
      whiteSpace: "nowrap",
    },
    fightButton: {
      color: theme.palette.secondary.main[500],
    },
  })
);

const fetchResource = (
  pieceType: PieceType
): AsyncThunkAction<Person[] | Starship[], void, Record<string, unknown>> => {
  switch (pieceType) {
    case "starships":
      return fetchStarships();
    default:
      return fetchPeople();
  }
};

export default function Game(): JSX.Element {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { pieces: pieceType, winner, chosenPieces } = useAppSelector(
    getGameState
  );
  const { fighting, doFight } = useFight();
  const areEntitiesLoading = useAppSelector(
    (state) => state.people.loading || state.starships.loading
  );
  React.useEffect(() => {
    const promise = dispatch(fetchResource(pieceType));
    return () => {
      promise.abort();
    };
  }, [pieceType, dispatch]);
  const piecesHaveBeenChosen = () =>
    chosenPieces.oponent !== null && chosenPieces.user !== null;
  const isWinnerDecided = () => !!winner;
  const canFight = () =>
    !fighting && !areEntitiesLoading && piecesHaveBeenChosen();
  return (
    <>
      <PlayerArea player="user" />
      <Box
        component="article"
        aria-label="game board"
        className={classes.content}
      >
        <Box
          component="header"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" className={classes.gameHeader}>
            {pieceType} fighting
          </Typography>
          <Button
            disabled={areEntitiesLoading}
            className={classes.toggleButton}
            variant="outlined"
            startIcon={<Shuffle />}
            aria-label="toggle piece type"
            onClick={() => dispatch(toggleResource())}
          >
            Toggle piece type
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          minHeight={480}
          flexDirection="column"
        >
          {isWinnerDecided() && (
            <>
              <WinnerBox />
              <Button
                onClick={() => {
                  dispatch(resetBoard());
                }}
              >
                Reset
              </Button>
            </>
          )}
          {canFight() && !isWinnerDecided() && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => doFight()}
            >
              FIGHT
            </Button>
          )}
        </Box>
      </Box>
      <PlayerArea player="oponent" />
    </>
  );
}
