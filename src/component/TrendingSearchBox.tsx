import * as React from "react";
import { TimeWindow, MediaType } from "../utils/network";

interface IProps {
  mediaType: MediaType;
  timeWindow: TimeWindow;
  changeMediatypeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeTimeWindowHandler: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  getResults: () => void;
}

const HeaderApp = (props: IProps) => {
  const [disableButton, setDisableButton] = React.useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <select
        value={props.mediaType}
        onChange={env => {
          props.changeMediatypeHandler(env);
          setDisableButton(false);
        }}
      >
        {Object.values(MediaType).map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select
        value={props.timeWindow}
        onChange={env => {
          props.changeTimeWindowHandler(env);
          setDisableButton(false);
        }}
      >
        {Object.values(TimeWindow).map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          props.getResults();
          setDisableButton(true);
        }}
        disabled={disableButton}
      >
        Search
      </button>
    </div>
  );
};

export default HeaderApp;
