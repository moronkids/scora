import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ContactUs from "components/help/parts/menu/contact-us";
const guest = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    return <Redirect to="/" />
  }
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <>
            <ContactUs />
            <Component {...props} />
          </>
        );
      }}
    />
  );

};

export default guest;