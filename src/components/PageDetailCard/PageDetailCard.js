import { useState } from 'react';
import classes from './PageDetailCard.module.css';
import { AiFillCheckCircle } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import { IoIosArrowDropleft } from "react-icons/io";

function PageDetailCard(props) {
    const [inheritedTask,setInheritedTask] = useState(props.taskObj);
    const history = useHistory();
    function backBtnHandler() {
        history.push('/project/'+inheritedTask.project_id);
    }

    return (
        <div className={classes.card}>
            <div className={classes.left}>
                <div className={classes.topRow}>
                    <div className={classes.active}>
                        { inheritedTask.task_active ==='0' ? <span className={classes.checked}><AiFillCheckCircle size={22} color={'green'} /></span> : <span className={classes.notChecked}></span>}
                    </div>
                    <div className={`${inheritedTask.task_active ==='0' ? 'completed' : 'notcompleted' }`}>{inheritedTask.task_name}</div>
                </div>
                <div onClick={backBtnHandler} className={classes.back}>
                    <span className={classes.backIcon}><IoIosArrowDropleft size={22}/></span>
                    {inheritedTask.project_name}
                </div>
                <div className={classes.taskDesc} dangerouslySetInnerHTML={{ __html: inheritedTask.task_description }}>
                    
                </div>
            </div>
            <div className={classes.right}>
                <div>Tasklist: <span>{inheritedTask.list_name}</span></div>
                <div>Label: <span>{inheritedTask.task_label !== '' ? inheritedTask.task_label : 'no label'}</span></div>
            </div>
        </div>
    )
}

export default PageDetailCard;