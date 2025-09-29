import News from "./Data/News.json";

const Body = () => {
  const { articles } = News;
  return (
    <div id="body">
      <div id="blogCard">
        <img src={articles[0].urlToImage}></img>
        <h3>{articles[0].title}</h3>
        <div>{articles[0].description}</div>
        <br />
        <div id="dateAndUser">
          <span>
            {new Date(articles[0].publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span>{articles[0].author}</span>
        </div>
      </div>
    </div>
  );
};

export default Body;
