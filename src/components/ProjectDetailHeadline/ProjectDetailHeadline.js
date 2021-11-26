import classes from "./ProjectDetailHeadline.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function ProjectDetailHeadline(props) {
  return (
    <div className={classes.wrap}>
      <h2 className={classes.h2}>{props.project_name}</h2>
      <Link to="/projects" className={classes.a}>
        <span className={classes.ico}>
          <IoIosArrowBack size={18} />
        </span>
        <span>Projects</span>
      </Link>
    </div>
  );
}

export default ProjectDetailHeadline;
