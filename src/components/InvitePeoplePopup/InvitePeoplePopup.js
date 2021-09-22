import classes from './InvitePeoplePopup.module.css';
import { RiVipCrownLine } from "react-icons/ri";

function InvitePeoplePopup() {
    return (
        <div className={classes.grid}>
            <div className={classes.top}>
                <button className='btn'>Invite people</button>
            </div>
            <div className={classes.bot}><span className={classes.crown}><RiVipCrownLine/></span>Janko Stanic</div>
        </div>
    )
}

export default InvitePeoplePopup;