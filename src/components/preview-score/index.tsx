import React, { useContext, useEffect, useState } from "react";
import Rates from "components/scoring-team/parts/rates";
import ButtonPreview from "components/layouts/buttons";
import { Hooks } from "providers";
import { data } from "dummy-data/scoring-data";
import Back from "assets/img/icons/Back.svg";
import { useSelector } from "react-redux";
import { Store } from "redux";
import { useParams } from "react-router";
const Preview = props => {
  let { name } = useParams()
  const finalx = name.split('_')
  const {
    scoring,
    setScoring,
    criteria,
    id,
    score,
    previewScore,
    setPreviewScore,
    finalScore,
    setFinalScore
  } = useContext(Hooks);
  const [final, setFinal] = useState(0);
  const { datax, aspect, team } = useSelector((state: Store) => ({
    datax: state.event.results,
    aspect: state.event.aspect,
    team: state.event.team
  }));
  let scoring_null = []
  // }
  for (let x in aspect) {

    scoring_null.push({
      score: 0,
      aspect_id: parseInt(x) + 1
    })
  }
  useEffect(() => {
    let data = 0
    criteria.forEach((val, i) => {
      data += val[1]
    });
    setFinal(data);
    setFinalScore(data);

  }, [previewScore, team]);
  // console.log(finalScore, criteria, aspect, "score akhir")
  return (
    <div
      className={`sticky-top ${previewScore ? "" : "d-none"}`}
      style={{ zIndex: 1888 }}
    >
      <div className="scoring-team position-absolute">
        <div className="scoring-team__head d-flex sticky-top">
          <img
            src={Back}
            alt=""
            width="24"
            className="mr-2"
            onClick={e => setPreviewScore(!previewScore)}
            style={{ cursor: 'pointer' }}
          />
          <div className="d-flex title justify-content-start w-100 sticky-top">
            Preview Score
          </div>
        </div>
        <div className="scoring-team__body">
          {aspect &&
            aspect.map((val, i, arr) => {
              return (
                <>
                  <div
                    className={`${previewScore ? `list d-flex` : `list`}`}
                    key={i}
                    style={{ paddingBottom: i === (arr.length - 1) && '40px' }}
                  >
                    <div
                      className="criteria"
                      style={{
                        borderBottom: previewScore ? "1px solid #e8e8e8" : "",
                        width: previewScore && "100%"
                      }}
                    >
                      <div className="detail">
                        {i + 1 + '. ' + val.description}
                      </div>
                      <div className="title">{val.caption}</div>
                    </div>
                    {/* <Rates criteria={team[finalx[1]].score_details[i]} hide={true} count={false} /> */}
                    <Rates scoring={team && team[finalx[1]].score_details.length > 0 ? true : false} index={i} aspect={aspect.length} criteria={team && team[finalx[1]].score_details.length > 0 ? team[finalx[1]].score_details[i] : scoring_null[i]} hide={true} />
                  </div>
                </>
              );
            })}
          <div className="final-score d-flex justify-content-center">
            <p className="current">
              {final}&nbsp;<span className="total">/&nbsp;{criteria.length * 5}</span>
            </p>
          </div>
          <div className="preview-score text-center d-sm-block d-none">
            <ButtonPreview
              name="Submit Score"
              padding="13px 32.5px 12px 32.5px"
              hide={true}
              submit={true}
              data={aspect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
