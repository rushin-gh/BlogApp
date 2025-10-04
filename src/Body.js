import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { GetNewsApiURL } from "./Utils/UrlProcesser";

const Body = () => {
  // const { articles } = News;
  const [articles, setArticles] = useState(null);
  const [country, setCountry] = useState("India");

  useEffect(() => {
    GetNews(country);
  }, [country]);

  async function GetNews(arg_country) {
    let newsUrl = GetNewsApiURL({
      q: arg_country,
      from: "2025-10-01",
    });

    const result = await fetch(newsUrl);
    const json = await result.json();
    setArticles(json.articles);
  }

  if (articles) {
    return (
      <>
        <SearchBar onSearch={(place) => setCountry(place)} />
        <div id="body">
          {articles.map((article, index) => {
            return (
              <div id="blogCard" key={index}>
                <img src={article.urlToImage}></img>
                <h3>{article.title}</h3>
                <div>{article.description}</div>
                <br />
                <div id="dateAndUser">
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>{article.author}</span>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return <h4>Loading...</h4>;
  }
};

export default Body;
