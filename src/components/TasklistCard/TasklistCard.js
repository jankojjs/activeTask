import classes from './TasklistCard.module.css';
import { useState, useEffect } from 'react';
import NewTaskButton from '../NewTaskButton/NewTaskButton';
import { FiMoreHorizontal } from "react-icons/fi";
import TaskCard from '../TaskCard/TaskCard';

function TasklistCard(props) {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        setAllTasks([...props.tasklist_tasks]);
    }, [props.tasklist_tasks])

    useEffect(() => {
        if(allTasks.length > 0) {
            // console.log(allTasks)
        }
    }, [allTasks])

    return (
    <div className={classes.tl}>
        <div>
            <span className={classes.tlName}>{props.tasklist_name}</span>
            <span className={classes.count}>5 out of {props.tasklist_tasks.length} open</span>
            <span className={classes.more}><FiMoreHorizontal /></span>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    {allTasks && allTasks.map((individualTaskCard) => {
                        return (
                            <TaskCard key={individualTaskCard.task_id} taskId={individualTaskCard.task_id} name={individualTaskCard.task_name} label={individualTaskCard.task_label} active={individualTaskCard.task_active}/>
                        )
                    })
                }
                    {!allTasks[0] && <NewTaskButton />}
                </li>
            </ul>
        </div>
    </div>
    )
}

export default TasklistCard;