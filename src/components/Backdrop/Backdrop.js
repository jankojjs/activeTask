import classes from './Backdrop.module.css';

function Backdrop(props) {
    return (
        <div onClick={props.onCancel} className={classes.backdrop}></div>
    )
}

export default Backdrop;