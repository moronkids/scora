import React, { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Outside from "components/layouts/buttons/outside-components";
import Phone from "assets/img/contact-us/Phone.svg";
import Email from "assets/img/contact-us/Email.svg";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "redux";
import { Link, useLocation } from 'react-router-dom';
import close_popup from 'assets/img/icons/Icon Close.svg'
import { HIT_CURRENT_PHASE_EVENT, HIT_TEAM } from "redux/actions";
const PopUp = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { stage, setStage, popup, setProfile, setphase, phase_active, setphase_, setEvent, order } = useContext(Hooks);
  const { event, phase, phase_active_ } = useSelector((state: Store) => ({
    event: state.event.results,
    phase: state.event.phase,
    phase_active_: state.event.phase_active
  }));
  useEffect(() => {
    // alert("sdsd")
    setProfile(false)
  }, [location.pathname])
  const changePhase = (payload) => {
    // const data = {
    //   event: payload
    // }
    // dispatch({ type: HIT_CURRENT_PHASE_EVENT, payload: data })
  }
  const phasex = [];
  const activePhaseEvent = (event, phase, id) => {
    const data = {
      event: event,
      phase: phase,
      id: id
    }
    dispatch({ type: HIT_CURRENT_PHASE_EVENT, payload: data })
  }
  for (let x in popup[1]) {
    console.log(popup, "hello")
    phasex.push(
      <div className="align-content-start flex-wrap pb-2" >
        {
          popup[1][x].is_active ? <Link to="/" onClick={() => localStorage.setItem('phase', popup[1][x].id)} /* onClick={() => { dispatch({ type: HIT_TEAM, payload: [[popup[1][x].id], order || null] }); localStorage.setItem('phase', popup[1][x].id) }}*/>
            <div className={`phase ${popup[1][x].is_active && `active`}`} onClick={e => { setphase([popup[1][x].id]); setphase_(popup[1][x].name); setEvent(popup[0]); setStage(false); changePhase(popup[2]); activePhaseEvent(popup[0], popup[2], [popup[1][x].id, popup[1][x].name]) }}>
              <div className={`title-stage ${popup[1][x].is_active && `active`}`}>{popup[1][x].name}</div>
              {/* <div className={`title-stage ${popup[1][x].is_active && `active`}`}>{popup[1][x].name}</div> */}
            </div></Link> :
            <div className={`phase ${popup[1][x].is_active && `active`}`} onClick={e => { setphase([popup[1][x].id]); setphase_(popup[1][x].name); setEvent(popup[0]); setStage(false); changePhase(popup[2]); activePhaseEvent(popup[0], popup[2], [popup[1][x].id, popup[1][x].name]) }}>
              <div className={`title-stage ${!popup[1][x].is_active && `nonactive`}`}>{popup[1][x].name}</div>
            </div>
        }

      </div>
    )
  }

  return (
    <div className="scora-event">
      <div className={`contact-us ${stage ? `d-flex` : `d-none`}`}>
        <div
          className="overlay position-fixed"
          onClick={e => setStage(!stage)}
        />

        <div className="contact-us__popup my-auto mx-sm-auto mx-3">
          <div className="box">
            <div className="w-100 d-flex justify-content-end">
              <img src={close_popup} alt="" onClick={e => setStage(!stage)} style={{ cursor: 'pointer' }} />
            </div>
            <div className="d-flex justify-content-between">
              <h3>{popup && popup[0]}</h3>
              {/* <span> */}
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
