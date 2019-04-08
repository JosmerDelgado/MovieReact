import * as React from "react";
import TrendingResultApp from "./TrendingResultApp";
import TrendingSearchBox from "./TrendingSearchBox";
import { TimeWindow, TrendingResult } from "../utils/network";
import { MediaType } from "../utils/network";
import network from "../utils/network/network";
import { RouteComponentProps } from "@reach/router";

interface IState {
  timeWindow: TimeWindow;
  mediaType: MediaType;
}

interface IProps extends RouteComponentProps {}

const myNet: network = new network();

const TrendingPage = (props: IProps) => {
  const [life, setLife] = React.useState<IState>({
    timeWindow: TimeWindow.day,
    mediaType: MediaType.all
  });

  const [results, setResults] = React.useState<TrendingResult | undefined>();

  const changeTimeWindowHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target instanceof HTMLSelectElement) {
      console.log(event.target.value as TimeWindow);
      setLife({
        mediaType: life.mediaType,
        timeWindow: event.target.value as TimeWindow
      });
    }
  };
  const changeMediatypeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target instanceof HTMLSelectElement) {
      console.log(event.target.value as TimeWindow);
      setLife({
        mediaType: event.target.value as MediaType,
        timeWindow: life.timeWindow
      });
    }
  };
  const getResults = () => {
    myNet.getTrendingList(life.mediaType, life.timeWindow).then(value => {
      const myValue: TrendingResult = value as TrendingResult;
      console.log(myValue);
      setResults(myValue);
    });
  };

  return (
    <React.Fragment>
      <TrendingSearchBox
        timeWindow={life.timeWindow}
        mediaType={life.mediaType}
        changeTimeWindowHandler={changeTimeWindowHandler}
        changeMediatypeHandler={changeMediatypeHandler}
        getResults={getResults}
      />
      <TrendingResultApp myNet={myNet} trendingResult={results} />
    </React.Fragment>
  );
};

export default TrendingPage;
