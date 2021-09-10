import classes from './EditTaskForm.module.css';
import Editor from "../Editor/Editor";
import { useState, useRef } from 'react';

function EditTaskForm(props) {
    const [editorState, setEditorState] = useState('');
    const taskNameInput = useRef();
    const taskLabelInput = useRef();
    const [labelTask,setLabelTask] = useState(props.taskLabel);

    function newTaskFormHandler(e) {
        e.preventDefault();
        const enteredTaskName = taskNameInput.current.value;
        const chosenTaskLabel = taskLabelInput.current.value;
        const currentListIdValue = props.currentListId;

        const url = 'https://jjsolutions.rs/api/newtaskapi.php';
        const formData = new FormData();
        formData.append('list_id', currentListIdValue);
        formData.append('task_name', enteredTaskName);
        formData.append('task_description', editorState);
        formData.append('task_label', chosenTaskLabel);

        const newObj = {
            'task_active': '1',
            'task_description': editorState,
            'task_id': '999',
            'task_name': enteredTaskName,
            'task_label': chosenTaskLabel
        }

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data !== undefined) {
                newObj.task_id = data.task_id; 
                props.onSuccess(newObj);
                props.onCancel();
            } else {
                alert('Sorry there was an error while trying to create a new task.')
            }
        })
    }
    
    function changeEditorState(newValue) {
        setEditorState(newValue);
    }

    return (
        <div>
            <form className={classes.wrap}>
                <input defaultValue={props.taskName} ref={taskNameInput} type='text' required autoComplete='off' />
                <Editor defVal={props.taskDescription} onUpdate={changeEditorState}/>
                <select defaultValue={props.taskLabel} className={classes.select} ref={taskLabelInput}>
                    <option value=''>None</option>
                    <option value='In progress'>In progress</option>
                    <option value='Done'>Done</option>
                    <option value='Quickfix'>Quickfix</option>
                    <option value='On stage'>On stage</option>
                    <option value='Merged'>Merged</option>
                </select>
                <div className={classes.controls}>
                    <div onClick={props.onCancel} className='alt'>Cancel</div>
                    <input onClick={newTaskFormHandler} className='btn' value='Submit' type='submit'/>
                </div> 
            </form>
        </div>
    )
}

export default EditTaskForm;