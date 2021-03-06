import React, { useContext } from 'react';
import { Hooks } from 'providers'
import { store } from 'redux/index'
import { DO_LOGOUT } from 'redux/actions';
import { useSelector, useDispatch, connect } from "react-redux"; //hooks
import { Link } from 'react-router-dom';
const Account = (props: any) => {
  const dispatch = useDispatch();
  const { contactUs, setContactUs, sorting, profile, setProfile, setSorting, bgActive, setbgActive } = useContext(Hooks);
  const { auth } = useSelector((state: store) => ({
    auth: state.auth.data.user
  }));
  const logOut = () => {
    localStorage.removeItem('token');
    dispatch({ type: DO_LOGOUT })
    window.location.href = "/login"
  }

  return (
    <div className={`account position-absolute ${profile ? `` : `d-none`}`}>
      <div className="account__box">
        <div className="account__identity-box">
          <h2>{`${auth ? auth.first_name : ''} ${auth ? auth.last_name : ''}`}</h2>
          <p className="p-0 m-0">{auth ? auth.email : ''}</p>
        </div>
        <div className="account__identity-menu">
          {/* <Link to="/list-event">
            View List Event</div></Link>
          Change Password</div>
          <div className="menu" onClick={(e) => logOut()}>Logout</div> */}
          <ul className="m-0 p-0 w-100">
            <Link to="/list-event" onClick={() => { setbgActive(false); setProfile(false); setSorting(false) }}>
              <li>View List Event</li></Link>
            <Link to="/forgotpass-logged">
              <li onClick={() => { setbgActive(false); setProfile(false); setSorting(false) }}>Change Password</li>
            </Link>
            <li onClick={(e) => { logOut(); setbgActive(false); setProfile(false); setSorting(false) }}>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;