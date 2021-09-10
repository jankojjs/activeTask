import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router'; 
import PageDetailCard from '../components/PageDetailCard/PageDetailCard';

function TaskDetailPage() {
    const location = useLocation();
    const [taskId, setTaskId] = useState(location.pathname.replace('/task/',''));
    const history = useHistory();
    const [taskObj, setTaskObj] = useState({});
    const [notLoading, setNotLoading] = useState(false);

    useEffect(() => {
       return history.listen((location) => { 
          setTaskId(location.pathname.replace('/task/',''));
          setNotLoading(false);
        }) 
    },[history]) 

    useEffect(() => {
        fetchTaskHandler();
    }, [taskId])

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
                setNotLoading(true);
            }
        })
    }

    return (
        <div>
            { notLoading ? <PageDetailCard taskObj={taskObj} /> : <div>Loading...</div> }
        </div>
    )
}

export default TaskDetailPage;