import { useState } from 'react';
import classes from './PageDetailCard.module.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import { IoIosArrowDropleft } from "react-icons/io";
import TimeTracking from '../TimeTracking/TimeTracking';
import { MdDelete, MdEdit } from "react-icons/md";
import Backdrop from '../Backdrop/Backdrop';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';
import EditTaskForm from '../EditTaskForm/EditTaskForm';

function PageDetailCard(props) {
    const [inheritedTask,setInheritedTask] = useState(props.taskObj);
    const history = useHistory();
    const [deleteModal, setDeleteModal] = useState(false);
    const [editForm, setEditForm] = useState(false);

    function backBtnHandler() {
        history.push('/project/'+inheritedTask.project_id);
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
            <div className={classes.topRow}>
                <div className={classes.active}>
                    { inheritedTask.task_active ==='0' ? <span className={classes.checked}><AiFillCheckCircle size={22} color={'green'} /></span> : <span className={classes.notChecked}></span>}
                </div>
                <div className={`${inheritedTask.task_active ==='0' ? 'completed' : 'notcompleted' }`}>{inheritedTask.task_name}</div>
                <div onClick={editFormOpen} className={classes.edit}><MdEdit size={23}/></div>
                <div onClick={deleteHandler} className={classes.delete}><MdDelete size={23} /></div>
                <div onClick={backBtnHandler} className={classes.back}>
                    <span className={classes.backIcon}><IoIosArrowDropleft size={22}/></span>
                    {inheritedTask.project_name}
                </div>
            </div>
            {editForm ? <EditTaskForm taskLabel={inheritedTask.task_label} taskName={inheritedTask.task_name} taskDescription={inheritedTask.task_description} onCancel={editFormClose}/> : 
            <div className={classes.gridWrap}>
                <div className={classes.left}>
                    <div>Task description:</div>
                    <div className={classes.taskDesc} dangerouslySetInnerHTML={{ __html: inheritedTask.task_description }}>
                    </div>
                </div>
                <div className={classes.right}>
                    <div>Tasklist: <span>{inheritedTask.list_name}</span></div>
                    <div className={classes.labelGroup}>Label: <span>{inheritedTask.task_label !== '' ? inheritedTask.task_label : 'no label'}</span></div>
                    <div>Time tracking:</div>
                    <TimeTracking taskDetails={inheritedTask}/>
                </div>
            </div>
            }
            { deleteModal && <Backdrop onCancel={closeDeleteModal}/> }
            { deleteModal && <DeleteTaskModal projectId={inheritedTask.project_id} taskId={inheritedTask.task_id} onCancel={closeDeleteModal}/> }
        </div>
    )
}

export default PageDetailCard;