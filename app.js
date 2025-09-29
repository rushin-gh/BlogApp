import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";

const AppLayout = () => {
  return (
    <div id="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<AppLayout />);

/*
API - https://newsapi.org/docs/get-started#search
Key - 003862e4e2ab4272a8c5fc60779d1016

https://newsapi.org/v2/everything?q=Pune&from=2025-09-01&sortBy=popularity&apiKey=003862e4e2ab4272a8c5fc60779d1016
*/
