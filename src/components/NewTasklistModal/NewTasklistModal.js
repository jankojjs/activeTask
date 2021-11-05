import classes from './NewTasklistModal.module.css';
import { useRef } from 'react';

function NewTasklistModal(props) {
    const tasklistNameInputRef = useRef();

    function newTasklistHandler(e) {
        e.preventDefault();
        const enteredTasklistName = tasklistNameInputRef.current.value;

        fetch(
            'https://jjsolutions.rs/api/createlistapi.php?project_id='+props.project_id+'&list_name='+enteredTasklistName
        ).then(response => response.json()).then(data => {
            if(data !== undefined) {
                props.onCancel();
                props.clickHande();
            } else {
                alert('Something went wrong.')
            }
        })
    }

    return (
        <div className={classes.card}>
            <form className={classes.form}>
            <input type='text' placeholder='Enter tasklist name' required ref={tasklistNameInputRef} autoComplete="off" />
            <button className='alt' onClick={props.onCancel}>Cancel</button>
            <input type='submit' className='btn' value='Create' onClick={newTasklistHandler}/>
            </form>
        </div>
    )
}

export default NewTasklistModal;