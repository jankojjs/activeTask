import { useState } from 'react';
import classes from './TaskCard.module.css';
import { AiFillCheckCircle } from "react-icons/ai";

function TaskCard(props) {
    const [checked, setChecked] = useState(props.active);
    const [label, setLabel] = useState(props.label);

    function checkTaskHandler() {
        if(checked === 1) {
            setChecked(0);
        } else {
            setChecked(1);
        }
    }

    return (
        <div className={checked===1 ? classes.finished : ''}>
            <span onClick={checkTaskHandler} className={classes.checkd}>
                { checked===1 ? <AiFillCheckCircle size={22} color={'green'} /> : <span className={classes.notChecked}></span>}
            </span>
            <span className={classes.name}>{props.name}</span>
            { label !== null && <span className={classes.label} >{label}</span>}
        </div>
    )
}

export default TaskCard;