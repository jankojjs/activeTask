import classes from './TimeWeek.module.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState, useEffect } from 'react';

function TimeWeek() {

    return (
        <div className={classes.scrollable}>
            <div className={classes.dateControls}>
                <div className={classes.weekBtn}><AiFillCaretLeft /></div>
                <div className={classes.weekDate}>Sept. 12 - Sept. 18</div>
                <div className={classes.weekBtn}><AiFillCaretRight /></div>
            </div>
            <div className={classes.tableTop}>
                <div>Tasks</div>
                <div>Sun, 12</div>
                <div>Mon, 12</div>
                <div>Tue, 12</div>
                <div>Wed, 12</div>
                <div>Thu, 12</div>
                <div>Fri, 12</div>
                <div>Sat, 12</div>
                <div><b>Total</b></div>
            </div>
            <div className={classes.tableBot}>
                <div>
                    {/* <span>avatar</span> */}
                    <span>Janko Stanic</span>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={classes.noStyle}></div>
            </div>
            <div className={classes.tableTask}>
                <div>
                    <span>Task name</span>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className={classes.noStyle}></div>
            </div>
        </div>
    )
}

export default TimeWeek;