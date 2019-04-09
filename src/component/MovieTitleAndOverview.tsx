import * as React from "react";
import { Subscribe } from "unstated";
import UserContainer from "./conteiners/user";

interface IProps {
  title: string;
  overview: string;
}

const MovieTitleAndOverview = (props: IProps) => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <h2>{props.overview}</h2>
      <Subscribe to={[UserContainer]}>
        {(user: UserContainer) => <div>{user.state.name}</div>}
      </Subscribe>
    </React.Fragment>
  );
};

export default MovieTitleAndOverview;
