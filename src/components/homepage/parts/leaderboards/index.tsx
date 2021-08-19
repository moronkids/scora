/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Sorting from "components/homepage/parts/sorting";
import { Hooks } from "providers/index";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "redux";
import { GET_DETAIL_TEAM, RESET_DETAIL_TEAM, HIT_FAV, HIT_FAV_REMOVE, HIT_TEAM, HIT_LOADING, DO_LOADING, POST_FAV } from "redux/actions";
import { Link } from "react-router-dom";
import LoaderBro from "components/homepage/parts/leaderboards/tableloader";
import Placeholder from 'components/homepage/parts/leaderboards/placeholder';
import { css } from 'glamor'
toast.configure();
const Leaderboards = () => {
  const dispatch = useDispatch();
  const { setSubmitted, sorting, setSorting, orderDisplay, setCriteria, setorderDisplay, favorite, setfavorite, phase_active } = useContext(Hooks);
  const { team, detail_team, loading, fav } = useSelector((state: Store) => ({
    team: state.event.team,
    loading: state.loading.loading,
    detail_team: state.event.detail_team,
    fav: state.event.fav
  }));
  let data: {} | null | undefined = [];
  const temp_data: {} | null | undefined = [];

  const notify = (e) => toast(e, {
    className: 'toastify-bg-success',
    bodyClassName: "toastify-text-success",
    progressClassName: 'toastify-progress-bar',
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  useEffect(() => {
    setSubmitted(false)
    setCriteria([]);
    if (fav !== 'reset') {
      notify(fav)
      dispatch({ type: POST_FAV, payload: 'reset' })
      // alert('masulkk')
    }
  }, [favorite, detail_team, team, fav]);
  const setfavoritex = async (a) => {
    for (let i in team) {

      if (team[i].id === a[0]) {
        if (a[2]) {
          if (team[i].is_favorite) {
            dispatch({ type: DO_LOADING, payload: true })
            dispatch({ type: HIT_FAV_REMOVE, payload: [a] })
          }
          else {
            dispatch({ type: DO_LOADING, payload: true })
            dispatch({ type: HIT_FAV, payload: [a] })
          }

        }
      }
    }
  }

  if (team !== null && team.length > 1) {

    for (let i = 0; i < team.length; i++) {
      data.push(
        <div
          className="leaderboards__body d-flex "
          style={{ background: i % 2 === 0 ? "#F9FBFB" : 'white' }}
        >
          <div className="leaderboards__list d-flex my-auto w-100 py-sm-0 py-3">
            <div className="number my-md-auto">{i + 1}</div>
            <div className="col p-0 m-0">
              <div className="team d-flex w-100">
                <div className="img my-md-auto" />
                <div className="col pr-0">
                  <div className="justify-content-between d-flex">
                    <div className=" d-flex">
                      <Link to={`/detail/team/${team[i].name}_${i}_${team[i].team_id}_${team[i].id}`}>
                        <div className="name-team justify-content-start w-100">
                          {team[i].name}
                        </div>
                      </Link>
                    </div>
                    <div className="fav d-md-none d-flex justify-content-end my-auto" style={{ filter: team[i].is_favorite ? 'none' : 'grayscale(1)' }} onClick={(e) => setfavoritex([team[i].id, phase_active, true])} />
                  </div>
                  <div className="shortdesc-team">
                    {team[i]['idea'].length > 0 ? team[i]['idea']['short_description'] : '-'}
                  </div>

                  <div className="row pl-3 pt-3 d-md-none d-flex">
                    <div className="ur_score d-md-none d-block justify-content-end my-auto">
                      {/* Your&nbsp;Score: <br /> */}
                      Yours: <br />
                      <span className="mx-auto">{team[i].total}</span>
                    </div>
                    <div className="pl-4 total_score d-md-none d-block justify-content-end my-auto">
                      Total&nbsp;Score: <br />
                      <span className="mx-auto">{team[i].grandtotal}</span>
                    </div>
                    {/* <div className="option d-md-none d-block justify-content-end my-auto" /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="fav d-md-block d-none justify-content-end my-auto" style={{ filter: team[i].is_favorite ? 'none' : 'grayscale(1)' }} onClick={(e) => setfavoritex([team[i].id, phase_active, true])} />
            <div className="ur_score d-md-block d-none justify-content-end my-auto">
              Yours: <br />
              <span className="mx-auto">{team[i].total}</span>
            </div>
            <div className="total_score d-md-block d-none justify-content-end my-auto">
              Total&nbsp;Score: <br />
              <span className="mx-auto">{team[i].grandtotal}</span>
            </div>
            {/* <div  /> */}
            <Link to={`/detail/team/${team[i].name}_${i}_${team[i].id}`} className="option d-md-block d-none justify-content-end my-auto">
            </Link>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="container">
      <div className="leaderboards">
        <div className="leaderboards__head d-flex flex-row mb-3">
          <div className="title justify-content-start">Leaderboard</div>
          <div className="d-flex sorting justify-content-end my-auto w-100">
            <Sorting />
            <div onClick={e => setSorting(!sorting)}>
              Sort by <span style={{ color: "#3A3A3A" }}>&nbsp;{orderDisplay}</span>
            </div>
            <div
              className="my-auto leaderboards__arrow-sort"
              onClick={e => setSorting(!sorting)}
            ></div>
          </div>
        </div>

        {
          loading ? <Placeholder /> : data.length > 0 ? data : <p className="text-center">No data available</p>
        }
      </div>
    </div>
  );
};

export default Leaderboards;
