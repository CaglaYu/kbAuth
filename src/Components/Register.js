import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Alert from './Alert';
import '../css/styles.css';
import '../assets/styles/index.css';
import '../assets/styles/tailwind.css';
import '../assets/styles/Main.css';
import { accountService, alertService } from '../services';
import Navbar from './NavbarUser';
import NavbarGuest from './NavbarGuest';
import {  useSelector } from "react-redux";

function Register({ history }) {
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
  const initialValues = {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  };

  const validationSchema = Yup.object().shape({
    
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'Accept Terms & Conditions is required')
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {

    alertService.clear();
    setStatus();
    accountService.register(fields)
      .then(() => {
        alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
        history.push('login');
      })
      .catch(error => {
        setSubmitting(false);
        alertService.error(error);
      });
  }

  return (
    <>
    <MyBar/>  
      <div className=" background">
        <div className="flex content-center  justify-center">
          <div className="w-full lg:w-4/12 px-4 mt-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-900 border-1">
              <div className="flex-auto px-4 lg:px-10  pt-0">
                <div className="text-beige text-center mb-3 font-bold ">
                  <div className="text-center mb-3">
                    <h6 className="text-beige text-sm font-bold mt-2">
                      Sign up with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("assets/img/facebook.svg").default}
                      />
                      Facebook
                    </button>
                    <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
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
                  <hr className="mt-1 mb-2 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-beige text-center mb-3 font-bold">
                    <small>Or sign up with credentials</small>
                  </div>
                  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ errors, touched, isSubmitting }) => (

                      <Form>

                        <div className="form-group relative w-full mb-3">
                          <div className="form-row">
                            <div className='grid11'>
                              <div className="form-group mr-6 ">
                                <label className="block uppercase  text-xs font-bold mb-1  bg-blueGray-800 text-beige  font-bold uppercase px-1 py-1 rounded ">First Name</label>
                                <Field name="firstName" type="text" className={'border-0 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                              </div>
                              <div className="form-group  ">
                                <label className="block uppercase  text-xs font-bold mb-1  bg-blueGray-800 text-beige  font-bold uppercase px-1 py-1 rounded ">Last Name</label>
                                <Field name="lastName" type="text" className={'border-0 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group mt-4">
                            <label className="block uppercase  text-xs font-bold mb-1  bg-blueGray-800 text-beige  font-bold uppercase px-1 py-1 rounded ">Email</label>
                            <Field name="email" type="text" className={'border-0 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-row mt-4">
                            <div className="form-group col">
                              <label className="block uppercase  text-xs font-bold mb-1  bg-blueGray-800 text-beige  font-bold uppercase px-1 py-1 rounded ">Password</label>
                              <Field name="password" type="password" className={'border-0 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                              <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col mt-4">
                              <label className="block uppercase  text-xs font-bold mb-1  bg-blueGray-800 text-beige  font-bold uppercase px-1 py-1 rounded ">Confirm Password</label>
                              <Field name="confirmPassword" type="password" className={'border-0 px-1 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                              <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                          </div>
                          <div className="form-group form-check mt-4">
                            <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="form-check-label text-white text-center  font-bold">Accept Terms & Conditions</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                          </div>
                          <div className="form-group">
                            <button type="submit" disabled={isSubmitting}
                              className="bg-blueGray-800 text-beige active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                              {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                              Register
                            </button>
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                          </div>
                          <Alert />
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register; 