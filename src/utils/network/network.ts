import { MediaType, TimeWindow } from "./index";

class network {
  baseUrl = process.env.API_URL;
  apiKey = `?api_key=${process.env.API_KEY}`;
  imageBaseUrl = process.env.IMAGE_URL;

  constructor() {
    console.log("hello im a constructor");
  }

  private urlConstructor(path: string) {
    return `${this.baseUrl}${path}${this.apiKey}`;
  }

  private promiseCreater(path: string) {
    return new Promise((resolve, reject) => {
      fetch(this.urlConstructor(path))
        .then(response => {
          console.log("response");
          resolve(response.json());
        })
        .catch(() => {
          console.log("reject");
          return reject;
        });
    });
  }

  public getTrendingList(mediaType: MediaType, timeWindow: TimeWindow) {
    const path = `/trending/${mediaType}/${timeWindow}`;
    return this.promiseCreater(path);
  }
  public getImageURL(path: string) {
    return `${this.imageBaseUrl}${path}`;
  }

  public getMovieDetails(id: number) {
    const path = `/moviessss/${id}`;
    return this.promiseCreater(path);
  }
}

export default network;
