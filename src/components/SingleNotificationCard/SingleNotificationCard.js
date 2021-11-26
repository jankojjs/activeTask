import classes from "./SingleNotificationCard.module.css";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { useState } from "react";

function SingleNotificationCard(props) {
  const [notId] = useState(props.notification.notId);

  function acceptNot() {
    acceptNotification(notId, props.notification.project_id);
    props.removeArr(notId);
  }

  function declineNot() {
    deleteNotification(notId);
    props.removeArr(notId);
  }

  function deleteNotification(neededNotId) {
    const url = "https://jjsolutions.rs/api/deletenotificationapi.php";
    const formData = new FormData();
    formData.append("notId", neededNotId);

    fetch(url, { method: "POST", body: formData })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        if (body !== undefined) {
        } else {
          // if empty array do smth
          alert("Could not delete notification at this time.");
        }
      });
  }

  function acceptNotification(neededNotId, origId) {
    const url = "https://jjsolutions.rs/api/acceptinviteapi.php";
    const formData = new FormData();
    formData.append("notId", neededNotId);
    formData.append("user_id", localStorage.getItem("user_id"));
    formData.append("project_name", props.notification.project_name);
    formData.append("originalpid", origId);

    fetch(url, { method: "POST", body: formData })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        if (body !== undefined) {
          alert(
            "You successfuly joined project " + props.notification.project_name
          );
        } else {
          alert("Could not join project at this moment.");
        }
      });
  }

  return (
    <div className={classes.card}>
      <span className={classes.plainTxt}> Invited to </span>
      <span className={classes.projName}>
        {props.notification.project_name}
      </span>
      <span className={classes.plainTxt}> by </span>
      <span className={classes.sender}>{props.notification.sender}</span>
      <span onClick={declineNot} className={classes.decline}>
        <FcCancel size={22} />
      </span>
      <span onClick={acceptNot} className={classes.accept}>
        <FcCheckmark size={23} />
      </span>
    </div>
  );
}

export default SingleNotificationCard;
