import React from "react";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Reservation from "./Reservation";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/reservation" component={Reservation} />

        <Route component={Error} />
      </Switch>
    </div>
  );
}
