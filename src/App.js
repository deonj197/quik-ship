import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Shoesdata from "./Components/shoesdata";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<Home /> */}

      <Shoesdata />
      <Footer />
    </div>
  );
}
export default App;
