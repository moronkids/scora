import React, { useEffect, useState } from "react";
import Event from 'components/list-event/parts/event'
import { useDispatch, useSelector } from "react-redux";
import { GET_EVENT, GET_PHASE, HIT_PHASE, HIT_PHASE_EVENT } from "redux/actions";
import { Store } from "redux";
const ListEvent = () => {
  const dispatch = useDispatch();
  const { event, phase, phaseArr } = useSelector((state: Store) => ({
    event: state.event.results,
    phase: state.event.phase,
    phaseArr: state.event.phase_arr
  }))

  const [tab, setTab] = useState(1);
  let arrPhase: never[] = [];
  useEffect(() => {
    //   dispatch({ type: GET_EVENT });
    //   //display_name
    //   //short_name
    //   // dispatch({ type: GET_PHASE });
    event.forEach(async (val, i) => {
      console.log('acitive phase', val)
      await dispatch({ type: HIT_PHASE_EVENT, payload: [val.short_name, i] });
    });
  }, [phase]);
  let current = [];
  let previous = [];
  console.log(/* phase, event, */ event, arrPhase, 'active phase 0');

  if (current.length === 0) {
    for (let item in event) {
      if (event[item].is_active) {
        console.log('culke', phaseArr)
        current.push(
          <Event ended={false} data={event[item]} phase={phaseArr && phaseArr[item]} />
        )
      }
      else {
        previous.push(
          <Event ended={true} data={event[item]} phase={phaseArr && phaseArr[item]} />
        )
      }
    }
  }
  return (
    <div className="scora-event container">
      <div className="scora-event__tab d-flex">
        <div onClick={e => setTab(1)}>
          <div id="1" className={`${tab === 1 ? `tab active` : `tab`}`}>
            Current Event
          </div>
          <div className={`border-tabs ${tab === 1 ? `` : `d-none`}`} />
        </div>
        <div onClick={e => setTab(2)}>
          <div id="2" className={`${tab === 2 ? `tab active` : `tab`}`}>
            Previous Event
          </div>
          <div className={`border-tabs ${tab === 2 ? `` : `d-none`}`} />
        </div>
      </div>
      <div
        className={`scora-event__current-event border-tabs ${tab === 1 ? `` : `d-none`
          }`}
      >
        {current.length > 0 ? current : <>
          <h4 className="text-center" style={{ paddingTop: '20px' }}>
            You have no event available
          </h4>
        </>}

      </div>
      <div
        className={`scora-event__prev-event border-tabs ${tab === 2 ? `` : `d-none`
          }`}
      >
        {previous.length > 0 ? previous : <>
          <h4 className="text-center" style={{ paddingTop: '20px' }}>
            You have no event available
          </h4>
        </>}
      </div>
    </div>
  );
};

export default ListEvent;
