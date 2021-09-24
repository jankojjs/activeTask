import { useState, useRef, useEffect } from 'react';
import classes from './TaskAsigneeDropdown.module.css';

function TaskAsigneeDropdown(props) {
    const taskAsigneeInput = useRef();
    const [asigneeBegining, setAsigneeBegining] = useState(props.asignee);

    useEffect(() => {
        setAsigneeBegining(props.asignee);
        return () => {
          //your cleanup code codes here
            setAsigneeBegining();
        };
    },[])

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
                // setAsigneeBegining(taskAsigneeInput.current.value);
            } else {
                alert('Sorry there was an error while trying to create a new task.')
            }
        })
    }
    return (
        <span>
            <select onChange={changeHandler} defaultValue={props.asignee} className={classes.select} ref={taskAsigneeInput}>
                <option value=''>None</option>
                {
                    props.peoples.map((singlePerson)=>{
                        return (<option key={singlePerson.project_id} value={singlePerson.username}>{singlePerson.username}</option>)
                    })
                }
            </select>
        </span>
    )
}

export default TaskAsigneeDropdown;