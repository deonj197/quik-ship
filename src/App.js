import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Header from "./Header";

import Footer from "./Footer";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "lightblue", height: "100vh" }}
    >
      <Header />
      <Home />

      <Footer />
    </div>
  );
}
export default App;
