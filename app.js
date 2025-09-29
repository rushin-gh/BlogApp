import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return <h1>Header</h1>;
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Header />);
