import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRoutes />
      </Provider>
    );
  }
}

class Routes extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

render() {
  return (
    <div className="App">
        <Route exact path="/" component={} />
        <Route path="/shopping-cart" component={} />
    </div>
  );
 } 
}

const ConnectedRoutes = connect(
  () => ({}),
  { getProducts }
)(Routes);
