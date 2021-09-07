import { AiFillPlayCircle, AiOutlineClose, AiOutlineUpload, AiFillPauseCircle } from "react-icons/ai";
import { useState, useEffect, useContext } from 'react';
import classes from './TimeTracking.module.css';

function TimeTracking(props) {
    const [isTracking, setIsTracking] = useState(false);
    if(localStorage.getItem(props.taskDetails.task_id) === null) {
        localStorage.setItem(props.taskDetails.task_id, 0);
    }
    const [counter, setCounter] = useState(parseInt(localStorage.getItem(props.taskDetails.task_id)));

    useEffect(() => {
        const interval = setInterval(() => {timeTick()}, 1000);

        return () => {
          clearInterval(interval);
        };
    }, [isTracking,counter])

    function timeTick() {
        if(isTracking){
            setCounter(counter+1);
        } else {
            setCounter(counter)
        }
        localStorage.setItem(props.taskDetails.task_id,counter);
    }

    function startTrackingHandler() {
        setIsTracking(true);
    }

    function stopTrackingHandler() {
        setIsTracking(false);
    }

    function resetTrackingHandler() {
        setIsTracking(false);
        setCounter(0);
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.top}>0:00h</div>
            <div className={classes.bot}>
                <div className={classes.startTimer}>
                    { isTracking ? <span onClick={stopTrackingHandler}><AiFillPauseCircle color={'red'} size={28}/></span> : <span onClick={startTrackingHandler}><AiFillPlayCircle color={'green'} size={28}/></span> }
                </div>
                <div className={classes.botMid}>
                    <span>{counter}</span>
                    <span onClick={resetTrackingHandler} className={classes.reset}><AiOutlineClose size={24} onClick={resetTrackingHandler}/></span>
                </div>
                <div>
                    <AiOutlineUpload size={27}/>
                </div>
            </div>
        </div>
    )
}

export default TimeTracking;