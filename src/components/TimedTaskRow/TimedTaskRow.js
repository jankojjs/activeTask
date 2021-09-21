import classes from './TimedTaskRow.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";

function TimedTaskRow(props) {
    const dataArr = [];
    let dayNumb=0;

    function dayUp() {
        if(dayNumb===8){
            dayNumb = 1;
        }
        dayNumb = dayNumb + 1;
    }

    function sendTimeUpstream(numberOfDay,timeToSend) {
        props.upstreamFunc(numberOfDay,timeToSend)
    }

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
                    dayUp();
                    return (
                        <div key={oneWorkDay} className={classes.cell}>{
                            dataArr.map((singleDataItem)=>{
                                let timeConst = singleDataItem[oneWorkDay];
                                var formatedTimeConst;
                                if(timeConst !== undefined) {
                                    let integerTimeSeconds = parseInt(timeConst);
                                    sendTimeUpstream(dayNumb,integerTimeSeconds);
                                    formatedTimeConst = new Date(integerTimeSeconds*1000).toISOString().substr(11, 5);
                                }
                                return (formatedTimeConst)
                            })
                        }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TimedTaskRow;