import React, { useContext, useEffect, useState } from "react";
import Headers from "components/layouts/header";
import ScoringTeams from "components/scoring-team";
import PreviewScore from "components/preview-score";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "redux";
import { Hooks } from "providers";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { HIT_TEAM } from "redux/actions";
const Body = props => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { phase_active, setphase, phase_, setphase_, order } = useContext(Hooks);

  const { phase, loading, phase_active_ } = useSelector((state: Store) => ({
    phase: state.event.phase,
    loading: state.loading.loading,
    phase_active_: state.event.phase_active
  }))
  useEffect(() => {
    dispatch({ type: HIT_TEAM, payload: [localStorage.getItem('phase') || phase_active_?.[0], order || null] })
  }, [phase, localStorage.getItem('phase')])
  return (
    <>
      {loading && <div className="contact-us" style={{ position: "fixed", zIndex: '99999999999' }}>
        <div className="overlay d-flex"><div className="mx-auto my-auto">
          <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div></div>
      </div>}
      <div className="d-md-block sticky-top">
        {name !== undefined && (<>
          <PreviewScore />
          <ScoringTeams /></>)}
      </div>
      {!props.withOutHeader && <Headers ishelp={props.ishelp} headers={props.headers} />}
      {props.children}
    </>
  );
};

export default Body;
