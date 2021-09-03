import classes from './TasklistCard.module.css';
import { useState, useEffect } from 'react';
import NewTaskButton from '../NewTaskButton/NewTaskButton';
import { FiMoreHorizontal } from "react-icons/fi";
import TaskCard from '../TaskCard/TaskCard';
import Backdrop from '../Backdrop/Backdrop';
import EditTasklistModal from '../EditTasklistModal/EditTasklistModal';
import TasklistDeleteModal from '../TasklistDeleteModal/TasklistDeleteModal';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

function TasklistCard(props) {
    const [allTasks, setAllTasks] = useState([]);
    const [removeList, setRemoveList] = useState(false);
    const [editList, setEditList] = useState(false);
    const [listName, setListName] = useState(props.tasklist_name);
    const [newTaskFormClickListener, setNewTaskFormClickListener] = useState(false);

    useEffect(() => {
        setAllTasks([...props.tasklist_tasks]);
    }, [props.tasklist_tasks])

    useEffect(() => {
        if(allTasks.length > 0) {
            // console.log(allTasks)
        }
    }, [allTasks])

    function renameList(newName){
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

    return (
    <div className={classes.tl}>
        <div>
            <span className={classes.tlName}>{listName}</span>
            <span className={classes.count}>5 out of {props.tasklist_tasks.length} open</span>
            <span className={classes.more}>
                <FiMoreHorizontal />
                <div className={classes.moreOptions}>
                    <div className={classes.option} onClick={editListOpen}>Edit</div>
                    <div className={classes.option} onClick={removeListOpen}>Remove</div>
                </div>
            </span>
            <ul className={classes.list}>
                    {allTasks && allTasks.map((individualTaskCard) => {
                        return (
                            <li className={classes.listItem} key={individualTaskCard.task_id}>
                                <TaskCard key={individualTaskCard.task_id} taskId={individualTaskCard.task_id} name={individualTaskCard.task_name} label={individualTaskCard.task_label} active={individualTaskCard.task_active}/>
                            </li>
                        )
                    })
                }
            </ul>
            { newTaskFormClickListener ?  <NewTaskForm key={props.tasklist_id} /> : <NewTaskButton key={props.tasklist_id} onClick={openNewTaskForm}/> }
        </div>
        { removeList && <Backdrop onCancel={removeListClose}/> }
        { removeList && <TasklistDeleteModal onCancel={removeListClose} onDelete={props.onDelete} list_id={props.tasklist_id}/> }
        { editList && <Backdrop onCancel={editListClose}/> }
        { editList && <EditTasklistModal list_id={props.tasklist_id} onUpdate={renameList} onCancel={editListClose} /> }
    </div>
    )
}

export default TasklistCard;