import { useState } from 'react';
import Editor from "../../Editor/Editor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from './EditComment.module.css';

function EditComment(props) {
    const [editorState, setEditorState] = useState(props.initState);
    
    function changeEditorState(newValue) {
        setEditorState(newValue);
    }

    const url = 'https://jjsolutions.rs/api/changecommentapi.php';
    const formData = new FormData();
    formData.append('cid', props.cid);
    formData.append('comment_desc', editorState);

    function fetchEditComment() {
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response=>response.json())
        .then(data => {
            if(data === undefined) {
                alert('Could not change your comment.')
            } else {
                props.onSuccess();
            }
        })
    }

    return (
    <div>
        <div className={classes.edit}>
            <Editor defVal={editorState} onUpdate={changeEditorState}/>
        </div>
        <div className={classes.controls}>
            <button onClick={props.onCancel} className='alt'>Cancel</button>
            <button onClick={fetchEditComment} className='btn'>Send</button>
        </div>
    </div>
    )
}

export default EditComment;