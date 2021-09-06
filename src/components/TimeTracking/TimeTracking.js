import { AiFillPlayCircle, AiOutlineClose, AiOutlineUpload, AiFillPauseCircle } from "react-icons/ai";
import { useState, useEffect, useContext } from 'react';
import classes from './TimeTracking.module.css';
import TimeContext from '../../store/time-context';

function TimeTracking(props) {
    const timeCtx = useContext(TimeContext);
    const [isTracking, setIsTracking] = useState(false);

    useEffect(() => {
        console.log(timeCtx.tasks)
    }, [timeCtx.tasks])

    function startTrackingHandler() {
        setIsTracking(true);
        timeCtx.pushToTimedTasks(props.taskDetails);
    }

    function stopTrackingHandler() {
        setIsTracking(false);
    }

    function resetTrackingHandler() {
        setIsTracking(false);
        timeCtx.removeFromTimedTasks(props.taskDetails.task_id)
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.top}>0:00h</div>
            <div className={classes.bot}>
                <div className={classes.startTimer}>
                    { isTracking ? <span onClick={stopTrackingHandler}><AiFillPauseCircle color={'red'} size={28}/></span> : <span onClick={startTrackingHandler}><AiFillPlayCircle color={'green'} size={28}/></span> }
                </div>
                <div className={classes.botMid}>
                    <span>00:00h</span>
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