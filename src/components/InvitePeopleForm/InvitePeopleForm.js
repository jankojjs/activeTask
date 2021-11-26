import classes from "./InvitePeopleForm.module.css";
import { useRef, useState } from "react";

function InvitePeopleForm(props) {
  const inputRef = useRef();
  const [projectId] = useState(props.projectId);
  const [projectName] = useState(props.projectName);

  function submitFormHandler(e) {
    e.preventDefault();
    if (inputRef.current.value === "") {
      return;
    }
    const url = "https://jjsolutions.rs/api/invitetoproject.php";
    const formData = new FormData();
    let userNm = inputRef.current.value;
    formData.append("receiver", inputRef.current.value);
    formData.append("sender", localStorage.getItem("username"));
    formData.append("project_id", projectId);
    formData.append("project_name", projectName);

    fetch(url, { method: "POST", body: formData })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        if (body === "success") {
          props.onCancel();
          alert(
            "User " + userNm + " has been invited to project " + projectName
          );
        } else {
          alert("Please check if you entered valid username.");
        }
      });
  }

  return (
    <div>
      <h6 className={classes.headline}>
        Invite a person to this project as a member
      </h6>
      <div className={classes.grid}>
        <div>
          <input
            ref={inputRef}
            className={classes.input}
            type="text"
            placeholder="Enter username"
          />
        </div>
        <div>
          <span className={classes.btns}>
            <button className="alt" onClick={props.onCancel}>
              Close
            </button>
          </span>
          <span className={classes.btns}>
            <button onClick={submitFormHandler} className="btn">
              Invite
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default InvitePeopleForm;
