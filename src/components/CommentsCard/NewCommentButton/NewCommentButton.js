import classes from './NewCommentButton.module.css';

function NewCommentButton(props) {

    return (
            <div className={classes.newCommentBtn} onClick={props.onClick}>
                <span className={classes.avatar}><div className={classes.avatarText}>{localStorage.getItem('username').charAt(0)}</div></span>
                <span className={classes.fakeInputWrap}>Write a comment...</span>
            </div>
    )
}

export default NewCommentButton;