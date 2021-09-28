import classes from './CommentsCard.module.css';
import NewCommentButton from './NewCommentButton/NewCommentButton';

function CommentsCard() {

    return (
        <div className={classes.card}>
            <div className={classes.discussion}>Discussion</div>
            <NewCommentButton />
        </div>
    )
}

export default CommentsCard;