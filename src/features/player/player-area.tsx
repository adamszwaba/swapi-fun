import { makeStyles, createStyles, Paper } from "@material-ui/core";
import React from "react";

const drawerWidth = "27%";

const useStyles = makeStyles((theme) =>
  createStyles({
    playerDrawer: {
      width: drawerWidth,
      flexShrink: 0,
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
  player: "user" | "oponent";
};

const PlayerArea: React.FC<IPlayerAreaProps> = ({ player }) => {
  const classes = useStyles();
  return (
    <Paper
      square
      component="aside"
      aria-label={`${player} area`}
      className={classes.playerDrawer}
    >
      Hi
    </Paper>
  );
};

export default PlayerArea;
