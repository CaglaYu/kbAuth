import React from 'react';
import '../assets/styles/Main.css';

const Loader = (props) => {
  return (
    <div className="loader-container loader" {...props}>
      <h3 className="loader-content">Loading..</h3>
    </div>
  );
};

export default Loader;
