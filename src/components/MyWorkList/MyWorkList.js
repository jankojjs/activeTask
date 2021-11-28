import classes from "./MyWorkList.module.css";
import { useState, useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";

function MyWorkList(props) {
  const [fetchedData, setFetchedData] = useState();
  const [state, setState] = useState(false);
  const [noTasks, setNoTasks] = useState(true);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchData() {
    fetch(
      "http://jjsolutions.rs/api/myworkapi.php?username=" +
        localStorage.getItem("username")
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.length) {
          props.setCount(0);
        } else {
          setFetchedData(data);
          props.setCount(data.length);
          setState(true);
          setNoTasks(false);
        }
      });
  }

  function funcTwo() {
    console.log("");
  }

  return (
    <div className={classes.wrap}>
      {state &&
        fetchedData.map((singleDataItem) => {
          return (
            <TaskCard
              key={singleDataItem.task_id}
              taskId={singleDataItem.task_id}
              name={singleDataItem.task_name}
              label={singleDataItem.task_label}
              active={singleDataItem.task_active}
              finishTask={funcTwo}
              unfinishTask={funcTwo}
            />
          );
        })}
      {noTasks && (
        <div className={classes.noTask}>
          Congradulations! <br /> You have completed all of your tasks.
        </div>
      )}
    </div>
  );
}

export default MyWorkList;
