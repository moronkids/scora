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
  const { scoring, previewScore, complete, criteria, setCriteria, nextTeam, setNextTeam } = useContext(Hooks)

  // get state glob from redux store
  const { aspect, team, score_team, event } = useSelector((state: Store) => ({
    aspect: state.event.aspect,
    team: state.event.team,
    score_team: state.event.detail_team[state.event.detail_team.length - 1],
    event: state.event
  }));

  useEffect(() => {
    //reset length criteria when scoring, previewScore & team changed
    console.log(criteria, nextTeam, 'koloh')
    if (team?.[final[1]]['total'] == 0 || nextTeam) {
      // setCriteria([])
      setNextTeam(false);
    }
  }, [scoring, previewScore, team, criteria]);

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
            name={team?.[final[1]]?.total > 0 ? 'Edit Score' : "Scoring"}

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