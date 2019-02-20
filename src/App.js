import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import TokenIndex from "./components/tokens/TokenIndex";
import TokensNew from "./components/tokens/TokenNew";
import TokenShow from "./components/tokens/TokenShow";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tokens" component={TokenIndex} />
          <Route exact path="/tokens/new" component={TokensNew} />
          <Route path="/tokens/:tokenId" component={TokenShow} />
        </Switch>
      </div>
    );
  }
}

export default App;
