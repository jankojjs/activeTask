import { useState } from "react";
import classes from "./PageDetailCard.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";
import TimeTracking from "../TimeTracking/TimeTracking";
import { MdDelete, MdEdit } from "react-icons/md";
import Backdrop from "../Backdrop/Backdrop";
import DeleteTaskModal from "../DeleteTaskModal/DeleteTaskModal";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
import TaskLabelDropdown from "../TaskLabelDropdown/TaskLabelDropdown";
import TaskAsigneeDropdown from "../TaskAsigneeDropdown/TaskAsigneeDropdown";
import CommentsCard from "../CommentsCard/CommentsCard";

function PageDetailCard(props) {
  const [inheritedTask] = useState(props.taskObj);
  const history = useHistory();
  const [deleteModal, setDeleteModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [taskLabel, setTaskLabel] = useState(inheritedTask.task_label);
  const [taskDescription, setTaskDescription] = useState(
    inheritedTask.task_description
  );
  const [taskName, setTaskName] = useState(inheritedTask.task_name);

  function updateTaskInfo(newName, newDesc, newLabel) {
    setTaskLabel(newLabel);
    setTaskName(newName);
    setTaskDescription(newDesc);
  }

  function backBtnHandler() {
    // history.push('/project/'+inheritedTask.project_id);
    history.goBack();
  }

  function deleteHandler() {
    setDeleteModal(true);
  }

  function closeDeleteModal() {
    setDeleteModal(false);
  }

  function editFormOpen() {
    setEditForm(true);
  }

  function editFormClose() {
    setEditForm(false);
  }

  return (
    <div className={classes.card}>
      <div className={classes.newGrid}>
        <div className={classes.topRow}>
          <div className={classes.active}>
            {inheritedTask.task_active === "0" ? (
              <span className={classes.checked}>
                <AiFillCheckCircle size={22} color={"green"} />
              </span>
            ) : (
              <span className={classes.notChecked}></span>
            )}
          </div>
          <div
            className={`${
              inheritedTask.task_active === "0" ? "completed" : "notcompleted"
            }`}
          >
            <span className={classes.pageDetHeadline}>{taskName}</span>
          </div>
          <div onClick={editFormOpen} className={classes.edit}>
            <MdEdit size={23} />
          </div>
          <div onClick={deleteHandler} className={classes.delete}>
            <MdDelete size={23} />
          </div>
          <div onClick={backBtnHandler} className={classes.back}>
            <span className={classes.backIcon}>
              <IoIosArrowDropleft size={22} />
            </span>
            {inheritedTask.project_name}
          </div>
        </div>
        <div className={classes.timeDesktop}>
          <TimeTracking taskDetails={inheritedTask} />
        </div>
      </div>
      {editForm ? (
        <EditTaskForm
          onSuc={updateTaskInfo}
          taskId={inheritedTask.task_id}
          taskLabel={taskLabel}
          taskName={taskName}
          taskDescription={taskDescription}
          onCancel={editFormClose}
        />
      ) : (
        <div className={classes.gridWrap}>
          <div className={classes.left}>
            <div
              className={classes.taskDesc}
              dangerouslySetInnerHTML={{ __html: taskDescription }}
            ></div>
          </div>
          <div className={classes.right}>
            <div className={classes.labelGroup}>
              Tasklist:{" "}
              <span className={classes.purple}>{inheritedTask.list_name}</span>
            </div>
            <div className={classes.labelGroup}>
              Asignee:
              <TaskAsigneeDropdown
                taskId={inheritedTask.task_id}
                peoples={props.people}
                asignee={inheritedTask.task_asignee}
              />
            </div>
            <div className={classes.labelGroup}>
              Label:
              <TaskLabelDropdown
                taskId={inheritedTask.task_id}
                label={inheritedTask.task_label}
              />
            </div>
          </div>
        </div>
      )}
      {deleteModal && <Backdrop onCancel={closeDeleteModal} />}
      {deleteModal && (
        <DeleteTaskModal
          projectId={inheritedTask.project_id}
          taskId={inheritedTask.task_id}
          onCancel={closeDeleteModal}
        />
      )}
      <div className={classes.timeMobile}>
        <TimeTracking taskDetails={inheritedTask} />
      </div>
      <CommentsCard />
    </div>
  );
}

export default PageDetailCard;
