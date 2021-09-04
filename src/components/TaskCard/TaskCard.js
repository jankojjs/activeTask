import { useState } from 'react';
import classes from './TaskCard.module.css';
import { AiFillCheckCircle } from "react-icons/ai";

function TaskCard(props) {
    const [checked, setChecked] = useState(props.active);
    const [label, setLabel] = useState(props.label);
    let newCheckValue;

    function checkTaskHandler() {
        if(checked === '1') {
            setChecked('0');
            newCheckValue = 0;
        } else {
            newCheckValue = 1;
            setChecked('1');
        }
        fetch(
            'https://jjsolutions.rs/taskcompleteapi.php?task_id='+props.taskId+'&task_active='+newCheckValue
        )
        .then(response => response.json())
        .then(data => {
            if(data === undefined) {
                alert('Sorry something went wrong.');
            }
        })
    }

    return (
        <div className={`${checked === '0' && classes.finished}`}>
            <span onClick={checkTaskHandler} className={classes.checkd}>
                { checked==='0' ? <AiFillCheckCircle size={22} color={'green'} /> : <span className={classes.notChecked}></span>}
            </span>
            <span className={classes.name}>{props.name}</span>
            { label !== null && <span className={classes.label}>{label}</span> }
        </div>
    )
}

export default TaskCard;