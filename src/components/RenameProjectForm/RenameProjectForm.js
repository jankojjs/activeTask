import classes from './RenameProjectForm.module.css';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

function RenameProjectForm(props) {
    const projectRenameInputRef = useRef();
    let history = useHistory();

    function renameProjectHandler(e) {
        e.preventDefault();
        const enteredProjectRename = projectRenameInputRef.current.value;

        fetch(
            'http://jjsolutions.rs/api/renameprojectapi.php?new_name='+enteredProjectRename+'&project_id='+props.project_id
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
            <form>
            <input type='text' name='username' placeholder='Enter new project name' required ref={projectRenameInputRef} autoComplete='off'/>
            <button className='alt' onClick={props.onCancel}>Cancel</button>
            <input type='submit' className='btn' value='Create' onClick={renameProjectHandler}/>
            </form>
        </div>
    )
}

export default RenameProjectForm;