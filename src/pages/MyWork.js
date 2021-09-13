import classes from './MyWork.module.css';
import { useState } from 'react';
import TimeWeek from '../components/TimeWeek/TimeWeek';

function MyWorkPage() {
    const [tasksView, setTasksView] = useState(true);
    const [timetrackView, setTimetrackView] = useState(false);

    function openTrackView() {
        setTasksView(false);
        setTimetrackView(true);
    }

    function openTasksView() {
        setTasksView(true);
        setTimetrackView(false);
    }

    return (
        <div className={classes.cardWrap}>
            <div>
                <h2 className={classes.pageHeadline}>My Work</h2>
            </div>
            <div className={classes.card}>
                <span onClick={openTasksView} style={{ borderBottom: tasksView ? '2px solid blue' : '' }} className={classes.navItem}>Tasks(5)</span>
                <span onClick={openTrackView} style={{ borderBottom: timetrackView ? '2px solid blue' : '' }} className={classes.navItem}>TimeTracker</span>
            </div>
            <div className={classes.card}>
                { tasksView && <div>aaa</div> }
                { timetrackView && <TimeWeek /> }
            </div>
        </div>
    )
}

export default MyWorkPage;