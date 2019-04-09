import * as React from "react";
import MovieTitleAndOverview from "./MovieTitleAndOverview";

interface IProps {
  imageUrl?: string;
  title: string;
  overview: string;
}

const MovieSummary = (props: IProps) => {
  return (
    <div style={{ display: "flex" }}>
      <img src={props.imageUrl ? props.imageUrl : ""} />
      <div>
        <MovieTitleAndOverview title={props.title} overview={props.overview} />
      </div>
    </div>
  );
};

export default MovieSummary;
