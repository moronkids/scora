import React, { useEffect, useState } from "react";
import Homepage from "components/layouts/header";
import Leaderboards from "components/homepage/parts/leaderboards";
import Sorting from "components/homepage/parts/sorting";
import { store } from "redux";
import { useSelector } from "react-redux";
import ListEvent from 'components/list-event';
// import { Redirect } from "react-router";
import { Redirect, useHistory } from "react-router";
const Hompage = () => {
  const history = useHistory();
  const { event, team } = useSelector((state: typeof store) => ({
    event: state?.event?.event_active,
    team: state?.event?.team?.length
  }))
  const [redirect, setRedirect] = useState()
  // useEffect(() => {
  //   console.log(team > 0, team !== undefined, "klumpur")
  //   if (!team > 0 && !team !== undefined) {
  //     // return
  //     alert('sini po')
  //     setRedirect(false)
  //   }
  //   else {
  //     setRedirect(true)
  //   }
  // }, [event, redirect])
  // if (redirect) {
  //   return <Redirect to="/list-event" />
  // }
  const cek_phase = localStorage.getItem('phase')
  if (cek_phase === '0') {
    // return <Redirect to="/forgotpass" />
    // if (window.location.pathname !== '/list-event?sort=current' && window.location.pathname !== '/list-event?sort=previous') {

    window.location.href = '/list-event?sort=current'
    // }
    // alert('jadiin')
    // return <Redirect to="/list-event" />
    // return
    // return <Redirect to="/login" />
  }
  else if (cek_phase !== '0') {
    if (event === null) {

      window.location.href = '/list-event?sort=previous'
    }
  }
  return (
    <>
      {/* {redirect && <Redirect to="/list-event" />} */}
      <div className="homepage-scora">
        {/* <Sorting /> */}
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <Leaderboards />

      </div></>
  );
};

export default Hompage;
