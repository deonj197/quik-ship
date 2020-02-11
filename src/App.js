import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Home from "./Components/Home";
import Shoesdata from "./Components/shoesdata";
import Footer from "./Footer";
import Shirtdata from "./Components/Shirtdata";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/shirtdata" component={Shirtdata} />

          <Route path="/shoedata" component={Shoesdata} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
