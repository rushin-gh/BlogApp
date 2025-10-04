import moment from "moment";

const newsApiObject = {
  BaseUrl: "https://newsapi.org/v2/everything",
  QueryParams: [
    { param: "q", value: "India" },
    { param: "from", value: moment(new Date()).format("YYYY-MM-DD") },
    { param: "sortBy", value: "popular" },
    { param: "apiKey", value: "003862e4e2ab4272a8c5fc60779d1016" },
  ],
};

module.exports = {
  newsApiObject,
};
