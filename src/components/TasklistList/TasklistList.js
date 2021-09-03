import { useEffect, useState } from "react";
import classes from './TasklistList.module.css';
import TasklistCard from "../TasklistCard/TasklistCard";

function TasklistList(props) {
    const [neededLists, setNeededLists] = useState([])
    useEffect(() => {
        setNeededLists(props.tasklists);
    }, [props.tasklists])

    return (
        <div className={classes.wrap}>
           {neededLists && neededLists.map((singleList)=>{
                return (
                    <TasklistCard key={singleList.list_id} tasklist_name={singleList.list_name} tasklist_tasks={singleList.tasks} tasklist_id={singleList.list_id}/>
                )
            })}
        </div>
    )
}

export default TasklistList;