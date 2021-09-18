import classes from './TimedTaskRow.module.css';

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
                {props.singleTaskInfo.taskName}
            </div>
            {
                props.days.map((oneWorkDay)=>{
                    console.log(oneWorkDay)
                    return (
                        <div key={oneWorkDay} className={classes.cell}>{
                            dataArr.map((singleDataItem)=>{
                                return (singleDataItem[oneWorkDay])
                            })
                        }</div>
                    )
                })
            }
        </div>
    )
}

export default TimedTaskRow;