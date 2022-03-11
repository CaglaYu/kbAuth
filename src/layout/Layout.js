import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import NavbarGuest from '../Components/NavbarGuest';
import NavbarUser from '../Components/NavbarUser';
import Footer from '../Components/Footer';
import './styles.css';



const Layout = ({ children  }) => {
  const auth = useSelector((state) => state.auth)    
  return (
    <>
      {!auth.isAuthenticated ? (<NavbarGuest />):(<NavbarUser/>)}
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};



export default Layout;

