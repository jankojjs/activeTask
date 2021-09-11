import classes from './EditTasklistModal.module.css';
import { useRef } from 'react';

function EditTasklistModal(props) {
    const listRenameInputRef = useRef();

    function renameListHandler(e) {
        e.preventDefault();
        const newListName = listRenameInputRef.current.value;
        
        fetch(
            'http://jjsolutions.rs/api/editlistapi.php?new_name='+newListName+'&list_id='+props.list_id
        ).then(response => response.json()).then(data => {
            if(data !== undefined) {
                props.onUpdate(newListName);
                props.onCancel();
            } else {
                alert('Something went wrong.')
            }
        })
    }

    return (
        <div className={classes.card}>
            <form className={classes.form}>
            <input type='text' name='username' placeholder='Enter new tasklist name' required ref={listRenameInputRef} autoComplete='off' />
            <button className='alt' onClick={props.onCancel}>Cancel</button>
            <input type='submit' className='btn' value='Create' onClick={renameListHandler}/>
            </form>
        </div>
    )
}

export default EditTasklistModal;