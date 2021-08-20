import React, { useContext, useEffect } from 'react';
import ButtonScoring from "components/layouts/buttons"
import { Hooks } from 'providers'
import { useSelector } from 'react-redux';
import { Store } from 'redux';
import { useParams } from 'react-router';
const Scoring = (props: { aspect: any }) => {
  let { name } = useParams()
  const final = name.split('_')
  const { scoring, setScoring, finalScore, setFinalScore, setPreviewScore, previewScore, complete, setComplete, setCriteria } = useContext(Hooks)
  const { datax, aspect, team, score_team } = useSelector((state: Store) => ({
    datax: state.event.results,
    aspect: state.event.aspect,
    team: state.event.team,
    score_team: state.event.detail_team[state.event.detail_team.length - 1]
  }));

  useEffect(() => {
    console.log(final, team, "kelo")
    if (team?.[final[1]['total'] == 0]) {
      // alert('masuk')
      setCriteria([])
    }
    else {
      // setCriteria(team[final[1]['score_details']])
      // let arr = []
      // let datas = team[final[1]]['score_details'].forEach((val, i) => {
      //   arr[i] = [val['aspect_id'], val['score']]
      // })
      // setCriteria(arr)
    }
  }, [scoring, previewScore, team]);

  return (
    <div className="scoring-scora fixed-bottom d-md-none d-flex justify-content-between px-3 " style={{ columnCount: scoring ? '1' : '2' }}>
      {/* {console.log(score_team, "panji")} */}
      {(scoring && previewScore) || !scoring ? <>
        <div className="ur_score d-md-none d-block my-auto">
          Yoursx: <br />
          {/* <span className="mx-auto">{finalScore === 0 ? team?.[final[1]].grandtotal : finalScore}</span> */}
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