import React, { useEffect } from "react";
import LogoScora from "assets/img/demo-logo/Scora.svg";
import FormBox from "components/login/parts/form-box";
import { useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const Login = () => {
  const { phase, loading } = useSelector((state: Store) => ({
    phase: state.event.phase,
    loading: state.loading.loading
  }))
  useEffect(() => {

  }, [loading])
  return (
    <>
      {loading && <div className="contact-us" style={{ position: "unset", height: '1px', zIndex: '99999999999' }}>
        <div className="overlay d-flex"><div className="mx-auto my-auto">
          <Loader type="Rings" color="#00BFFF" height={80} width={80} /></div></div>
      </div>}
      <div className="login w-100 x">
        <div
          className="login__logo-scora mx-auto"
          style={{ backgroundImage: `url(${LogoScora})` }}
        />
        <FormBox />
      </div></>
  );
};

export default Login;
