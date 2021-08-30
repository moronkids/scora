import React, { useContext, useEffect } from 'react';
import ScoraLogo from "assets/img/demo-logo/Scora.svg";
import { Link } from 'react-router-dom';
import { Hooks } from 'providers'
const ForgotPass = () => {
  const { contactUs, setContactUs } = useContext(Hooks);
  useEffect(() => {

  }, [contactUs]);
  return (
    <div className="change-password">
      <div className="change-password__box text-center px-sm-0 px-3">
        <Link to="/login">
          <img
            src={ScoraLogo}
            alt=""
            className="justify-content-center mx-auto"
          />
        </Link>
        <div className="box-change mx-auto">
          <h1 className="text-center">Change your password?</h1>
          <h2 className="text-center" style={{ maxWidth: '390px', paddingTop: '20px' }}>
            {/* Please call your organizer/admin officer this <b>[Event Name]</b>{" "}
              or{" "} */}
            Please call [Event Name] 's staff or click here to
            <b
              style={{ color: "#005F61", cursor: 'pointer' }}
              onClick={e => setContactUs(!contactUs)}
            >
              &nbsp;Contact Us
            </b>
            .
          </h2>
        </div>
        <Link to="/">
          <h3>Back to Leaderboard</h3>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPass;

