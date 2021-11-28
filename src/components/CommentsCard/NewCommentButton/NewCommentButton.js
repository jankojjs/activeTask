import classes from "./NewCommentButton.module.css";
import { useState } from "react";
import { useLocation } from "react-router";
import Editor from "../../Editor/Editor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function NewCommentButton(props) {
  const location = useLocation();

  const [newCommentHandler, setNewCommentHandler] = useState(false);
  const [editorState, setEditorState] = useState("");
  const [taskId] = useState(location.pathname.replace("/task/", ""));

  function submitCommentHandler() {
    setNewCommentHandler(false);
    fetchNewComment();
  }

  function openNewCommentModal() {
    setNewCommentHandler(true);
  }

  function closeNewCommentModal() {
    setNewCommentHandler(false);
  }

  function changeEditorState(newValue) {
    setEditorState(newValue);
  }

  const url = "https://jjsolutions.rs/api/addcommentapi.php";
  const formData = new FormData();
  formData.append("task_id", taskId);
  formData.append("user_id", localStorage.getItem("user_id"));
  formData.append("comment_desc", editorState);

  function fetchNewComment() {
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === undefined) {
          alert("Could not submit your comment.");
        } else {
          props.pushNew();
        }
      });
  }

  return (
    <div className={classes.grid}>
      <div className={classes.avatar}>
        <div className={classes.avatarText}>
          {localStorage.getItem("username").charAt(0)}
        </div>
      </div>
      {newCommentHandler ? (
        <div>
          <div className={classes.edit}>
            <Editor defVal={""} onUpdate={changeEditorState} />
          </div>
          <div className={classes.controls}>
            <button onClick={closeNewCommentModal} className="alt">
              Cancel
            </button>
            <button onClick={submitCommentHandler} className="btn">
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.newCommentBtn} onClick={openNewCommentModal}>
          <span className={classes.fakeInputWrap}>Write a comment...</span>
        </div>
      )}
    </div>
  );
}

export default NewCommentButton;
