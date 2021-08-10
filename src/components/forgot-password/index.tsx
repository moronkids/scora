import React, { useContext, useEffect } from 'react';
import ScoraLogo from "assets/img/demo-logo/Scora.svg";
import { Link } from 'react-router-dom';
import { Hooks } from 'providers'
const ForgotPass = () => {
  const { contactUs, setContactUs } = useContext(Hooks);
  useEffect(() => {

  }, [contactUs]);
  return (
    <div className="forgot-password">
      <div className="forgot-password__box text-center px-sm-0 px-3">
        <Link to="/login">
          <img
            src={ScoraLogo}
            alt=""
            className="justify-content-center mx-auto"
          />
        </Link>
        <div className="box-forgot mx-auto">
          <h1>Forgot your password?</h1>
          <h2>
            Please call your organizer/admin officer this <b>[Event Name]</b>{" "}
              or{" "}
            <b
              style={{ color: "#005F61", cursor: 'pointer' }}
              onClick={e => setContactUs(!contactUs)}
            >
              Contact Us
              </b>
              .
            </h2>
        </div>
        <Link to="/login">
          <h3>Back to login</h3>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPass;

