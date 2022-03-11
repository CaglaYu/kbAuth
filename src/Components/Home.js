import React, { useState, useEffect } from "react";

import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logout from './Logout';
import Main from './Main';
import '../assets/styles/Main.css';
import Navbar from './NavbarUser';
import NavbarGuest from './NavbarGuest';
import IdleTimer from "_helpers/idleTimer";
const Home = ({ history }) => {
    const { user, accessToken } = useSelector(
        (state) => state.userDetails

    );

    const [isTimeout, setIsTimeout] = useState(false);
    useEffect(() => {
        if (user) {
            const timer = new IdleTimer({
                timeout: 4, //expire after 10 seconds
                onTimeout: () => {
                    setIsTimeout(true);
                },
                onExpired: () => {
                    // do something if expired on load
                    setIsTimeout(true);
                }
            });

            return () => {
                timer.cleanUp();
            };
        }
    }, []);


    const navigate = useNavigate();
    const MyBar = () => {

        if (user && !isTimeout) {

            return (<Navbar />)
        }
        else {

            return (<NavbarGuest />)
        }
    }
    if (user && isTimeout) {
        return (


            <Logout />

        )

    }
    else {
        return (



            <div className="myFrame">
                <MyBar />
                <Main />
                {/* <Footer /> */}
            </div>

        )
    }
}

export default Home;
