import classes from "./InvitePeopleModal.module.css";
import img from "./inviteFriend.png";
import InvitePeopleForm from "../InvitePeopleForm/InvitePeopleForm";

function InvitePeopleModal(props) {
  return (
    <div className={classes.card}>
      <div className={classes.grid}>
        <div className={classes.img}>
          <img
            src={img}
            width={150}
            alt="activeTask is more fun with friends"
          ></img>
        </div>
        <div className={classes.membs}>MEMBERS</div>
        <p className={classes.explanation}>
          Members can see and create everything in the project.{" "}
        </p>
        <InvitePeopleForm
          onCancel={props.onCancel}
          projectId={props.projectId}
          projectName={props.projectName}
        />
      </div>
    </div>
  );
}

export default InvitePeopleModal;
