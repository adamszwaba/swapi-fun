import { makeStyles, createStyles } from "@material-ui/core";
import React from "react";

const drawerWidth = 240;

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
    <aside aria-label={`${player} area`} className={classes.playerDrawer}>
      <div className={classes.drawerContainer}>{player}</div>
    </aside>
  );
};

export default PlayerArea;
