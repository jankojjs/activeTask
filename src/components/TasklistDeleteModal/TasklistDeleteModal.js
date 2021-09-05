import classes from './TasklistDeleteModal.module.css';

function TasklistDeleteModal(props) {
    function deleteListHandler() {
        fetch(
            'https://jjsolutions.rs/api/deletetasklistapi.php?list_id='+props.list_id
        ).then(response => response.json()).then(data => {
            if(data !== undefined) {
                props.onDelete(props.list_id);
            } else {
                alert('There was an error deleting that project.')
            }
        })
    }

    return(
        <div className={classes.card}>
            <h3>Are you sure?</h3>
            <button onClick={props.onCancel} className='alt'>Cancel</button>
            <button onClick={deleteListHandler} className='btn'>Delete</button>
        </div>
    )
}

export default TasklistDeleteModal;