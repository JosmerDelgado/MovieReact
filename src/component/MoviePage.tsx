import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import network from "../utils/network/network";
import { MovieDetails } from "../utils/network";
interface IProps extends RouteComponentProps {
  id?: number;
}

const myNet: network = new network();
const MoviePage = (props: IProps) => {
  const [myMovie, setMyMovie] = React.useState<MovieDetails>();
  if (!props.id) {
    navigate("/");
  }
  React.useEffect(() => {
    console.log("here");
    if (!myMovie) {
      myNet
        .getMovieDetails(props.id ? props.id : 0)
        .then(value => {
          setMyMovie(value as MovieDetails);
          console.log(value);
        })
        .catch(error => {
          console.log("Error", error);
        });
    }
  }, [myMovie]);
  return (
    <div>
      {props.id}
      {myMovie ? <div>{myMovie.original_title}</div> : <div>Loading.. </div>}
    </div>
  );
};

export default MoviePage;
