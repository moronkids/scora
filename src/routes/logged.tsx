import React, { useContext, useEffect, useState } from "react";
// import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from 'components/layouts'
import ContactUs from "components/help/parts/menu/contact-us";
import { Hooks } from "providers"
import Stage from 'components/list-event/parts/popup'
import SubmitSuccessPopup from 'components/scoring-team/parts/popup'
const Guest = ({ component: Component, ...rest }) => {
  const [bgActive, setbgActive] = useState(false);

  const { contactUs, setContactUs, sorting, profile, setProfile, setSorting } = useContext(Hooks);
  useEffect(() => {
    if (sorting || profile) {
      setbgActive(true)
    }
  }, [sorting, profile])
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
            <div className="overlay-transparent" style={{
              width: '100vw',
              height: '100vh',
              zIndex: '9',
              position: 'fixed',
              background: 'transparent',
              display: bgActive ? 'block' : 'none'
            }}
              onClick={() => { setbgActive(false); setProfile(false); setSorting(false) }}></div>
            <ContactUs />
            <Stage />
            <SubmitSuccessPopup />
            {
              rest.header === undefined ? (
                <Wrapper ishelp={rest.ishelp}>
                  <Component {...props} />
                </Wrapper>
              ) : (
                <Wrapper headers={'off'}>
                  <Component {...props} />
                </Wrapper>
              )
            }
          </>
        );
      }}
    />
  );
};

export default Guest;
