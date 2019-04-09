import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import network from "../utils/network/network";
import { MovieDetails } from "../utils/network";
import Button from "@material-ui/core/Button";
import {
  Theme,
  createStyles,
  Grid,
  LinearProgress,
  Tooltip
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import loadImage from "image-promise";
import MovieDescription from "./MovieDescription";

interface IProps extends RouteComponentProps {
  id?: number;
}

const myNet: network = new network();
const MoviePage = (props: IProps) => {
  const [myMovie, setMyMovie] = React.useState<MovieDetails>();
  const [imageUrl, setImageUrl] = React.useState<string | undefined>();

  if (!props.id) {
    navigate("/");
  }

  React.useEffect(() => {
    console.log("here");

    myNet
      .getMovieDetails(props.id ? props.id : 0)
      .then(value => {
        const myValue = value as MovieDetails;
        setMyMovie(myValue);
        console.log(myValue);
        // loadImage(
        //   myValue.poster_path ? myNet.getImageURL(myValue.poster_path) : ""
        // ).then(onfulfilled => {
        //   setImageUrl(onfulfilled.src);
        // });
        setImageUrl(
          myValue.poster_path ? myNet.getImageURL(myValue.poster_path) : ""
        );
      })
      .catch(error => {
        console.log("Error", error);
      });
  }, []);

  return (
    <React.Fragment>
      {props.id}
      {myMovie ? (
        <MovieDescription
          title={myMovie.title}
          overview={myMovie.overview}
          imageUrl={imageUrl}
          voteCount={myMovie.vote_count}
          voteAverage={myMovie.vote_average}
        />
      ) : (
        <LinearProgress />
      )}
    </React.Fragment>
  );
};

export default MoviePage;
