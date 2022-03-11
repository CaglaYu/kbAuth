import React, { useState, useEffect } from "react";

import Footer from './Footer';
import { useSelector } from "react-redux";
import Main from './Main';
import '../assets/styles/Main.css';
import Navbar from './NavbarUser';
import NavbarGuest from './NavbarGuest';
import { accountService } from '../services';
const Home = ({ history }) => {
    const { user, accessToken } = useSelector(
        (state) => state.userDetails

    );
    const MyBar = () => {

        if (user) {

            return (<Navbar />)
        }
        else {
            return (<NavbarGuest />)
        }
    }
    return (



        <div className="myFrame">
            <MyBar />
            <Main />
            {/* <Footer /> */}
        </div>

    )
}

export default Home;
