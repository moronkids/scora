import React, { useContext, useEffect, useState } from "react";
import Rates from 'components/scoring-team/parts/rates';
import ButtonPreview from "components/layouts/buttons";
import { Hooks } from "providers"
import { data } from 'dummy-data/scoring-data';
import { useDispatch, useSelector } from "react-redux";
import { HIT_ASPECT_PHASE_EVENT } from "redux/actions";
import { Store } from "redux";
import { useParams } from "react-router";

const Scoring = (props) => {

  let { name } = useParams()
  const final = name.split('_')
  const dispatch = useDispatch();
  const { scoring, setScoring, id, score, criteria, setCriteria, complete, setComplete } = useContext(Hooks);

  const { data, aspect, team } = useSelector((state: Store) => ({
    data: state.event.results,
    aspect: state.event.aspect,
    team: state.event.team
  }));
  const [event, setevent] = useState(String);
  const [phase, setphase] = useState(Number)
  // if (data.length > 0) {
  let scoring_null = []
  // }
  for (let x in aspect) {

    scoring_null.push({
      score: 0,
      aspect_id: parseInt(x) + 1
    })
  }
  useEffect(() => {
    for (let i in data) {
      if (data[i].is_active) {
        setevent(data[i].short_name);
        setphase(data[i].id);
      }
    }

    // if (phase !== 0) {
    dispatch({ type: HIT_ASPECT_PHASE_EVENT, payload: { event: event, phase: phase } })
    // }
    for (let index = 0; index < criteria.length; index++) {
      console.log(criteria, "dope")
      if (criteria[index][2] === 'Not Rated') {
        setComplete(false);
        break
      }
      setComplete(true);
    }
  }, [id, score, criteria, complete, data]);

  return (
    <div className={`sticky-top ${scoring ? "" : "d-none"}`}>
      <div className="scoring-team position-absolute">
        <div className="scoring-team__head d-flex sticky-top">
          <div className="d-flex title justify-content-start w-100 sticky-top">
            Scoring
          </div>
          <div
            className="d-flex close justify-content-end"
            onClick={e => setScoring(!scoring)}
          />
        </div>
        <div className="scoring-team__body mb-sm-0 mb-5">

          {aspect.length > 0 &&
            aspect.map((val, i, arr) => {
              return (
                <>
                  <div className="list" key={i}>

                    <div className="criteria">
                      <div className="detail-score">{i + 1 + '. ' + val.description}</div>

                    </div>
                    <div className="title-score">{val.caption}</div>

                    <Rates scoring={team && team[final[1]].score_details.length > 0 ? true : false} index={i} aspect={aspect.length} criteria={team && team[final[1]].score_details.length > 0 ? team[final[1]].score_details[i] : scoring_null[i]} hide={false} />
                  </div>
                </>
              );
            })}
          <div className="preview-score text-center d-sm-block d-none">
            <ButtonPreview
              name="Preview Score"
              padding="13px 32.5px 12px 32.5px"
              function={complete ? 2 : ''}
              disabled={complete ? false : true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoring;
