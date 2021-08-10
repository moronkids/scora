import React, { useContext, useEffect } from 'react';
import ButtonBack from 'components/help/parts/menu/button-back'
import { Hooks } from "providers";
import Outside from "components/layouts/buttons/outside-components";
import { Link } from 'react-router-dom'

const Help = () => {
  const { contactUs, setContactUs } = useContext(Hooks);
  useEffect(() => {

  }, [contactUs]);
  return (
    <>
      <div className="help-center container">
        <Link to="/">
          <ButtonBack padding={String} />
        </Link>
        <div className="help-center__option ">
          <Link to="help/learn-scora" rel="noopener noreferrer">

            <div className="list justify-content-center">
              <h3>I Want to Learn Scora</h3>
              <p className="">
                Comprehensive articles to skim through the basics.
              </p>
            </div>
          </Link>
          <div className="list justify-content-center">
            {" "}
            <h3>I'm having trouble with Scora</h3>
            <p className="">
              Comprehensive articles to skim through the basics.
              </p>
          </div>
          {/* <Outside for="popup"> */}
          <div
            className="list justify-content-center"
            onClick={e => setContactUs(!contactUs)}
          >
            {" "}
            <h3>Contact Us</h3>
            <p className="">
              Our team trying as possible to help you
              </p>
          </div>
          {/* </Outside> */}
        </div>
      </div>

    </>
  );
};

export default Help;