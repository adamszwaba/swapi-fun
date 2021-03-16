/* eslint-disable camelcase */
import React from "react";
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Starship } from "./starships";

export type IStarshipBoxProps = { starship: Starship };

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const StarshipBox: React.FC<IStarshipBoxProps> = ({ starship }) => {
  const classes = useStyles();
  const { name, model, manufacturer, crew, max_atmosphering_speed } = starship;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {model}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {manufacturer}
        </Typography>
        <Typography variant="body2" component="p">
          {crew}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StarshipBox;
