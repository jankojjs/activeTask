import { useState, useEffect } from 'react';
import TimedTaskRow from '../TimedTaskRow/TimedTaskRow';

function TimedTasksList(props) {
    const [days] = useState(props.arrayOfDays);
    const [fetchedTasks, setFetchedTasks] = useState([]);
    const user_id = localStorage.getItem('user_id');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const day1=days[0];
        const day2=days[1];
        const day3=days[2];
        const day4=days[3];
        const day5=days[4];
        const day6=days[5];
        const day7=days[6];

        fetchTaskTimesByDays(user_id,day1,day2,day3,day4,day5,day6,day7)
    },[props.arrayOfDays])

    function fetchTaskTimesByDays(user_id,day1,day2,day3,day4,day5,day6,day7) {
        let newData = [];
        const url='https://jjsolutions.rs/api/timetracksapi.php';
        const formData = new FormData();
        formData.append('user_id', user_id);
        formData.append('day1', day1);
        formData.append('day2', day2);
        formData.append('day3', day3);
        formData.append('day4', day4);
        formData.append('day5', day5);
        formData.append('day6', day6);
        formData.append('day7', day7);

        fetch(url, { method: 'POST', body: formData })
        .then((response) => {
        return response.json();
        })
        .then((body) => {
                if(body !== undefined) {
                    // console.log(body.length)
                    body.map((singleTasklton)=> {
                        if(newData.indexOf(singleTasklton.taskId) !== -1){
                            //colors contains the string "blue"

                        }else{
                            //colors does not contain the string "blue"
                            newData.push({
                                'timetrackId': singleTasklton.timetrackId,
                                'taskName': singleTasklton.taskName,
                                'taskId': singleTasklton.taskId,
                                'days': [
                                    {[singleTasklton.date]: singleTasklton.timeuploaded},
                                ],
                            })
                        }
                    })
                    const result = newData.reduce((newData, curr) => {
                    const { taskName, days, timetrackId, taskId } = curr;
                    const findObj = newData.find((o) => o.taskId === taskId);
                    if (!findObj) {
                        newData.push({ taskName, days, timetrackId, taskId });
                    } else {
                        findObj.days.push(...days);
                    }
                    return newData;
                    }, []);
                    setFetchedTasks(result);
                } else {
                    alert('Please check if you entered valid credentials.')
                }
        });
    }

    useEffect(() => {
        return fetchedTasks
    },[fetchedTasks])

    return (
        <div>
            {fetchedTasks.map((singleFetchedTask) => {
                return <TimedTaskRow key={singleFetchedTask.timetrackId} singleTaskInfo={singleFetchedTask} days={days}/>
            })}
        </div>
    )
}

export default TimedTasksList;