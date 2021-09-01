import React, { useContext, useEffect, useState } from "react";
import Homepage from "components/layouts/header";
import Leaderboards from "components/homepage/parts/leaderboards";
import Sorting from "components/homepage/parts/sorting";
import { store } from "redux";
import { useDispatch, useSelector } from "react-redux";
import ListEvent from 'components/list-event';
// import { Redirect } from "react-router";
import { Redirect, useHistory, useParams } from "react-router";
import { Hooks } from "providers";
import { HIT_TEAM } from "redux/actions";
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
  const dispatch = useDispatch();
  const { name } = useParams();
  const { phase_active, setphase, phase_, setphase_, order } = useContext(Hooks);

  const { phase, loading, phase_active_ } = useSelector((state: store) => ({
    phase: state.event.phase,
    loading: state.loading.loading,
    phase_active_: state.event.phase_active
  }))
  useEffect(() => {
    dispatch({ type: HIT_TEAM, payload: [localStorage.getItem('phase') || phase_active_?.[0], order || null] })
  }, [phase])
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

      // window.location.href = '/list-event?sort=previous'
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
