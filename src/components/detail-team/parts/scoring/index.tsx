import React, { useContext, useEffect } from 'react';
import ButtonScoring from "components/layouts/buttons"
import { Hooks } from 'providers'
import { useSelector } from 'react-redux';
import { Store } from 'redux';
import { useParams } from 'react-router';
const Scoring = (props: { aspect: any }) => {
  let { name } = useParams()
  const final = name.split('_')
  const { scoring, setScoring, finalScore, setFinalScore, setPreviewScore, previewScore, complete, setComplete } = useContext(Hooks)
  const { datax, aspect, team } = useSelector((state: Store) => ({
    datax: state.event.results,
    aspect: state.event.aspect,
    team: state.event.team
  }));

  useEffect(() => {
  }, [scoring, previewScore]);

  return (
    <div className="scoring-scora fixed-bottom d-md-none d-flex justify-content-between px-3 " style={{ columnCount: scoring ? '1' : '2' }}>
      {(scoring && previewScore) || !scoring ? <>
        <div className="ur_score d-md-none d-block my-auto">
          Your &nbsp;Score: <br />
          <span className="mx-auto">{finalScore === 0 ? team?.[final[1]].grandtotal : finalScore}</span>
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