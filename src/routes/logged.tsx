import React, { useContext, useEffect, useState } from "react";
// import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from 'components/layouts'
import ContactUs from "components/help/parts/menu/contact-us";
import { Hooks } from "providers"
import Stage from 'components/list-event/parts/popup'
import SubmitSuccessPopup from 'components/scoring-team/parts/popup'
import { useSelector } from "react-redux";
import { store } from "redux";
import ListEvent from 'pages/list-event'
const Guest = ({ component: Component, ...rest }) => {

  const { event } = useSelector((state: typeof store) => ({ event: state?.event?.event_active }))
  const { contactUs, setContactUs, sorting, profile, setProfile, setSorting, bgActive, setbgActive } = useContext(Hooks);
  useEffect(() => {
    if (sorting || profile) {
      setbgActive(true)
    }
  }, [sorting, profile, event])
  const token = localStorage.getItem('token');
  if (token === null) {
    return <Redirect to="/login" />
  }
  // if (event === 'failed') {
  //   return <Redirect to="/list-event" />
  // }

  return (
    <Route
      {...rest}
      render={props => {

        return (
          <>
            <div className="overlay-transparent" style={{
              width: '100vw',
              height: '100vh',
              zIndex: '101',
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
                <Wrapper ishelp={rest.ishelp} withOutHeader={rest.withOutHeader}>
                  {console.log(event, "colss1")}
                  {/* {
                    event !== null ? <Component {...props} /> : <ListEvent />
                  } */}
                  <Component {...props} />}

                </Wrapper>
              ) : (
                <Wrapper headers={'off'}>
                  {console.log(event, "colss")}
                  {/* {
                    event !== null ? <Component {...props} /> : <ListEvent />
                  } */}
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
