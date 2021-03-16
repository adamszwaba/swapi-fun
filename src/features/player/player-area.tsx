import {
  makeStyles,
  createStyles,
  Paper,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import { Casino } from "@material-ui/icons";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { choosePiece } from "../game/slice";
import Item from "../item/item";
import { ComparablePerson, Person } from "../people/people";
import { ComparableStarship, Starship } from "../starships/starships";
import { Player } from "./player";

const drawerWidth = "27%";

const useStyles = makeStyles((theme) =>
  createStyles({
    playerDrawer: {
      width: drawerWidth,
      flexShrink: 0,
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    playerDrawerInactive: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: theme.palette.grey[400],
    },
    opponentDrawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerContainer: {
      overflow: "auto",
    },
  })
);

type IPlayerAreaProps = {
  player: Player;
};

const PlayerArea: React.FC<IPlayerAreaProps> = ({ player }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const getAriaLabel = () =>
    player === "user" ? "Your piece" : "Oponent's piece";
  const piecesType = useAppSelector((state) => state.game.pieces);
  const { loading, ids, entities } = useAppSelector(
    (state) => state[piecesType]
  );
  const playerPiece = useAppSelector(
    (state) => state.game.chosenPieces[player]
  );
  const playerScore = useAppSelector((state) => state.game.score[player]);
  const pickRandomPiece = () => {
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    const chosenPiece =
      piecesType === "people"
        ? new ComparablePerson(entities[randomId] as Person)
        : new ComparableStarship(entities[randomId] as Starship);
    dispatch(choosePiece({ player, piece: chosenPiece }));
  };
  React.useEffect(() => {
    if (!loading && ids.length) {
      pickRandomPiece();
    }
  }, [loading, piecesType]);
  return (
    <Paper
      square
      component="aside"
      aria-label={`${player} area`}
      className={loading ? classes.playerDrawerInactive : classes.playerDrawer}
    >
      <Typography variant="h4">{playerScore}</Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {!loading && playerPiece !== null && (
          <>
            <Item item={playerPiece?.get()} />
            <Button
              variant="contained"
              color="secondary"
              onClick={pickRandomPiece}
              startIcon={<Casino />}
            >
              Reroll
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default PlayerArea;
