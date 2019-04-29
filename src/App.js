import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Restaurant from "./components/restaurant";
import Menu from "./components/menu";
import Pembayaran from "./components/pembayaran";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Navbar} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/menu" component={Menu} />
          <Route path="/pembayaran" component={Pembayaran} />
        </Switch>
      </div>
    );
  }
}
export default App;
