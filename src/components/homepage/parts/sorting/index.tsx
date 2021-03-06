import React, { useContext, useEffect, useState } from "react";
import { Hooks } from "providers/index";
import { useDispatch, useSelector } from "react-redux";
import { DO_LOADING, HIT_LOADING, HIT_TEAM } from "redux/actions";
import { Store } from "redux";
const Sorting = () => {
  const dispatch = useDispatch();
  const { phase, team, phase_active_, event } = useSelector((state: Store) => ({
    phase: state.event.phase,
    team: state.event.detail_team,
    event: state.event.event_active,
    phase_active_: state.event.phase_active
  }))
  const [trigger, setTrigger] = useState(false)
  const { sorting, setSorting, setorder, order, update_team, phase_active, currentPhase, setCurrentPhase, setbgActive } = useContext(Hooks);
  useEffect(() => {

    // dispatch({ type: HIT_LOADING, payload: true })
    // dispatch({ type: HIT_TEAM, payload: [phase_active[0] || phase_active, order] });
    console.log('sempat', order, phase_active_)
    dispatch({ type: HIT_TEAM, payload: [localStorage.getItem('phase'), order || null] })
    // if(phas)
    // setTrigger(true)
    // if (trigger) {
    // if (phase_active_.length !== 0) {

    // }
    // setTrigger(false)
    // }
  }, [order, localStorage.getItem('phase')])
  return (
    <>
      <ul
        className={`sortingscora m-0 p-0 position-absolute mt-4 ${sorting ? "d-block" : "d-none"
          }`}
      >
        <li className="mt-2" onClick={(e) => { update_team('teamname'); setbgActive(false) }}>Team Name</li>
        <li onClick={(e) => { update_team('highscore'); setbgActive(false) }}>High Score</li>
        <li onClick={(e) => { update_team('favorite'); setbgActive(false) }}>Favorite</li>
        <li onClick={(e) => { update_team('updated'); setbgActive(false) }
        }> Updated</li >
        <li className="" onClick={(e) => { update_team('sequence'); setbgActive(false) }}> Default</li >
      </ul >
    </>
  );
};

export default Sorting;
