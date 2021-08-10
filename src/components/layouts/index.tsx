import React, { useContext, useEffect, useState } from "react";
import Headers from "components/layouts/header";
import ScoringTeams from "components/scoring-team";
import PreviewScore from "components/preview-score";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Store } from "redux";
import { Hooks } from "providers";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const Body = props => {
  const { name } = useParams();
  const { phase_active, setphase, phase_, setphase_ } = useContext(Hooks);

  const { phase, loading } = useSelector((state: Store) => ({
    phase: state.event.phase,
    loading: state.loading.loading
  }))
  useEffect(() => {
    if (phase) {
      // alert('sd')
      for (let i = 0; i < phase.length; i++) {
        // alert('sd2')
        console.log(phase_active, phase[i], "ckcksu");
        if (phase[i].id === phase_active[0] || phase[i].id === phase_active) {
          // alert(',s')
          setphase_(phase[i].name)
          setphase(phase[i].id)
          break;
        }
        else if (phase[i].is_active) {
          // alert(',s')
          setphase_(phase[i].name)
          setphase(phase[i].id)
          break;
        }
      }
    }
  }, [phase, phase_])
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
      <Headers ishelp={props.ishelp} headers={props.headers} />
      {props.children}
    </>
  );
};

export default Body;
