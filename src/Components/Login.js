import React from 'react';
import Alert from './Alert';
import Main from './Main';
import '../assets/styles/Main.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/styles.css';
import '../assets/styles/index.css';
import '../assets/styles/tailwind.css';
import '../assets/styles/Main.css';

import Navbar from './NavbarUser';
import NavbarGuest from './NavbarGuest';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../state/actions/userActions";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialValues = {
    email: '',
    password: ''
  };
  const navigateToSignUp = () => navigate("/Register");

  const navigate = useNavigate();
  const { accessToken: userToken } = useSelector(
    (state) => state.userDetails
  );
  const MyBar = () => {

    if (userToken) {

      return (<Navbar />)
    }
    else {
      return (<NavbarGuest />)
    }
  }
  const dispatch = useDispatch();

  async function handleUserLogin(e) {

    e.preventDefault();

    dispatch(login(email, password));

  }

  // redirecting if logged in.
  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [userToken, navigate]);


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  });


  return (
    <>
      <MyBar />

      <div className=" background">
        <div className="flex content-center items-center justify-center h-full">

          <div className="w-full lg:w-4/12 px-4 ">
            <div className='grid11'>
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-900 border-1">









                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-beige text-center mb-3 font-bold ">
                    <p>&nbsp;</p>
                    <p>LOGIN</p>
                  </div>
                  <Formik initialValues={initialValues} validationSchema={validationSchema} >
                    {({ errors, touched, isSubmitting }) => (

                      <Form onSubmit={handleUserLogin}>


                        <div className="form-group relative w-full mb-3">
                          <label className="block uppercase  text-xs font-bold mb-2        bg-blueGray-800 text-beige  font-bold uppercase px-3 py-1 rounded ">Email</label>


                          <input
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                          />

                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group relative w-full mb-3 mt-5">
                          <label className="block uppercase text-xs font-bold mb-2        bg-blueGray-800 text-beige  font-bold uppercase px-3 py-1 rounded">Password</label>

                          <input
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            required
                          />

                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                          <a
                            href=""
                            onClick={(e) => e.preventDefault()}
                            className="text-blueGray-200"
                          >
                            <Link to="forgot-password" className="text-blueGray-200 pr-0"><small>Forgot Password?</small></Link>
                          </a>

                        </div>

                        <div className="form-row">
                          <div className="form-group col">
                            <button type="submit" disabled={isSubmitting}
                              className="bg-blueGray-800 text-beige active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg  outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                              {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                              Login
                            </button>

                          </div>

                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>



















                <div className="text-beige text-center mb-3 font-bold ">
                  <div className="text-center mb-3">

                    <h6 className="text-beige text-sm font-bold mt-2">
                      Or login with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-blueGray-100 active:bg-blueGray-100 btn-sub text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow-md hover:shadow-lg inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/facebook.svg").default}
                      />
                      Facebook
                    </button>
                    {/* <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> */}
                    <button
                      className=" bg-blueGray-100 active:bg-blueGray-100 btn-sub text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow-md hover:shadow-lg inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/google.svg").default}
                      />
                      Google
                    </button>
                  </div>
                  <hr className="mt-1 mb-1 border-b-1 border-blueGray-300" />
                  <Alert />

                  
                </div>
              </div>



              <div className="btn-wrapper mt-48 text-blueGray-200 text-center  ">
              
               <div className='bg-emerald-900 border-1 rounded-lg'>
               <hr className=" border-b-1 border-blueGray-300" />
               <p>&nbsp;</p> 
                <p className="  mt-2 font-bold">Don't you have an account yet? Then please sign up first:</p>
                <button type="button" className="   active:bg-blueGray-100  bg-blueGray-100 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow-md hover:shadow-lg inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 btn-sub " onClick={navigateToSignUp} >
                  Sign Up
                </button>
                <p>&nbsp;</p> 
                <hr className=" border-b-1 border-blueGray-300" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Login; 