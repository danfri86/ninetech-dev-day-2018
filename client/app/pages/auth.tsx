import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps, Redirect } from "react-router";

import IAuthStore from "../interfaces/IAuthStore";

interface IProps extends RouteComponentProps<any> {
  authStore?: IAuthStore;
}

@inject("authStore")
@observer
class Auth extends Component<IProps, {}> {
  state = {
    email: "",
    password: ""
  };

  render() {
    let buttonLabel: string = "Registrera";

    if (this.props.match.path === "/login") {
      buttonLabel = "Logga in";
    }

    if (this.props.authStore.user) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-post</label>
          <input type="text" name="email" onChange={this.handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Lösenord</label>
          <input
            type="text"
            name="password"
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit">{buttonLabel}</button>
      </form>
    );
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let route: string = "register";

    if (this.props.match.path === "/login") {
      route = "login";
    }

    this.props.authStore.submitForm(route, this.state);
  };
}

export default Auth;
