import classes from "./TasklistCard.module.css";
import { useState, useEffect } from "react";
import NewTaskButton from "../NewTaskButton/NewTaskButton";
import { FiMoreHorizontal } from "react-icons/fi";
import TaskCard from "../TaskCard/TaskCard";
import Backdrop from "../Backdrop/Backdrop";
import EditTasklistModal from "../EditTasklistModal/EditTasklistModal";
import TasklistDeleteModal from "../TasklistDeleteModal/TasklistDeleteModal";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

function TasklistCard(props) {
  const [allTasks, setAllTasks] = useState([]);
  const [removeList, setRemoveList] = useState(false);
  const [editList, setEditList] = useState(false);
  const [listName, setListName] = useState(props.tasklist_name);
  const [newTaskFormClickListener, setNewTaskFormClickListener] =
    useState(false);
  const [showAllTasks, setShowAllTasks] = useState(
    props.tasklist_tasks.length < 6
  );
  const [activeTaskCounter, setActiveTaskCounter] = useState(0);
  const [activeTasks, setActiveTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(props.tasklist_tasks.length);

  useEffect(() => {
    setAllTasks([...props.tasklist_tasks]);
  }, [props.tasklist_tasks]);

  useEffect(() => {
    countUpActiveCounter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTasks.length]);

  function countUpActiveCounter() {
    setActiveTasks(
      props.tasklist_tasks.filter(
        (singleTask) => singleTask.task_active === "1"
      )
    );
    setActiveTaskCounter(activeTasks.length);
  }

  function addToAllTasks(newObj) {
    setAllTasks([...allTasks, newObj]);
    newTaskCreateHandler();
  }

  function renameList(newName) {
    setListName(newName);
  }

  function editListOpen() {
    setEditList(true);
  }

  function editListClose() {
    setEditList(false);
  }

  function removeListOpen() {
    setRemoveList(true);
  }

  function removeListClose() {
    setRemoveList(false);
  }

  function openNewTaskForm() {
    setNewTaskFormClickListener(true);
  }

  function closeNewTaskForm() {
    setNewTaskFormClickListener(false);
  }

  function seeAllTasksHandler() {
    setShowAllTasks(true);
  }

  function seeLessTasksHandler() {
    setShowAllTasks(false);
  }

  function newTaskCreateHandler() {
    setActiveTaskCounter(activeTaskCounter + 1);
    setTotalTasks(totalTasks + 1);
  }

  function finishTaskHandler() {
    setActiveTaskCounter(activeTaskCounter - 1);
  }

  function unfinishTaskHandler() {
    setActiveTaskCounter(activeTaskCounter + 1);
  }

  return (
    <div className={classes.tl}>
      <div>
        <span className={classes.tlName}>{listName}</span>
        <span className={classes.count}>
          {activeTaskCounter} out of {totalTasks} open
        </span>
        <span className={classes.more}>
          <FiMoreHorizontal />
          <div className={classes.moreOptions}>
            <div className={classes.option} onClick={editListOpen}>
              Edit
            </div>
            <div className={classes.option} onClick={removeListOpen}>
              Remove
            </div>
          </div>
        </span>
        {showAllTasks ? (
          <ul className={classes.list}>
            {allTasks &&
              allTasks.map((individualTaskCard) => {
                return (
                  <li
                    className={classes.listItem}
                    key={individualTaskCard.task_id}
                  >
                    <TaskCard
                      key={individualTaskCard.task_id}
                      taskId={individualTaskCard.task_id}
                      name={individualTaskCard.task_name}
                      label={individualTaskCard.task_label}
                      active={individualTaskCard.task_active}
                      finishTask={finishTaskHandler}
                      unfinishTask={unfinishTaskHandler}
                    />
                  </li>
                );
              })}
            {allTasks.length > 6 && (
              <div
                className={classes.seeAllTasks}
                onClick={seeLessTasksHandler}
              >
                See less
              </div>
            )}
          </ul>
        ) : (
          <ul className={classes.list}>
            {allTasks.slice(0, 5).map((individualTaskCard) => {
              return (
                <li
                  className={classes.listItem}
                  key={individualTaskCard.task_id}
                >
                  <TaskCard
                    key={individualTaskCard.task_id}
                    taskId={individualTaskCard.task_id}
                    name={individualTaskCard.task_name}
                    label={individualTaskCard.task_label}
                    active={individualTaskCard.task_active}
                    finishTask={finishTaskHandler}
                    unfinishTask={unfinishTaskHandler}
                  />
                </li>
              );
            })}
            <div className={classes.seeAllTasks} onClick={seeAllTasksHandler}>
              See all tasks
            </div>
          </ul>
        )}
        {newTaskFormClickListener ? (
          <NewTaskForm
            key={props.tasklist_id}
            currentListId={props.tasklist_id}
            onCancel={closeNewTaskForm}
            onSuccess={addToAllTasks}
          />
        ) : (
          <NewTaskButton key={props.tasklist_id} onClick={openNewTaskForm} />
        )}
      </div>
      {removeList && <Backdrop onCancel={removeListClose} />}
      {removeList && (
        <TasklistDeleteModal
          onCancel={removeListClose}
          onDelete={props.onDelete}
          list_id={props.tasklist_id}
        />
      )}
      {editList && <Backdrop onCancel={editListClose} />}
      {editList && (
        <EditTasklistModal
          list_id={props.tasklist_id}
          onUpdate={renameList}
          onCancel={editListClose}
        />
      )}
    </div>
  );
}

export default TasklistCard;
