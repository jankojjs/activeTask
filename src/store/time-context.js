import { createContext, useState, useEffect } from "react";


const TimeContext = createContext({
    timedTasks: [],
    isTracking: false,
    activeTask: 0,
    counter: 0,
    addTimedTask: (taskObject) => {},
    removeTimedTask: (task_id) => {},
    addActiveTask: (task_id) => {},
    removeActiveTask: (task_id) => {},
    uploadTimeForTask: (task_id) => {},

 });

export function TimeContextProvider(props) {
    const [timedTasks, setTimedTasks] = useState([]);
    const [isTracking, setIsTracking] = useState(false);
    const [activeTask, setActiveTask] = useState(0);
    const [counter, setCounter] = useState();
    function addTimedTaskHandler(taskId) {
        if(localStorage.getItem(taskId) !== null) {
            setCounter(parseInt(localStorage.getItem(taskId)))
        }else{
            setCounter(0);
        }
        startTracking(taskId);
        setActiveTask(taskId);
    }

    function pauseCountingHandler(){
        setIsTracking(false);
        localStorage.removeItem('active_task');
    }

    function resetCountingHandler(taskId) {
        setIsTracking(false);
        setCounter(0);
        localStorage.setItem(taskId,'0');
        localStorage.removeItem('active_task');
    }

    function startTracking(taskId) {
        setIsTracking(true);
        localStorage.setItem('active_task',taskId)
    }

    function tickTime() {
        setCounter(counter + 1);
    }
    
    let interval;

    useEffect(() => {
        if(isTracking){
                interval = setInterval(() => {
                tickTime();
                localStorage.setItem(activeTask,counter);
            }, 1000);
        }

        return () => {
          clearInterval(interval);
        };
    }, [isTracking, counter])
    
    const context = {
        timedTasks: [],
        isTracking: false,
        activeTask: 0,
        counter: 0,
        addTimedTask: addTimedTaskHandler,
        removeTimedTask: (task_id) => {},
        addActiveTask: (task_id) => {},
        removeActiveTask: (task_id) => {},
        uploadTimeForTask: (task_id) => {},
        pauseCounting: pauseCountingHandler,
        resetCounting: resetCountingHandler,
    };

    return <TimeContext.Provider value={context}>
        {props.children}
    </TimeContext.Provider>
} 

export default TimeContext;