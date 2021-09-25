import classes from './MyWork.module.css';
import { useState } from 'react';
import TimeWeek from '../components/TimeWeek/TimeWeek';
import MyWorkList from '../components/MyWorkList/MyWorkList';

function MyWorkPage() {
    const [tasksView, setTasksView] = useState(true);
    const [timetrackView, setTimetrackView] = useState(false);
    const [mwtCounter, setMwtCounter] = useState(0);

    function openTrackView() {
        setTasksView(false);
        setTimetrackView(true);
    }

    function openTasksView() {
        setTasksView(true);
        setTimetrackView(false);
    }

    function setmwtCounterHandler(passedVar){
        setMwtCounter(passedVar);
    }

    return (
        <div className={classes.cardWrap}>
            <div>
                <h2 className={classes.pageHeadline}>My Work</h2>
            </div>
            <div className={classes.cardOne}>
                <span onClick={openTasksView} style={{ borderBottom: tasksView ? '2px solid #7048e8' : '' }} className={classes.navItem}>Tasks ({mwtCounter})</span>
                <span onClick={openTrackView} style={{ borderBottom: timetrackView ? '2px solid #7048e8' : '' }} className={classes.navItem}>TimeTracker</span>
            </div>
            <div className={classes.card}>
                { tasksView && <MyWorkList setCount={setmwtCounterHandler}/> }
                { timetrackView && <TimeWeek /> }
            </div>
        </div>
    )
}

export default MyWorkPage;