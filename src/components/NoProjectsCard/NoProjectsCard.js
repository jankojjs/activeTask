import classes from "./NoProjectsCard.module.css";

function NoProjectsCard(props) {
  return (
    <div>
      <div className={classes.noprojects}>
        You currently don't have any projects.
        <br />
        Would you like to create one?
      </div>
      <button onClick={props.newProject} className="btn">
        Create new project
      </button>
    </div>
  );
}

export default NoProjectsCard;
