import Editor from "../Editor/Editor";
import classes from './NewTaskForm.module.css';

function NewTaskForm(props) {
    return (
    <div>
        <form className={classes.wrap}>
            <input type='text' placeholder='Task name' required />
            <Editor />
            <div className={classes.controls}>
                <div onClick={props.onCancel} className='alt'>Cancel</div>
                <input className='btn' value='Submit' type='submit'/>
            </div> 
        </form>
    </div>
    )
}

export default NewTaskForm;