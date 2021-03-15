import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppHeading from "./components/app-heading";
import Game from "./features/game/game";

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      display: "flex",
      height: "100vh",
      paddingTop: theme.spacing(8),
    },
  })
);

export default function App(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <AppHeading />
      <main className={classes.main}>
        <Game />
      </main>
    </>
  );
}
