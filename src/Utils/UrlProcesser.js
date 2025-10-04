import { newsApiObject } from "../Data/constant";

export function GetNewsApiURL(urlObj) {
  const url = new URL(newsApiObject.BaseUrl);
  newsApiObject.QueryParams.forEach((item) => {
    let qValue = null;
    if (item.param in urlObj) {
      qValue = urlObj[item.param];
    } else {
      qValue = item.value;
    }

    if (!qValue) {
      throw new Error("Some queryParams value is not correct.");
    }

    url.searchParams.set(item.param, qValue);
  });

  return url;
}
