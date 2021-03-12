import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import PlayerArea from "../player/player-area";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Game(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <PlayerArea player="user" />
      <Box
        component="article"
        aria-label="game board"
        className={classes.content}
      >
        Hi
      </Box>
      <PlayerArea player="oponent" />
    </>
  );
}
