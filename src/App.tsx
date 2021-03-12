import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppHeading from "./components/app-heading";
import Game from "./features/game/game";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export default function App(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <AppHeading />
      <Toolbar />
      <main className={classes.root}>
        <Game />
      </main>
    </>
  );
}
