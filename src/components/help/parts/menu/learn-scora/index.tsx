import React, { useContext } from "react";
import ButtonBack from "components/help/parts/menu/button-back";
import { Hooks } from 'providers'
import img1 from 'assets/img/contact-us/img-start-using-scora.svg';
import Mobile from 'components/help/mobile'
const LearnScora = (props: any) => {
  const { tabsActive, setTabsActive, contactUs, setContactUs } = useContext(Hooks);
  for (let index = 0; index < 4; index++) {
    // const data;

  }
  return (
    <div className="help-center container">
      <div className="wrapping d-sm-flex d-none">
        <div className="left-side justify-content-start">
          <ButtonBack padding="0 0 24px 0" value_={"< Back to Help"} link={'/help'} />
          <div className="title">Learn Scora</div>
          <div
            className={`${tabsActive === 1 ? `list active` : `list`}`}
            onClick={e => setTabsActive(1)}
          >
            How to start using Scora
          </div>
          <div
            className={`${tabsActive === 2 ? `list active` : `list`}`}
            onClick={e => setTabsActive(2)}
          >
            How to Judging Team
          </div>
          <div
            className={`${tabsActive === 3 ? `list active` : `list`}`}
            onClick={e => setTabsActive(3)}
          >
            How to Change Email Account
          </div>
          <div
            className={`${tabsActive === 4 ? `list active` : `list`}`}
            onClick={e => setTabsActive(4)}
          >
            How to Logout from Scora
          </div>
        </div>
        <div className="right-side justify-content-end">
          <div
            id="1"
            className={`tab ${tabsActive === 1 ? `d-block` : `d-none`}`}
          >
            <h1>How start using Scora</h1>
            <p className="">
              Scora look and features are ever-evolving—your screen probably
              looks different than this video—but the key concepts remain the
              same.
            </p>
            <h2>Step 1</h2>
            <img src={img1} alt="" className="" />
            <p className="">
              Scora look and features are ever-evolving—your screen probably
              looks different than this video—but the key concepts remain the
              same. Scora look and features are ever-evolving—your screen
              probably looks different than this video—but the key concepts
              remain the same.
            </p>
            <div className="contact-us-section">
              <h1>Still need help?</h1>
              <p className="">
                Our team trying as possible to help you,{" "}
                <span onClick={e => setContactUs(!contactUs)}>Contact Us</span>
              </p>
            </div>
          </div>
          <div
            id="2"
            className={`tab ${tabsActive === 2 ? `d-block` : `d-none`}`}
          >
            2
          </div>
          <div
            id="3"
            className={`tab ${tabsActive === 3 ? `d-block` : `d-none`}`}
          >
            3
          </div>
          <div
            id="4"
            className={`tab ${tabsActive === 4 ? `d-block` : `d-none`}`}
          >
            4
          </div>

        </div>
      </div>
      <Mobile />
    </div>
  );
};

export default LearnScora;
