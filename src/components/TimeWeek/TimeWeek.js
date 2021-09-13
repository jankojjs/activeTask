import classes from './TimeWeek.module.css';

function TimeWeek() {
    return (
        <div className={classes.scrollable}>
            <div className={classes.tableTop}>
                <div>Tasks</div>
                <div>Sun, 12</div>
                <div>Mon, 13</div>
                <div>Tue, 14</div>
                <div>Wed, 15</div>
                <div>Thu, 16</div>
                <div>Fri, 17</div>
                <div>Sat, 18</div>
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
        </div>
    )
}

export default TimeWeek;