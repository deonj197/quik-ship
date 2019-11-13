import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./Header";

import Footer from "./Footer";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<Home /> */}
      <Home2 />
      <Home3 />
      <Footer />
    </div>
  );
}
export default App;
