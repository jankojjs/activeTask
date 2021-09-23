import NoNewNotifications from '../components/NoNewNotifications/NoNewNotifications';
import classes from './Notifications.module.css';
import { useState, useEffect } from "react";
import SingleNotification from '../components/SingleNotification/SingleNotification';

function NotificationsPage() {
    const [userId] = useState(localStorage.getItem('user_id'));
    const [noNotificationsHandler, setNoNotificationsHandler] = useState(true);
    const [notificationArray, setNotificationArray] = useState([]);

    useEffect(() => {
        const url='https://jjsolutions.rs/api/notificationsapi.php';
        const formData = new FormData();
        formData.append('user_id', userId);

        fetch(url, { method: 'POST', body: formData })
        .then((response) => {
        return response.json();
        })
        .then((body) => {
                if(body.length !== 0) {
                    setNoNotificationsHandler(false);
                    setNotificationArray(body);
                } else {
                    // if empty array do smth
                }
        });
    }, [userId]);


    return (
        <div>
            <div className={classes.pageHeadline}>Notifications</div>
            <div className={classes.pageBody}>
                { noNotificationsHandler ? <NoNewNotifications /> : <SingleNotification nots={notificationArray} /> }
            </div>
        </div>
    )
}

export default NotificationsPage;