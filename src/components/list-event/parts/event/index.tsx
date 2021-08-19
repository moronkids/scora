import React, { useContext } from "react";
import ArrowDown from 'assets/img/icons/Arrow-down.svg'
import { Hooks } from "providers"
const CurrentEvent = (props: { ended: any; data: any, phase: any }) => {
  const { stage, setStage, setpopup } = useContext(Hooks);

  const data = props.data;
  let active_phase = '';

  for (let x in props.phase) {
    if (props.phase[x].is_active) {
      // alert(props.phase[x].name)
      active_phase = props.phase[x].name
    }
  }

  return (
    <div className="current-event">
      <div className="current-event__box d-flex flex-wrap">
        <div className="justify-content-start logo">
          <div className="current-event__box-in d-flex">
            <p className="m-auto">EH</p>
          </div>
        </div>
        <div className="justify-content-around title-event">
          <div className="title">{data && data.display_name}</div>
          {console.log(data, "poop")}
          <div className="stage" onClick={(e) => { setStage(!stage); setpopup([data.display_name, props.phase, data.id]) }}>
            {active_phase}
            <span className="pl-1">
              <img src={ArrowDown} alt="" />
            </span>
          </div>
          <div className="date">{data && data.end_date}</div>
        </div>
        {props.ended && (
          <div className="justify-content-between ml-auto current-event__winners winners">
            <h5>List of Winners:</h5>
            <p className="p-0 m-0">1st - Yuk Jajan</p>
            <p className="p-0 m-0">2nd - Startup Inti</p>
          </div>
        )}
        <div className="justify-content-end ml-auto status">
          {props.ended ? (
            <div className="status-ended">
              <p className="">Ended</p>
            </div>
          ) : (
            <div className="status active">
              <p className="">On Going</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentEvent;
