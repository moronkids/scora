import React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const placeholder = () => {
  const temp_data = [];
  for (let i = 0; i < 10; i++) {
    temp_data.push(
      <div
        className="leaderboards__body d-flex "
        style={{ background: i % 2 === 0 ? "#F9FBFB" : "white" }}
      >
        <div className="leaderboards__list d-flex my-auto w-100 py-sm-0 py-3">
          <div className="number my-md-auto">{i + 1}</div>
          <div className="col p-0 m-0">
            <div className="team d-flex w-100">
              <ReactPlaceholder
                type="rect"
                ready={false}
                color="#E0E0E0"
                style={{ width: 50, height: 50 }}
              ></ReactPlaceholder>
              <div className="col pr-0">
                <div className="name-team d-flex">
                  <div className="justify-content-start w-100">
                    <ReactPlaceholder
                      type="textRow"
                      ready={false}
                      color="#E0E0E0"
                    ></ReactPlaceholder>
                  </div>
                  <div className="fav d-md-none d-flex justify-content-end my-auto" />
                </div>
                <div className="shortdesc-team">
                  <ReactPlaceholder
                    type="textRow"
                    ready={false}
                    color="#E0E0E0"
                  ></ReactPlaceholder>
                </div>

                <div className="row pl-3 pt-3 d-md-none d-flex">
                  <div className="ur_score d-md-none d-block justify-content-end my-auto">
                    Yours: <br />
                    <span className="mx-auto">
                      <ReactPlaceholder
                        type="textRow"
                        ready={false}
                        color="#E0E0E0"
                      ></ReactPlaceholder>
                    </span>
                  </div>
                  <div className="pl-4 total_score d-md-none d-block justify-content-end my-auto">
                    Total&nbsp;Score: <br />
                    <span className="mx-auto">
                      <ReactPlaceholder
                        type="textRow"
                        ready={false}
                        color="#E0E0E0"
                      ></ReactPlaceholder>
                    </span>
                  </div>
                  {/* <div className="option d-md-none d-block justify-content-end my-auto" /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="fav d-md-block d-none justify-content-end my-auto" />
          <div className="ur_score d-md-block d-none justify-content-end my-auto">
            Yours: <br />
            <span className="mx-auto">
              <ReactPlaceholder
                type="textRow"
                ready={false}
                color="#E0E0E0"
              ></ReactPlaceholder>
            </span>
          </div>
          <div className="total_score d-md-block d-none justify-content-end my-auto">
            Total&nbsp;Score: <br />
            <span className="mx-auto">
              <ReactPlaceholder
                type="textRow"
                ready={false}
                color="#E0E0E0"
              ></ReactPlaceholder>
            </span>
          </div>
          <div className="option d-md-block d-none justify-content-end my-auto" />
        </div>
      </div>
    );
  }
  return <div>{temp_data}</div>;
};

export default placeholder;
