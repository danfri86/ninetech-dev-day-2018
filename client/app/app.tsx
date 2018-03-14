import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Header from "./common/header";
import AuthStore from "./stores/auth-store";

class App extends Component {
  render() {
    return (
      <Provider authStore={AuthStore}>
        <BrowserRouter>
          <React.Fragment>
            <Header />

            <section className="content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Auth} />
                <Route path="/login" component={Auth} />

                <Route component={Home} />
              </Switch>
            </section>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
