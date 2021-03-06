import React, { useEffect, useState } from "react";
import Event from 'components/list-event/parts/event'
import { useDispatch, useSelector } from "react-redux";
import { GET_EVENT, GET_PHASE, HIT_PHASE, HIT_PHASE_EVENT } from "redux/actions";
import { Store } from "redux";
const ListEvent = (props) => {
  const dispatch = useDispatch();
  const { event, phase, phaseArr } = useSelector((state: Store) => ({
    event: state.event.results,
    phase: state.event.phase,
    phaseArr: state.event.phase_arr
  }))
  const query = new URLSearchParams(props.location.search);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get('sort');
  const [tab, setTab] = useState(1);

  let arrPhase: never[] = [];
  useEffect(() => {
    dispatch({ type: GET_EVENT });
    //display_name
    setTab(foo === 'current' ? 1 : 2)
    //short_name
    // dispatch({ type: GET_PHASE });
    event.forEach(async (val, i) => {
      console.log('acitive phase', val)
      await dispatch({ type: HIT_PHASE_EVENT, payload: [val.short_name, i] });
    });
  }, [event]);
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
          {console.log(foo, "joh")}
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
          <div className="box-empty d-flex justify-content-center align-items-center">
            <h4 className="text-center">
              Current event not available
            </h4>
          </div>
        </>}

      </div>
      <div
        className={`scora-event__prev-event border-tabs ${tab === 2 ? `` : `d-none`
          }`}
      >
        {previous.length > 0 ? previous : <>
          <div className="box-empty d-flex justify-content-center align-items-center">
            <h4 className="text-center">
              Previous event not available
            </h4>
          </div>
        </>}
      </div>
    </div >
  );
};

export default ListEvent;
