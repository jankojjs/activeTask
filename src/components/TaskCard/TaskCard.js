import { useState } from "react";
import classes from "./TaskCard.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function TaskCard(props) {
  const [checked, setChecked] = useState(props.active);
  const [label] = useState(props.label);
  let newCheckValue;
  let labelColor;

  if (label === "Quickfix") {
    labelColor = "red";
  }
  if (label === "In progress") {
    labelColor = "teal";
  }
  if (label === "On stage") {
    labelColor = "blue";
  }
  if (label === "Done") {
    labelColor = "lightgreen";
  }
  if (label === "Merged") {
    labelColor = "orange";
  }

  function checkTaskHandler() {
    if (checked === "1") {
      setChecked("0");
      newCheckValue = 0;
      props.finishTask();
    } else {
      newCheckValue = 1;
      setChecked("1");
      props.unfinishTask();
    }
    fetch(
      "https://jjsolutions.rs/api/taskcompleteapi.php?task_id=" +
        props.taskId +
        "&task_active=" +
        newCheckValue
    )
      .then((response) => response.json())
      .then((data) => {
        if (data === undefined) {
          alert("Sorry something went wrong.");
        }
      });
  }

  return (
    <div
      className={`${checked === "0" ? classes.finished : classes.notFinished}`}
    >
      <span onClick={checkTaskHandler} className={classes.checkd}>
        {checked === "0" ? (
          <AiFillCheckCircle size={22} color={"green"} />
        ) : (
          <span className={classes.notChecked}></span>
        )}
      </span>
      <Link className={classes.linkItem} to={"/task/" + props.taskId}>
        <span className={classes.name}>{props.name}</span>
        {label && (
          <span className={classes.label} style={{ color: labelColor }}>
            {label}
          </span>
        )}
      </Link>
    </div>
  );
}

export default TaskCard;
