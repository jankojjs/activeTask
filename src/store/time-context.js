import { createContext, useState } from "react";

const TimeContext = createContext ({
    tasks:[],
    tasksRunning: 0,
    pushToTimedTasks: (us)=>{},
    removeFromTimedTasks: (us)=>{},
    taskIsRunning: (us)=>{},

});

//taskid,initialtime,currentsess,

export function TimeContextProvider(props) {
    const [timedTasks, setTimedTasks] = useState([]);

    function pushToTimedTasksHandler(timedTask) {
        if(timedTasks.includes(timedTask)) {

        } else {
            setTimedTasks((prevTimedTasks) => {
                return prevTimedTasks.concat(timedTask);
            })
        }
    }

    function removeFromTimedTasksHandler(task_id) {
        setTimedTasks(prevTimedTasks => {
            return prevTimedTasks.filter(timedTask => timedTask.task_id !== task_id);
        })
    }

    function taskIsRunningHandler(task_id) {
        return timedTasks.some(timedTask => timedTask.task_id === task_id);
    }

    const context = {
        tasks: timedTasks,
        tasksRunning: timedTasks.length,
        pushToTimedTasks: pushToTimedTasksHandler,
        removeFromTimedTasks: removeFromTimedTasksHandler,
        taskIsRunning: taskIsRunningHandler,
    }

    return <TimeContext.Provider value={context}>
        {props.children}
    </TimeContext.Provider>

}


export default TimeContext;