import React, { useState, useEffect } from 'react';
import '../app.css';
import { useTimer } from "reactjs-countdown-hook";
// import CounterPair from './counterpair';
/**
 * 
 * @returns countdown implementation uses https://www.hoseinh.com/how-to-create-a-count-down-timer-in-react-easily/
 */
function Countdown() {
    //don't need any of this from HERE
    const testCounter = (t) => {
        let val = Math.floor(t / (3600 * 24));
        return val;
    }
    useEffect(() => {
        console.log(typeof(days));
        console.log(seconds)
        console.log(currentTimeInMilliseconds);
        console.log(timer);
        console.log(testCounter(timer));
    },[]);//i forgot what to put in brackets
    //TO HERE
    //should any of this happen in useEffect? I think so....
    const currentTimeInMilliseconds=Date.now();
    //generated using https://www.unixtimestamp.com/
    const weddingdate = 1695502800000;
    
    const [timer, setTimer] = useState((weddingdate-currentTimeInMilliseconds)/1000)
    const {
        isActive,
        counter,
        seconds,
        minutes,
        hours,
        days,
        pause,
        resume,
        reset,
      } = useTimer(timer, handleTimerFinish);
      //NEED TO DO SOMETHING FOR THIS FUNCTION
      function handleTimerFinish() {
        //need to rewrite what this does
        alert("times up!");
      }
     
    return(
        /**  
        *COUNTDOWN JSX   
        Feature List: Write out check for if days and hours are 0, don't show if so
        */
        <>
       
        <div className="count-container">
            <h1 className="countdown-title">Wedding Countdown </h1>
                <div>
                    <h1 className="countdown-label">Days: </h1>
                    <p className="countdown-labelpair">{days}</p>
                </div>
                <div>
                    <h1 className="countdown-label">Hours: </h1>
                    <p className="countdown-labelpair">{hours}</p>
                </div>
                <div>
                <h1 className="countdown-label">Minutes: </h1>
                    <p className="countdown-labelpair">{minutes}</p>
                </div>
                <div>
                <h1 className="countdown-label">Seconds: </h1>
                    <p className="countdown-labelpair">{parseInt(seconds)}</p>
                </div>
            </div>
            {/**HORIZONTAL LINE CODE BELOW */}
            <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
            }}/>
        </>

    )
}

export default Countdown;