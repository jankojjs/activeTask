import classes from "./TimeWeek.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState, useEffect } from "react";
import TimedTasksList from "../TimedTasksList/TimedTasksList";

function TimeWeek() {
  const dateObj = new Date();
  const currentDayInWeek = dateObj.getDay();
  const [weekCounter, setWeekCounter] = useState(0);
  const [currentSun, setCurrentSun] = useState();
  const [currentMon, setCurrentMon] = useState();
  const [currenTue, setCurrentTue] = useState();
  const [currentWed, setCurrentWed] = useState();
  const [currentThu, setCurrentThu] = useState();
  const [currentFri, setCurrentFri] = useState();
  const [currentSat, setCurrentSat] = useState();
  const [currentSunMonth, setCurrentSunMonth] = useState();
  const [currentSatMonth, setCurrentSatMonth] = useState();
  const [daysArray, setDaysArray] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [daysToCalc, setDaysToCalc] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [calcSun, setCalcSun] = useState(0);
  const [calcMon, setCalcMon] = useState(0);
  const [calcTue, setCalcTue] = useState(0);
  const [calcWed, setCalcWed] = useState(0);
  const [calcThu, setCalcThu] = useState(0);
  const [calcFri, setCalcFri] = useState(0);
  const [calcSat, setCalcSat] = useState(0);
  const [calcTotal, setCalcTotal] = useState(0);

  //  @ToDo: will refractor this, i promise
  useEffect(() => {
    let normalDate = new Date();
    let selectedSunday = new Date(
      normalDate.getTime() - normalDate.getTimezoneOffset() * 60000
    );
    selectedSunday.setDate(
      selectedSunday.getDate() - currentDayInWeek + 7 * weekCounter
    );
    setCurrentSun(selectedSunday.getDate());
    setCurrentSunMonth(getMonthHelper(selectedSunday.getMonth()));
    let selectedMonday = new Date(
      normalDate.getTime() - normalDate.getTimezoneOffset() * 60000
    );
    selectedMonday.setDate(
      selectedMonday.getDate() - currentDayInWeek + 7 * weekCounter + 1
    );
    setCurrentMon(selectedMonday.getDate());
    let selectedTuesday = new Date(
      normalDate.getTime() - normalDate.getTimezoneOffset() * 60000
    );
    selectedTuesday.setDate(
      selectedTuesday.getDate() - currentDayInWeek + 7 * weekCounter + 2
    );
    setCurrentTue(selectedTuesday.getDate());
    let selectedWednesday = new Date(
      normalDate.getTime() - normalDate.getTimezoneOffset() * 60000
    );
    selectedWednesday.setDate(
      selectedWednesday.getDate() - currentDayInWeek + 7 * weekCounter + 3
    );
    setCurrentWed(selectedWednesday.getDate());
    let selectedThursday = new Date(
      normalDate.getTime() - normalDate.getTimezoneOffset() * 60000
    );
    selectedThursday.setDate(
      selectedThursday.getDate() - currentDayInWeek + 7 * weekCounter + 4
    );
    setCurrentThu(selectedThursday.getDate());
    let selectedFriday = new Date(
      normalDate.getTime() - normalDate.getTimezoneOffset() * 60000
    );
    selectedFriday.setDate(
      selectedFriday.getDate() - currentDayInWeek + 7 * weekCounter + 5
    );
    setCurrentFri(selectedFriday.getDate());
    let selectedSaturday = new Date(
      normalDate.getTime() - normalDate.getTimezoneOffset() * 60000
    );
    selectedSaturday.setDate(
      selectedSaturday.getDate() - currentDayInWeek + 7 * weekCounter + 6
    );
    setCurrentSat(selectedSaturday.getDate());
    setCurrentSatMonth(getMonthHelper(selectedSaturday.getMonth()));
    setDaysArray([
      selectedSunday.toISOString().substr(0, 10),
      selectedMonday.toISOString().substr(0, 10),
      selectedTuesday.toISOString().substr(0, 10),
      selectedWednesday.toISOString().substr(0, 10),
      selectedThursday.toISOString().substr(0, 10),
      selectedFriday.toISOString().substr(0, 10),
      selectedSaturday.toISOString().substr(0, 10),
    ]);
    setTasksLoading(false);
    resetDaysInStorage();
    setToggle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekCounter]);

  function resetDaysInStorage() {
    localStorage.setItem("Sun", 0);
    localStorage.setItem("Mon", 0);
    localStorage.setItem("Tue", 0);
    localStorage.setItem("Wed", 0);
    localStorage.setItem("Thu", 0);
    localStorage.setItem("Fri", 0);
    localStorage.setItem("Sat", 0);
    localStorage.setItem("Tot", 0);
  }

  useEffect(() => {
    if (parseInt(localStorage.getItem("Sun")) !== 0) {
      setCalcSun(parseInt(localStorage.getItem("Sun")));
    } else {
      setCalcSun(parseInt(localStorage.getItem("Sun")));
    }
    if (parseInt(localStorage.getItem("Mon")) !== 0) {
      setCalcMon(parseInt(localStorage.getItem("Mon")));
    } else {
      setCalcMon(parseInt(localStorage.getItem("Mon")));
    }
    if (parseInt(localStorage.getItem("Tue")) !== 0) {
      setCalcTue(parseInt(localStorage.getItem("Tue")));
    } else {
      setCalcTue(parseInt(localStorage.getItem("Tue")));
    }
    if (parseInt(localStorage.getItem("Wed")) !== 0) {
      setCalcWed(parseInt(localStorage.getItem("Wed")));
    } else {
      setCalcWed(parseInt(localStorage.getItem("Wed")));
    }
    if (parseInt(localStorage.getItem("Thu")) !== 0) {
      setCalcThu(parseInt(localStorage.getItem("Thu")));
    } else {
      setCalcThu(parseInt(localStorage.getItem("Thu")));
    }
    if (parseInt(localStorage.getItem("Fri")) !== 0) {
      setCalcFri(parseInt(localStorage.getItem("Fri")));
    } else {
      setCalcFri(parseInt(localStorage.getItem("Fri")));
    }
    if (parseInt(localStorage.getItem("Sat")) !== 0) {
      setCalcSat(parseInt(localStorage.getItem("Sat")));
    } else {
      setCalcSat(parseInt(localStorage.getItem("Sat")));
    }
    setCalcTotal(parseInt(localStorage.getItem("Tot")));
  }, [toggle, weekCounter]);

  function goWeekBefore() {
    setTasksLoading(true);
    setWeekCounter(weekCounter - 1);
    setDaysToCalc([]);
  }

  function goWeekNext() {
    setTasksLoading(true);
    setWeekCounter(weekCounter + 1);
    setDaysToCalc([]);
  }

  function getMonthHelper(numb) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jul",
      "Jun",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[numb];
  }

  function timeSetter(day, time) {
    daysToCalc.push({
      [day]: time,
    });
  }

  function togglePass() {
    setToggle(true);
  }

  return (
    <div className={classes.scrollable}>
      <div className={classes.dateControls}>
        <div onClick={goWeekBefore} className={classes.weekBtn}>
          <AiFillCaretLeft />
        </div>
        <div className={classes.weekDate}>
          {currentSunMonth}. {currentSun} - {currentSatMonth}. {currentSat}
        </div>
        <div onClick={goWeekNext} className={classes.weekBtn}>
          <AiFillCaretRight />
        </div>
      </div>
      <div className={classes.tableTop}>
        <div>Tasks</div>
        <div>Sun, {currentSun}</div>
        <div>Mon, {currentMon}</div>
        <div>Tue, {currenTue}</div>
        <div>Wed, {currentWed}</div>
        <div>Thu, {currentThu}</div>
        <div>Fri, {currentFri}</div>
        <div>Sat, {currentSat}</div>
        <div>
          <b>Total</b>
        </div>
      </div>
      <div className={classes.tableBot}>
        <div className={classes.usrnm}>
          {/* <span>avatar</span> */}
          <span>
            {" "}
            {localStorage.getItem("firstname")}{" "}
            {localStorage.getItem("lastname")}
          </span>
        </div>
        <div>
          {calcSun > 0 &&
            new Date((calcSun * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div>
          {calcMon > 0 &&
            new Date((calcMon * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div>
          {calcTue > 0 &&
            new Date((calcTue * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div>
          {calcWed > 0 &&
            new Date((calcWed * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div>
          {calcThu > 0 &&
            new Date((calcThu * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div>
          {calcFri > 0 &&
            new Date((calcFri * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div>
          {calcSat > 0 &&
            new Date((calcSat * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div className={classes.tots}>
          {calcTotal > 0 &&
            new Date((calcTotal * 1000) / 2).toISOString().substr(11, 5)}
        </div>
        <div className={classes.noStyle}></div>
      </div>
      <div className={classes.tableTask}>
        {tasksLoading ? (
          <div>Loading...</div>
        ) : (
          <TimedTasksList
            arrayOfDays={daysArray}
            timeSettings={timeSetter}
            toggle={togglePass}
          />
        )}
      </div>
    </div>
  );
}

export default TimeWeek;
