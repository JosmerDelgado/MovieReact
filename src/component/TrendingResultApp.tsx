import * as React from "react";
import { TrendingResult, Movie, Serie, Person } from "../utils/network";
import TrendingResultRow from "./TrendingResultRow";
import network from "../utils/network/network";

interface IProps {
  trendingResult?: TrendingResult;
  myNet: network;
}

const instanceOfMovie = (object: Movie | Serie | Person): object is Movie => {
  return (object as Movie).original_title !== undefined;
};

const instanceOfSerie = (object: Serie | Person): object is Serie => {
  return (object as Serie).original_name !== undefined;
};

const instanceOfPerson = (object: Person): object is Person => {
  return object.name !== undefined;
};

const TrendingResultApp = (props: IProps) => {
  if (!props.trendingResult) {
    return <h2>Loading</h2>;
  }

  const trendingResults = props.trendingResult;
  return (
    <React.Fragment>
      <h2>Page number{trendingResults.page}</h2>
      <div style={{ display: "grid", grid: "auto-flow / auto 1fr" }}>
        {trendingResults.results.map(result =>
          instanceOfMovie(result) ? (
            <TrendingResultRow
              key={result.id}
              id={result.id}
              imageURL={props.myNet.getImageURL(
                result.poster_path ? result.poster_path : ""
              )}
              title={result.original_title}
              subTitle={result.overview}
            />
          ) : instanceOfSerie(result) ? (
            <TrendingResultRow
              id={result.id}
              key={result.id}
              imageURL={props.myNet.getImageURL(
                result.poster_path ? result.poster_path : ""
              )}
              title={result.original_name}
              subTitle={result.overview}
            />
          ) : instanceOfPerson(result) ? (
            <TrendingResultRow
              id={result.id}
              key={result.id}
              imageURL={props.myNet.getImageURL(
                result.profile_path ? result.profile_path : ""
              )}
              title={result.name}
              subTitle={result.known_for_department}
            />
          ) : (
            <div>TypeError</div>
          )
        )}
      </div>
    </React.Fragment>
  );
};

export default TrendingResultApp;
