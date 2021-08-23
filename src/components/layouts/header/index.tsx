/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import Waves from "assets/img/Wave.svg";
import WavesMobile from "assets/img/Wave-mobile.svg";
import LogoScora from "assets/img/Scora-white.svg";
import LogoScoraBlack from "assets/img/icons/Scora-black.svg";
import Profile from "assets/img/icons/Profile.svg";
import { Link } from "react-router-dom";
import Account from "components/layouts/account";
import { Hooks } from 'providers';
import { useDispatch, useSelector } from "react-redux";
import { DO_LOADING, HIT_EVENT, HIT_LOADING, HIT_PHASE, HIT_TEAM } from "redux/actions";
import { Store } from "redux/index";
import { useLocation } from 'react-router-dom'
const Header = (props: { ishelp: any; headers: string; }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { phase, team, active_phase, active_event } = useSelector((state: Store) => ({
    // event: state.event.results[0],
    phase: state.event.phase,
    team: state.event.team,
    active_phase: state.event.phase_active,
    active_event: state.event.event_active,
  }))
  const { profile, setProfile, phase_active, setphase, phase_, setphase_, event } = useContext(Hooks);
  const isHelp = props.ishelp;




  let char = '';
  let name = event.split(' ');
  if (name) {
    for (let index = 0; index < name.length; index++) {

      if (index < 2) {

        char += name[index][0]
      }
      else {

        break;
      }
    }
  }
  const [breadCrumbs, setbreadCrumbs] = useState('');

  useEffect(() => {
    // dispatch({ type: DO_LOADING, payload: true })
    // dispatch({ type: DO_LOADING, payload: true })
    dispatch({ type: HIT_EVENT });
    dispatch({ type: HIT_PHASE });

    // dispatch({ type: HIT_TEAM, payload: [phase_active] });
    console.log(phase, "ckck -");
    console.log('lokasi', location)
    switch (location.pathname) {
      case '/help/learn-scora':
        setbreadCrumbs('Learn Scora')
        // return;
        break;

      default:
        break;
    }
  }, [location]);



  return (

    <div
      className="header-scora position-relative"
      style={{
        background: props.headers === "off" ? "none" : "",
        height: props.headers === "off" ? "200px" : "",
        // boxShadow: event && location.pathname === '/list-event' ? '' : 'inset 0 0 0 2000px rgba(0, 0, 0, 0.3)',
        // backgroundImage: event && location.pathname === '/list-event ' ? '' : `url(${event && event.banner})`
      }}
    >


      <img
        src={Waves}
        className={`header-scora__wave1 d-none ${location.pathname === '/list-event' ? 'd-none' : 'd-sm-block'}
          `}
      />
      <img
        src={WavesMobile}
        className={`header-scora__wavex d-sm-none ${location.pathname === '/list-event' ? 'd-none' : 'd-block'} `}
      />
      <div className="sddf" style={{ background: 'white' }}></div>
      <div className="container">
        <div className="w-100 d-flex">
          <div className="justify-content-start w-100">
            <Link
              to="/"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={props.headers === "off" ? LogoScoraBlack : LogoScora}
                alt=""
                className="header-scora__logo"
              />
            </Link>
          </div>

          <Link to="/help" className="my-auto">
            <div
              className="justify-content-end header-scora__account my-auto"
              style={{ color: props.headers === "off" ? "black" : "white" }}
            >
              Help
            </div>
          </Link>
          <div className="position-relative">
            <img src={Profile} alt="" className="header-scora__profile" onClick={(e) => setProfile(!profile)} />
            <Account />
          </div>
        </div>
        {isHelp ? (
          <div className="header-scora__title-help">
            <h3>Scora Help Center</h3>
            <div className="d-flex">
              <Link to="/help">
                <h5>Help Center</h5>
              </Link>
              {location.pathname !== '/help' && (<Link to={location.pathname}><h5>{`/ ` + breadCrumbs || ''}</h5></Link>)}
            </div>
          </div>
        ) : props.headers === "off" ? (
          <div className="header-scora__title-help">
            <div
              className="title-list-event"
              style={{ color: props.headers === "off" ? "black" : "" }}
            >
              List Event
            </div>
            {/* <h5>Help Center</h5> */}
          </div>
        ) : (
          <div>
            <h3 className="header-scora__active-in">Active session :</h3>
            <div className="d-flex">
              <div className="header-scora__box-in d-flex d-inline">
                <p className="m-auto">{char}</p>
              </div>
              <div className="header-scora__desc">
                <h3>{active_event || event}</h3>
                {/* <h3>{event && event.display_name}</h3> */}


                {/* <p>{phase_active}</p> */}
                <p>{active_phase?.[1] || phase_}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
