import * as React from "react";
import {
  Grid,
  Tooltip,
  createStyles,
  Theme,
  withStyles
} from "@material-ui/core";
import MovieSummary from "./MovieSummary";

interface IStyle {
  root: string;
  paper: string;
}

interface IProps {
  title: string;
  overview: string;
  voteCount: number;
  voteAverage: number;
  imageUrl?: string;
  classes: IStyle;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  });

const MovieDescription = (props: IProps) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid style={{ backgroundColor: "blue" }} item xs={12}>
        <MovieSummary
          imageUrl={props.imageUrl}
          title={props.title}
          overview={props.overview}
        />
      </Grid>

      <Grid
        style={{
          backgroundColor: "red",
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        }}
        item
        xs={12}
        sm={6}
      >
        <h2>Rate:</h2>
        <Tooltip title={`${props.voteCount} votes`} placement="right-start">
          <h2 style={{ display: "inline-block" }}>
            {`${props.voteAverage}/10`}
          </h2>
        </Tooltip>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(MovieDescription);
