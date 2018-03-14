import React from "react";
import { Link } from "react-router-dom";

import IAuthStore from "../interfaces/IAuthStore";
import { inject, observer } from "mobx-react";

interface IProps {
  authStore?: IAuthStore;
}

const Header: React.SFC<IProps> = inject("authStore")(
  observer(props => {
    return (
      <header>
        <nav>
          <Link to="/">Start</Link>
          <Link to="/register">Registrera</Link>
          <Link to="/login">Logga in</Link>
        </nav>

        {props.authStore.user && (
          <div>Inloggad som: {props.authStore.user.email}</div>
        )}
      </header>
    );
  })
);

export default Header;
