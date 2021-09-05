import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router'; 

function TaskDetailPage() {
    const location = useLocation();
    const [taskId] = useState(location.pathname.replace('/task/',''));
    // console.log(localStorage.getItem('user_id'));
    const history = useHistory();
    const [taskObj, setTaskObj] = useState({})

    useEffect(() => {
        fetchTaskHandler();
    }, [])

    function fetchTaskHandler() {
        fetch(
            'http://jjsolutions.rs/api/singletaskapi.php?user_id='+localStorage.getItem("user_id")+'&task_id='+taskId
        )
        .then(response=>response.json())
        .then(data => {
            if(data.length === 0) {
                history.push('/');
            } else {
                setTaskObj(data[0]);
            }
        })
    }
    // add load state to hide initialy on force hack to unpermited task
    return (
        <div>
            <div>TaskDetail</div>
            <div>{taskObj.task_name}</div>
        </div>
    )
}

export default TaskDetailPage;