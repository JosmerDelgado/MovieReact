import * as React from "react";
import loadImage from "image-promise";
import { Link } from "@reach/router";

interface IProps {
  id: number;
  title: string;
  subTitle: string;
  imageURL: string;
}

const TrendingResultRow = (props: IProps) => {
  const [url, setUrl] = React.useState<string | undefined>(undefined);
  loadImage(props.imageURL).then(onfulfilled => {
    return setUrl(onfulfilled.src);
  });
  return (
    <React.Fragment>
      <div>
        <p>{props.title}</p>
        <p>{props.subTitle}</p>
      </div>
      <Link to={`/movie/${props.id}`}>
        {url ? (
          <img src={url} style={{ width: "100px" }} />
        ) : (
          <div>Loading</div>
        )}
      </Link>
    </React.Fragment>
  );
};

export default TrendingResultRow;
