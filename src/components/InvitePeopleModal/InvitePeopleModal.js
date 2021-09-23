import classes from './InvitePeopleModal.module.css';
import img from './inviteFriend.png'

function InvitePeopleModal(props) {
    return (
        <div className={classes.card}>
            <div className={classes.grid}>
                <div className={classes.img}>
                    <img src={img} width={150}></img>
                </div>
                <div className={classes.membs}>MEMBERS</div>
                <p className={classes.explanation}>Members can see and create everything in the project. </p>
                <div>aaa</div>
            </div>
        </div>
    )
}

export default InvitePeopleModal;