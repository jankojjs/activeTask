import classes from './ProjectStar.module.css';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useHistory } from 'react-router-dom';

function ProjectStar(props) {
    let history = useHistory();

    function starProjectHandler() {
        let projectStars = 1;
        if(props.starred) {
            projectStars = 0;
        }
        fetch(
            'http://jjsolutions.rs/api/projectstarapi.php?star_value='+projectStars+'&project_id='+props.project_id
        ).then(response => response.json()).then(data => {
            if(data !== undefined) {
                history.push('/projects');
            } else {
                alert('Something went wrong.')
            }
        })
    }

    return (
        <div className={classes.star} onClick={starProjectHandler}>
            { props.starred ? <AiFillStar size={24} color={'orange'}/> : <AiOutlineStar size={24} color={'orange'}/> }
        </div>
    )
}

export default ProjectStar;