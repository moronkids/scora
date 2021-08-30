import React, { useContext } from "react";
import { Hooks } from "providers";
import Outside from "components/layouts/buttons/outside-components";
import Phone from "assets/img/contact-us/Phone.svg";
import Email from "assets/img/contact-us/Email.svg";
import close_popup from 'assets/img/icons/Icon Close.svg'
const PopUp = props => {
  const { contactUs, setContactUs } = useContext(Hooks);
  return (
    <div className={`contact-us ${contactUs ? `d-flex` : `d-none`}`}>
      <div
        className="overlay position-fixed"
        onClick={e => setContactUs(!contactUs)}
      />

      <div className="contact-us__popup my-auto mx-sm-auto mx-3">
        <div className="box">
          <div className="w-100 d-flex justify-content-end">
            <img src={close_popup} alt="" style={{ cursor: 'pointer' }} onClick={e => setContactUs(!contactUs)} />
          </div>
          <div className="d-flex justify-content-between pb-2">
            <h3 >Contact Us</h3>
            {/* <span> */}
            {/* </span> */}
          </div>
          <div className="box-inside">
            <div className="w-100 justify-content-around pb-sm-0 pb-3">
              <img src={Phone} alt="" className="justify-content-start" />

              <div className="d-inline-block justify-content-center">
                <h3 className="d-block">Call</h3>

                <a href="tel:099912345678"><p className="d-block">099912345678</p></a>

              </div>
            </div>
            <div className="w-100 justify-content-around pb-sm-0 pb-3">
              <img src={Email} alt="" />
              <div className="d-inline-block justify-content-center">
                <h3 className="d-block">Email</h3>
                <a href="mailto:support@scora.id">
                  <p className="d-block">support@scora.id</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
