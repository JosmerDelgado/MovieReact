import * as React from "react";
import * as ReactDOM from "react-dom";
import ErrorBoundary from "./component/ErrorBoundary";
import TrendingPage from "./component/TrendingPage";
import { Link, Router } from "@reach/router";
import MoviePage from "./component/MoviePage";

const cssMenu: React.CSSProperties = { margin: "10px" };

const App = () => {
  return (
    <ErrorBoundary>
      <span style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <div style={cssMenu}> Home </div>
        </Link>
        <div style={cssMenu}> Trending </div>
        <div style={cssMenu}> Search </div>
      </span>
      <h1>TypeScript</h1>
      <Router>
        <TrendingPage path="/" />
        <MoviePage path="/movie/:id" />
      </Router>
    </ErrorBoundary>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
