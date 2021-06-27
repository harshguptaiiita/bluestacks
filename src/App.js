import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <br />
        <Main />
      </Fragment>
    );
  }
}

export default App;
