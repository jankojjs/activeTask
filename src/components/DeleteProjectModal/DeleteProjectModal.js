import classes from './DeleteProjectModal.module.css';
import { useHistory } from 'react-router-dom';

function DeleteProjectModal(props) {
    let history = useHistory();

    function deleteProject() {
        fetch(
            'https://jjsolutions.rs/deleteprojectapi.php?project_id='+props.project_id
        ).then(response => response.json()).then(data => {
            if(data !== undefined) {
                history.push('/projects');
            } else {
                alert('There was an error deleting that project.')
            }
        })

    }

    return (
        <div className={classes.card}>
            <h3>Are you sure?</h3>
            <button onClick={props.onCancel} className='alt'>Cancel</button>
            <button onClick={deleteProject} className='btn'>Delete</button>
        </div>
    )
}

export default DeleteProjectModal;