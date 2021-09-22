import classes from './InvitePeoplePopup.module.css';

function InvitePeoplePopup() {
    return (
        <div className={classes.grid}>
            <div className={classes.top}>
                <button className='btn'>Invite people</button>
            </div>
            <div className={classes.bot}>Janko Stanic</div>
        </div>
    )
}

export default InvitePeoplePopup;