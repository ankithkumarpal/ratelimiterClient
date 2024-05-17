import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {getSlidingWindow} from '../constants'

function SlidingWindow() {
  const [countdown, setCountdown] = useState(0);
  const [apiResponse, setApiResponse] = useState(null);
  const [totalHit, setTotalHit] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setApiResponse(null);
    }
  }, [countdown]);

  const handleHitApi = async () => {
    try {
      const response = await axios.get(getSlidingWindow);
      setApiResponse(response.data); 
      if (response.data.error) {
        setCountdown(10); // Start countdown if there's an error
        setTotalHit(0);
      }else {
        setTotalHit(totalHit+1);
      }
    } catch (error) {
      console.error('Error hitting API:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', border: '1px solid grey', padding: '2rem', borderRadius: '25px', width: 'fit-content', height: 'fit-content' }}>
        <h1 style={{ color: 'grey' }}>Sliding Window Algorithm</h1>
        {/* <p>Max 5  request per 10 sec.</p> */}
        <p>Window can process 5 requiest in 10 sec</p>
        <p>Maximum Capacity : 5 per 10 sec </p>
        <button onClick={handleHitApi}>Hit API</button> 
      <div>
        {apiResponse && !apiResponse.error && <div>{apiResponse.message +" " + totalHit}</div>}
        {apiResponse && apiResponse.error && countdown > 0 && <p>Please try again after {countdown} seconds</p>}
      </div>
    </div>
  );
}

export default SlidingWindow;
