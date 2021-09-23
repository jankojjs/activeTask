import classes from './InvitePeoplePopup.module.css';
import { RiVipCrownLine } from "react-icons/ri";

function InvitePeoplePopup(props) {
    return (
        <div className={classes.grid}>
            <div className={classes.top}>
                <button className='btn' onClick={props.onClick}>Manage And Invite People</button>
            </div>
            <div className={classes.membs}>Members</div>
            <div className={classes.bot}><span className={classes.crown}><RiVipCrownLine/></span>{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</div>
        </div>
    )
}

export default InvitePeoplePopup;