import { BsPlus } from "react-icons/bs";
import classes from './NewTasklistButton.module.css';

function NewTasklistButton(props) {
    return (
        <div className={classes.wrap} onClick={props.onClick}>
            <span className={classes.ic}><BsPlus size={26}/></span>
            Add a Tasklist
        </div>
    )
}

export default NewTasklistButton;