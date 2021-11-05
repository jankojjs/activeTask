import classes from './NewProjectForm.module.css';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

function NewProjectForm(props) {
    const projectNameInputRef = useRef();
    let history = useHistory();

    function newProjectHandler(e) {
        e.preventDefault();
        const enteredProjectName = projectNameInputRef.current.value;

        fetch(
            'https://jjsolutions.rs/api/newprojectapi.php?user_id='+props.user_id+'&project_name='+enteredProjectName
        ).then(response => response.json()).then(data => {
            if(data !== undefined) {
                history.push('/projects');
            } else {
                alert('Something went wrong.')
            }
        })
    }

    return (
        <div className={classes.card}>
            <form className={classes.form}>
            <input type='text' placeholder='Enter project name' required ref={projectNameInputRef} autoComplete="off" />
            <button className='alt' onClick={props.onCancel}>Cancel</button>
            <input type='submit' className='btn' value='Create' onClick={newProjectHandler}/>
            </form>
        </div>
    )
}

export default NewProjectForm;