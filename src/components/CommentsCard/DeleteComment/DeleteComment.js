import classes from './DeleteComment.module.css';

function DeleteTaskModal(props) {
    function deleteComment() {
        fetch(
            'https://jjsolutions.rs/api/deletecommentapi.php?cid='+props.cid
        ).then(response => response.json()).then(data => {
            if(data !== undefined) {
                props.onSuccess();
            } else {
                alert('There was an error deleting that comment.')
            }
        })
    }

    return (
        <div className={classes.card}>
            <h3>Are you sure?</h3>
            <button onClick={props.onCancel} className='alt'>Cancel</button>
            <button onClick={deleteComment} className='btn'>Delete</button>
        </div>
    )
}

export default DeleteTaskModal;