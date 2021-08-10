import React, { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Outside from "components/layouts/buttons/outside-components";
import Phone from "assets/img/contact-us/Phone.svg";
import Email from "assets/img/contact-us/Email.svg";
import { useSelector } from "react-redux";
import { Store } from "redux";
import { Link, useLocation } from 'react-router-dom';
import close_popup from 'assets/img/icons/Icon Close.svg'
const PopUp = props => {
  const location = useLocation();
  const { stage, setStage, popup, setProfile, setphase, phase_active, setphase_ } = useContext(Hooks);
  const { event, phase } = useSelector((state: Store) => ({
    event: state.event.results,
    phase: state.event.phase
  }));
  useEffect(() => {
    // alert("sdsd")
    setProfile(false)
  }, [location.pathname])
  const phasex = [];
  for (let x in popup[1]) {
    phasex.push(
      <div className="align-content-start flex-wrap pb-2" >
        <Link to="/">
          <div className={`phase ${popup[1][x].is_active && `active`}`} onClick={e => { setphase([popup[1][x].id]); setphase_(popup[1][x].name); setStage(false) }}>
            <div className={`title-stage ${popup[1][x].is_active && `active`}`}>{popup[1][x].name}</div>
          </div></Link>
      </div>
    )
  }
  console.log(phase_active, "tesas")
  return (
    <div className="scora-event">
      <div className={`contact-us ${stage ? `d-flex` : `d-none`}`}>
        <div
          className="overlay position-fixed"
          onClick={e => setStage(!stage)}
        />

        <div className="contact-us__popup my-auto mx-sm-auto mx-3">
          <div className="box">
            <div className="d-flex justify-content-between">
              <h3>{popup && popup[0]}</h3>
              {/* <span> */}
              <img src={close_popup} alt="" onClick={e => setStage(!stage)} style={{ cursor: 'pointer' }} />
              {/* </span> */}
            </div>
            <p className="hint">
              You only need to select one phase to continue the activity in
              Scora
            </p>
            <div className="d-flex flex-wrap box-inside pt-3 pb-2">

              {phasex}

              {/* <div className="justify-content-around phase">
                <div className="title-stage">Registration</div>
              </div>
              <div className="justify-content-around phase">
                <div className="title-stage">Idea Submission</div>
              </div>
              <div className="justify-content-around phase">
                <div className="title-stage">Final Stage</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
