import { AiFillPlayCircle, AiOutlineClose, AiOutlineUpload, AiFillPauseCircle } from "react-icons/ai";
import { useState, useEffect, useContext } from 'react';
import classes from './TimeTracking.module.css';
import TimeContext from "../../store/time-context";

function TimeTracking(props) {
    const TimeCtx = useContext(TimeContext);
    const [isTracking, setIsTracking] = useState(TimeCtx.isTracking);
    const [initialTime, setInitialTime] = useState(parseInt(props.taskDetails.task_time));
    const [formatedTime, setFormatedTime] = useState();
    const [formatedInitialTime, setFormatedInitialTime] = useState(new Date(initialTime * 1000).toISOString().substr(11, 5))
    if(localStorage.getItem(props.taskDetails.task_id) === null) {
        localStorage.setItem(props.taskDetails.task_id, 0);
    }
    const [counter, setCounter] = useState(TimeCtx.counter);

    useEffect(() => {
        setCounter(localStorage.getItem(props.taskDetails.task_id))
        isTrackingCheck();
    },[TimeCtx])

    function isTrackingCheck() {
        setIsTracking(localStorage.getItem('active_task')===props.taskDetails.task_id);
    }

    useEffect(() => {
        setFormatedTime(new Date(counter * 1000).toISOString().substr(11, 5)) // use 8 as last digit to format as HH:MM:SS, now its HH:MM
    }, [counter])

    function updateTimeRecord() {
        const url = 'http://jjsolutions.rs/api/addtimeapi.php?time='+counter+'&task_id='+props.taskDetails.task_id;

        fetch(url).then((response) => {
            return response.json();
        }).then((body)=>{
            if(body !== undefined) {
                setFormatedInitialTime(new Date((initialTime + parseInt(counter)) * 1000).toISOString().substr(11, 5))
            } else {
                alert('Sorry could not update time at this moment.')
            }
        })
    }
    function resetTrackingHandler() {
        setIsTracking(false);
        TimeCtx.resetCounting(props.taskDetails.task_id);
        localStorage.removeItem('active_task');
    }

    function uploadTime() {
        updateTimeRecord();
        setIsTracking(false);
        TimeCtx.resetCounting(props.taskDetails.task_id);
        localStorage.removeItem('active_task');
    }

    function plusClick(){
        TimeCtx.addTimedTask(props.taskDetails.task_id)
    }

    function pauseClick() {
        TimeCtx.pauseCounting();
    }

    return (
        <div className={classes.wrap}>
            <div className={classes.top}>{formatedInitialTime}</div>
            <div className={classes.bot}>
                <div className={classes.startTimer}>
                    { isTracking ? <span onClick={pauseClick}><AiFillPauseCircle color={'red'} size={28}/></span> : <span onClick={plusClick}><AiFillPlayCircle color={'green'} size={28}/></span> }
                </div>
                <div className={classes.botMid}>
                    <span style={{ color: isTracking ? 'red' : '' }}>{formatedTime}</span>
                    <span onClick={resetTrackingHandler} className={classes.reset}><AiOutlineClose size={22} onClick={resetTrackingHandler}/></span>
                </div>
                <div className={classes.uploadBtn}>
                    <AiOutlineUpload size={25} onClick={uploadTime}/>
                </div>
            </div>
            <div className={classes.debugTools}>
                <div onClick={plusClick}>PLUS</div>
                <div onClick={pauseClick}>Pause</div>
            </div>
        </div>
    )
}

export default TimeTracking;