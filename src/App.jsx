import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SlidingWindow from './component/slidingwindow'
import TokenBucket from './component/TokenBucket'
import LeakyBucket from './component/LeakyBucket'

function App() {
  return (
    <div style={{  padding:"4rem"}}>
    <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , marginBottom:"2rem"}}>
       <h1 style={{color : "grey" }}>Rate Limiter Using 3 Different Algorithm</h1>
    </div>
    <div style={{display:"flex" , justifyContent:"space-around"}}>
      <SlidingWindow/>
      <TokenBucket/>
      <LeakyBucket/>
    </div>
    </div>
  )
}

export default App;
