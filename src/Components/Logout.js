import React from 'react';

import {  useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/actions/userActions";

const Logout = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  
  // redirecting if logged in.
  useEffect(() => {
    
      dispatch(logout())
      
  }, [ dispatch]);
  useEffect(() => {
    console.log("ggggdfsf")
    navigate("/");
    
}, [ navigate]);
  
return (
  <>
  
  </>
)
}

export default Logout; 