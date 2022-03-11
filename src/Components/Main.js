import React from "react"
//import Sparkle from 'react-sparkle'
import Sparkle  from './Sparkles';

import '../assets/styles/Main.css';

export default function Main() {
    return ( <SparklyThing/>)
}



const SparklyThing = () => (
  <div className="myFrame background sparkles">
      
      <Sparkle flicker={false}  overflowPx={0}   />
  </div>
)