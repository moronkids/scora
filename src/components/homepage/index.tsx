import React from "react";
import Homepage from "components/layouts/header";
import Leaderboards from "components/homepage/parts/leaderboards";
import Sorting from "components/homepage/parts/sorting";
const Hompage = () => {
  return (
    <div className="homepage-scora">
      {/* <Sorting /> */}
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <Leaderboards />

    </div>
  );
};

export default Hompage;
