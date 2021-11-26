import classes from "./DeleteTaskModal.module.css";
import { useHistory } from "react-router-dom";

function DeleteTaskModal(props) {
  let history = useHistory();

  function deleteTask() {
    fetch(
      "https://jjsolutions.rs/api/deletetaskapi.php?task_id=" + props.taskId
    )
      .then((response) => response.json())
      .then((data) => {
        if (data !== undefined) {
          history.push("/project/" + props.projectId);
        } else {
          alert("There was an error deleting that project.");
        }
      });
  }

  return (
    <div className={classes.card}>
      <h3>Are you sure?</h3>
      <button onClick={props.onCancel} className="alt">
        Cancel
      </button>
      <button onClick={deleteTask} className="btn">
        Delete
      </button>
    </div>
  );
}

export default DeleteTaskModal;
