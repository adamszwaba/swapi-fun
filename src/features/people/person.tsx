/* eslint-disable camelcase */
import React from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Person } from "./people";

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

export type IPersonBoxProps = { person: Person };

const PersonBox: React.FC<IPersonBoxProps> = ({ person }) => {
  const classes = useStyles();
  const { name, gender, height, mass } = person;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {height} cm
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {mass}
        </Typography>
        <Typography variant="body2" component="p">
          {gender}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonBox;
