import { useState, useEffect } from 'react';

function TimedTasksList(props) {
    const [days] = useState(props.arrayOfDays);
    const [fetchedTasks, setFetchedTasks] = useState();
    const user_id = localStorage.getItem('user_id');
    
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
                    setFetchedTasks(body)
                } else {
                    alert('Please check if you entered valid credentials.')
                }
        });
    }

    useEffect(() => {
        console.log(fetchedTasks);
        return fetchedTasks
    },[fetchedTasks])

    return (
        <div>aaa</div>
    )
}

export default TimedTasksList;