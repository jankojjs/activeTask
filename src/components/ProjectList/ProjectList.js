import ProjectCard from "../ProjectCard/ProjectCard";
import classes from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <div className={classes.list}>
      {props.projects.map((project) => {
        return (
          <ProjectCard
            key={project.project_id}
            project_name={project.project_name}
            project_label={project.project_label}
            project_created={project.project_created}
            project_starred={project.project_starred}
            project_id={project.project_id}
            originalpid={project.originalpid}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
