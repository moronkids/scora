import React, { useContext, useEffect } from "react";
import { Hooks } from "providers/index";
import { useDispatch } from "react-redux";
import { DO_LOADING, HIT_LOADING, HIT_TEAM } from "redux/actions";
const Sorting = () => {
  const dispatch = useDispatch();
  const { sorting, setSorting, setorder, order, update_team, phase_active, currentPhase, setCurrentPhase } = useContext(Hooks);
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
        <li className="mt-2" onClick={(e) => update_team('teamname')}>Team Name</li>
        <li onClick={(e) => update_team('highscore')}>High Score</li>
        <li onClick={(e) => update_team('favorite')}>Favorite</li>
        <li onClick={(e) => update_team('updated')}>Updated</li>
        <li className="" onClick={(e) => update_team('sequence')}>Default</li>
      </ul>
    </>
  );
};

export default Sorting;
