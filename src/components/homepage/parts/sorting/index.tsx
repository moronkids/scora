import React, { useContext, useEffect } from "react";
import { Hooks } from "providers/index";
import { useDispatch } from "react-redux";
import { DO_LOADING, HIT_LOADING, HIT_TEAM } from "redux/actions";
const Sorting = () => {
  const dispatch = useDispatch();
  const { sorting, setSorting, setorder, order, update_team, phase_active, currentPhase, setCurrentPhase, setbgActive } = useContext(Hooks);
  useEffect(() => {
    console.log(phase_active, 'tesasxxx');
    dispatch({ type: HIT_LOADING, payload: true })
    dispatch({ type: HIT_TEAM, payload: [phase_active[0] || phase_active, order] })
  }, [order])
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
