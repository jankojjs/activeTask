import classes from './SingleNotificationCard.module.css';
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { useState } from 'react';

function SingleNotificationCard(props) {
    const [notId] = useState(props.notification.notId);

    function acceptNot() {
        console.log('accepted '+notId);
        acceptNotification(notId);
        props.removeArr(notId);
    }
    
    function declineNot() {
        console.log('decline '+notId);
        deleteNotification(notId);
        props.removeArr(notId);
    }

    function deleteNotification(neededNotId) {
        const url='https://jjsolutions.rs/api/deletenotificationapi.php';
        const formData = new FormData();
        formData.append('notId', neededNotId);

        fetch(url, { method: 'POST', body: formData })
        .then((response) => {
        return response.json();
        })
        .then((body) => {
                if(body !== undefined) {
                    alert('success')
                } else {
                    // if empty array do smth
                }
        });
    }

    function acceptNotification(neededNotId) {
        const url='https://jjsolutions.rs/api/acceptinviteapi.php';
        const formData = new FormData();
        formData.append('notId', neededNotId);
        formData.append('user_id', localStorage.getItem('user_id'));
        formData.append('project_name', props.notification.project_name);

        fetch(url, { method: 'POST', body: formData })
        .then((response) => {
        return response.json();
        })
        .then((body) => {
                if(body !== undefined) {
                    alert('success')
                } else {
                    // if empty array do smth
                }
        });
    }

    return (
        <div className={classes.card}>
            <span className={classes.plainTxt}> Invited to  </span>
            <span className={classes.projName}>{props.notification.project_name}</span>
            <span className={classes.plainTxt}> by </span>
            <span className={classes.sender}>{props.notification.sender}</span>
            <span onClick={declineNot} className={classes.decline}><FcCancel size={22}/></span>
            <span onClick={acceptNot} className={classes.accept}><FcCheckmark size={23} /></span>
        </div>
    )
}

export default SingleNotificationCard;