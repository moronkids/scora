import React, { useContext, useEffect } from "react";
import Sorting from "components/homepage/parts/sorting";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import ButtonScoring from 'components/layouts/buttons'
import { Hooks } from "providers/index";
import Video from 'assets/img/Video.svg'
import { useSelector } from "react-redux";
import { Store } from "redux";
import { useParams } from "react-router";
import ButtonBack from 'components/help/parts/menu/button-back'
import { Link } from "react-router-dom";
const Leaderboards = () => {
  let { name } = useParams()
  const final = name.split('_')
  const { finalScore, setFinalScore, next, setNext, submitted, setSubmitted } = useContext(Hooks);
  const { detail_team, team } = useSelector((state: Store) => ({
    detail_team: state.event.detail_team[0],
    team: state.event.team
  }))

  return (
    <div className="container">
      <div className="help-center btn-back-detail_team">
        <Link to="/">
          <ButtonBack padding={String} />
        </Link>
      </div>
      <div className="leaderboards">
        <div className="leaderboards__head d-flex flex-row mb-3">
          <div className="title justify-content-start w-100">Detail Team</div>
        </div>
        <div className="leaderboards__body">
          <div className="leaderboards__list d-flex my-auto w-100 py-sm-0 py-3">
            <div className="col p-0 m-0">
              <div className="team d-flex w-100">
                <div className="img my-md-auto" />
                <div className="col pr-0">
                  <div className="name-team d-flex">
                    <div className="justify-content-start w-auto pr-2">
                      {detail_team?.display_name || <ReactPlaceholder
                        type="rect"
                        ready={false}
                        color="#E0E0E0"
                        style={{ width: 300, height: 20 }}
                      >-</ReactPlaceholder>}
                    </div>
                    <div className="fav d-flex justify-content-end my-auto" style={{ filter: team && team[final[1]].is_favorite ? 'none' : 'grayscale(1)' }} />
                  </div>
                  <div className="shortdesc-team">
                    {detail_team?.detail_team?.tournament_idea_team?.short_description || '-'}
                  </div>
                </div>
              </div>
            </div>
            <div className="ur_score d-md-block d-none justify-content-end my-auto">
              Your&nbsp;Score: <br />
              <span className="mx-auto">{team?.[final[1]].grandtotal}</span>
            </div>
            <div className="justify-content-center my-auto d-none d-md-block">
              <ButtonScoring
                name="Scoring"
                padding="13px 55px 13px 55px"
                function={1}
              />
            </div>
          </div>
          <div className="long-desc">
            {detail_team?.detail_team?.tournament_idea_team?.long_description || '-'}
            {/* Plastic waste is eternal. We take the imperishable nature of
            plastic, turn it into durable modular furniture that can always
            adopt the needs of its users. We aim to cut down plastic waste,
            while reducing excessive consumerism. */}
          </div>
          <div className="attach-desc">
            <h3>Final Submission Demo</h3>
            {detail_team?.detail_team?.tournament_idea_team?.submission_video && <img src={detail_team?.detail_team?.tournament_idea_team?.submission_video} alt="" className="vid" />}
            <div className="title-attach">Ideation Document:</div>
            <div className="link-attach" style={{
              textDecorationLine: `${(detail_team?.detail_team?.tournament_idea_team?.document === undefined) && 'none'}`
            }}>
              {detail_team?.detail_team?.tournament_idea_team?.document || '-'}
            </div>
            <div className="title-attach">Final submission:</div>
            {/* {alert(detail_team?.detail_team?.tournament_idea_team?.drive_url)} */}
            <div className="link-attach" style={{
              textDecorationLine: `${(detail_team?.detail_team?.tournament_idea_team?.drive_url === undefined) && 'none'}`
            }}>
              {detail_team?.detail_team?.tournament_idea_team?.drive_url || '-'}
            </div>
            {/* <div className="title-attach">Final submission document:</div>
            <div className="link-attach">
              https://drive.google.com/file/d/1ODQ63qD1tVSlMpzlSk_Kiz-LxNNHDKVW/view
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;
