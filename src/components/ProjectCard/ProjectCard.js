import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import classes from './ProjectCard.module.css';
import { AiOutlineMore } from "react-icons/ai";
import Backdrop from '../Backdrop/Backdrop';
import DeleteProjectModal from '../DeleteProjectModal/DeleteProjectModal';
import RenameProjectForm from '../RenameProjectForm/RenameProjectForm';
import ProjectStar from '../ProjectStar/ProjectStar';

function ProjectCard(props) {
    const [star, setStar] = useState(false);
    const [editModal, setEditModal] = useState(false)
    useEffect(() => {
        if(props.project_starred === '1') {
            setStar(true);
        }
    }, [props.project_starred])

    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function openEditModal() {
        setEditModal(true);
    }

    function closeEditModal() {
        setEditModal(false);
    }

    return (
        <div className={classes.card}>
            <div className={classes.toprow}>
                <div className={classes.projectname}>
                    <Link to={'/project/'+props.originalpid}>{props.project_name}</Link>
                </div>
                <ProjectStar project_id={props.project_id} starred={star} />
                <div className={classes.more}>
                    <AiOutlineMore size={24} />
                    <div className={classes.options}>
                        <div className={classes.option} onClick={openEditModal}>Rename</div>
                        <div className={classes.option} onClick={openModal}>Delete</div>
                    </div>
                </div>
            </div>
            {isModalOpen && <Backdrop onCancel={closeModal}/>}
            {isModalOpen && <DeleteProjectModal project_id={props.project_id} onCancel={closeModal} />}
            {editModal && <Backdrop onCancel={closeEditModal}/>}
            {editModal && <RenameProjectForm onCancel={closeEditModal} project_id={props.project_id} />}
        </div>
    )   
}

export default ProjectCard;