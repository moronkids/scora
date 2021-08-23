import React, { useContext, useEffect } from 'react';
import ButtonScoring from "components/layouts/buttons"
import { Hooks } from 'providers'
import { useSelector } from 'react-redux';
import { Store } from 'redux';
import { useParams } from 'react-router';
const Scoring = (props: { aspect: any }) => {
  // get query string
  let { name } = useParams()
  const final = name.split('_')

  // get state glob from context
  const { scoring, previewScore, complete, setCriteria } = useContext(Hooks)

  // get state glob from redux store
  const { aspect, team, score_team } = useSelector((state: Store) => ({
    aspect: state.event.aspect,
    team: state.event.team,
    score_team: state.event.detail_team[state.event.detail_team.length - 1]
  }));

  useEffect(() => {
    //reset length criteria when scoring, previewScore & team changed
    if (team?.[final[1]['total'] == 0]) {
      setCriteria([])
    }
  }, [scoring, previewScore, team]);

  return (
    <div className="scoring-scora fixed-bottom d-md-none d-flex justify-content-between px-3 " style={{ columnCount: scoring ? '1' : '2' }}>
      {(scoring && previewScore) || !scoring ? <>
        <div className="ur_score d-md-none d-block my-auto">
          Yours: <br />
          <span className="mx-auto">{score_team?.score || team?.[final[1]].total}</span>
        </div></> : ''}
      <div className={`my-auto ${(scoring && !previewScore) && 'w-100'}`}>
        {scoring && previewScore && complete ? <ButtonScoring
          name="Submit Score"
          padding="13px 55px 13px 55px"
          // function={1}
          hide={true}
          submit={true}
          data={aspect}
        /> :
          scoring && !previewScore ? <ButtonScoring
            name="Preview Score"
            padding="13px 55px 13px 55px"
            function={complete ? 2 : ''}
            disabled={complete ? false : true}
            width="100%"
          /> : <ButtonScoring
            name="Scoring"
            padding="13px 55px 13px 55px"
            function={1}
          />
        }
      </div>
    </div>
  );
};

// hide = { true}
// submit = { true}
// data = { aspect }
export default Scoring;