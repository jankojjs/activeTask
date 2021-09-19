import classes from './TimedTaskRow.module.css';
import { Link } from 'react-router-dom';

function TimedTaskRow(props) {
    const dataArr = [];

    props.singleTaskInfo.days.map((singleDay)=>{
        props.days.map((singleWeekDay)=>{
            if(singleDay[singleWeekDay] !== undefined) {
                dataArr.push({
                    [singleWeekDay]:singleDay[singleWeekDay],
                });
            }
        })
    })

    return (
        <div className={classes.table}>
            <div className={classes.cellName}>
                <Link to={'/task/'+props.singleTaskInfo.taskId}>{props.singleTaskInfo.taskName}</Link>
            </div>
            {
                props.days.map((oneWorkDay)=>{
                    return (
                        <div key={oneWorkDay} className={classes.cell}>{
                            dataArr.map((singleDataItem)=>{
                                let timeConst = singleDataItem[oneWorkDay];
                                var formatedTimeConst;
                                if(timeConst !== undefined) {
                                    let integerTimeSeconds = parseInt(timeConst);
                                    formatedTimeConst = new Date(integerTimeSeconds*1000).toISOString().substr(11, 5);
                                }
                                return (formatedTimeConst)
                            })
                        }</div>
                    )
                })
            }
        </div>
    )
}

export default TimedTaskRow;