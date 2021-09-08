import { AiFillPlayCircle, AiOutlineClose, AiOutlineUpload, AiFillPauseCircle } from "react-icons/ai";
import { useState, useEffect, useContext } from 'react';
import classes from './TimeTracking.module.css';

function TimeTracking(props) {
    const [isTracking, setIsTracking] = useState(false);
    const [initialTime, setInitialTime] = useState(parseInt(props.taskDetails.task_time));
    const [formatedTime, setFormatedTime] = useState();
    const [formatedInitialTime, setFormatedInitialTime] = useState(new Date(initialTime * 1000).toISOString().substr(11, 5))
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

    useEffect(() => {
        setFormatedTime(new Date(counter * 1000).toISOString().substr(11, 5)) // use 8 as last digit to format as HH:MM:SS, now its HH:MM
    }, [counter])

    useEffect(() => {
        setFormatedInitialTime(new Date(initialTime * 1000).toISOString().substr(11, 5))
    }, [initialTime])

    function timeTick() {
        if(isTracking){
            setCounter(counter+1);
        } else {
            setCounter(counter)
        }
        localStorage.setItem(props.taskDetails.task_id,counter);
    }

    function updateTimeRecord() {
        const url = 'http://jjsolutions.rs/api/addtimeapi.php?time='+counter+'&task_id='+props.taskDetails.task_id;

        fetch(url).then((response) => {
            return response.json();
        }).then((body)=>{
            if(body !== undefined) {
                setInitialTime(initialTime + counter)
            } else {
                alert('Sorry could not update time at this moment.')
            }
        })
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

    function uploadTime() {
        updateTimeRecord();
        setIsTracking(false);
        setCounter(0);
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.top}>{formatedInitialTime}</div>
            <div className={classes.bot}>
                <div className={classes.startTimer}>
                    { isTracking ? <span onClick={stopTrackingHandler}><AiFillPauseCircle color={'red'} size={28}/></span> : <span onClick={startTrackingHandler}><AiFillPlayCircle color={'green'} size={28}/></span> }
                </div>
                <div className={classes.botMid}>
                    <span>{formatedTime}</span>
                    <span onClick={resetTrackingHandler} className={classes.reset}><AiOutlineClose size={24} onClick={resetTrackingHandler}/></span>
                </div>
                <div>
                    <AiOutlineUpload size={27} onClick={uploadTime}/>
                </div>
            </div>
        </div>
    )
}

export default TimeTracking;