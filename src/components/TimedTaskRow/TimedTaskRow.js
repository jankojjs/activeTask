import classes from "./TimedTaskRow.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function TimedTaskRow(props) {
  useEffect(() => {
    props.toggle();
  });

  const dataArr = [];
  let dayNumb = 0;

  function dayUp() {
    if (dayNumb === 8) {
      dayNumb = 1;
    }
    dayNumb = dayNumb + 1;
  }

  function insertIntoWeekLocalStorage(dayNumberish, timeish) {
    if (dayNumberish === 1) {
      localStorage.setItem(
        "Sun",
        parseInt(localStorage.getItem("Sun")) + timeish
      );
    }
    if (dayNumberish === 2) {
      localStorage.setItem(
        "Mon",
        parseInt(localStorage.getItem("Mon")) + timeish
      );
    }
    if (dayNumberish === 3) {
      localStorage.setItem(
        "Tue",
        parseInt(localStorage.getItem("Tue")) + timeish
      );
    }
    if (dayNumberish === 4) {
      localStorage.setItem(
        "Wed",
        parseInt(localStorage.getItem("Wed")) + timeish
      );
    }
    if (dayNumberish === 5) {
      localStorage.setItem(
        "Thu",
        parseInt(localStorage.getItem("Thu")) + timeish
      );
    }
    if (dayNumberish === 6) {
      localStorage.setItem(
        "Fri",
        parseInt(localStorage.getItem("Fri")) + timeish
      );
    }
    if (dayNumberish === 7) {
      localStorage.setItem(
        "Sat",
        parseInt(localStorage.getItem("Sat")) + timeish
      );
    }
    localStorage.setItem(
      "Tot",
      parseInt(localStorage.getItem("Tot")) + timeish
    );
  }

  // eslint-disable-next-line array-callback-return
  props.singleTaskInfo.days.map((singleDay) => {
    // eslint-disable-next-line array-callback-return
    props.days.map((singleWeekDay) => {
      if (singleDay[singleWeekDay] !== undefined) {
        dataArr.push({
          [singleWeekDay]: singleDay[singleWeekDay],
        });
      }
    });
  });

  return (
    <div className={classes.table}>
      <div className={classes.cellName}>
        <Link
          className={classes.links}
          to={"/task/" + props.singleTaskInfo.taskId}
        >
          {props.singleTaskInfo.taskName}
        </Link>
      </div>
      {props.days.map((oneWorkDay) => {
        dayUp();
        return (
          <div key={oneWorkDay} className={classes.cell}>
            {dataArr.map((singleDataItem) => {
              let timeConst = singleDataItem[oneWorkDay];
              var formatedTimeConst;
              if (timeConst !== undefined) {
                let integerTimeSeconds = parseInt(timeConst);
                insertIntoWeekLocalStorage(dayNumb, integerTimeSeconds);
                formatedTimeConst = new Date(integerTimeSeconds * 1000)
                  .toISOString()
                  .substr(11, 5);
              }
              return formatedTimeConst;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TimedTaskRow;
