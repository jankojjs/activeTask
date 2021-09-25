import { useState, useRef } from 'react';
import classes from './TaskAsigneeDropdown.module.css';

function TaskAsigneeDropdown(props) {
    const taskAsigneeInput = useRef();
    const [initialAsigneeEmptyHandler] = useState(props.asignee !== null);

    function changeHandler() {
        fetchChangeSuccess();
    }

    function fetchChangeSuccess() {
        const url = 'https://jjsolutions.rs/api/chaneasigneeapi.php';
        const formData = new FormData();
        formData.append('task_id',props.taskId);
        formData.append('task_asignee',taskAsigneeInput.current.value);

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data !== undefined) {
            } else {
                alert('Sorry there was an error while trying to create a new task.')
            }
        })
    }

    return (
        <span>
            <select onChange={changeHandler} defaultValue={props.asignee} className={classes.select} ref={taskAsigneeInput}>
                <option value=''>None</option>
                { initialAsigneeEmptyHandler && <option value={props.asignee}>{props.asignee}</option> }
                {
                    props.peoples.map((singlePerson)=>{
                        if(singlePerson.username !== props.asignee) {
                            return (<option key={singlePerson.project_id} value={singlePerson.username}>{singlePerson.username}</option>)
                        }
                    })
                }
            </select>
        </span>
    )
}

export default TaskAsigneeDropdown;