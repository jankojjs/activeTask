import classes from "./Projects.module.css";
import { useState, useEffect } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import NoProjectsCard from "../components/NoProjectsCard/NoProjectsCard";
import Backdrop from "../components/Backdrop/Backdrop";
import NewProjectForm from "../components/NewProjectForm/NewProjectForm";
import { GrAdd } from "react-icons/gr";

function ProjectsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedProjects, setLoadedProjects] = useState([]);
    const [userId] = useState(localStorage.getItem('user_id'));
    const [newProjectModal, setNewProjectModal] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'http://jjsolutions.rs/api/projectsapi.php?user_id='+userId
        ).then(response => {
            return response.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedProjects(data);
        });
    }, [userId]);

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    function createNewProject() {
        setNewProjectModal(true);
    }

    function closeCreateNewProject() {
        setNewProjectModal(false);
    }

    return (
    <div className={classes.wrap}>
        <h1>All Projects</h1>
        {loadedProjects.length > 0 ? <ProjectList projects={loadedProjects}/> : <NoProjectsCard newProject={createNewProject}/>}
        {newProjectModal && <Backdrop onCancel={closeCreateNewProject}/>}
        {newProjectModal && <NewProjectForm onCancel={closeCreateNewProject} user_id={userId} />}
        <div className={classes.np} onClick={createNewProject}>
            <GrAdd  color={'white'} size={24} />
        </div>
    </div>
    )
}

export default ProjectsPage;