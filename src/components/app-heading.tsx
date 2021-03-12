import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbarText: {
      textTransform: "uppercase",
    },
  })
);

export default function AppHeading() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.toolbarText}>
          Star Wars Arena
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
