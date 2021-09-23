import classes from './ProjectDetail.module.css';
import { useState, useEffect } from "react";
import { useLocation, useHistory } from 'react-router';
import NewTasklistButton from '../components/NewTasklistButton/NewTasklistButton';
import ProjectDetailHeadline from '../components/ProjectDetailHeadline/ProjectDetailHeadline';
import Backdrop from '../components/Backdrop/Backdrop';
import NewTasklistModal from '../components/NewTasklistModal/NewTasklistModal';
import TasklistList from '../components/TasklistList/TasklistList'; 
import { FaChevronDown } from "react-icons/fa";
import InvitePeoplePopup from '../components/InvitePeoplePopup/InvitePeoplePopup';
import InvitePeopleModal from '../components/InvitePeopleModal/InvitePeopleModal';

function ProjectDetailPage() {
    let history = useHistory();
    const [newTasklist, setNewTasklist] = useState(false)
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const [state, setState] = useState(0);
    const [projectId] = useState(location.pathname.replace('/project/',''));
    const [showPeopleHandler, setShowPeopleHandler] = useState(false);
    const [permisions, setPermisions] = useState(false);
    const [inviteFormHandler, setInviteFormHandler] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchData();
        setPermisions();
    }, [state]);

    function fetchData() {
        fetch(
            'https://jjsolutions.rs/api/singleprojectapi.php?user_id='+localStorage.getItem("user_id")+'&project_id='+projectId
        ).then(response => {
            return response.json();
        }).then(data => {
            if(!data.length) {
                history.push('/');
            } else {
                setIsLoading(false);
                setProject(data[0]);
                if(data[0].project_permisions==='9000') {
                    setPermisions(true)
                }
            }
        });
    }

    function openNewTasklistModal() {
        setNewTasklist(true);
    }

    function closeNewTasklistModal() {
        setNewTasklist(false);
    }

    function moveStateByOne() {
        setState(state+1);
    }

    function showPeopleHandlerOpen() {
        setShowPeopleHandler(true);
    }

    function showPeopleHandlerClose() {
        setShowPeopleHandler(false);
    }

    function inviteModalOpen() {
        setInviteFormHandler(true);
        setShowPeopleHandler(false);
    }

    function inviteModalClose() {
        setInviteFormHandler(false);
    }

    return (
        <div>
            <ProjectDetailHeadline project_name={project.project_name} />
            <div className={classes.card}>
                <div className={classes.controlsWrap}>
                    <div className={classes.tabs}>
                        <div className={classes.tabActive}>Tasks</div>
                    </div>
                    { permisions && <div>
                        <div className={classes.controls}>
                            <div onClick={showPeopleHandlerOpen} onMouseEnter={showPeopleHandlerOpen} onMouseLeave={showPeopleHandlerClose} className={classes.ppl}>People <span className={classes.chevronBot}><FaChevronDown /></span></div>
                        </div>
                        { showPeopleHandler && <div className={classes.absPos} onMouseEnter={showPeopleHandlerOpen} onMouseLeave={showPeopleHandlerClose}><InvitePeoplePopup onClick={inviteModalOpen}/></div>}
                    </div>}
                    </div> 
                <NewTasklistButton onClick={openNewTasklistModal} />
                { inviteFormHandler && <Backdrop onCancel={inviteModalClose } />}
                { inviteFormHandler && <InvitePeopleModal projectId={project.project_id} projectName={project.project_name} onCancel={inviteModalClose } />}
                { newTasklist && <Backdrop onCancel={closeNewTasklistModal } />}
                { newTasklist && <NewTasklistModal clickHande={moveStateByOne} onCancel={closeNewTasklistModal } project_id={projectId} />}
                <TasklistList tasklists={project.lists} />
            </div>
        </div>
    )
}

export default ProjectDetailPage;