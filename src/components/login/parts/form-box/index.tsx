import React, { useContext, useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Input from "components/layouts/input-fields";
import Button from "components/layouts/buttons";
import { Link } from "react-router-dom";
import { Hooks } from 'providers';
import { useSelector, useDispatch, connect } from "react-redux"; //hooks
import { DO_LOADING, DO_LOGIN, HIT_LOGIN } from "redux/actions";
import content from 'components/login/parts/form-box/formcontrol'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { Store } from "redux";
import { idText } from "typescript";


const FormBox = () => {
  toast.configure();
  let schema = yup.object().shape({
    username: yup.string().required().min(3),
    password: yup.string().required().min(3),
  });
  const dispatch = useDispatch();

  type FormData = {
    username: string;
    password: string;
  };
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const [stat, setStat] = useState([])
  const onSubmit = async (data: FormData): void => {
    await dispatch({ type: DO_LOADING, payload: true })
    await dispatch({ type: HIT_LOGIN, payload: data })


  }
  const { status } = useSelector((state: Store) => ({
    status: state.auth
  }));
  const notify = (e) => toast(e, {
    className: 'toastify-bg-error',
    bodyClassName: "toastify-text-success",
    progressClassName: 'toastify-progress-bar',
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  useEffect(() => {
    // alert('sd')
    // notify()
    if (status.error) {
      notify(status.error);

      dispatch({ type: DO_LOGIN, payload: 'reset' })
      dispatch({ type: DO_LOADING, payload: false })
    } else {
      dispatch({ type: DO_LOADING, payload: false })
    }
  }, [status]);


  return (
    <div className="login__form-box mx-auto">
      {/* <p className={`error_msg ${stat?.error ? 'd-block' : 'd-none'}`}>{stat.error}</p> */}
      <h1 className="login__signin text-center">Login to continue</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          content.inputs.map((val, i) => {
            return (
              <div className="input-fields" key={i}>
                <h1
                  className="input-fields__title"
                  style={{ padding: val.padding ? val.padding : 0 }}
                >
                  {val.label}
                </h1>
                <input
                  className="input-fields__input-box"
                  type={val.type}
                  placeholder={val.label}
                  {...register(val.name)}
                />
                <p className={`error_msg ${errors[val.name]?.message ? 'd-block' : 'd-none'}`}>{errors[val.name]?.message}</p>
              </div>

            )
          })
        }
        {/* <Input
          title="Email"
          padding="40px 0 0 0"
          placeholder="Email"
          type="text"
          username={true}
          // error={ }
        />
        <Input
          title="Password"
          padding="20px 0 0 0"
          placeholder="Password"
          type="password"
          password={true}
          // error={ }
        /> */}
        <div className="mt-4" style={{ cursor: 'pointer' }} >
          <Button name="Login" padding="11px 0 11px 0" width="100%" type="submit" value="Submit" />
        </div>
      </form>
      <Link to="/forgotpass">
        <h3 className="mx-auto text-center">Forgot your password?</h3>
      </Link>
    </div>
  );
};

export default FormBox;


