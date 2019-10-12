import React from "react";
import "./styles.css";
import { useRoutes, A } from "hookrouter";
import routes from "./components/router";

const Nav = () => {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <A href="/user">Users Page</A> <br />
      <A href="/about">About Page</A>
      <br />
      <A href="/contact">Contacts Page</A>
      {routeResult}
    </div>
  );
};

export default Nav;
