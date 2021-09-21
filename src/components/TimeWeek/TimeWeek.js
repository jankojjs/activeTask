import classes from './TimeWeek.module.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState, useEffect } from 'react';
import TimedTasksList from '../TimedTasksList/TimedTasksList';

function TimeWeek() {
    const dateObj = new Date();
    const currentMonth = dateObj.getMonth();
    const currentYear = dateObj.getFullYear();
    const currentDayInMonth = dateObj.getDate();
    const currentDayInWeek = dateObj.getDay();
    const today = dateObj.getDate(currentYear, currentMonth, currentDayInMonth);
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
    const [daysForTimedRow, setDaysForTimedRow] = useState();
    const [daysToCalc, setDaysToCalc] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);

    //calculating
    const [calcSun, setCalcSun] = useState(0);
    const [calcMon, setCalcMon] = useState(0);
    const [calcTue, setCalcTue] = useState(0);
    const [calcWed, setCalcWed] = useState(0);
    const [calcThu, setCalcThu] = useState(0);
    const [calcFri, setCalcFri] = useState(0);
    const [calcSat, setCalcSat] = useState(0);
    const [calcTotal, setCalcTotal] = useState(0);

    // useEffect(() => {
    //     setCalcTotal(calcSun+calcMon+calcTue+calcWed+calcThu+calcFri+calcSat);
    // },[calcSun,calcMon,calcTue,calcWed,calcThu,calcFri,calcSat])

    // will refractor this, i promise
    useEffect(() => {
        let normalDate = new Date();
        let selectedSunday = new Date(normalDate.getTime() - normalDate.getTimezoneOffset() * 60000);
        selectedSunday.setDate(selectedSunday.getDate()-currentDayInWeek+7*weekCounter);
        setCurrentSun(selectedSunday.getDate());
        setCurrentSunMonth(getMonthHelper(selectedSunday.getMonth()));
        let selectedMonday = new Date(normalDate.getTime() - normalDate.getTimezoneOffset() * 60000);
        selectedMonday.setDate(selectedMonday.getDate()-currentDayInWeek+7*weekCounter+1);
        setCurrentMon(selectedMonday.getDate());
        let selectedTuesday = new Date(normalDate.getTime() - normalDate.getTimezoneOffset() * 60000);
        selectedTuesday.setDate(selectedTuesday.getDate()-currentDayInWeek+7*weekCounter+2);
        setCurrentTue(selectedTuesday.getDate());
        let selectedWednesday = new Date(normalDate.getTime() - normalDate.getTimezoneOffset() * 60000);
        selectedWednesday.setDate(selectedWednesday.getDate()-currentDayInWeek+7*weekCounter+3);
        setCurrentWed(selectedWednesday.getDate());
        let selectedThursday = new Date(normalDate.getTime() - normalDate.getTimezoneOffset() * 60000);
        selectedThursday.setDate(selectedThursday.getDate()-currentDayInWeek+7*weekCounter+4);
        setCurrentThu(selectedThursday.getDate());
        let selectedFriday = new Date(normalDate.getTime() - normalDate.getTimezoneOffset() * 60000);
        selectedFriday.setDate(selectedFriday.getDate()-currentDayInWeek+7*weekCounter+5);
        setCurrentFri(selectedFriday.getDate());
        let selectedSaturday = new Date(normalDate.getTime() - normalDate.getTimezoneOffset() * 60000);
        selectedSaturday.setDate(selectedSaturday.getDate()-currentDayInWeek+7*weekCounter+6);
        setCurrentSat(selectedSaturday.getDate());
        setCurrentSatMonth(getMonthHelper(selectedSaturday.getMonth()));
        setDaysArray([(selectedSunday.toISOString()).substr(0,10),(selectedMonday.toISOString()).substr(0,10),(selectedTuesday.toISOString()).substr(0,10),(selectedWednesday.toISOString()).substr(0,10),(selectedThursday.toISOString()).substr(0,10),(selectedFriday.toISOString()).substr(0,10),(selectedSaturday.toISOString()).substr(0,10)]);
        setTasksLoading(false);
        setDaysForTimedRow([currentSun,currentMon,currenTue,currentWed,currentThu,currentFri,currentSun]);
        console.log(daysToCalc)
    },[weekCounter])

    function goWeekBefore() {
        setTasksLoading(true);
        setWeekCounter(weekCounter-1);
        setDaysToCalc([]);
        setUpdatePage(false);
    }

    function goWeekNext() {
        setTasksLoading(true);
        setWeekCounter(weekCounter+1);
        setDaysToCalc([]);
        setUpdatePage(false);
    }

    function getMonthHelper(numb) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[numb];
    }

    function timeSetter(day,time) {
        // let newDayToCalc = {
        //     'day':day,
        //     'time':time
        // };
        daysToCalc.push({
            [day]:time
        })
    }

    return (
        <div className={classes.scrollable}>
            <div className={classes.dateControls}>
                <div onClick={goWeekBefore} className={classes.weekBtn}><AiFillCaretLeft /></div>
                <div className={classes.weekDate}>{currentSunMonth}. {currentSun} - {currentSatMonth}. {currentSat}</div>
                <div onClick={goWeekNext} className={classes.weekBtn}><AiFillCaretRight /></div>
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
                <div><b>Total</b></div>
            </div>
            <div className={classes.tableBot}>
                <div>
                    {/* <span>avatar</span> */}
                    <span>Janko Stanic</span>
                </div>
                <div>{calcSun}</div>
                <div>{calcMon}</div>
                <div>{calcTue}</div>
                <div>{calcWed}</div>
                <div>{calcThu}</div>
                <div>{calcFri}</div>
                <div>{calcSat}</div>
                <div>{calcTotal}</div>
                <div className={classes.noStyle}></div>
            </div>
            <div className={classes.tableTask}>
                { tasksLoading ? <div>Loading...</div> : <TimedTasksList arrayOfDays={daysArray} timeSettings={timeSetter}/> }
            </div>
        </div>
    )
}

export default TimeWeek;