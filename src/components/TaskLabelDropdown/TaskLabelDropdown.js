import classes from "./TaskLabelDropdown.module.css";
import { useState, useRef } from "react";

function TaskLabelDropdown(props) {
  const taskLabelInput = useRef();
  const [label] = useState(props.label);

  function changeHandler() {
    fetchChangeSuccess();
  }

  function fetchChangeSuccess() {
    const url = "https://jjsolutions.rs/api/changelabelapi.php";
    const formData = new FormData();
    formData.append("task_id", props.taskId);
    formData.append("task_label", taskLabelInput.current.value);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
        } else {
          alert("Sorry there was an error while trying to create a new task.");
        }
      });
  }

  return (
    <span>
      <select
        onChange={changeHandler}
        defaultValue={label}
        className={classes.select}
        ref={taskLabelInput}
      >
        <option value="">None</option>
        <option value="In progress">In progress</option>
        <option value="Done">Done</option>
        <option value="Quickfix">Quickfix</option>
        <option value="On stage">On stage</option>
        <option value="Merged">Merged</option>
      </select>
    </span>
  );
}

export default TaskLabelDropdown;
