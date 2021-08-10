import React, { useContext } from "react";
// import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from 'components/layouts'
import ContactUs from "components/help/parts/menu/contact-us";
import { Hooks } from "providers"
import Stage from 'components/list-event/parts/popup'
import SubmitSuccessPopup from 'components/scoring-team/parts/popup'
const Guest = ({ component: Component, ...rest }) => {
  const { contactUs, setContactUs } = useContext(Hooks);
  const token = localStorage.getItem('token');
  if (token === null) {
    return <Redirect to="/login" />
  }
  return (
    <Route
      {...rest}
      render={props => {

        return (
          <>
            <ContactUs />
            <Stage />
            <SubmitSuccessPopup />
            {rest.header === undefined ? (
              <Wrapper ishelp={rest.ishelp}>
                <Component {...props} />
              </Wrapper>
            ) : (
              <Wrapper headers={'off'}>
                <Component {...props} />
              </Wrapper>
            )}
          </>
        );
      }}
    />
  );
};

export default Guest;
