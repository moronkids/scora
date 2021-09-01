import React, { useEffect, useState } from "react";
import Homepage from "components/layouts/header";
import Leaderboards from "components/homepage/parts/leaderboards";
import Sorting from "components/homepage/parts/sorting";
import { store } from "redux";
import { useSelector } from "react-redux";
import ListEvent from 'components/list-event';
// import { Redirect } from "react-router";
import { Redirect, useHistory } from "react-router";
const Hompage = () => {
  const history = useHistory();
  const event = useSelector((state: typeof store) => state.event.event_active)
  const [redirect, setRedirect] = useState(false)
  useEffect(() => {
    console.log(event, "klumpur")
    if (event === null) {
      setRedirect(true)
    }
  }, [event])
  return (
    <>
      {redirect ? <Redirect to="/list-event" /> : null}
      <div className="homepage-scora">
        {/* <Sorting /> */}
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <Leaderboards />

      </div></>
  );
};

export default Hompage;
