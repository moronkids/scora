import React, { useContext, useEffect } from "react";
import DetailTeams from "components/detail-team/parts/teams";
import Scoring from "./parts/scoring";
import { useLocation, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { HIT_DETAIL_TEAM } from "redux/actions";
import { Hooks } from "providers";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const DetailTeam = () => {
  let { name } = useParams()
  const dispatch = useDispatch()
  const final = name.split('_')
  const context = useContext(Hooks)
  useEffect(() => {
    dispatch({ type: HIT_DETAIL_TEAM, payload: final[0].replace(/\s/g, '%20') })
  }, [name])
  return (
    <div className="detailteam-scora">
      <DetailTeams />
      <Scoring aspect={final[1]} />
    </div>
  );
};

export default DetailTeam;

