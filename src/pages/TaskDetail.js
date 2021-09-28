import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router'; 
import PageDetailCard from '../components/PageDetailCard/PageDetailCard';

function TaskDetailPage() {
    const location = useLocation();
    const [taskId, setTaskId] = useState(location.pathname.replace('/task/',''));
    const history = useHistory();
    const [taskObj, setTaskObj] = useState({});
    const [notLoading, setNotLoading] = useState(false);
    const [peopleArr, setPeopleArr] = useState([]);

    useEffect(() => {
       return history.listen((location) => { 
          setTaskId(location.pathname.replace('/task/',''));
          setNotLoading(false);
        }) 
    },[history]) 

    useEffect(() => {
        fetchTaskHandler();
        fetchTaskPeople();

        return (taskId);
    }, [taskId])

    function fetchTaskHandler() {
        fetch(
            'https://jjsolutions.rs/api/singletaskapi.php?user_id='+localStorage.getItem("user_id")+'&task_id='+taskId
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

    function fetchTaskPeople() {
        fetch(
            'https://jjsolutions.rs/api/taskpeopleapi.php?task_id='+taskId
        )
        .then(response=>response.json())
        .then(data => {
            if(data.length === 0) {
                console.log('no people in this task')
            } else {
                setPeopleArr(data);
            }
        })
    }

    return (
        <div>
            { notLoading ? <PageDetailCard taskObj={taskObj} people={peopleArr}/> : <div>Loading...</div> }
        </div>
    )
}

export default TaskDetailPage;