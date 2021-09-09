import { Link } from 'react-router-dom';
import { AiFillPauseCircle } from "react-icons/ai";
import classes from './StopwatchCard.module.css';

function StopwatchCard(props) {

    return (
        <div className={classes.stopwatchCard}>
            <span onClick={props.onClick} className={classes.pause}><AiFillPauseCircle color={'red'} size={28}/></span> 
            <Link to={'/task/'+props.taskId}>Jump to task</Link>
        </div>
    )
}

export default StopwatchCard;